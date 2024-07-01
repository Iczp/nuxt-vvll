// 获取插槽内容

import type { VNodeNormalizedChildren } from 'vue';

export const getSlotContent = (
  name = 'default'
): VNodeNormalizedChildren | undefined => {
  const slots = useSlots();
  const slotContent = slots[name]?.();

  if (
    slotContent &&
    slotContent[0] &&
    typeof slotContent[0].children === 'string'
  ) {
    return slotContent[0].children;
  }
};
