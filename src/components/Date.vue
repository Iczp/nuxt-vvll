<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    value?: string | Date | number;
    format?: string;
  }>(),
  {
    format: 'yyyy-MM-dd',
  }
);

const dateTime = ref('');
</script>

<template>
  <slot :date="value">
    {{ value }}
  </slot>
</template>
<style scoped></style>
