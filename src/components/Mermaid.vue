
<template>
  <div ref="mermaidContainer" >
    <pre>{{ chart }}</pre>
  </div>
  <div>
    <slot>
      <pre>{{ chart }}</pre>
    </slot>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import mermaid from 'mermaid';

// 获取插槽内容
const slots = useSlots();
const slotContent = slots['default']?.();

// 创建一个 ref 用于 Mermaid 容器
const mermaidContainer = ref<HTMLDivElement | null>(null);

const uuid = `mermaid-${new Date().getTime()}`;
// 监听插槽内容的变化并更新图表

const chart = ref();

chart.value = getSlotContent();

// 渲染 Mermaid 图表
const renderMermaid = async (chart: string) => {
  if (mermaidContainer.value && chart) {
    try {
      const { svg } = await mermaid.render(uuid, chart, mermaidContainer.value);
      mermaidContainer.value.innerHTML = svg;
    } catch (error) {
      console.error('Mermaid render error:', error);
    }
  }
};

// 初始化 Mermaid
onMounted(() => {
  mermaid.initialize({ startOnLoad: true });
  renderMermaid(chart.value);
});
</script>

<style scoped>
/* 可以在这里添加样式 */
</style>
