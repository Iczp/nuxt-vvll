---
name: nuget
title: Nuget
icon: devicon:nuget
description: NuGet 是一个自由开源的软件包管理系统，是一个功能强大且灵活的包管理工具，可以大大简化.NET开发人员在项目中的库管理任务，提高开发效率。
---

## NuGet

:Icon{name=devicon:nuget-wordmark .size-32}

NuGet 是一个自由开源的软件包管理系统，专为 Microsoft 开发平台设计。它最初被称为 NuPack，作为 Visual Studio 的扩展，能够简化在 Visual Studio 项目中添加、更新和删除库（以程序包的形式部署）的操作。NuGet 包是打包成单个 ZIP 文件的，使用开放打包约定（OPC）格式，包含编译代码（Dll）、与该代码相关的其他文件以及描述性清单（包含包版本号等信息）。

NuGet 不仅是一个包管理平台，更确切地说，它是.NET 平台的包管理工具。它提供了一系列客户端用于生成、上传和使用包，并拥有一个用于存储所有包的中心库——NuGet Gallery。如果有需要，也可以搭建自己的私有 NuGet 库。NuGet 的实现均为开源项目，包括了客户端工具、服务器、官方网站，以及各语言的文档等。

NuGet 作为 Visual Studio 的扩展，能够方便地合并第三方的组件库，使开发人员能够分享自己开发的工具或库。当需要分享时，开发人员只需建立一个 NuGet 包，并将其放到 NuGet 的站点上。这使得 NuGet 能够更方便地将一些 dll 和文件（如 jquery）添加到项目中，而无需从文件中复制粘贴。

NuGet 还支持在云中（如在 Azure DevOps 上）、在私有网络中或者甚至直接在本地文件系统以私密方式托管包。它支持公用 nuget.org 主机旁边的专用主机，因此，开发人员可以使用 NuGet 包来共享组织或工作组专用的代码。

总的来说，NuGet 是一个功能强大且灵活的包管理工具，可以大大简化.NET 开发人员在项目中的库管理任务，提高开发效率。
