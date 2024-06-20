<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    id?: string | Date | number;
    name?: string;
  }>(),
  {}
);

const dateTime = ref('');
</script>

<template>
  <slot v-if="id" :date="id">
    <NuxtLink :to="`/authors/${id}`">
      {{ name || id }}
    </NuxtLink>
  </slot>
</template>
<style scoped></style>
