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
      class="flex flex-col items-stretch w-full max-w-screen-xl gap-6 p-4 mx-auto sm:position-unset top-16 backdrop-blur-md"
    >
      <ClientOnly>
        <SiteLocation />
      </ClientOnly>
    </div>

    <main
      class="box-border flex flex-col items-stretch max-w-screen-xl gap-6 px-4 mx-auto sm:flex-row"
      style="--header-height: 64px"
    >
      <!-- isOpen:{{ isOpen }} -->
      <ContentSilder
        :class="{ hidden: !site.isOpen }"
        class="fixed max-h-[calc(100vh-var(--header-height)-64px)] sm:sticky sm:top-[--header-height] left-0 right-0 z-10 px-4 overflow-y-scroll shadow sm:flex sm:overflow-y-auto bottom-16 top-16 sm:p-0 backdrop-blur-lg sm:pr-6 sm:border-r border-slate-200 dark:border-slate-800 sm:max-w-72"
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
          tabClass="sticky top-16 backdrop-blur-lg z-[2] !px-4 !py-2  rounded-lg  w-full  border-0 shadow-sm ring-1 ring-inset ring-sky-500 dark:ring-sky-400  ps-10"
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
