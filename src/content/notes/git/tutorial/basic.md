---
title: Git 版本控制
description: Git 版本控制 常用命令
tags: git
icon: skill-icons:git
---

## Git 版本控制

Git 是一个分布式版本控制系统，可以帮助开发者管理代码的版本。以下是一个基本的 Git 教程，涵盖常见的命令和使用场景。

### 安装 Git

1. **Windows**: 可以从 [Git for Windows](https://gitforwindows.org/) 下载并安装。
2. **macOS**: 可以使用 Homebrew 安装：
   ```sh
   brew install git
   ```
3. **Linux**: 使用包管理器安装，例如在 Ubuntu 上：
   ```sh
   sudo apt-get install git
   ```

### 基本配置

安装完成后，进行一些基本的配置：

```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 创建新的仓库

1. **初始化一个新的 Git 仓库**：
   ```sh
   git init
   ```
2. **克隆一个现有的仓库**：
   ```sh
   git clone https://github.com/user/repository.git
   ```

### 基本操作

1. **查看仓库状态**：

   ```sh
   git status
   ```

2. **添加文件到暂存区**：

   ```sh
   git add filename
   ```

   添加所有文件：

   ```sh
   git add .
   ```

3. **提交更改**：

   ```sh
   git commit -m "Commit message"
   ```

4. **查看提交历史**：
   ```sh
   git log
   ```

### 分支操作

1. **创建新分支**：

   ```sh
   git branch new-branch
   ```

2. **切换分支**：

   ```sh
   git checkout new-branch
   ```

3. **合并分支**：
   首先切换到目标分支（例如 `main`），然后执行：

   ```sh
   git merge new-branch
   ```

4. **删除分支**：
   ```sh
   git branch -d new-branch
   ```

### 远程操作

1. **查看远程仓库**：

   ```sh
   git remote -v
   ```

2. **添加远程仓库**：

   ```sh
   git remote add origin https://github.com/user/repository.git
   ```

3. **推送到远程仓库**：

   ```sh
   git push origin branch-name
   ```

   第一次推送 `main` 分支：

   ```sh
   git push -u origin main
   ```

4. **从远程仓库拉取更新**：
   ```sh
   git pull origin branch-name
   ```

### 常见操作示例

1. **创建一个新的仓库并推送到 GitHub**：

   ```sh
   mkdir new-repo
   cd new-repo
   git init
   echo "# New Repo" >> README.md
   git add README.md
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/user/new-repo.git
   git push -u origin main
   ```

2. **从 GitHub 克隆一个仓库并创建新分支**：
   ```sh
   git clone https://github.com/user/repository.git
   cd repository
   git checkout -b new-feature
   echo "Some changes" >> file.txt
   git add file.txt
   git commit -m "Add new feature"
   git push origin new-feature
   ```

这些基本操作和命令应该可以帮助你开始使用 Git。如果需要更详细的信息，可以参考 [Pro Git 书](https://git-scm.com/book/zh/v2) 或 Git 官方文档。
