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

import java.util.Iterator;
import java.util.List;
import java.util.Map.Entry;
import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.stream.Stream;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkState;
import static com.linecorp.armeria.common.StringMultimap.DEFAULT_SIZE_HINT;
import static java.util.Objects.requireNonNull;

abstract class CompositeStringMultimapBuilder<
        IN_NAME extends CharSequence,
        NAME extends IN_NAME,
        CONTAINER extends CompositeStringMultimap<IN_NAME, NAME>,
        SELF> {

    private int sizeHint = DEFAULT_SIZE_HINT;
    private CONTAINER parent;
    @Nullable
    private CONTAINER appender;
    @Nullable
    private CONTAINER mutator;

    CompositeStringMultimapBuilder(CONTAINER parent) {
        this.parent = parent;
    }

    @SuppressWarnings("unchecked")
    final SELF self() {
        return (SELF) this;
    }

    final CONTAINER parent() {
        return parent;
    }

    @Nullable
    final CONTAINER delegate() {
        if (mutator != null) {
            return mutator;
        }
        if (appender != null) {
            return appender;
        }
        return null;
    }

    final <V extends CONTAINER> V updateParent(V parent) {
        this.parent = requireNonNull(parent, "parent");
        return parent;
    }

    /**
     * Makes the current {@link #delegate()} a new {@link #parent()} and clears the current {@link #delegate()}.
     * Call this method when you create a new object derived from the {@link #delegate()},
     * so that any further modifications to this builder do not break the immutability of the created object.
     *
     * @return the {@link #delegate()}
     */
    final CONTAINER promoteDelegate() {
        final CONTAINER delegate = delegate();
        assert delegate != null;
        parent = delegate;
        mutator = appender = null;
        return delegate;
    }

    final CONTAINER getter() {
        if (mutator != null) {
            return mutator;
        }
        if (appender != null) {
            return appender;
        }
        return parent;
    }

    final CONTAINER appender() {
        if (mutator != null) {
            return mutator;
        }
        if (appender != null) {
            return appender;
        }
        // Make a shallow of the parent.
        return appender = newSetter(parent,true, sizeHint);
    }

    final CONTAINER mutator() {
        if (mutator != null) {
            return mutator;
        }
        if (appender != null) {
            // Make a deep copy of the parent and appender.
            return mutator = newSetter(appender, false, DEFAULT_SIZE_HINT);
        }
        // Make a deep copy of the parent.
        return mutator = newSetter(parent, false, sizeHint);
    }

    abstract CONTAINER newSetter(CONTAINER parent, boolean shallowCopy, int sizeHint);

    public final SELF sizeHint(int sizeHint) {
        checkArgument(sizeHint >= 0, "sizeHint: %s (expected: >= 0)", sizeHint);
        checkState(delegate() == null, "sizeHint cannot be specified after a modification is made.");
        this.sizeHint = sizeHint;
        return self();
    }

    // Getters

    @Nullable
    public final String get(IN_NAME name) {
        return getter().get(name);
    }

    public final String get(IN_NAME name, String defaultValue) {
        return getter().get(name, defaultValue);
    }

    @Nullable
    public final String getLast(IN_NAME name) {
        return getter().getLast(name);
    }

    public final String getLast(IN_NAME name, String defaultValue) {
        return getter().getLast(name, defaultValue);
    }

    public final List<String> getAll(IN_NAME name) {
        return getter().getAll(name);
    }

    @Nullable
    public final Boolean getBoolean(IN_NAME name) {
        return getter().getBoolean(name);
    }

    public final boolean getBoolean(IN_NAME name, boolean defaultValue) {
        return getter().getBoolean(name, defaultValue);
    }

    @Nullable
    public final Boolean getLastBoolean(IN_NAME name) {
        return getter().getLastBoolean(name);
    }

    public final boolean getLastBoolean(IN_NAME name, boolean defaultValue) {
        return getter().getLastBoolean(name, defaultValue);
    }

    @Nullable
    public final Integer getInt(IN_NAME name) {
        return getter().getInt(name);
    }

    public final int getInt(IN_NAME name, int defaultValue) {
        return getter().getInt(name, defaultValue);
    }

    @Nullable
    public final Integer getLastInt(IN_NAME name) {
        return getter().getLastInt(name);
    }

    public final int getLastInt(IN_NAME name, int defaultValue) {
        return getter().getLastInt(name, defaultValue);
    }

    @Nullable
    public final Long getLong(IN_NAME name) {
        return getter().getLong(name);
    }

    public final long getLong(IN_NAME name, long defaultValue) {
        return getter().getLong(name, defaultValue);
    }

    @Nullable
    public final Long getLastLong(IN_NAME name) {
        return getter().getLastLong(name);
    }

    public final long getLastLong(IN_NAME name, long defaultValue) {
        return getter().getLastLong(name, defaultValue);
    }

    @Nullable
    public final Float getFloat(IN_NAME name) {
        return getter().getFloat(name);
    }

    public final float getFloat(IN_NAME name, float defaultValue) {
        return getter().getFloat(name, defaultValue);
    }

    @Nullable
    public final Float getLastFloat(IN_NAME name) {
        return getter().getLastFloat(name);
    }

    public final float getLastFloat(IN_NAME name, float defaultValue) {
        return getter().getLastFloat(name, defaultValue);
    }

    @Nullable
    public final Double getDouble(IN_NAME name) {
        return getter().getDouble(name);
    }

    public final double getDouble(IN_NAME name, double defaultValue) {
        return getter().getDouble(name, defaultValue);
    }

    @Nullable
    public final Double getLastDouble(IN_NAME name) {
        return getter().getLastDouble(name);
    }

    public final double getLastDouble(IN_NAME name, double defaultValue) {
        return getter().getLastDouble(name, defaultValue);
    }

    @Nullable
    public final Long getTimeMillis(IN_NAME name) {
        return getter().getTimeMillis(name);
    }

    public final long getTimeMillis(IN_NAME name, long defaultValue) {
        return getter().getTimeMillis(name, defaultValue);
    }

    @Nullable
    public final Long getLastTimeMillis(IN_NAME name) {
        return getter().getLastTimeMillis(name);
    }

    public final long getLastTimeMillis(IN_NAME name, long defaultValue) {
        return getter().getLastTimeMillis(name, defaultValue);
    }

    public final boolean contains(IN_NAME name) {
        return getter().contains(name);
    }

    public final boolean contains(IN_NAME name, String value) {
        return getter().contains(name, value);
    }

    public final boolean containsObject(IN_NAME name, Object value) {
        return getter().containsObject(name, value);
    }

    public final boolean containsBoolean(IN_NAME name, boolean value) {
        return getter().containsBoolean(name, value);
    }

    public final boolean containsInt(IN_NAME name, int value) {
        return getter().containsInt(name, value);
    }

    public final boolean containsLong(IN_NAME name, long value) {
        return getter().containsLong(name, value);
    }

    public final boolean containsFloat(IN_NAME name, float value) {
        return getter().containsFloat(name, value);
    }

    public final boolean containsDouble(IN_NAME name, double value) {
        return getter().containsDouble(name, value);
    }

    public final boolean containsTimeMillis(IN_NAME name, long value) {
        return getter().containsTimeMillis(name, value);
    }

    public final int size() {
        return getter().size();
    }

    public final boolean isEmpty() {
        return size() == 0;
    }

    public final Set<NAME> names() {
        return getter().names();
    }

    public final Iterator<Entry<NAME, String>> iterator() {
        return getter().iterator();
    }

    public final Iterator<String> valueIterator(IN_NAME name) {
        return getter().valueIterator(name);
    }

    public final void forEach(BiConsumer<NAME, String> action) {
        getter().forEach(action);
    }

    public final void forEachValue(IN_NAME name, Consumer<String> action) {
        getter().forEachValue(name, action);
    }

    public final Stream<Entry<NAME, String>> stream() {
        return getter().stream();
    }

    public final Stream<String> valueStream(IN_NAME name) {
        return getter().valueStream(name);
    }

    // Setters

    @Nullable
    public final String getAndRemove(IN_NAME name) {
        return getter().getAndRemove(name);
    }

    public final String getAndRemove(IN_NAME name, String defaultValue) {
        return getter().getAndRemove(name, defaultValue);
    }

    public final List<String> getAllAndRemove(IN_NAME name) {
        return getter().getAllAndRemove(name);
    }

    @Nullable
    public final Integer getIntAndRemove(IN_NAME name) {
        return getter().getIntAndRemove(name);
    }

    public final int getIntAndRemove(IN_NAME name, int defaultValue) {
        return getter().getIntAndRemove(name, defaultValue);
    }

    @Nullable
    public final Long getLongAndRemove(IN_NAME name) {
        return getter().getLongAndRemove(name);
    }

    public final long getLongAndRemove(IN_NAME name, long defaultValue) {
        return getter().getLongAndRemove(name, defaultValue);
    }

    @Nullable
    public final Float getFloatAndRemove(IN_NAME name) {
        return getter().getFloatAndRemove(name);
    }

    public final float getFloatAndRemove(IN_NAME name, float defaultValue) {
        return getter().getFloatAndRemove(name, defaultValue);
    }

    @Nullable
    public final Double getDoubleAndRemove(IN_NAME name) {
        return getter().getDoubleAndRemove(name);
    }

    public final double getDoubleAndRemove(IN_NAME name, double defaultValue) {
        return getter().getDoubleAndRemove(name, defaultValue);
    }

    @Nullable
    public final Long getTimeMillisAndRemove(IN_NAME name) {
        return getter().getTimeMillisAndRemove(name);
    }

    public final long getTimeMillisAndRemove(IN_NAME name, long defaultValue) {
        return getter().getTimeMillisAndRemove(name, defaultValue);
    }

    public final SELF add(IN_NAME name, String value) {
        appender().add(name, value);
        return self();
    }

    public final SELF add(IN_NAME name, Iterable<String> values) {
        appender().add(name, values);
        return self();
    }

    public final SELF add(IN_NAME name, String... values) {
        appender().add(name, values);
        return self();
    }

    public final SELF add(
            Iterable<? extends Entry<? extends IN_NAME, String>> entries) {
        appender().add(entries);
        return self();
    }

    public final SELF addObject(IN_NAME name, Object value) {
        appender().addObject(name, value);
        return self();
    }

    public final SELF addObject(IN_NAME name, Iterable<?> values) {
        appender().addObject(name, values);
        return self();
    }

    public final SELF addObject(IN_NAME name, Object... values) {
        appender().addObject(name, values);
        return self();
    }

    public final SELF addObject(Iterable<? extends Entry<? extends IN_NAME, ?>> entries) {
        appender().addObject(entries);
        return self();
    }

    public final SELF addInt(IN_NAME name, int value) {
        appender().addInt(name, value);
        return self();
    }

    public final SELF addLong(IN_NAME name, long value) {
        appender().addLong(name, value);
        return self();
    }

    public final SELF addFloat(IN_NAME name, float value) {
        appender().addFloat(name, value);
        return self();
    }

    public final SELF addDouble(IN_NAME name, double value) {
        appender().addDouble(name, value);
        return self();
    }

    public final SELF addTimeMillis(IN_NAME name, long value) {
        appender().addTimeMillis(name, value);
        return self();
    }

    public final SELF set(IN_NAME name, String value) {
        mutator().set(name, value);
        return self();
    }

    public final SELF set(IN_NAME name, Iterable<String> values) {
        mutator().set(name, values);
        return self();
    }

    public final SELF set(IN_NAME name, String... values) {
        mutator().set(name, values);
        return self();
    }

    public final SELF set(Iterable<? extends Entry<? extends IN_NAME, String>> entries) {
        mutator().set(entries);
        return self();
    }

    public final SELF setIfAbsent(Iterable<? extends Entry<? extends IN_NAME, String>> entries) {
        appender().setIfAbsent(entries);
        return self();
    }

    public final SELF setObject(IN_NAME name, Object value) {
        mutator().setObject(name, value);
        return self();
    }

    public final SELF setObject(IN_NAME name, Iterable<?> values) {
        mutator().setObject(name, values);
        return self();
    }

    public final SELF setObject(IN_NAME name, Object... values) {
        mutator().setObject(name, values);
        return self();
    }

    public final SELF setObject(Iterable<? extends Entry<? extends IN_NAME, ?>> entries) {
        mutator().setObject(entries);
        return self();
    }

    public final SELF setInt(IN_NAME name, int value) {
        mutator().setInt(name, value);
        return self();
    }

    public final SELF setLong(IN_NAME name, long value) {
        mutator().setLong(name, value);
        return self();
    }

    public final SELF setFloat(IN_NAME name, float value) {
        mutator().setFloat(name, value);
        return self();
    }

    public final SELF setDouble(IN_NAME name, double value) {
        mutator().setDouble(name, value);
        return self();
    }

    public final SELF setTimeMillis(IN_NAME name, long value) {
        mutator().setTimeMillis(name, value);
        return self();
    }

    public final boolean remove(IN_NAME name) {
        return mutator().remove(name);
    }

    public final SELF removeAndThen(IN_NAME name) {
        mutator().remove(name);
        return self();
    }

    public final SELF clear() {
        mutator().clear();
        return self();
    }

    @Override
    public int hashCode() {
        return getter().hashCode();
    }

    @Override
    public boolean equals(@Nullable Object o) {
        if (!(o instanceof CompositeStringMultimapBuilder)) {
            return false;
        }

        if (this == o) {
            return true;
        }

        final CompositeStringMultimapBuilder<?, ?, ?, ?> that = (CompositeStringMultimapBuilder<?, ?, ?, ?>) o;
        if (size() != that.size()) {
            return false;
        }
        if (isEmpty() && that.isEmpty()) {
            return true;
        }

        return getter().equals(that.getter());
    }

    @Override
    public final String toString() {
        return getter().toString();
    }
}
