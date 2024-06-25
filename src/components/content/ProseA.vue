<script lang="ts" setup>
const target = ref('');
const attrs = useAttrs();
const href = attrs.href as string | undefined;
if (href?.startsWith('http')) {
  target.value = '_blank';
}
</script>

<template>
  <a :target="target" v-bind="$attrs">
    <!-- {{ $slots }} -->
    <!-- {{ $attrs }} -->
    <slot></slot>
  </a>
</template>
