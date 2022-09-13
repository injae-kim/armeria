/*
 * Copyright 2022 LINE Corporation
 *
 * LINE Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

package com.linecorp.armeria.common.stream;

import static java.util.Objects.requireNonNull;

import java.io.IOException;
import java.io.OutputStream;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.function.Consumer;

import org.reactivestreams.Subscriber;
import org.reactivestreams.Subscription;

import com.linecorp.armeria.common.HttpData;
import com.linecorp.armeria.common.annotation.Nullable;

import io.netty.util.concurrent.EventExecutor;

final class ByteStreamMessageOutputStream implements ByteStreamMessage {

    private final StreamMessageAndWriter<HttpData> outputStreamWriter = new DefaultStreamMessage<>();
    private final ByteStreamMessage delegate = ByteStreamMessage.of(outputStreamWriter);

    private final Consumer<OutputStream> outputStreamConsumer;
    private final Executor executor;

    ByteStreamMessageOutputStream(Consumer<OutputStream> outputStreamConsumer, Executor executor) {
        requireNonNull(outputStreamConsumer, "outputStreamConsumer");
        requireNonNull(executor, "executor");
        this.outputStreamConsumer = outputStreamConsumer;
        this.executor = executor;
    }

    @Override
    public ByteStreamMessage range(long offset, long length) {
        delegate.range(offset, length);
        return this;
    }

    @Override
    public boolean isOpen() {
        return delegate.isOpen();
    }

    @Override
    public boolean isEmpty() {
        return delegate.isEmpty();
    }

    @Override
    public long demand() {
        return delegate.demand();
    }

    @Override
    public CompletableFuture<Void> whenComplete() {
        return delegate.whenComplete();
    }

    @Override
    public void subscribe(Subscriber<? super HttpData> subscriber, EventExecutor eventExecutor,
                          SubscriptionOption... options) {
        final Subscriber<HttpData> outputStreamSubscriber = new OutputStreamSubscriber(
                subscriber, eventExecutor, outputStreamWriter, outputStreamConsumer, executor);
        delegate.subscribe(outputStreamSubscriber, eventExecutor, options);
    }

    @Override
    public void abort() {
        delegate.abort();
    }

    @Override
    public void abort(Throwable cause) {
        delegate.abort(cause);
    }

    private static final class OutputStreamSubscriber implements Subscriber<HttpData>, Subscription {

        private final Subscriber<? super HttpData> downstream;
        private final EventExecutor eventExecutor;

        private final StreamMessageAndWriter<HttpData> outputStreamWriter;
        private final Consumer<OutputStream> outputStreamConsumer;
        private final Executor executor;

        @Nullable
        private Subscription upstream;
        private boolean completed;

        OutputStreamSubscriber(Subscriber<? super HttpData> downstream,
                               EventExecutor eventExecutor,
                               StreamMessageAndWriter<HttpData> outputStreamWriter,
                               Consumer<OutputStream> outputStreamConsumer,
                               Executor executor) {
            requireNonNull(downstream, "downstream");
            requireNonNull(eventExecutor, "eventExecutor");
            requireNonNull(outputStreamWriter, "outputStreamWriter");
            requireNonNull(outputStreamConsumer, "outputStreamConsumer");
            requireNonNull(executor, "executor");
            this.downstream = downstream;
            this.eventExecutor = eventExecutor;
            this.outputStreamWriter = outputStreamWriter;
            this.outputStreamConsumer = outputStreamConsumer;
            this.executor = executor;
        }

        @Override
        public void onSubscribe(Subscription subscription) {
            requireNonNull(subscription, "subscription");
            upstream = subscription;
            downstream.onSubscribe(this);
            CompletableFuture.runAsync(() -> outputStreamConsumer
                                     .accept(new StreamWriterOutputStream(outputStreamWriter)), executor)
                             .whenComplete((res, cause) -> {
                                 if (cause != null) {
                                     onError(cause);
                                 }
                             });
        }

        @Override
        public void onNext(HttpData data) {
            requireNonNull(data, "data");
            if (completed) {
                data.close();
                return;
            }
            downstream.onNext(data);
        }

        @Override
        public void onError(Throwable t) {
            requireNonNull(t, "t");
            if (completed) {
                return;
            }
            completed = true;
            downstream.onError(t);
            outputStreamWriter.close();
        }

        @Override
        public void onComplete() {
            if (completed) {
                return;
            }
            completed = true;
            downstream.onComplete();
            outputStreamWriter.close();
        }

        @Override
        public void request(long n) {
            if (eventExecutor.inEventLoop()) {
                request0(n);
            } else {
                eventExecutor.execute(() -> request0(n));
            }
        }

        private void request0(long n) {
            if (n <= 0) {
                onError(new IllegalArgumentException(
                        "n: " + n + " (expected: > 0, see Reactive Streams specification rule 3.9)"));
                upstream.cancel();
                return;
            }
            upstream.request(n);
        }

        @Override
        public void cancel() {
            if (eventExecutor.inEventLoop()) {
                cancel0();
            } else {
                eventExecutor.execute(this::cancel0);
            }
        }

        private void cancel0() {
            if (completed) {
                return;
            }
            completed = true;
            upstream.cancel();
            outputStreamWriter.close();
        }
    }

    private static final class StreamWriterOutputStream extends OutputStream {

        private final StreamMessageAndWriter<HttpData> streamWriter;

        StreamWriterOutputStream(StreamMessageAndWriter<HttpData> streamWriter) {
            this.streamWriter = streamWriter;
        }

        @Override
        public void write(int b) throws IOException {
            final HttpData data = HttpData.copyOf(new byte[] { (byte) b });
            if (!streamWriter.tryWrite(data)) {
                throw new IOException("Stream closed");
            }
            streamWriter.whenConsumed().join();
        }

        @Override
        public void write(byte[] bytes, int off, int len) throws IOException {
            final HttpData data = HttpData.copyOf(bytes, off, len);
            if (!streamWriter.tryWrite(data)) {
                throw new IOException("Stream closed");
            }
            streamWriter.whenConsumed().join();
        }

        @Override
        public void close() throws IOException {
            streamWriter.close();
        }
    }
}
