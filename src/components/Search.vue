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

const keyword = ref(route.query.q as string);

// const { data, error } =  useAsyncData('users', () => searchContent(keyword))



const results = ref();
const search = (v: string) => {
  searchContent(keyword).then((res) => {
    results.value = res;
  });
};
watch(keyword, (v) => {
  console.log('keyword', v);
  search(v);
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
          <pre>{{ results }} </pre>
          <hr />
          <ul>
            <li v-for="(item, index) in results" :key="index">
              <NuxtLink>
                {{ item }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </UCard>
    </div></UModal
  >
</template>
