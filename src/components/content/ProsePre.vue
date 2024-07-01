<script lang="ts" setup>
import mermaid from 'mermaid';
const mermaidContainer = ref<HTMLDivElement | null>(null);

const renderMermaid = (chart: string) => {
  if (mermaidContainer.value && chart) {
    console.log('mermaid render:', chart);
    mermaid
      .render(`mermaid-chart-${new Date().getTime()}`, chart)
      .then((res) => {
        if (mermaidContainer.value) {
          mermaidContainer.value.innerHTML = res.svg;
        }
      })
      .catch((err) => {
        mermaidContainer.value = err;
      });

    // try {
    //   const render = await mermaid.render('mermaid-chart', chart);
    //   mermaidContainer.value.innerHTML = render.svg;
    // } catch (error) {
    //   console.error('Mermaid render error:', error);
    // }
  }
};

const attrs = useAttrs();

// 初始化 Mermaid
onMounted(() => {
  mermaid.initialize({ startOnLoad: true });
  if (attrs.language == 'mermaid') {
    renderMermaid(attrs.code as string);
  }
});
</script>

<template>
  <div
    class="container flex flex-col my-3 overflow-hidden border rounded-lg border-color"
  >
    <!-- $attrs.d{{ $props }}
        {{ $attrs }}
        {{ $slots }} -->
    <header class="flex flex-row justify-between h-10 px-2">
      <div class="flex flex-row items-center gap-1">
        <!-- <MdiCodeJson /> -->
        <!-- <span
          :l="`{ :${$attrs.language || '...'} }`"
          class="tag-item language after:mx-2 after:content-[attr(l)] after:text-sm"
        >
          <IconCode :lang="$attrs.language" />
        </span> -->

        <IconCode :lang="$attrs.language" />
        <span class="tag-item filename">{{ $attrs.filename }}</span>
      </div>
      <div class="flex flex-row items-center">
        <ContentCopy :value="$attrs.code" />
      </div>
    </header>

    <main class="code-content">
      <pre class="m-0 break-words break-all rounded-none">
        <slot></slot>
      </pre>
      <div v-if="$attrs.language == 'mermaid'" ref="mermaidContainer"></div>
    </main>
    <!-- <footer class="flex flex-row justify-between p-2"></footer> -->
  </div>
</template>

<style scoped>
.border-color {
  @apply border-gray-300 dark:border-gray-700;
}

pre code .line {
  white-space: pre-wrap;
}

.title-left {
  @apply flex gap-4 flex-row items-center;
}
.title-right {
  display: flex;
  gap: 8px;
  flex-direction: row;
}
.language {
  font-weight: bold;
}
</style>
