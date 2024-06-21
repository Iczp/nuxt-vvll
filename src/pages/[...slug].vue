<script setup lang="ts">
// 可以基于 API 调用或登录状态进行选择

// const route = useRoute();

definePageMeta({
  layout: 'article',
});

const route = useRoute();
const {
  // Global references
  globals,
  navigation,
  surround,
  page,
  // Computed properties from `page` key
  excerpt,
  toc,
  type,
  // layout,
  // Computed properties from `surround` key
  next,
  prev,
} = useContent();

// const { data: doc } = await useAsyncData(route.path, () =>
//   queryContent(route.path).findOne()
// );

const { list, tagDict, doc, tagItems } = await useDocuments({
  path: route.path,
});

// const tagItems = computed(() =>
//   doc.value?.tags?.map(x => tagDict.value[x]).filter((x) => x)
// );
</script>
<template>
  <main class="flex flex-col w-full gap-4">
    <!-- {{ doc }} -->

    <ContentHeader :doc="doc" />

    <div class="flex flex-col">
      <section class="z-10 flex self-end sm:fixed">
        <Toc
          :value="toc"
          class="bg-transparent shadow dark:shadow-slate-700 dark:bg-transparent backdrop-blur-lg drak:shadow-white"
        />
      </section>
      <article
        class="space-y-4 prose no-underline max-w-none dark:prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline"
      >
        <ContentDoc></ContentDoc>
      </article>
    </div>

    <Tags :items="tagItems" label="标签"> </Tags>

    <div class="flex flex-col justify-between gap-4 mt-4 sm:flex-row">
      <PageLink :page="prev" dir="left" />
      <PageLink :page="next" />
    </div>
  </main>
</template>
