<script lang="ts" setup>
const pkg = usePkg();

const depGroups = ref([
  {
    title: '开发依赖(Dev Dependencies)',
    items: pkg.devDependencies,
  },
  {
    title: '依赖(Dependencies)',
    items: pkg.dependencies,
  },
]);
// JSON.stringify(tagData);
</script>

<template>
  <main class="flex flex-col gap-4">
    <!-- <UAlert
      icon="i-heroicons-command-line"
      title="Heads up!"
      description="description"
    >
    </UAlert> -->

    <ul class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <li>
        <UCard>
          <Icon name="mingcute:version-line" class="icon" />
          Version: {{ pkg.version }}
        </UCard>
      </li>
      <li>
        <UCard>
          <Icon name="iconoir:developer" class="icon" />
          Author: <a>{{ pkg.author }}</a>
        </UCard>
      </li>
    </ul>

    <UCard v-for="(group, index) in depGroups">
      <template #header>
        <h3 class="flex flex-row items-center">
          <Icon name="octicon:package-dependencies-16" class="icon" />
          <span>{{ group.title }}</span>
        </h3>
      </template>
      <ul class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        <li class="flex items-center" v-for="(value, key) in group.items">
          <a
            :href="`https://www.npmjs.com/package/${key}`"
            target="_blank"
            class="inline-flex p-2 mr-2 border-red-300 border-1"
          >
            {{ key }}
          </a>
          <span class="inline-flex text-gray-500">{{ value }}</span>
        </li>
      </ul>
    </UCard>
  </main>
</template>

<style scoped>
.icon {
  @apply inline-flex mr-1 text-xl;
}
</style>
