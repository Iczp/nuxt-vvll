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

const site = useSite();

const toggle = () => {
  site.toggle();
  const isLocked = useScrollLock(window);
  isLocked.value = site.isOpen?.valueOf() || false;
};
</script>
<template>
  <header
    class="fixed top-0 left-0 right-0 z-[99] flex items-center justify-between h-16 max-w-screen-xl box-border px-4 mx-auto border-b border-gray-200 dark:border-gray-800 backdrop-blur-xl"
  >
    <Logo />

    <aside class="flex flex-row items-center gap-4 text-xl">
      <!-- <a>
        <Icon name="i-heroicons-magnifying-glass-20-solid" class="" />
      </a> -->
      <Search />

      <ThemeMode />
      <!-- <LinkGithub href="https://github.com/iczp">Iczp</LinkGithub> -->

      <a
        href="https://github.com/iczp/nuxt-vvll"
        target="_blank"
        ref="nofollow"
      >
        <Icon name="i-simple-icons-github"></Icon>
      </a>
      <a href="/authors/iczp" ref="nofollow">
        <Icon name="simple-icons:buymeacoffee" color="pink"></Icon>
      </a>

      <Share />
      <MenuIcon
        @click="toggle"
        :open="!!site.isOpen"
        class="size-5 sm:hidden"
      />
    </aside>
  </header>
  <div
    class="sm:left-1/2 sm:-translate-x-1/2 w-full fixed sm:flex bottom-0 sm:justify-center justify-start sm:bottom-auto sm:top-0 flex flex-col h-16 sm:w-auto z-[99] backdrop-blur-2xl sm:backdrop-blur-none items-center sm:border-none border-t border-gray-200 dark:border-gray-800"
  >
    <UHorizontalNavigation :links="links" class="justify-center" />
  </div>
</template>
