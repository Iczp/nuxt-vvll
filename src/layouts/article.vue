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

const tabs = ref([
  {
    title: '标签详情',
    icon: 'emojione-v1:book2',
    hash: '#article',
  },
  {
    title: '相关文章',
    icon: 'emojione-v1:books',
    hash: '#list',
  },
]);

const current = ref(0);

onMounted(() => {
  current.value = 0;
  setTimeout(() => {
    const index = tabs.value.findIndex((x) => x.hash == location.hash);
    if (index > -1) {
      current.value = index;
      // location.hash = `${tabs.value[current.value].hash}`;
    }
    // console.log(current.value, location.hash);
  }, 0);
});
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
    >
      <!-- isOpen:{{ isOpen }} -->
      <ContentSilder
        :class="{ hidden: !site.isOpen }"
        class="fixed max-h-[calc(100vh-var(--header-height)-64px)] sm:sticky sm:top-[--header-height] left-0 right-0 z-50 px-4 overflow-y-scroll shadow sm:flex sm:overflow-y-auto bottom-16 top-16 sm:p-0 backdrop-blur-lg sm:pr-6 sm:border-r border-slate-200 dark:border-slate-800 sm:w-64"
      />

      <section
        v-if="$route.path.startsWith('/tags/')"
        class="flex flex-col w-full gap-4"
      >
        <!-- <SiteLocation /> -->

        <Tabs
          id="comment"
          :current="current"
          :items="tabs"
          class="mt-0"
          tabClass="sticky top-16 backdrop-blur-lg z-[2] !px-4 !py-2  rounded-lg  w-full  border-0 shadow-sm ring-1 ring-inset ring-sky-500 dark:ring-sky-400 ps-10"
        >
          <template v-slot:item="{ item }">
            <a
              
              :id="item.hash.slice(1)"
              class="flex flex-row items-center gap-2 p-2 text-base"
            >
              <Icon :name="item.icon" class="size-5" />
              <span>{{ item.title }}</span>
            </a>
          </template>

          <template v-slot="{ index }">
            <div class="py-4" :class="{ hidden: index != 0 }">
              <slot> </slot>
            </div>
            <PostList
              :list="listFn"
              :filter="(x) => !x.$isDir"
              class="pt-4"
              :class="{ hidden: index != 1 }"
            >
            </PostList>
          </template>
        </Tabs>

        <!-- <CodeTab
          :active="0"
          article="详细"
          article-icon="emojione-v1:book2"
          list-icon="emojione-v1:books"
          list="相关文章"
          class="!p-0 not-box"
          tabClass="sticky top-16 backdrop-blur-lg z-[2] !px-4 !py-2  rounded-lg  w-full  border-0 shadow-sm ring-1 ring-inset ring-sky-500 dark:ring-sky-400  ps-10"
        >
          <template #article>
            <div class="py-4">
              <slot> </slot>
            </div>
          </template>
          <template #list>
            <PostList :list="listFn" :filter="(x) => !x.$isDir" class="pt-4">
            </PostList>
          </template>
        </CodeTab> -->
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
