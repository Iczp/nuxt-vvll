---
name: bun
title: Bun
icon: logos:bun
description: Bun 是一个现代化的 JavaScript 运行时，它旨在提供高性能和简洁的开发体验。Bun 由 Scratchpad 开发，是一个替代 Node.js 和 Deno 的运行时，并具有内置的包管理和捆绑工具。
---

## Bun

Bun 是一个现代化的 JavaScript 运行时，它旨在提供高性能和简洁的开发体验。Bun 由 Scratchpad 开发，是一个替代 Node.js 和 Deno 的运行时，并具有内置的包管理和捆绑工具。

### 主要特点

1. **高性能**：Bun 的性能比 Node.js 和 Deno 快得多，尤其在启动时间、文件读取和网络请求方面。
2. **内置包管理**：Bun 直接支持 npm 和 Yarn，且包安装速度极快。
3. **模块捆绑**：内置模块捆绑工具，无需配置，可以轻松捆绑前端和后端代码。
4. **全面兼容**：兼容 Node.js API 和 npm 包，可以无缝迁移现有项目。

### 安装和使用

#### 安装 Bun

Bun 提供了简单的安装命令：

```sh
curl https://bun.sh/install | bash
```

安装完成后，可以通过以下命令验证安装是否成功：

```sh
bun --version
```

#### 创建和运行项目

创建一个新项目并初始化：

```sh
mkdir my-bun-project
cd my-bun-project
bun init
```

这会生成一个 `package.json` 文件和 `index.ts` 文件。你可以在 `index.ts` 文件中编写你的代码：

```ts
console.log('Hello, Bun!');
```

运行项目：

```sh
bun run index.ts
```

#### 安装包

Bun 具有内置的包管理工具，可以快速安装 npm 包。例如，安装 Express：

```sh
bun add express
```

然后你可以在项目中使用它：

```ts
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Bun with Express!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

运行服务器：

```sh
bun run index.ts
```

### 常用命令

- **`bun install`**：安装 `package.json` 中列出的依赖。
- **`bun run <script>`**：运行脚本文件，支持 `.js`, `.ts` 和 `.jsx` 等。
- **`bun add <package>`**：安装 npm 包并自动添加到 `package.json`。
- **`bun remove <package>`**：卸载 npm 包并从 `package.json` 中移除。

### Bun 的优势

- **速度**：由于底层使用了高效的 Zig 编程语言，Bun 在执行速度上有显著优势。
- **内置工具**：整合了包管理、模块捆绑和开发服务器，减少了对外部工具的依赖。
- **兼容性**：支持现有的 Node.js API 和 npm 包，迁移成本低。

### 示例项目

创建一个简单的 HTTP 服务器：

```ts
import { serve } from 'bun';

serve({
  port: 3000,
  fetch(req) {
    return new Response('Hello, Bun!');
  },
});
```

保存为 `server.ts`，然后运行：

```sh
bun run server.ts
```

访问 `http://localhost:3000`，你会看到 `Hello, Bun!`。

### 总结

Bun 是一个强大的现代 JavaScript 运行时，它在性能和开发体验上都表现出色。无论是构建新的项目还是迁移现有的 Node.js 项目，Bun 都提供了一个高效的替代方案。
