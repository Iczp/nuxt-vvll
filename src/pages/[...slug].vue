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

const { data: doc } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
);

const { getTags } = useTags('tags');

// const { list } = await useNav();
</script>
<template>
  <!-- <NuxtLayout> -->

  <main class="flex flex-col w-full gap-4">
    <!-- <div>
      List:{{ list.length }}
      <PostList />
    </div> -->

    <!-- <div
      class="space-y-4 prose no-underline max-w-none dark:prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline"
    >
      <ContentDoc>
        <template v-slot="{ doc, excerpt }">
          <ContentRenderer :value="doc">
            <h1>{{ doc.title }}</h1>
            <ContentRendererMarkdown :value="doc" />
          </ContentRenderer>
        </template>
      </ContentDoc>
    </div> -->

    <!-- {{ doc?.body?.toc }} -->
    <ContentHeader :doc="doc" />

    <div class="relative flex flex-col sm:flex-row-reverse">
      <section class="z-10 sm:fixed">
        <Toc
          :value="toc"
          class="mb-8 bg-transparent shadow-md dark:bg-transparent backdrop-blur-lg drak:shadow-white sm:mb-0"
        />
      </section>
      <article
        class="space-y-4 prose no-underline max-w-none dark:prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline"
      >
        <ContentDoc></ContentDoc>
        <!-- <ContentDoc>
        <template #not-found>
          <h1>Document not found!</h1>
          <h2>{{ $route.params.slug }}</h2>
          <pre>{{ doc }}</pre>
        </template>
      </ContentDoc> -->
      </article>
    </div>
  </main>

  <!-- </NuxtLayout> -->
</template>
