<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from '#vue-router';
import type { NavItemType } from '../types/NavItemType';

const listFn = (list: NavItemType[], route: RouteLocationNormalizedLoaded) => {
  const q = list.filter(
    (x) => !x.$isDir && x.tags?.includes(getTagCode(route.path) ?? '')
  );
  return q;
};

onUnmounted(() => {
  console.log('onUnmounted');
});

const site = useSite();
</script>

<template>
  <Layout>
    <!-- <div class="mx-auto text-center">
      <h1>Layout:Article</h1>
    </div> -->

    <div
      class="fixed z-20 flex flex-col items-stretch w-full max-w-screen-xl gap-6 p-4 mx-auto sm:position-unset top-16 backdrop-blur-md"
    >
      <SiteLocation />
    </div>

    <main
      class="box-border flex flex-col items-stretch max-w-screen-xl gap-6 px-4 mx-auto sm:flex-row"
    >
      <!-- isOpen:{{ isOpen }} -->
      <ContentSilder
        :class="{ hidden: !site.isOpen }"
        class="fixed left-0 right-0 z-10 p-4 overflow-y-scroll sm:flex sm:overflow-y-auto bottom-16 top-24 sm:top-0 sm:p-0 backdrop-blur-lg sm:relative sm:pr-6 sm:border-r border-slate-200 dark:border-slate-800 sm:max-w-72"
      />

      <section
        v-if="$route.path.startsWith('/tags/')"
        class="flex flex-col w-full gap-4"
      >
        <!-- <SiteLocation /> -->

        <CodeTab
          :active="0"
          default="详细"
          :list="`相关文章`"
          class="!p-0 not-box"
        >
          <template #default>
            <!-- <Box class="line-clamp-2"> -->
            <div class="py-4">
              <!-- {{ $route.path }} -->
              <slot> </slot>
            </div>

            <!-- </Box> -->
          </template>
          <template #list>
            <!-- <h3>相关文章</h3> -->
            <PostList :list="listFn" :filter="(x) => !x.$isDir" class="pt-4">
            </PostList>
          </template>
        </CodeTab>
      </section>
      <section v-else class="w-full">
        <!-- <SiteLocation /> -->
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
