<script lang="ts" setup>
const props = defineProps<{
  title?: string;
  description?: string;
  hover?: boolean;
}>();
</script>

<template>
  <div
    class="p-4 space-y-2 rounded-lg box"
    :class="{ 'hover:box-hover': hover }"
  >
    <slot>{{ description }}</slot>
  </div>
</template>
<style scoped>
.box > * {
  @apply m-0;
}
</style>
