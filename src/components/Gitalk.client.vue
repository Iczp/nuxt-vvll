<script setup lang="ts">
import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
const init = () => {
  var gitalk = new Gitalk({
    clientID: 'Ov23li75reFeYTpJhaI2',
    clientSecret: '38dcb5ed87ada5c1bf41b42dfed1053414345655',
    labels: ['comment'],
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
  setTimeout(init, 0);
});
</script>
<template>
  <slot></slot>
</template>
