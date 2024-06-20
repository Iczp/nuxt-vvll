<script lang="ts" setup>
import dayjs from 'dayjs';
const props = withDefaults(
  defineProps<{
    value?: string | Date | number;
    format?: string;
  }>(),
  {
    format: 'YYYY-MM-DD',
  }
);

const date = computed(() => dayjs(props.value));

const output = computed(() => {
  return date.value.format(props.format);
});
</script>

<template>
  <slot :date="date">
    {{ output }}
  </slot>
</template>
<style scoped></style>
