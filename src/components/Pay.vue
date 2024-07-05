<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title?: string;
    icon?: string;
  }>(),
  {
    title: '送我杯奶茶',
    icon: 'simple-icons:buymeacoffee',
  }
);
const pays = ref([
  {
    title: '支付宝',
    img: '/images/pay/alipay.jpg',
  },
  {
    title: '微信',
    img: '/images/pay/wx.jpg',
  },
]);
</script>

<template>
  <div class="flex flex-col p-0 m-0">
    <h3 class="space-x-2">
      <Icon :name="icon" />
      <span>{{ title }}</span>
    </h3>
    <ul class="flex flex-col gap-4 p-0 m-0 sm:flex-row">
      <li v-for="item in pays" :title="item.title" class="flex p-4 m-0">
        <img :src="item.img" :alt="item.title" class="rounded-lg" />
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
