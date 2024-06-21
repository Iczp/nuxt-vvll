<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    page?: {
      _path?: string;
      description?: string;
      title?: string;
    } | null;
    dir?: 'left' | 'right';
  }>(),
  {
    dir: 'right',
    // items: [],
  }
);
</script>

<template>
  <NuxtLink v-if="page" :to="page._path" class="page-item">
    <Arrow :dir="dir" />
    <h3 class="flex flex-row items-center text-lg leading-normal">
      {{ page.title }}
    </h3>
    <p v-if="page.description" class="line-clamp-2">
      {{ page.description }}
    </p>
  </NuxtLink>
</template>

<style scoped>
.page-item {
  @apply flex flex-1 flex-col border border-solid rounded-md p-4 border-gray-200  dark:border-gray-700 dark:bg-gray-800;
}

.page-item:hover {
  @apply hover:border-green-200  hover:dark:border-green-700  hover:text-green-400;
}
.page-item:last-child {
  @apply items-end  text-right;
}

.page-item:hover .arrow {
  @apply bg-green-100 dark:bg-green-700;
}
.arrow {
  @apply rounded-full border flex w-8 h-8 flex-col justify-center items-center border-gray-200  dark:border-gray-600 dark:text-primary-400 bg-gray-200 mr-2 mb-2 dark:bg-gray-700;
}
</style>
