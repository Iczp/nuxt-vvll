<script setup lang="ts">
// const { data: tagList } = await useAsyncData('_tags', () =>
//   queryContent('/_tags')
//     // .where({
//     //   _path: {
//     //     $not: {
//     //       $regex: '.*_dir$',
//     //     },
//     //   },
//     // })
//     .find()
// );

const route = useRoute();

const x = route.query.id as string | undefined;
const { getTag } = useTags('tags');
const tag = await getTag(x);
onMounted(() => {
  // console.log('onMounted', unref(tagList));
});
</script>

<template>
  tagList: {{ x }}
  <pre>
        {{ tag }}
    </pre
  >
</template>
