<script setup lang="ts">
// 可以基于 API 调用或登录状态进行选择
const layout = 'article';

definePageMeta({
  layout: 'article',
});
</script>
<template>
  <!-- <NuxtLayout> -->
  <ContentDoc
    class="w-full space-y-4 prose no-underline max-w-none prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline dark:prose-dark"
  />
  <!-- </NuxtLayout> -->
</template>
