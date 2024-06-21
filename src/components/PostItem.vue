<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    item: NavItemType;
  }>(),
  {}
);
</script>

<template>
  <NuxtLink class="flex flex-row justify-between gap-4" :to="`${item._path}`">
    <aside
      class="flex items-center justify-center border border-gray-500 rounded-md size-24 border-opacity-20"
    >
      <span :to="`${item._path}`">{{ item.title }}</span>
    </aside>
    <section class="flex flex-col flex-1 gap-1 min-h-24">
      <h3 class="flex flex-row items-center justify-between text-base">
        <div class="text-base">
          <span :to="`${item._path}`">{{ item.title }}</span>
        </div>
        <Tags :items="item.tagEntities">
          <template v-slot="{ item: tagItem }">
            <span v-if="tagItem?.icon" :title="tagItem?.title">
              <Icon :name="tagItem?.icon" class="size-4"></Icon>
            </span>
            <span v-else>{{ tagItem?.title }}</span>
          </template>
        </Tags>
      </h3>
      <div class="text-sm text-gray-600">
        <p class="line-clamp-2 min-h-10">
          {{ item.description || item.title }}
        </p>
      </div>
      <div class="flex flex-row-reverse justify-between py-1 text-xs">
        <div v-if="item.date" class="text-green-400">
          <Date :value="item.date" />
        </div>
        <div v-if="item.author" class="text-sky-500">
          {{ item.author }}
        </div>
      </div>
    </section>
  </NuxtLink>
</template>
