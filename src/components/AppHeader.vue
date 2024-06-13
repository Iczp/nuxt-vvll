<script setup lang="ts">
const route = useRoute();

const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Notes',
    icon: 'solar:notebook-broken',
    to: `/notes`,
  },
  {
    label: 'Tags',
    icon: 'ic:outline-tag',
    to: `/tags`,
  },

  {
    label: 'About',
    icon: 'material-symbols:lab-profile-outline',
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
    class="sticky top-0 flex items-center justify-around max-w-screen-xl mx-auto border-b border-gray-200 dark:border-gray-800 backdrop-blur-md"
  >
    <Logo />
    <UHorizontalNavigation :links="links" class="justify-center" />

    <aside class="flex flex-row items-center gap-4 text-xl">
      <ThemeMode />
      <a>
        <Icon name="mdi:github" class="" />
      </a>
      <a>
        <Icon name="mdi:magnify" class="" />
      </a>
    </aside>
  </header>
</template>
