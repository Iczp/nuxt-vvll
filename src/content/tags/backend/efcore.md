---
name: efcore
title: Entity Framework Core
icon: Efcore
description: Entity Framework Core(简称EF Core)是一个功能强大且易于使用的ORM框架，它简化了.NET开发者与关系型数据库的交互过程，提高了开发效率和代码质量。如需更多信息，建议查阅微软官方文档或相关教程。
---

## Entity Framework Core

:Icon{name=Efcore .size-32}



Entity Framework Core（简称EF Core）是一个现代的、跨平台的、开源的对象关系映射（ORM）框架，由微软开发。它允许.NET开发者通过.NET对象与关系型数据库进行交互，而无需编写大部分的数据访问代码。EF Core通过对象关系映射减少了数据访问代码的编写，使得开发者可以更加专注于业务逻辑。

:Icon{name=EntityFramework .size-32}

EF Core支持数据库的迁移，允许开发者通过代码来管理数据库的版本和结构变化。它还支持将LINQ查询自动转换为SQL命令，使得数据访问更加直观和简单。此外，EF Core具有模型级查询过滤器和数据库上下文池等特性，可以提高查询的效率和性能。

EF Core的使用一般需要以下步骤：首先，使用NuGet包管理器安装适用于项目的EF Core包；其次，创建数据库上下文类，该类是EF Core的入口点，用于连接到数据库并管理实体（数据库表的映射对象）；最后，根据需要配置数据库连接字符串和映射的实体。

总之，Entity Framework Core是一个功能强大且易于使用的ORM框架，它简化了.NET开发者与关系型数据库的交互过程，提高了开发效率和代码质量。如需更多信息，建议查阅微软官方文档或相关教程。