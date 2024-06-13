<script setup lang="ts">
const route = useRoute();

const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Tags',
    icon: 'ic:outline-tag',
    to: `/tags`,
  },

  {
    label: 'About',
    icon: 'i-heroicons-command-line',
    to: '/about',
  },
  {
    label: 'Author',
    icon: 'material-symbols:frame-person',
    to: '/author',
  },
  // {
  //   label: 'iczp',
  //   avatar: {
  //     src: 'https://avatars.githubusercontent.com/u/18003280?v=4',
  //   },
  //   // badge: 5,
  //   to: 'https://github.com/iczp',
  //   target: '_blank',
  // },
];
</script>
<template>
  <header
    class="flex items-center justify-between border-b border-gray-200 dark:border-gray-800"
  >
    <Logo />
    <UHorizontalNavigation :links="links" class="justify-center" />

    <aside>
      <ThemeMode />
    </aside>
  </header>
</template>
