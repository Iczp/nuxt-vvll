<script lang="ts" setup>
const slots = useSlots();

const slotsKeys = ref<string[]>(Object.keys(slots));

const changeSlot = () => {
  slotsKeys.value.map((slot) => {
    const slotFn = slots[slot] || slots.default;

    if (slotFn) {
      const vnodes = slotFn();
      return vnodes.map((vnode) => {
        console.log('vnode', vnode);

        if (vnode.props) {
          // 在这里修改 vnode 的 props
          //   vnode.props['filename'] = '5555';
        }
        return vnode;
      });
    }
  });
};

const getCustomProp = (slotName: string) => {
  // 这里可以根据 slotName 来决定返回什么值
  // 例如，我们可以简单地返回一个固定的值，或者根据插槽名动态生成值
  return `custom-value-${slotName}`;
};

const active = ref('default');

const setActive = (slot: string) => {
  active.value = slot;
};
onMounted(() => {
  // 在组件挂载后获取插槽键名，并将其设置为响应式引用
  // changeSlot();
});

const current = ref(0);

const onTabChang = (index: number) => {
  console.log('onTabChang', index);
};

const attrs = useAttrs();

const { tagDict } = await useDocuments({});

const getIcon = (slotKey: string) => {
  const icon = attrs[`${slotKey}-icon`];
  if (icon) {
    return icon as string;
  }
  const tag = tagDict.value[slotKey.toLocaleLowerCase()];
  return tag?.icon;
};

const getTitle = (slotKey: string) => {
  const title = attrs[slotKey];
  if (title) {
    return title as string;
  }
  const tag = tagDict.value[slotKey.toLocaleLowerCase()];
  return tag?.title;
};
</script>
<template>
  <div class="px-4 box">
    <Tabs
      :items="slotsKeys"
      :current="current"
      @change="onTabChang"
      v-bind="$attrs"
    >
      <template v-slot:item="{ item }">
        <div class="flex flex-row items-center gap-2 py-2 text-sm">
          <Icon class="" v-if="getIcon(item)" :name="getIcon(item)!"> </Icon>
          {{ getTitle(item) || item }}
        </div>
      </template>
      <template v-slot="{ index }">
        <div v-for="(key, i) in slotsKeys" v-show="i == index" :id="key">
          <slot :name="key" :props="getCustomProp(key)"></slot>
        </div>
      </template>
    </Tabs>
  </div>
</template>
