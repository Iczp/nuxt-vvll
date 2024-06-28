<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    doc?: {
      title?: string;
      author?: string;
      date?: string | Date;
    } | null;
  }>(),
  {
    // items: [],
  }
);
</script>
<template>
  <header class="flex flex-col gap-4">
    <h1
      class="text-4xl font-bold leading-normal dark:text-slate-400 text-slate-800"
    >
      {{ doc?.title }}
    </h1>

    <div
      class="flex flex-row items-center justify-between text-sm text-slate-400 dark:text-slate-700"
    >
      <section class="flex flex-row gap-4">
        <div v-if="doc?.author"><Author :id="doc?.author" /></div>
        <div>日期:<Date :value="doc?.date" /></div>
      </section>
      <section class="flex flex-row gap-2">
        <!-- <Star :fill="true" class="size-6" /> -->
        <!-- <Share :fill="true" class="size-6" /> -->
      </section>
    </div>
  </header>
</template>
