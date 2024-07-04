<script setup lang="ts">
import { resolveContentFiles } from '../../utils/traverseDirectory';
const runtimeConfig = useRuntimeConfig();

// const contentFiles = runtimeConfig.public.contentFiles;

const contentFiles = resolveContentFiles('./src/content');

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

  <ul>
    <li v-for="item in contentFiles">
      {{ item }}
    </li>
  </ul>
</template>
