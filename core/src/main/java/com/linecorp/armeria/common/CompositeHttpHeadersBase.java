/*
 * Copyright 2023 LINE Corporation
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

package com.linecorp.armeria.common;

import com.google.common.collect.ImmutableList;
import com.linecorp.armeria.common.annotation.Nullable;
import com.linecorp.armeria.internal.common.util.StringUtil;
import io.netty.util.AsciiString;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import static com.google.common.base.Preconditions.checkArgument;
import static com.linecorp.armeria.common.StringMultimap.DEFAULT_SIZE_HINT;
import static java.util.Objects.requireNonNull;

class CompositeHttpHeadersBase
        extends CompositeStringMultimap</* IN_NAME */ CharSequence, /* NAME */ AsciiString>
        implements HttpHeaderGetters {

    CompositeHttpHeadersBase(HttpHeaderGetters... parents) {
        super(() -> new HttpHeadersBase(DEFAULT_SIZE_HINT), from(parents));
    }

    CompositeHttpHeadersBase(CompositeHttpHeadersBase parent) {
        this(parent, true, DEFAULT_SIZE_HINT);
    }

    CompositeHttpHeadersBase(CompositeHttpHeadersBase parent, boolean shallowCopy, int sizeHint) {
        super(() -> new HttpHeadersBase(sizeHint),
              parent, p -> new HttpHeadersBase((HttpHeadersBase) p, false),
              shallowCopy);
    }

    private static List<StringMultimap<CharSequence, AsciiString>> from(HttpHeaderGetters... headers) {
        if (headers.length == 0) {
            return Collections.emptyList();
        }

        final ImmutableList.Builder<StringMultimap<CharSequence, AsciiString>> builder = ImmutableList.builder();
        for (HttpHeaderGetters header : headers) {
            if (header instanceof HttpHeadersBase) {
                builder.add((HttpHeadersBase) header);
            } else {
                builder.add(new HttpHeadersBase(header));
            }
        }

        return builder.build();
    }

    final void contentLength(long contentLength) {
        checkArgument(contentLength >= 0, "contentLength: %s (expected: >= 0)", contentLength);
        ((HttpHeadersBase) appender()).contentLength(contentLength);
    }

    final void contentLengthUnknown() {
        ((HttpHeadersBase) appender()).contentLengthUnknown();
    }

    final void contentType(MediaType contentType) {
        requireNonNull(contentType, "contentType");
        ((HttpHeadersBase) appender()).contentType(contentType);
    }

    final void contentDisposition(ContentDisposition contentDisposition) {
        requireNonNull(contentDisposition, "contentDisposition");
        ((HttpHeadersBase) appender()).contentDisposition(contentDisposition);
    }

    final void endOfStream(boolean endOfStream) {
        ((HttpHeadersBase) appender()).endOfStream(endOfStream);
    }

    @Override
    public boolean isEndOfStream() {
        for (StringMultimapGetters<CharSequence, AsciiString> delegate : delegates()) {
            if (((HttpHeaderGetters) delegate).isEndOfStream()) {
                return true;
            }
        }
        return false;
    }

    @Override
    public long contentLength() {
        long contentLength = -1;

        for (StringMultimapGetters<CharSequence, AsciiString> delegate : delegates()) {
            final HttpHeaderGetters getter = (HttpHeaderGetters) delegate;
            final long length = getter.contentLength();
            if (getter.isContentLengthUnknown() || length <= -1) {
                return contentLength;
            }
            if (contentLength <= -1) {
                contentLength = 0;
            }
            contentLength += length;
        }

        return contentLength;
    }

    @Override
    public boolean isContentLengthUnknown() {
        for (StringMultimapGetters<CharSequence, AsciiString> delegate : delegates()) {
            if (((HttpHeaderGetters) delegate).isContentLengthUnknown()) {
                return true;
            }
        }
        return false;
    }

    @Override
    public @Nullable MediaType contentType() {
        for (StringMultimapGetters<CharSequence, AsciiString> delegate : delegates()) {
            final MediaType contentType = ((HttpHeaderGetters) delegate).contentType();
            if (contentType != null) {
                return contentType;
            }
        }
        return null;
    }

    @Override
    public @Nullable ContentDisposition contentDisposition() {
        for (StringMultimapGetters<CharSequence, AsciiString> delegate : delegates()) {
            final ContentDisposition contentDisposition = ((HttpHeaderGetters) delegate).contentDisposition();
            if (contentDisposition != null) {
                return contentDisposition;
            }
        }
        return null;
    }

    @Override
    public final int hashCode() {
        final int hashCode = super.hashCode();
        return isEndOfStream() ? ~hashCode : hashCode;
    }

    @Override
    public boolean equals(@Nullable Object o) {
        if (this == o) {
            return true;
        }

        if (!(o instanceof HttpHeaderGetters)) {
            return false;
        }

        // `contentLengthUnknown` is excluded from the comparison since it is not a field expressing headers
        // data.
        return isEndOfStream() == ((HttpHeaderGetters) o).isEndOfStream() && super.equals(o);
    }

    @Override
    public final String toString() {
        final int size = size();
        final boolean isEndOfStream = isEndOfStream();
        if (size == 0) {
            return isEndOfStream ? "[EOS]" : "[]";
        }

        final StringBuilder sb = new StringBuilder(7 + size * 20);
        if (isEndOfStream) {
            sb.append("[EOS, ");
        } else {
            sb.append('[');
        }

        for (Map.Entry<AsciiString, String> e : this) {
            sb.append(e.getKey()).append('=').append(e.getValue()).append(", ");
        }

        final int length = sb.length();
        sb.setCharAt(length - 2, ']');
        return sb.substring(0, length - 1);
    }
}
