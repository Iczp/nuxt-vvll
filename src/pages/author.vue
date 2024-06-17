<script setup lang="ts">
const { data: tagList } = await useAsyncData('_tags', () =>
  queryContent('/_tags')
    // .where({
    //   _path: {
    //     $not: {
    //       $regex: '.*_dir$',
    //     },
    //   },
    // })
    .find()
);

onMounted(() => {
  console.log('onMounted', unref(tagList));
});
</script>

<template>
  tagList:
  <pre>
        {{ tagList }}
    </pre
  >
</template>
