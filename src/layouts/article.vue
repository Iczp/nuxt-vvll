<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from '#vue-router';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  menuIcon.value = isOpen.value ? 'mdi:menu-open' : 'mdi:menu';
};

const menuIcon = ref('mdi:menu');

// const articleCount = ref('');

const listFn = (list: NavItemType[], route: RouteLocationNormalizedLoaded) => {
  // const tagCode = getTagCode(route.path) ?? '';

  const q = list.filter(
    (x) => !x.$isDir && x.tags?.includes(getTagCode(route.path) ?? '')
  );

  // articleCount.value = `(${q.length})`;
  return q;
};
</script>

<template>
  <Layout>
    <div class="mx-auto mt-8 text-center">
      <h1>Layout:Article</h1>
    </div>

    <div>
      <a @click="toggleMenu">
        <Icon :name="menuIcon" class="size-6" />
      </a>
    </div>
    <main
      class="flex flex-col items-stretch w-full max-w-screen-xl gap-6 px-4 mx-auto mt-8 md:flex-row"
    >
      <ContentSilder
        class="md:pr-6 md:border-r border-slate-200 dark:border-slate-800 md:flex md:max-w-72"
      />
      <section
        v-if="$route.path.startsWith('/tags/')"
        class="flex flex-col w-full gap-4"
      >
        <CodeTab
          :active="0"
          default="详细"
          :list="`相关文章`"
          class="!p-0 not-box"
        >
          <template #default>
            <!-- <Box class="line-clamp-2"> -->
            <div class="py-4">
              {{ $route.path }}
              <slot> </slot>
            </div>

            <!-- </Box> -->
          </template>
          <template #list>
            <h3>相关文章</h3>
            <PostList :list="listFn" :filter="(x) => !x.$isDir" />
          </template>
        </CodeTab>
      </section>
      <section v-else class="w-full">
        <slot> </slot>
      </section>
    </main>
  </Layout>
</template>

<style scoped>
.menu-open {
}
.menu-close {
}
</style>
