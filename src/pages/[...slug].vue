<script setup lang="ts">
// 可以基于 API 调用或登录状态进行选择
const layout = 'article';

definePageMeta({
  layout: 'article',
});
</script>
<template>
  <!-- <NuxtLayout> -->
  <main
    class="flex flex-row items-stretch w-full max-w-screen-xl gap-8 mx-auto"
  >
    <ContentSilder class="pr-8 border-r w-72 border-slate-800" />

    <ContentDoc
      class="w-full space-y-12 prose no-underline max-w-none prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline dark:prose-dark"
    />
  </main>
  <!-- </NuxtLayout> -->
</template>
