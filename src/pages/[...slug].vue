<script setup lang="ts">
// 可以基于 API 调用或登录状态进行选择

// const route = useRoute();

definePageMeta({
  layout: 'article',
});

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

const { getTags } = useTags('tags');

const { list } = await useNav();
</script>
<template>
  <!-- <NuxtLayout> -->

  <article class="flex flex-col w-full">
    <!-- <div>
      List:{{ list.length }}
      <PostList />
    </div> -->
    <div
      class="space-y-4 prose no-underline max-w-none dark:prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline"
    >
      <ContentDoc />

      <slot />
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
  </article>

  <!-- </NuxtLayout> -->
</template>
