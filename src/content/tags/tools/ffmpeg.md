---
name: ffmpeg
title: FFmpeg
icon: logos:ffmpeg-icon
description: FFmpeg 是一个功能强大且灵活的多媒体处理工具，广泛应用于音视频转换、处理和流式传输等任务。通过命令行接口，用户可以进行多种复杂的多媒体处理操作，满足各种需求。
---

## FFmpeg

:Icon{name=logos:ffmpeg .size-32}

FFmpeg 是一个开源的多媒体框架，可以用来记录、转换和流式传输音视频。它支持几乎所有的音视频格式，具有强大的功能和高度的灵活性，被广泛应用于各种多媒体处理任务。以下是对 FFmpeg 的一些关键特性和使用方法的介绍。

### 关键特性

1. **广泛的格式支持**：支持几乎所有已知的音视频格式。
2. **高效的编码和解码**：内置了许多高效的编码器和解码器。
3. **音视频处理**：支持剪辑、合并、过滤、调节等多种操作。
4. **多平台支持**：可以在多种操作系统上运行，包括 Windows、macOS、Linux 等。
5. **流式传输**：支持实时音视频流的传输和接收。

### 安装

可以通过多种方式安装 FFmpeg，具体取决于你的操作系统。以下是一些常见的安装方法：

#### 在 Windows 上安装

1. 下载 FFmpeg 的预编译二进制文件：
   - 从 [FFmpeg 官网](https://ffmpeg.org/download.html) 下载 Windows 版本的预编译包。
2. 解压下载的压缩包，并将 bin 目录添加到系统的 PATH 环境变量中。

#### 在 macOS 上安装

可以使用 Homebrew 来安装 FFmpeg：

```sh
brew install ffmpeg
```

#### 在 Linux 上安装

可以使用包管理器来安装 FFmpeg，例如在 Debian/Ubuntu 上：

```sh
sudo apt-get update
sudo apt-get install ffmpeg
```

### 基本用法

以下是一些常见的 FFmpeg 命令示例：

#### 转换视频格式

将一个视频文件从 MP4 格式转换为 AVI 格式：

```sh
ffmpeg -i input.mp4 output.avi
```

#### 提取音频

从视频文件中提取音频，并保存为 MP3 格式：

```sh
ffmpeg -i input.mp4 -q:a 0 -map a output.mp3
```

#### 视频剪辑

剪辑视频文件的前 30 秒：

```sh
ffmpeg -i input.mp4 -t 00:00:30 -c copy output.mp4
```

#### 合并视频文件

将多个视频文件合并为一个文件：

首先，创建一个文本文件，列出要合并的视频文件：

```
file 'part1.mp4'
file 'part2.mp4'
file 'part3.mp4'
```

然后使用以下命令进行合并：

```sh
ffmpeg -f concat -safe 0 -i filelist.txt -c copy output.mp4
```

#### 添加水印

在视频文件中添加水印：

```sh
ffmpeg -i input.mp4 -i watermark.png -filter_complex "overlay=10:10" output.mp4
```

#### 压缩视频

压缩视频以减少文件大小：

```sh
ffmpeg -i input.mp4 -vcodec libx265 -crf 28 output.mp4
```

### 总结

FFmpeg 是一个功能强大且灵活的多媒体处理工具，广泛应用于音视频转换、处理和流式传输等任务。通过命令行接口，用户可以进行多种复杂的多媒体处理操作，满足各种需求。
