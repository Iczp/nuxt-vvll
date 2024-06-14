<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    items: Array<any>;
    current?: number;
  }>(),
  {
    current: 0,
  }
);

const emit = defineEmits<{
  change: [number];
  'update:current': [number];
}>();

const tabIndex = ref(props.current);
const onChange = (index: number) => {
  tabIndex.value = index;
  emit('change', index);
  emit('update:current', index);
};
</script>
<template>
  <div class="tabs">
    <ul class="tab-ul">
      <li
        v-for="(item, index) in props.items"
        :key="index"
        class="tab-li"
        :class="{ active: index == tabIndex }"
        @click="onChange(index)"
      >
        <slot :item="item" name="item">
          {{ item }}
        </slot>
      </li>
    </ul>
    <slot :index="tabIndex"></slot>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
}
.tab-ul {
  display: flex;
  flex-direction: row;

  font-size: 16px;
  gap: 12px;
  position: relative;
  padding: 0;
  margin: 0;
}

.tab-ul a:hover {
  color: burlywood;
  text-decoration: none;
}

.tab-li {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  list-style: none;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
}

.tab-li::after {
  display: flex;
  content: '';
  background-color: aqua;
  pointer-events: none;
  bottom: 0;
  position: absolute;
  height: 2px;
  border-radius: 5px;
  width: 0;
  transition: width 0.3s linear;
}
.tab-li.active::after,
.tab-li:hover::after {
  width: 100%;
}
.tab-li:hover::after {
  background-color: rgba(0, 255, 255, 0.545);
}

.active {

}
</style>
