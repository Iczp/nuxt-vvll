<script lang="ts" setup>
const cacheKey = `/_tags`;
const { data } = await useAsyncData(cacheKey, () =>
  queryContent('/_tags').find()
);
</script>

<template>
  <main class="flex flex-col mt-4">
    <div>
      <UCard>
        <p>
          标签（Tags）的作用是帮助读者更快速地找到和筛选感兴趣的内容。通过为文章添加标签，可以将文章分类和归档，使得读者可以根据标签来浏览相关主题的文章。
          标签通常是与文章内容相关的关键词或短语，可以描述文章的主题、内容或关键特点。当读者点击某个标签时，系统会显示所有带有该标签的文章，帮助读者快速定位到感兴趣的内容。
          通过合理使用标签，博客作者可以提高文章的可发现性和阅读体验，帮助读者更好地浏览和阅读博客内容，同时也有助于提升博客的SEO（搜索引擎优化）效果，增加网站流量和曝光度。
        </p>
      </UCard>
    </div>
    <div class="tags w-full mt-4">
      <TagList
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <template v-slot="{ item }">
          <a
            :href="`/tags/${item.name}`"
            class="card flex flex-col hover:card-hover p-4"
          >
            <h3 class="flex flex-row items-center text-lg">
              <Icon :name="item.icon" class="size-6" />
              <span class="mx-2">{{ item.title }}</span>
              <span class="text-slate-400 text-sm">({{ item.count }})</span>
            </h3>
            <p class="text-slate-600 line-clamp-2 min-h-10">
              {{ item.description }}
            </p>
          </a>
        </template>
      </TagList>
    </div>
  </main>
</template>
