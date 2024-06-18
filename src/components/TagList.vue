<script setup lang="ts">
// import { Icon } from '#components'
// const { items: list } = await useTags('tags');

// const { getAllByTags } = await useNavigationList();

const { data: tagList } = await useAsyncData('tags', () =>
  queryContent('/tags/')
    .where({
      name: {},
      _path: {
        $not: {
          $regex: '.*_dir$',
        },
      },
    })
    .find()
);

const items = tagList.value?.map((x) => ({
  ...x,
  // count: getAllByTags([x.name]).length,
}));
</script>

<template>
  <!-- <pre>
    {{ items }}
  </pre> -->

  <ul class="not-prose">
    <li v-for="(item, index) in items" :key="item.title">
      <!-- <b v-if="!item.name || index==0">{{ item }}</b> -->
      <slot :item="item">
        <!-- <a
          :href="`/tags/${item?.name}`"
          class="flex flex-col card hover:card-hover"
        >
          <h3 class="flex flex-row items-center text-lg">
            <Icon v-if="item.icon" :name="item.icon" class="overflow-hidden size-6" />
            <span class="mx-2">{{ item.title }}</span>
            <span class="text-slate-400">({{ item.count }})</span>
          </h3>
          <p class="text-slate-600">{{ item.description }}</p>
        </a> -->
      </slot>
    </li>
  </ul>
</template>

<style scoped>
a {
}
</style>
