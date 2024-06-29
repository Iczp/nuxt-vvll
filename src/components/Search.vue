<script setup lang="ts">
const { metaSymbol } = useShortcuts();
const isOpen = ref(true);
const route = useRoute();
defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      // console.log(isOpen.value);
      isOpen.value = !isOpen.value;
    },
    escape: {
      usingInput: true,
      whenever: [isOpen],
      handler: () => {
        isOpen.value = false;
      },
    },
  },
});

const keyword = ref((route.query.q as string) || 'vue');

// const { data, error } =  useAsyncData('users', () => searchContent(keyword))

const { list } = await useDocuments({});

const results = computed(() =>
  list.value.filter(
    (x) =>
      x.title
        ?.toLocaleLowerCase()
        .indexOf(keyword.value?.toLocaleLowerCase()) != -1 ||
      x._path.toLocaleUpperCase().indexOf(keyword.value?.toLocaleUpperCase()) !=
        -1
  )
);

watch(keyword, (v) => {
  console.log('keyword', v);
});
</script>

<template>
  <!-- <UInput
    icon="i-heroicons-magnifying-glass-20-solid"
    size="sm"
    color="sky"
    :trailing="false"
    placeholder="Search..."
  >
    <template #trailing>
      <div class="flex items-center gap-1">
        <UKbd>{{ metaSymbol }}</UKbd>
        <UKbd>K</UKbd>
      </div>
    </template>
  </UInput> -->
  <div
    class="inline-flex flex-row gap-1 py-1 rounded-lg cursor-pointer sm:px-2 sm:ring-1 ring-slate-400 dark:ring-slate-600 hover:ring-sky-400"
    @click="isOpen = true"
  >
    <Icon name="i-heroicons-magnifying-glass-20-solid" class="" />
    <div class="flex-row hidden gap-1 sm:flex">
      <span class="text-sm text-gray-300 dark:text-slate-700 cursor-text"
        >Search...</span
      >
      <UKbd>{{ metaSymbol }}</UKbd>
      <UKbd>K</UKbd>
    </div>
  </div>

  <UModal v-model="isOpen" :transition="false">
    <div
      class="fixed top-[var(--header-height)] left-0 right-0 box-border m-4 z-[99]"
    >
      <UCard>
        <div class="flex flex-col gap-4">
          <div>
            <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="md"
              color="sky"
              :trailing="false"
              v-model="keyword"
              placeholder="Search..."
            >
              <template #trailing>
                <div class="flex items-center gap-1">
                  <UKbd>
                    <Icon name="mdi:keyboard-esc" class="size-4" />
                  </UKbd>
                </div>
              </template>
            </UInput>
          </div>

          <div class="overflow-y-scroll h-96">
            <Empty v-if="results.length == 0"></Empty>
            <ul
              v-if="results.length != 0"
              class="flex flex-col max-w-full gap-1.5"
            >
              <li v-for="(item, index) in results" :key="index">
                <Breadcrumb
                  li-class="flex min-w-12"
                  v-if="item.$parents"
                  :items="item.$parents().reverse()"
                  class="block max-w-full"
                >
                  <template v-if="item?.description" #footer>
                    <li class="min-w-0">
                      <NuxtLink
                        :to="item._path"
                        class="flex items-center min-w-0"
                      >
                        <span class="truncate sm:text-slate-600">
                          {{ item?.description }}
                        </span>
                      </NuxtLink>
                    </li>
                  </template>
                </Breadcrumb>
                <!-- <NuxtLink :to="item?._path">
                <Icon v-if="item.icon" :name="item.icon" class="mr-2 size-4" />
                <span>{{ item?.title }}</span>
              </NuxtLink> -->
              </li>
            </ul>
          </div>
        </div>
      </UCard>
    </div>
  </UModal>
</template>
