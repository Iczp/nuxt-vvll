<script lang="ts" setup>
const props = defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div class="rounded-lg box not-prose">
    <div v-if="$slots.header || title" class="card-header">
      <slot name="header">
        {{ title }}
        <slot name="header-left"></slot>
        <slot name="header-right"></slot>
      </slot>
    </div>
    <div class="card-body">
      <slot>{{ description }}</slot>
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer">
        <slot name="footer-left"></slot>
        <slot name="footer-right"></slot>
      </slot>
    </div>
  </div>
</template>
<style scoped>

.card {
  @apply flex flex-col p-4;
  /* display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretch; */
  /* padding: 12px 0; */
  /* min-height: 48px; */
}
.card-header,
.card-footer {
  display: block;
}
.card-header {
  border-bottom: var(--card-border);
}

.card-footer {
  border-top: var(--card-border);
}
</style>
