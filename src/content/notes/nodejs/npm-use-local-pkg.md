---
title: npm项目中使用本地包
icon: vscode-icons:file-type-webpack
tags: npm nodejs
description: npm项目中使用本地包
---

要在 npm 项目中使用本地包，你可以使用以下步骤：

1. **在本地文件系统中创建包：** 首先，在你的本地文件系统中创建一个包，确保它包含一个`package.json`文件以及你想要共享的代码或功能。

2. **使用 npm link：** 在包的根目录下运行`npm link`命令。这会在全局`node_modules`目录中创建一个符号链接，指向你的本地包。

3. **在项目中使用本地包：** 在你想要使用该包的项目中，运行`npm link 包名`（即你的本地包的名称）。这会在项目的`node_modules`目录下创建一个指向你的本地包的符号链接。

这样，你就可以在项目中使用本地包了，就像使用其他 npm 包一样。
