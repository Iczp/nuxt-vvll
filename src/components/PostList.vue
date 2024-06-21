<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from '#vue-router';

const props = withDefaults(
  defineProps<{
    items1?: any[];
    list?: (
      list: NavItemType[],
      route: RouteLocationNormalizedLoaded
    ) => NavItemType[];

    filter?: (
      value: NavItemType,
      index: number,
      array: NavItemType[]
    ) => boolean;
  }>(),
  {
    // items: [],
    filter: () => true,
    list: (list, route) => list,
  }
);

const route = useRoute();

const { list, tagDict } = await useDocuments({});

const items = computed(() =>
  props.list!(list.value, route)
    .filter(props.filter)
    //   .slice(0, 1)
    .filter((x) => q.value == '' || x.title.indexOf(q.value) != -1)
);

const isPending = ref(false);
const q = ref('');
</script>

<template>
  <div class="flex flex-col w-full">
    <div>
      <UInput
        :loading="isPending"
        v-model="q"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="white"
        :trailing="true"
        placeholder="Search..."
        class="w-64"
      />
    </div>
    <ul class="grid grid-cols-1 gap-4 not-prose">
      <li
        v-for="item in items"
        :key="item._path"
        class="flex flex-col p-6 card hover:card-hover"
      >
        <PostItem :item="item" />
      </li>
    </ul>
  </div>
</template>
