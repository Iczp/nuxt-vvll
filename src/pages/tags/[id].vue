<script lang="ts" setup>
const { data } = await useAsyncData('vue', () =>
  queryContent('/_tags/vue').findOne()
);
</script>

<template>
  <pre>
    data: {{ data }}
  </pre>
  <h1>Tag:{{ $route.params.id }}</h1>
</template>
