---
name: pnpm
title: Pnpm
icon: logos:pnpm
description: Pnpm是一种快速、高效且磁盘空间友好的包管理工具。它通过共享依赖来减少磁盘空间占用，并通过硬链接来加快安装速度。

---

Pnpm是一种快速、高效且磁盘空间友好的包管理工具。它通过共享依赖来减少磁盘空间占用，并通过硬链接来加快安装速度。其特点主要包括：

1. **速度快**：使用硬链接技术将依赖包直接链接到项目中，避免了复制文件所带来的性能损耗，同时也支持并行安装多个依赖包，从而大大提高了安装速度。
2. **节约磁盘空间**：由于共享依赖，不同项目之间可以共享相同版本的依赖包，大大减少了磁盘空间占用。
3. **安全可靠**：使用了类似于npm的安全机制，确保依赖包的完整性和安全性。
4. **易于使用**：提供了简洁的安装、卸载和使用文档，方便用户快速上手。
