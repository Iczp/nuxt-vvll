---
title: 在.NET Core中使用 Pandoc 转换文档
icon:
tags: pandoc,net,netcore
description: Netcore Pandoc 是一个基于 .NET Core 平台的 Pandoc 封装库，它允许你在 .NET Core 应用程序中轻松地使用 Pandoc 功能。Pandoc 是一个强大的文档转换工具，可以将一种标记语言转换成另一种，比如将 Markdown 转换成 HTML、PDF、Word 等格式。
layout: article
---

Netcore Pandoc 是一个基于 .NET Core 平台的 Pandoc 封装库，它允许你在 .NET Core 应用程序中轻松地使用 Pandoc 功能。Pandoc 是一个强大的文档转换工具，可以将一种标记语言转换成另一种，比如将 Markdown 转换成 HTML、PDF、Word 等格式。

要开始使用 Netcore Pandoc，首先你需要在你的 .NET Core 项目中安装 Netcore Pandoc 包。你可以通过 NuGet 包管理器或者 .NET CLI 来安装它。

如果你使用 NuGet 包管理器，可以在 Visual Studio 中的 NuGet 包管理器控制台中执行以下命令来安装 Netcore Pandoc：

```sh
Install-Package Netcore.Pandoc
```

如果你使用 .NET CLI，可以在命令行中执行以下命令：

```sh
dotnet add package Netcore.Pandoc
```

安装完成后，你就可以在代码中引用 Netcore Pandoc，并使用它来执行各种文档转换任务。以下是一个简单的示例，演示了如何将 Markdown 转换成 HTML：

```csharp
using System;
using Netcore.Pandoc;

class Program
{
    static void Main(string[] args)
    {
        // 创建 Pandoc 实例
        var pandoc = new Pandoc();

        // Markdown 文本
        string markdownText = "# Hello, World!\nThis is a **Markdown** example.";

        // 转换成 HTML
        string htmlResult = pandoc.Convert(markdownText, OutputFormat.HTML);

        // 输出 HTML 结果
        Console.WriteLine(htmlResult);
    }
}
```

通过这种方式，你可以利用 Netcore Pandoc 在 .NET Core 应用程序中方便地进行文档转换操作。记得在实际应用中处理异常情况和错误输入。
