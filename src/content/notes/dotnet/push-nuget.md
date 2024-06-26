---
title: 在.NET Core中发布包到NuGet主要包含以下步骤
icon:
tags: netcore,nuget
description: 在.NET Core中发布包到NuGet主要包含以下步骤
layout: article
---

# 在.NET Core 中发布包到 NuGet 主要包含以下步骤：

## 一、准备工作

1. 在 NuGet 官方注册一个账号，或者直接使用微软账号登录。

## 二、创建项目并生成 NuGet 包

1. 创建一个类库项目。这通常是一个.NET Standard 或.NET Core 类库，确保项目的兼容性。
2. 编写代码。实现你想要在 NuGet 包中提供的功能。
3. 配置 NuGet 包信息。在项目文件中（通常是.csproj），你需要设置一些 NuGet 包的元数据，如包 ID、版本、作者、描述等。这些可以在`<PropertyGroup>`标签内设置，例如：

```xml [xxxx.csproj]
xml查看变更采纳复制新建文件<PropertyGroup>
  <PackageId>YourPackageName</PackageId>
  <Version>1.0.0</Version>
  <Authors>Your Name</Authors>
  <Company>Your Company</Company>
  <Product>Your Product Name</Product>
  <Description>Description of your package</Description>
  <PackageReleaseNotes>Release notes for your package</PackageReleaseNotes>
  <PackageTags>Tags for your package</PackageTags>
  <RepositoryUrl>URL to your repository</RepositoryUrl>
  <RepositoryType>Git</RepositoryType>
</PropertyGroup>
```

1. 生成 NuGet 包。在命令行中使用`dotnet pack`命令来生成 NuGet 包。确保你在项目的根目录下运行此命令。这将生成一个.nupkg 文件，这就是你的 NuGet 包。

## 三、上传发布到 NuGet

##

1. 上传 NuGet 包。使用 NuGet 的命令行工具`nuget push`或者通过 NuGet 的官方网站来上传你的.nupkg 文件。如果你使用命令行工具，需要确保你已经安装了 NuGet CLI，并且已经登录到你的 NuGet 账号。

```
nuget push YourPackageName.1.0.0.nupkg -Source https://api.nuget.org/v3/index.json -ApiKey YourApiKey
```

其中，`YourPackageName.1.0.0.nupkg`是你的 NuGet 包文件名，`https://api.nuget.org/v3/index.json`是 NuGet 的官方推送源，`YourApiKey`是你在 NuGet 账号中生成的 API 密钥。

1. 等待后台处理。上传完成后，NuGet 会进行后台处理，包括验证包的有效性、扫描病毒等。处理完成后，你的包就会显示在 NuGet 的包列表中。
2. 在 NuGet 或 Visual Studio 中查看和引用。你的包发布后，其他开发者就可以在 NuGet 官方网站搜索到你的包，并在他们的项目中进行引用。同时，在 Visual Studio 的 NuGet 包管理器中也可以搜索和安装你的包。

## 四、参考
