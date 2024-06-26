---
name: pandoc
title: Pandoc
icon: icon-park-solid:transform
description: Pandoc 是一个非常强大的工具，适用于需要在各种文档格式之间进行转换的用户。它支持丰富的输入和输出格式，并且提供了强大的自定义功能和扩展能力。无论是用于简单的文档转换还是复杂的文档生成流程，Pandoc 都是一个非常有用的工具。
---

Pandoc 是一个开源的文档转换工具，被广泛认为是最强大的文档转换工具之一。它支持多种文档格式之间的转换，使得用户可以轻松地在不同的文档格式之间进行转换。Pandoc 是用 Haskell 语言编写的，并且可以在多种操作系统上运行，包括 Windows、macOS 和 Linux。

### 主要特点

1. **多格式支持**：

   - **输入格式**：Markdown、LaTeX、HTML、DOCX、ODT、EPUB 等。
   - **输出格式**：PDF、HTML、DOCX、ODT、EPUB、LaTeX、Markdown 等。

2. **强大的 Markdown 支持**：Pandoc 支持多种 Markdown 扩展，并且可以处理复杂的文档结构，如表格、脚注、内联代码块等。

3. **模板系统**：Pandoc 提供了一套模板系统，用户可以自定义输出格式的样式。例如，可以通过自定义 LaTeX 模板来生成具有特定格式的 PDF 文档。

4. **过滤器**：Pandoc 支持使用 Lua 脚本编写过滤器，允许用户在转换过程中对文档进行额外的处理和修改。

5. **跨平台**：Pandoc 可以在 Windows、macOS 和 Linux 上运行，并且可以通过命令行接口进行调用。

### 安装 Pandoc

你可以通过多种方式安装 Pandoc：

- **使用包管理器**（例如 Homebrew、apt-get、chocolatey）：

  - 在 macOS 上使用 Homebrew：
    ```sh
    brew install pandoc
    ```
  - 在 Ubuntu 上使用 apt-get：
    ```sh
    sudo apt-get install pandoc
    ```
  - 在 Windows 上使用 chocolatey：
    ```sh
    choco install pandoc
    ```

- **从官方发布页面下载**：你可以从 Pandoc 的 [官方发布页面](https://github.com/jgm/pandoc/releases) 下载适用于你的操作系统的预编译二进制文件。

### 使用 Pandoc

Pandoc 的基本使用方法是通过命令行接口。以下是一些常见的使用示例：

1. **将 Markdown 转换为 HTML**：

   ```sh
   pandoc input.md -o output.html
   ```

2. **将 Markdown 转换为 PDF**：

   ```sh
   pandoc input.md -o output.pdf
   ```

3. **将 DOCX 转换为 Markdown**：

   ```sh
   pandoc input.docx -o output.md
   ```

4. **使用自定义模板生成 PDF**：

   ```sh
   pandoc input.md -o output.pdf --template=mytemplate.tex
   ```

5. **使用过滤器进行额外处理**：
   ```sh
   pandoc input.md -o output.html --filter ./myfilter.lua
   ```

### 示例

以下是一个简单的示例，展示如何将 Markdown 文档转换为 HTML：

1. 创建一个 Markdown 文件 `input.md`，内容如下：

   ```markdown
   # Hello, Pandoc!

   This is a sample Markdown document.

   - Item 1
   - Item 2
   - Item 3
   ```

2. 使用 Pandoc 将其转换为 HTML：
   ```sh
   pandoc input.md -o output.html
   ```

生成的 `output.html` 文件将包含转换后的 HTML 内容。

### 结论

Pandoc 是一个非常强大的工具，适用于需要在各种文档格式之间进行转换的用户。它支持丰富的输入和输出格式，并且提供了强大的自定义功能和扩展能力。无论是用于简单的文档转换还是复杂的文档生成流程，Pandoc 都是一个非常有用的工具。
