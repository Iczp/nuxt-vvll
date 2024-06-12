<script setup lang="ts">
// 可以基于 API 调用或登录状态进行选择
const layout = 'custom';

definePageMeta({
  layout: 'article',
});
</script>
<template>
  <!-- <NuxtLayout> -->
  <main class="flex flex-col flex-1">
    <ContentDoc :excerpt="true">
      <template v-slot="{ doc, excerpt }">
        <!-- doc:
        <pre>
           
            {{ doc }}
          </pre
        > -->
        <article
          class="w-full space-y-12 prose no-underline max-w-none prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline dark:prose-dark"
        >
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found!!!</h1>
      </template>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>
  </main>
  <!-- </NuxtLayout> -->
</template>
