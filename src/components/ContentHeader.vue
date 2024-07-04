<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    doc?: {
      title?: string;
      author?: string;
      _path?: string;
      date?: string | Date;
    } | null;
  }>(),
  {
    // items: [],
  }
);

const contentFiles = useContentFiles();

const fileInfo = computed(() => contentFiles[props.doc?._path as string]);

const lastModified = computed(
  () =>
    fileInfo.value?.lastModified || fileInfo.value?.created || props.doc?.date
);
// const created = computed(() => fileInfo.value?.created);
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
        <div v-if="lastModified">
          <!-- <Date :value="created" format="YYYY-MM-DD hh:mm:ss" /> -->
          日期:<Date :value="lastModified" format="YYYY-MM-DD hh:mm:ss" />
          <!-- {{ lastModified }} -->
        </div>
      </section>
      <section class="flex flex-row gap-2">
        <!-- <Star :fill="true" class="size-6" /> -->
        <!-- <Share :fill="true" class="size-6" /> -->
      </section>
    </div>
  </header>
</template>
