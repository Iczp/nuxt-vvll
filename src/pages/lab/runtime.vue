<script setup lang="ts">
import { resolveContentFiles } from '../../utils/traverseDirectory';
const runtimeConfig = useRuntimeConfig();

const contentFiles = useContentFiles();

// const contentFiles = resolveContentFiles('./src/content');

// contentFiles.forEach((file) => {
//   console.log('file', file);
// });
// console.log('runtimeConfig', runtimeConfig.public.contentFiles)

const { list } = await useDocuments({});
</script>

<template>
  <!-- <ul>
    <li v-for="item in list">
      {{ item }}
    </li>
  </ul> -->
  {{ Object.keys(contentFiles).length }}
  <ul class="flex flex-col gap-4 px-4">
    <li v-for="item in contentFiles" class="flex flex-col">
      <div>{{ item.fullPath }}</div>
      <div>{{ item.path }}</div>
      <div>{{ item }}</div>
    </li>
  </ul>
</template>
