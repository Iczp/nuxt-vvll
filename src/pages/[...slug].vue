<script setup lang="ts">
// 可以基于 API 调用或登录状态进行选择
import type { NavItemType } from '~/types/NavItemType';
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

const { list, tagDict, doc, tagItems, getParents } = await useDocuments({
  path: route.path,
});

if (doc.value?.$isDir) {
}

const getPathTitle = () => {
  const parents = getParents(doc.value);
  if (parents.length == 0) {
    return doc.value?.title;
  }
  return parents.map((x: any) => x.title).join(' ');
};

const pathTitle = computed(() => getPathTitle());

const contentFiles = useContentFiles();

const children = computed(() =>
  doc.value?.children?.map(
    (x) => ({ ...x, fileInfo: contentFiles[x._path] } as NavItemType)
  )
);
useHead({
  title: () => pathTitle.value as string,
});
</script>
<template>
  <!-- {{ doc?.$parents() }} -->
  <main v-if="doc?.$isDir" class="flex flex-col w-full gap-4">
    <Title>{{ pathTitle }}</Title>
    <h1>
      {{ doc?.title }}
    </h1>
    <!-- {{ doc }} -->
    <ul v-if="children" class="grid grid-cols-1 gap-4 not-prose">
      <li
        v-for="item in children"
        :key="item._path"
        class="flex flex-col p-6 card hover:card-hover"
      >
        <PostItem :item="item" />
      </li>
    </ul>
  </main>
  <main v-if="!doc?.$isDir" class="flex flex-col w-full gap-4">
    <ContentHeader :doc="doc" />

    <div class="relative flex flex-col gap-4">
      <section class="sticky z-10 flex min-h-0 top-32">
        <div class="absolute right-0">
          <Toc
            :value="toc"
            class="bg-transparent shadow dark:shadow-slate-700 dark:bg-transparent backdrop-blur-lg drak:shadow-white max-w-56"
            bodyClass="max-h-96 overflow-y-auto pr-4"
          />
        </div>
      </section>

      <article
        class="space-y-4 prose no-underline max-w-none dark:prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline"
      >
        <ContentDoc v-if="doc">
          <template #not-found>
            <h1>Document not found!!!</h1>
          </template>
          <template #empty>
            <h1>Document is empty</h1>
          </template>
        </ContentDoc>
      </article>
    </div>

    <Tags v-if="tagItems?.length" :items="tagItems" label="标签">
      <!-- <template #empty>无</template> -->
    </Tags>

    <div class="flex flex-col justify-between gap-4 mt-4 sm:flex-row">
      <PageLink :page="prev" dir="left" />
      <PageLink :page="next" />
    </div>
  </main>

  <GitComments></GitComments>
</template>
