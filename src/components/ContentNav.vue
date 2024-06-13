<script lang="ts" setup>
const { navBottomLink, navDirFromPath, navPageFromPath, navKeyFromPath } =
  useContentHelpers();
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);

const route = useRoute();

const links = navigation.value!
  .filter((x) => x.children)
  .map((x) => ({
    label: x.title,
    //   badge: 100,
    to: x._path,
    active: x._path.split('/')[2] == route.params.slug[0],
  }));
</script>

<template>
  <main>
    Content Nav
    {{ route.fullPath.split('/') }}
    {{ route.params.slug }}
    <UHorizontalNavigation
      :links="links"
      class="border-b border-gray-200 dark:border-gray-800"
    />
    <!-- <pre>{{ navigation }}</pre> -->
  </main>
</template>

<style scoped></style>
