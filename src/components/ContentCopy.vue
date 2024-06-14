<script lang="ts" setup>
const props = defineProps<{
  value?: string | undefined;
}>();

const { text, copy, copied, isSupported } = useClipboard({
  source: props.value,
});
const copyContent = () => {
  // console.log('copyContent', props.value);
  copy(props.value);
  title.value = 'Copied!';
  name.value = 'ic:baseline-check';
  console.warn('copied', copied, props.value);

  // message.success({ content: 'Copied!', duration: 2, key: 'copy-content' });
  setTimeout(() => {
    name.value = 'mdi:content-copy';
    title.value = 'Copy!';
  }, 1000);
};
const title = ref('Copy');
const name = ref('mdi:content-copy');
</script>

<template>
  <span title="复制" class="cursor-pointer" @click="copyContent">
    <Icon :name="name" />
    <!-- <Icon name="mdi:content-copy" /> -->
  </span>
  <!-- <Icon name="ic:baseline-check" /> -->
</template>
