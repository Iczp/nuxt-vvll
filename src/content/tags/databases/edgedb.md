---
name: edgedb
title: EdgeDB
icon: file-icons:edge
description: EdgeDB 是一种新一代的图关系数据库，设计为关系数据库的精神继承者。 是一种现代的数据库管理系统，旨在解决传统关系型数据库和NoSQL数据库的一些局限性。它结合了关系数据库和图数据库的优点，提供了强大的数据建模能力和灵活的查询语言。
---


:Icon{name=Edgedb .size-32}

EdgeDB 是一种现代的数据库管理系统，旨在解决传统关系型数据库和NoSQL数据库的一些局限性。它结合了关系数据库和图数据库的优点，提供了强大的数据建模能力和灵活的查询语言。以下是对 EdgeDB 的详细介绍：

### EdgeDB 的主要特点

1. **基于图的关系模型**：
   EdgeDB 使用图模型来表示数据，但仍然保留了关系数据库的优势。这种方法允许更加自然和直观的数据建模，特别是对于复杂的、具有多层嵌套关系的数据结构。

2. **强类型系统**：
   EdgeDB 提供了强类型系统，这意味着数据类型在数据库模式中有严格的定义和验证。这有助于减少运行时错误并提高数据的一致性和可靠性。

3. **高级查询语言（EdgeQL）**：
   EdgeQL 是 EdgeDB 提供的高级查询语言，设计目标是比 SQL 更加易读和强大。EdgeQL 支持复杂的查询和数据操作，同时简化了多表关联、嵌套选择等操作。

4. **自动迁移**：
   EdgeDB 具备内置的迁移工具，能够自动生成数据库迁移脚本，帮助开发者轻松管理数据库模式的演变。

5. **内置权限管理**：
   EdgeDB 提供了细粒度的权限管理，可以基于用户角色设置不同的访问权限，增强了数据安全性。

6. **JSON 支持**：
   EdgeDB 原生支持 JSON 数据类型，允许开发者存储和查询 JSON 数据，同时保留关系型数据库的特性。

### 安装和使用

#### 安装 EdgeDB
EdgeDB 支持多种操作系统的安装，包括 macOS、Linux 和 Windows。可以通过以下命令进行安装：

```sh
# macOS or Linux
curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh

# Windows
iwr https://ps1.edgedb.com -useb | iex
```

#### 创建和管理数据库

安装完成后，可以通过命令行工具创建并管理 EdgeDB 数据库。

```sh
# 创建一个新的 EdgeDB 实例
edgedb project init

# 进入 EdgeDB 命令行界面
edgedb -I myproject
```

#### 定义模式

EdgeDB 使用 SDL（Schema Definition Language）来定义数据库模式。例如：

```sdl
module default {
  type User {
    required property name -> str;
    multi link friends -> User;
  }
}
```

上述定义表示一个 `User` 类型，其中包含一个必需的 `name` 属性和一个多值的 `friends` 链接，指向其他 `User` 实例。

#### 执行查询

可以使用 EdgeQL 进行数据查询和操作。例如，插入和查询数据：

```edgeql
# 插入数据
INSERT User {
  name := 'Alice'
};

# 查询数据
SELECT User {
  name,
  friends: {
    name
  }
};
```

### 应用场景

EdgeDB 适用于各种需要复杂数据建模和高效查询的应用场景，包括但不限于：

- **社交网络**：处理用户之间的关系和互动。
- **推荐系统**：基于用户行为和关系进行推荐。
- **知识图谱**：存储和查询复杂的知识数据。
- **内容管理系统**：管理多层次的内容结构。

### 总结

EdgeDB 通过结合关系型数据库和图数据库的优点，提供了一种现代、高效、灵活的数据库管理解决方案。它的强类型系统、高级查询语言 EdgeQL、自动迁移和内置权限管理等特性，使其在处理复杂数据结构和高效查询方面表现出色。对于需要高性能和复杂数据建模的应用场景，EdgeDB 是一个值得考虑的选择。