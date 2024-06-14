<script lang="ts" setup>
// const cacheKey = `/_tags/andorid`;
// const { data: tagDir } = await useAsyncData('_tags/_dir', () =>
//   queryContent('/_tags/_dir').findOne()
// );
</script>

<template>
  <main
    class="flex flex-row items-stretch w-full max-w-screen-xl gap-8 mx-auto"
  >
    <ContentSilder class="pr-8 border-r w-72 border-slate-800" />
    <!-- <div class="flex pr-8 border-r shrink-0 w-72 border-slate-800"></div> -->
    <main class="flex flex-col">
      <div>
        <UCard>
          <!-- {{ data }} -->
          <div class="line-clamp-2">
            <p>
              标签(Tags)的作用是帮助读者更快速地找到和筛选感兴趣的内容。通过为文章添加标签,可以将文章分类和归档,使得读者可以根据标签来浏览相关主题的文章。
            </p>
            <p>
              标签通常是与文章内容相关的关键词或短语,可以描述文章的主题、内容或关键特点。当读者点击某个标签时,系统会显示所有带有该标签的文章,帮助读者快速定位到感兴趣的内容。
            </p>
            <p>
              通过合理使用标签,博客作者可以提高文章的可发现性和阅读体验,帮助读者更好地浏览和阅读博客内容,同时也有助于提升博客的SEO(搜索引擎优化)效果,增加网站流量和曝光度。
            </p>
          </div>
        </UCard>
      </div>
      <TagListView />
    </main>
  </main>
</template>
