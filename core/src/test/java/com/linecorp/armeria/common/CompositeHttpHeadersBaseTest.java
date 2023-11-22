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

import io.netty.util.AsciiString;
import org.junit.jupiter.api.Test;

import static com.linecorp.armeria.common.StringMultimap.DEFAULT_SIZE_HINT;
import static org.assertj.core.api.Assertions.assertThat;

class CompositeHttpHeadersBaseTest {

    @Test
    void deepCopy() {
        final HttpHeaders header1 = HttpHeaders.of("k1", "v1");
        final HttpHeaders header2 = HttpHeaders.of("k2", "v2");
        final CompositeHttpHeadersBase others = new CompositeHttpHeadersBase(header1, header2);
        final CompositeHttpHeadersBase deepCopy = new CompositeHttpHeadersBase(others, false, DEFAULT_SIZE_HINT);
        assertThat(deepCopy.get("k1")).isEqualTo("v1");
        assertThat(deepCopy.get("k2")).isEqualTo("v2");

        others.remove("k1");
        assertThat(deepCopy.get("k1")).isEqualTo("v1");
        assertThat(deepCopy.get("k2")).isEqualTo("v2");

        others.clear();;
        assertThat(deepCopy.get("k1")).isEqualTo("v1");
        assertThat(deepCopy.get("k2")).isEqualTo("v2");
    }

    @Test
    void deepCopy_httpHeaderGetters() {
        final HttpHeadersBuilder builder = HttpHeaders.builder().add("k1", "v1");
        final CompositeHttpHeadersBase deepCopy = new CompositeHttpHeadersBase(builder);
        assertThat(deepCopy.get("k1")).isEqualTo("v1");

        builder.remove("k1");
        assertThat(builder.get("k1")).isNull();
        assertThat(deepCopy.get("k1")).isEqualTo("v1");
    }

    @Test
    void shallowCopy() {
        final HttpHeaders header1 = HttpHeaders.of("k1", "v1");
        final HttpHeaders header2 = HttpHeaders.of("k2", "v2");
        final CompositeHttpHeadersBase others = new CompositeHttpHeadersBase(header1, header2);
        final CompositeHttpHeadersBase shallowCopy = new CompositeHttpHeadersBase(others);
        assertThat(shallowCopy.get("k1")).isEqualTo("v1");
        assertThat(shallowCopy.get("k2")).isEqualTo("v2");

        others.remove("k1");
        assertThat(shallowCopy.get("k1")).isNull();
        assertThat(shallowCopy.get("k2")).isEqualTo("v2");

        others.clear();;
        assertThat(shallowCopy.isEmpty()).isTrue();
    }

    @Test
    void contentLength() {
        final CompositeHttpHeadersBase headers = new CompositeHttpHeadersBase(HttpHeaders.of());
        assertThat(headers.isContentLengthUnknown()).isFalse();
        assertThat(headers.contentLength()).isEqualTo(-1);

        headers.contentLength(0);
        assertThat(headers.isContentLengthUnknown()).isFalse();
        assertThat(headers.contentLength()).isEqualTo(0);
        assertThat(headers.get(HttpHeaderNames.CONTENT_LENGTH)).isEqualTo("0");

        headers.contentLength(100);
        assertThat(headers.isContentLengthUnknown()).isFalse();
        assertThat(headers.contentLength()).isEqualTo(100);

        headers.contentLengthUnknown();
        assertThat(headers.isContentLengthUnknown()).isTrue();
        assertThat(headers.contentLength()).isEqualTo(-1);

        final CompositeHttpHeadersBase allContentLengthKnown =
                new CompositeHttpHeadersBase(HttpHeaders.builder().contentLength(100).build(),
                                             HttpHeaders.builder().contentLength(200).build(),
                                             HttpHeaders.builder().contentLength(300).build());
        assertThat(allContentLengthKnown.isContentLengthUnknown()).isFalse();
        assertThat(allContentLengthKnown.contentLength()).isEqualTo(600);
    }

    @Test
    void contentType() {
        final CompositeHttpHeadersBase headers = new CompositeHttpHeadersBase(HttpHeaders.of());
        assertThat(headers.contentType()).isNull();

        headers.contentLength(0);
        assertThat(headers.isContentLengthUnknown()).isFalse();
        assertThat(headers.contentLength()).isEqualTo(0);
        assertThat(headers.get(HttpHeaderNames.CONTENT_LENGTH)).isEqualTo("0");

        headers.contentLength(100);
        assertThat(headers.isContentLengthUnknown()).isFalse();
        assertThat(headers.contentLength()).isEqualTo(100);

        headers.contentLengthUnknown();
        assertThat(headers.isContentLengthUnknown()).isTrue();
        assertThat(headers.contentLength()).isEqualTo(-1);

        final CompositeHttpHeadersBase allContentLengthKnown =
                new CompositeHttpHeadersBase(HttpHeaders.builder().contentLength(100).build(),
                                             HttpHeaders.builder().contentLength(200).build(),
                                             HttpHeaders.builder().contentLength(300).build());
        assertThat(allContentLengthKnown.isContentLengthUnknown()).isFalse();
        assertThat(allContentLengthKnown.contentLength()).isEqualTo(600);
    }
}
