<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    fill?: boolean;
  }>(),
  {}
);
// import { useEmits } from 'vue';
import { useShare } from '@vueuse/core';

const { share, isSupported } = useShare();

const emits = defineEmits(['change']);

function startShare() {
  // alert(document.title)
  if (!isSupported) {
    alert('Unsupported');
  }
  share({
    title: `${document.title}`,
    text: `${document.title}`,
    url: location.href,
  });
  emits('change');
}

// const on
</script>

<template>
  <Icon
    :name="fill ? 'ic:round-share' : 'ic:outline-share'"
    @click="startShare"
    class="cursor-pointer"
  />
</template>
<style scoped></style>
