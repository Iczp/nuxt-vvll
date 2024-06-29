<script setup lang="ts">
onMounted(() => {
  setTimeout(() => {
    const index = tabs.value.findIndex((x) => x.hash == location.hash);
    if (index > -1) {
      current.value = index;
      // location.hash = `${tabs.value[current.value].hash}`;
    }
    // console.log(current.value, location.hash);
  }, 0);
});

const tabs = ref([
  {
    title: '评论',
    icon: 'bi:github',
    hash: '#comment',
  },
  {
    title: '意见',
    icon: 'logos:discord-icon',
    hash: '#discord',
  },
]);

const current = ref(0);
</script>

<template>
  <Tabs
    id="comment"
    :current="current"
    :items="tabs"
    class="mt-8"
    tab-class="!px-4 !py-2 rounded-lg ring-1 ring-inset ring-sky-500"
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
      <!-- <ClientOnly> -->
      <div
        id="gitalk-container"
        class="leading-normal"
        :class="{ hidden: index != 0 }"
      >
        <a
          href="https://github.com/Iczp/nuxt-vvll/issues"
          class="mt-10 flex flex-col items-center justify-center gap-2 !py-4 card hover:card-hover"
          target="_blank"
          rel="nofollow"
        >
          <Icon name="bi:github" class="size-12" />
          https://github.com/Iczp/nuxt-vvll/issues
        </a>
      </div>
      <Gitalk> </Gitalk>
      <!-- </ClientOnly> -->

      <div class="mt-10" :class="{ hidden: index != 1 }">
        <a
          href="https://discord.gg/GmKVxWz5wk"
          class="flex flex-col items-center justify-center gap-2 !py-4 card hover:card-hover"
          target="_blank"
          rel="nofollow"
        >
          <Icon name="logos:discord-icon" class="size-12" />
          https://discord.gg/GmKVxWz5wk
        </a>
      </div>
    </template>
  </Tabs>
</template>
<style>
.gt-container .gt-initing-text,
.gt-ico.gt-ico-tip,
.gt-copyright {
  display: none !important;
}
.gt-container .gt-initing-text::after {
  content: 'loading...';
}
.gt-comment-content {
  @apply rounded-lg;
}

.gt-container .gt-comment-content:hover {
  box-shadow: 0 0 5px 0 #94a3b8;
}

.gt-container .gt-comment-admin .gt-comment-content {
  @apply dark:bg-slate-800 text-gray-200 bg-slate-100;
}

.gt-container .gt-comment-body {
  @apply dark:!text-gray-300;
}

.gt-container .gt-header-textarea:hover {
  @apply ring-1 ring-sky-500;
}

.dark .gt-container .gt-header-textarea {
  @apply bg-slate-800 text-gray-200;
}
.dark .gt-container .gt-header-textarea:hover {
  @apply ring-sky-400;
}
</style>
