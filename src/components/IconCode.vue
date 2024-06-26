<script lang="ts" setup>
// const countries = ['United States', 'Canada', 'Mexico'];

// const country = ref(countries[0]);

const props = withDefaults(
  defineProps<{
    lang?: string | null | undefined;
  }>(),
  {
    // lang: 'bx:code-block',
  }
);

const name = ref(`vscode-icons:file-type-${props.lang?.toLowerCase()}`);

switch (props.lang?.toLowerCase()) {
  case 'ts':
  case 'typescript':
    name.value = 'vscode-icons:file-type-typescript';
    break;
  case 'javascript':
  case 'jsx':
  case 'js':
    name.value = 'vscode-icons:file-type-js';
    break;
  case 'md':
    name.value = 'vscode-icons:file-type-mdx';
    break;
  case 'txt':
    name.value = 'vscode-icons:file-type-text';
    break;
  case 'yml':
  case 'yaml':
    name.value = 'vscode-icons:file-type-yaml';
    break;
  case 'undefined':
  case null:
  case undefined:
    name.value = 'bx:code-block';
    break;
  case 'sh':
  case 'bash':
  case 'shell':
    name.value = 'bi:terminal';
    break;
    case 'c#':
  case 'csharp':
    name.value = 'vscode-icons:file-type-csharp2';
    break;
}
</script>

<template>
  <!-- after:capitalize -->
  <span
    :l="`{ ${lang || '..'} }`"
    class="after:mx-2 after:content-[attr(l)] after:text-sm after:text-slate-300 dark:after:text-slate-700"
  >
    <!-- <IconCode :lang="$attrs.language" /> -->
    <Icon v-if="lang" :name="name" />
  </span>
</template>
