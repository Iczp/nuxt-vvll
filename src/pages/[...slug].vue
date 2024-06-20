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

const { list } = await useNav();
</script>
<template>
  <!-- <NuxtLayout> -->

  <main class="flex flex-col w-full">
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
    <div
      class="space-y-4 prose no-underline max-w-none dark:prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline"
    >
      <ContentDoc>
        <template v-slot="{ doc, excerpt }">
          <article class="flex flex-col gap-4">
            <header class="flex flex-col gap-4">
              <h1
                class="text-4xl font-bold leading-normal dark:text-slate-400 text-slate-800"
              >
                {{ doc.title }}
              </h1>

              <div
                class="flex flex-row items-center justify-between text-sm text-slate-400 dark:text-slate-700"
              >
                <section class="flex flex-row gap-4">
                  <div>作者: <Author :id="doc.author" /></div>
                  <div>日期:<Date :value="doc.date" /></div>
                </section>
                <section class="flex flex-row gap-2">
                  <Star :fill="true" class="size-6" />
                  <Share :fill="true" class="size-6" />
                </section>
              </div>
            </header>

            <main>
              <ContentRenderer :value="doc" />
            </main>
          </article>
        </template>

        <template #not-found>
          <h1>Document not found!</h1>
          <h2>{{ $route.params.slug }}</h2>
          <pre>{{ doc }}</pre>
        </template>
      </ContentDoc>
    </div>
  </main>

  <!-- </NuxtLayout> -->
</template>
