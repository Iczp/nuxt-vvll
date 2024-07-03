---
name: unocss
title: UnoCSS
tags: css
icon: logos:unocss
description: UnoCSS 是一个现代化的原子化 CSS 框架，适用于需要高性能和高度灵活性的前端开发项目。
---

## UnoCSS

:Icon{name=logos:unocss .size-32}

UnoCSS 是一个高性能、即时 (on-demand) 的原子化 CSS 框架。它旨在提供极其轻量、快速且高度可定制的 CSS 解决方案，与 Tailwind CSS 类似，但具备更强的灵活性和性能优势。以下是 UnoCSS 的一些主要特点和用途：

### 主要特点

1. **即时按需生成**：

   - UnoCSS 仅生成实际使用到的 CSS 样式，从而减少最终生成的 CSS 文件的大小，提高性能。

2. **高度可定制**：

   - 用户可以根据需要自定义预设、规则和转换器，灵活地扩展和调整框架的行为。

3. **多语言支持**：

   - 支持多种前端框架和工具，包括 Vue、React、Svelte、Vite 等。

4. **插件系统**：

   - 提供了丰富的插件系统，允许用户通过插件添加新的功能和样式规则。

5. **极速编译**：

   - UnoCSS 采用高效的编译算法，确保在开发和生产环境中都能快速生成 CSS。

6. **内联和外部样式**：
   - 支持生成内联样式和外部 CSS 文件，适应不同的使用场景。

### 基本用法

UnoCSS 的用法非常简单，通常只需要在项目中安装 UnoCSS，并根据需要配置预设和规则。以下是一个基本的使用示例：

1. **安装**：

   ```bash
   npm install unocss
   ```

2. **配置**：

   创建一个 `unocss.config.js` 文件，并进行基本配置：

   ```javascript
   import { defineConfig } from 'unocss';

   export default defineConfig({
     // 预设配置
     presets: [
       require('@unocss/preset-attributify'),
       require('@unocss/preset-uno'),
     ],
   });
   ```

3. **在项目中使用**：

   在项目的组件或页面中使用 UnoCSS 提供的原子类名，例如：

   ```html
   <div class="text-xl font-bold text-center">Hello, UnoCSS!</div>
   ```

### 主要用途

1. **快速原型设计**：

   - 由于 UnoCSS 生成的样式文件非常小且高效，非常适合快速原型设计和开发。

2. **性能优化**：

   - 减少不必要的 CSS 生成，提高页面加载速度和性能。

3. **高度自定义项目**：

   - 对于需要高度自定义样式的项目，UnoCSS 提供了灵活的配置和扩展能力。

4. **兼容多种前端框架**：
   - UnoCSS 支持 Vue、React、Svelte 等主流前端框架，使其成为现代前端开发的理想选择。

### 优点

- **轻量高效**：仅生成实际使用的样式，极大地减少了 CSS 文件的体积。
- **灵活可定制**：用户可以根据项目需求进行高度定制。
- **快速编译**：采用高效的编译算法，保证开发和生产环境中的高性能。
- **插件丰富**：通过插件系统，可以方便地扩展功能和样式规则。

UnoCSS 是一个现代化的原子化 CSS 框架，适用于需要高性能和高度灵活性的前端开发项目。
