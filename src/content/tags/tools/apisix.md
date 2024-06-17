---
name: apisix
title: Apache APISIX
# icon: #
description: Apache APISIX 是一个开源、高性能的 API 网关和微服务管理平台，旨在处理 API 请求的路由、认证、负载均衡、限流、监控等功能。它支持动态配置，能够满足高并发、高可用性的场景需求。
---


:Icon{name=simple-icons:n8n .size-32}

Apache APISIX 是一个开源、高性能的 API 网关和微服务管理平台，旨在处理 API 请求的路由、认证、负载均衡、限流、监控等功能。它支持动态配置，能够满足高并发、高可用性的场景需求。以下是对 APISIX 的详细介绍：

### APISIX 的主要特点

1. **高性能**：
   APISIX 基于 NGINX 和 LuaJIT 构建，能够提供高吞吐量和低延迟的 API 请求处理能力。其性能在众多 API 网关解决方案中表现优异。

2. **动态配置**：
   APISIX 支持热更新配置，无需重启服务即可对路由、插件等进行动态修改。这使得系统更加灵活，能够快速响应业务需求的变化。

3. **丰富的插件系统**：
   APISIX 提供了丰富的插件，可以实现认证、限流、日志、监控、缓存、变更请求和响应等功能。用户还可以根据需求开发自定义插件。

4. **多协议支持**：
   除了常见的 HTTP/HTTPS 协议，APISIX 还支持 TCP、UDP、gRPC、WebSocket 等协议，适用于多种应用场景。

5. **强大的路由机制**：
   APISIX 支持多种路由匹配方式，包括精确匹配、前缀匹配、正则匹配、条件匹配等，能够灵活定义流量转发规则。

6. **可扩展性**：
   通过插件机制和 Lua 脚本，APISIX 具备极高的可扩展性。开发者可以轻松扩展功能以满足特定业务需求。

7. **原生支持服务发现**：
   APISIX 支持与多种服务发现系统集成，如 Nacos、Consul、Eureka、Kubernetes 等，实现服务的自动注册和发现。

8. **监控和可观测性**：
   APISIX 集成了 Prometheus、SkyWalking 等监控工具，提供丰富的监控指标和可观测性，帮助用户及时了解系统状态和性能瓶颈。

### 安装和使用

#### 安装 APISIX

APISIX 支持多种安装方式，包括源码安装、Docker 安装和使用 Kubernetes Helm Chart 安装。以下是使用 Docker 安装的示例：

```sh
# 拉取 APISIX 和 etcd 的 Docker 镜像
docker pull apache/apisix
docker pull bitnami/etcd

# 启动 etcd
docker run -d --name etcd \
  -p 2379:2379 \
  -p 2380:2380 \
  bitnami/etcd

# 启动 APISIX
docker run -d --name apisix \
  -p 9080:9080 \
  -p 9443:9443 \
  -p 2379:2379 \
  -v /path/to/apisix/config:/usr/local/apisix/conf \
  apache/apisix
```

#### 配置和管理 APISIX

APISIX 提供了 Dashboard 和 Admin API 两种管理方式。以下是通过 Admin API 配置路由和插件的示例：

```sh
# 创建一个新的路由，匹配 /hello 请求，并转发到上游服务
curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -X PUT -d '
{
  "uri": "/hello",
  "upstream": {
    "type": "roundrobin",
    "nodes": {
      "httpbin.org:80": 1
    }
  }
}'

# 启用限速插件
curl -i http://127.0.0.1:9080/apisix/admin/plugins/limit-req -X PUT -d '
{
  "rate": 1,
  "burst": 2,
  "rejected_code": 503
}'
```

#### 使用 Dashboard

APISIX Dashboard 是一个基于 Web 的图形界面，用户可以通过该界面方便地进行配置管理。

```sh
# 拉取 APISIX Dashboard 镜像
docker pull apache/apisix-dashboard

# 启动 APISIX Dashboard
docker run -d --name apisix-dashboard \
  -p 9000:9000 \
  -v /path/to/apisix-dashboard/config:/usr/local/apisix-dashboard/conf \
  apache/apisix-dashboard
```

### 应用场景

APISIX 适用于多种应用场景，包括但不限于：

- **微服务架构**：在微服务架构中充当 API 网关，管理和路由内部和外部的 API 请求。
- **安全和认证**：通过插件实现 API 的认证和授权，保护后端服务的安全。
- **流量控制**：对 API 请求进行限流、熔断等流量控制，保障服务稳定性。
- **数据缓存**：缓存频繁访问的 API 响应，减少后端服务负载，提高响应速度。
- **日志和监控**：集成日志和监控系统，实时监控 API 的使用情况和性能。

### 总结

Apache APISIX 是一个功能强大、性能优越的 API 网关，提供了丰富的功能和灵活的扩展性。它能够帮助企业高效地管理和监控 API 请求，确保服务的高可用性和安全性。通过其动态配置、插件系统和多协议支持，APISIX 可以适应各种复杂的应用场景，是一个值得考虑的 API 管理解决方案。