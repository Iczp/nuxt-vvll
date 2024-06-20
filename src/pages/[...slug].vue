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

const { data } = useAsyncData(route.path, () =>
  queryContent(route.path).find()
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
    <div class="">
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
                class="flex flex-row justify-between text-sm text-slate-400 dark:text-slate-700"
              >
                <section class="flex flex-row gap-4">
                  <div>作者: <Author :id="doc.author" /></div>
                  <div>日期:<Date :value="doc.date" /></div>
                </section>
                <section>right</section>
              </div>
            </header>

            <main
              class="space-y-4 prose no-underline max-w-none dark:prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline"
            >
              <ContentRenderer :value="doc" />
            </main>
          </article>
        </template>

        <template #not-found>
          <h1>Document not found!</h1>
          <h2>{{ $route.params.slug }}</h2>
          <pre>{{ data }}</pre>
        </template>
      </ContentDoc>
    </div>

    <!-- <section class="flex flex-row items-center tags">
      <h3 class="mr-2">标签:</h3>
      <ul class="flex flex-row gap-2">
        <li v-for="(tag, index) in tags" :key="index">
          <a :href="`/tags/${tag}`">
            {{ tag }}
          </a>
        </li>
      </ul>
    </section> -->
  </main>

  <!-- </NuxtLayout> -->
</template>
