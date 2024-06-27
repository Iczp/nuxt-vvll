<script setup lang="ts">
import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
const init = () => {
  var gitalk = new Gitalk({
    clientID: 'Ov23li75reFeYTpJhaI2',
    clientSecret: '38dcb5ed87ada5c1bf41b42dfed1053414345655',
    repo: 'nuxt-vvll',
    owner: 'iczp',
    admin: ['iczp'],
    id: location.pathname, // Ensure uniqueness and length less than 50
    distractionFreeMode: false, // Facebook-like distraction free mode
  });
  gitalk.render('gitalk-container');
};
onMounted(() => {
  setTimeout(init, 0);
});

const tabs = ref([
  {
    title: '评论',
    icon: 'bi:github',
  },
  {
    title: '意见',
    icon: 'vscode-icons:file-type-wxss',
  },
]);
</script>

<template>
  <Tabs :items="tabs" class="mt-4">
    <template v-slot:item="{ item }">
      <div class="flex flex-row items-center gap-2 p-2 text-base">
        <Icon :name="item.icon" class="size-5" />
        <span>{{ item.title }}</span>
      </div>
    </template>

    <template v-slot="{ index }">
      <div
        id="gitalk-container"
        class="leading-normal"
        :class="{ hidden: index != 0 }"
      >
        <slot>...加载中...</slot>
      </div>

      <div
        class="flex flex-col items-center justify-center p-4 mt-4 box min-h-32"
        :class="{ hidden: index != 1 }"
      >
        <Icon name="radix-icons:shadow-none" class="text-red-500 size-12" />
        未开放的功能！
      </div>
    </template>
  </Tabs>
</template>
<style scoped>

</style>
