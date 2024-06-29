<script setup lang="ts">
/* 
	use:
	<HighLight text="红茶做所以变红，是由于茶叶中茶多酚在多酚氧化酶的催化作用下形成茶黄素、茶红素、茶褐素。" reg="(茶|红茶)" @click="onClick" />
	By IczpNet 2023.05.05
    By IczpNet 2024-06-29
*/
// const props = defineProps(['reg', 'text', 'color']);
const props = defineProps<{
  reg: string;
  text: string;
  color?: string;
}>();

const words = computed(() => {
  if (!props.reg || props.reg == '()' || props.reg.trim().length == 0) {
    // console.log('words reg' , props.reg);
    return [props.text];
  }
  let reg = new RegExp(props.reg, 'ig');
  var words = props.text.split(reg).filter((x) => x != '');
  // console.log('words', words)
  return words;
});

const isKey = (word: string) =>
  props.reg.toLocaleLowerCase().indexOf(word.toLocaleLowerCase()) != -1;
</script>

<template>
  <template v-for="(word, index) in words" :key="index">
    <b
      v-if="isKey(word)"
      :class="{ 'high-light': isKey(word) }"
      @click.stop="
        $emit('click', {
          word,
          isKey: isKey(word),
          event: $event,
        })
      "
      >{{ word }}</b
    >
    <template v-else>
      {{ word }}
    </template>
  </template>
</template>

<style>
.high-light {
  /* color: red; */
  @apply text-primary;
}
</style>
