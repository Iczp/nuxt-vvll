---
name: nginx
title: Nginx
icon: logos:nginx
description: Nginx 是一个高性能的开源的HTTP和反向代理服务器，以及一个邮件代理服务器。它最初由俄罗斯的程序员Igor Sysoev开发，并于2004年首次公开发布。Nginx因其稳定性、丰富的功能集、简单的配置和低资源消耗而广受欢迎，成为许多网站和互联网应用的首选服务器软件之一。
---

## Nginx

:Icon{name=devicon:nginx .size-32}

**Nginx**（发音为"engine-x"）是一个高性能的开源的 HTTP 和反向代理服务器，以及一个邮件代理服务器。它最初由俄罗斯的程序员 Igor Sysoev 开发，并于 2004 年首次公开发布。Nginx 因其稳定性、丰富的功能集、简单的配置和低资源消耗而广受欢迎，成为许多网站和互联网应用的首选服务器软件之一。

### 主要特点和功能

1. **高性能**：Nginx 以其出色的性能著称，能够处理大量并发连接，高效地分发网络流量，适用于高负载的网站和应用。

2. **反向代理**：作为反向代理服务器，Nginx 可以将客户端请求转发到多个后端服务器，实现负载均衡和高可用性。

3. **HTTP 服务器**：Nginx 可以作为静态内容的 HTTP 服务器，处理静态文件的请求，并支持虚拟主机配置、URL 重写等功能。

4. **反向代理缓存**：支持反向代理缓存，可以缓存后端服务器的响应，加速对常见请求的处理，减轻后端服务器的负载。

5. **SSL/TLS 支持**：Nginx 可以作为 HTTPS 服务器提供安全的加密连接，并支持 SSL/TLS 协议的配置和优化。

6. **动态模块**：支持动态模块加载，可以通过第三方模块扩展功能，如 Lua 脚本处理、HTTP/2 支持等。

7. **日志记录**：支持详细的访问日志记录，可以记录客户端请求的各种信息，便于分析和监控。

8. **虚拟主机支持**：可以配置多个虚拟主机，使得同一台服务器可以托管多个不同域名的网站。

9. **邮件代理**：除了 HTTP 服务器功能，Nginx 还可以作为邮件代理服务器（IMAP/POP3/SMTP 代理）处理邮件服务。

### 应用场景

- **Web 服务器**：用作 HTTP 服务器，提供静态文件服务、动态内容代理和负载均衡。
- **反向代理**：将客户端请求转发到多个后端服务器，实现负载均衡和高可用性。
- **缓存服务器**：作为反向代理缓存，加速对静态内容和动态内容的访问。
- **负载均衡**：分发请求到多个服务器，提高整体系统的性能和可靠性。
- **安全代理**：作为 HTTPS 服务器提供安全的加密连接，保护数据传输的安全性。
- **媒体流服务器**：处理和分发音视频内容，支持 RTMP 和 HTTP 流媒体服务。

### 总结

Nginx 是一个功能强大、高性能的开源服务器软件，适用于处理高流量的网站和应用，同时具备反向代理、负载均衡、缓存、安全代理等多种功能。其简单的配置语法和低资源消耗使得它成为许多开发者和运维人员的首选，特别适用于构建高性能和可扩展的网络服务。
