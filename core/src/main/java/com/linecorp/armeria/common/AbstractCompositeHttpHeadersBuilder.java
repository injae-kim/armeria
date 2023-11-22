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

import com.linecorp.armeria.common.annotation.Nullable;
import io.netty.util.AsciiString;

abstract class AbstractCompositeHttpHeadersBuilder<SELF extends HttpHeadersBuilder> extends CompositeStringMultimapBuilder<
        /* IN_NAME */ CharSequence, /* NAME */ AsciiString, /* CONTAINER */ CompositeHttpHeadersBase, SELF> {

    AbstractCompositeHttpHeadersBuilder(CompositeHttpHeadersBase parent) {
        super(parent);
        assert parent instanceof HttpHeaders;
    }

    @Override
    final CompositeHttpHeadersBase newSetter(CompositeHttpHeadersBase parent, boolean shallowCopy, int sizeHint) {
        return new CompositeHttpHeadersBase(parent, shallowCopy, sizeHint);
    }

    // Shortcuts

    public final SELF contentLength(long contentLength) {
        appender().contentLength(contentLength);
        return self();
    }

    public final long contentLength() {
        return getter().contentLength();
    }

    public final SELF contentLengthUnknown() {
        appender().contentLengthUnknown();
        return self();
    }

    public final boolean isContentLengthUnknown() {
        return getter().isContentLengthUnknown();
    }

    @Nullable
    public final MediaType contentType() {
        return getter().contentType();
    }

    public final SELF contentType(MediaType contentType) {
        appender().contentType(contentType);
        return self();
    }

    @Nullable
    public final ContentDisposition contentDisposition() {
        return getter().contentDisposition();
    }

    public final SELF contentDisposition(ContentDisposition contentDisposition) {
        appender().contentDisposition(contentDisposition);
        return self();
    }

    // Getters

    public final boolean isEndOfStream() {
        return getter().isEndOfStream();
    }

    // Setters

    public final SELF endOfStream(boolean endOfStream) {
        appender().endOfStream(endOfStream);
        return self();
    }
}
