<script setup lang="ts">
import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';

const route = useRoute();
const init = () => {
  var gitalk = new Gitalk({
    clientID: 'Ov23li75reFeYTpJhaI2',
    clientSecret: '38dcb5ed87ada5c1bf41b42dfed1053414345655',
    labels: ['comment', location.pathname],
    // title: route.path,
    repo: 'nuxt-vvll',
    owner: 'iczp',
    admin: ['iczp'],
    id: location.pathname, // Ensure uniqueness and length less than 50
    distractionFreeMode: false, // Facebook-like distraction free mode
  });
  gitalk.render('gitalk-container');
};
onMounted(() => {
  setTimeout(init, 500);
  setTimeout(() => {
    const index = tabs.value.findIndex((x) => x.hash == location.hash);
    if (index > -1) {
      current.value = index;
      location.hash = `${tabs.value[current.value].hash}`;
    }
    console.log(current.value, location.hash);
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
  <Tabs id="comment" :current="current" :items="tabs" class="mt-8">
    <template v-slot:item="{ item }">
      <a
        :href="item.hash"
        :name="item.hash.slice(1)"
        class="flex flex-row items-center gap-2 p-2 text-base"
      >
        <Icon :name="item.icon" class="size-5" />
        <span>{{ item.title }}</span>
      </a>
    </template>

    <template v-slot="{ index }">
      <div
        id="gitalk-container"
        class="leading-normal"
        :class="{ hidden: index != 0 }"
      >
        <slot>
          <a
            href="https://github.com/Iczp/nuxt-vvll/issues"
            class="mt-10 flex flex-col items-center justify-center gap-2 !py-4 card hover:card-hover"
            target="_blank"
            rel="nofollow"
          >
            <Icon name="bi:github" class="size-12" />
            https://github.com/Iczp/nuxt-vvll/issues
          </a>
        </slot>
      </div>

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
<style scoped></style>
