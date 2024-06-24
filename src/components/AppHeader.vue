<script setup lang="ts">

const links = [
  {
    label: 'Home',
    // icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Notes',
    // icon: 'solar:notebook-broken',
    to: `/notes`,
  },
  {
    label: 'Tags',
    // icon: 'ic:outline-tag',
    to: `/tags`,
  },

  {
    label: 'About',
    // icon: 'material-symbols:lab-profile-outline',
    to: '/about',
  },
  {
    label: 'Author',
    // icon: 'material-symbols:frame-person',
    to: '/authors',
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
    class="sticky top-0 z-[99] flex items-center justify-between h-16 max-w-screen-xl box-border px-4 mx-auto border-b border-gray-200 dark:border-gray-800 backdrop-blur-md"
  >
    <Logo />

    <aside class="flex flex-row items-center gap-4 text-xl">
      <a>
        <Icon name="mdi:magnify" class="" />
      </a>
      <ThemeMode />
      <a>
        <Icon name="mdi:github" class="" />
      </a>
    </aside>
  </header>
  <div
    class="sm:left-1/2 sm:-translate-x-1/2 w-full fixed sm:flex bottom-0 sm:bottom-auto sm:top-0 flex flex-col h-16 sm:w-auto z-[99] backdrop-blur-sm items-center sm:border-none border-t border-gray-200 dark:border-gray-800"
  >
    <UHorizontalNavigation :links="links" class="justify-center" />
  </div>
</template>
