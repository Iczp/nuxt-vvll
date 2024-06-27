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
    icon: 'logos:discord-icon',
  },
]);
</script>

<template>
  <Tabs :items="tabs" class="mt-8">
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

      <div class="mt-10" :class="{ hidden: index != 1 }">
        <a
          href="https://discord.gg/PFpEHVs6Wj"
          class="flex flex-col items-center justify-center gap-2 !py-4 card hover:card-hover"
          target="_blank"
          rel="nofollow"
        >
          <Icon name="fa6-brands:discord" class="size-12" />
          https://discord.gg/PFpEHVs6Wj
        </a>
      </div>
    </template>
  </Tabs>
</template>
<style scoped></style>
