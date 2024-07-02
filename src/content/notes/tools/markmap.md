---
title: markmap
tags: vue,react,html,js,ts,svg,markdown,mindmap
icon: icon-park-outline:mindmap-map
description: Markmap 是 Markdown 与思维导图的结合，它解析 Markdown 内容并提取其内在的层级结构，渲染成可交互的思维导图，也就是 markmap。generator.
date: 2024-07-02
---

## Markmap

https://markmap.js.org/docs/markmap

## 什么是 MARKMAP？

Markmap 是 Markdown 与思维导图的结合，它解析 Markdown 内容并提取其内在的层级结构，渲染成可交互的思维导图，也就是 markmap。

最简单的使用方法是将你的 Markdown 内容加载到 👉[试用](https://markmap.js.org/repl)页面。

您还可以尝试：

- [VSCode ](https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode)4134🚀
- 命令行：参见[markmap-cli](https://markmap.js.org/docs/packages--markmap-cli)
- Vim / Neovim: 参见[coc-markmap](https://markmap.js.org/docs/packages--coc-markmap)

## 程序化使用

基本上，我们使用[markmap-lib 将 Markdown 预处理为结构化数据，然后使用](https://markmap.js.org/docs/packages--markmap-lib)[markmap-view](https://markmap.js.org/docs/packages--markmap-view)将数据呈现为交互式 SVG 。

请参阅相关包以了解更多详细信息。

### 演示

- 使用 React 的 markmap：https://stackblitz.com/edit/markmap-react?file=src%2Fmarkmap-hooks.tsx
- 使用 Vue 的 markmap：https://stackblitz.com/edit/markmap-vue?file=src%2Fapp.vue
- markmap 自动加载器：https://stackblitz.com/edit/markmap-autoloader?file=index.html
