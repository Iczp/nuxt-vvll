---
name: hangfire
title: Hangfire
icon: Hangfire
description: Hangfire 是一个功能强大的后台任务管理工具，适用于各种 .NET 应用程序。它提供了丰富的任务调度和管理功能，支持任务的持久化存储和分布式执行，简化了后台任务的开发和维护工作。通过 Hangfire，开发人员可以轻松实现高效、可靠的后台任务处理，提高应用程序的性能和用户体验。
---


:Icon{name=Hangfire .size-32}

> https://www.hangfire.io/

Hangfire 是一个开源的 .NET 库，旨在简化和管理后台任务的执行。它允许开发人员轻松地将定时任务、延迟任务和持续运行的后台任务集成到他们的应用程序中，而无需编写复杂的代码。Hangfire 提供了强大的功能和易用的 API，使得任务调度和管理变得简单和高效。

### 主要特点和功能

1. **持久化任务存储**：
   Hangfire 支持将任务持久化存储在各种后端数据库中，如 SQL Server、PostgreSQL、MongoDB 和 Redis。这意味着即使应用程序重启或崩溃，任务也不会丢失，能够在恢复后继续执行。

2. **多种任务类型**：
   - **火即执行任务（Fire-and-forget job）**：立即执行一次的任务。
   - **延迟任务（Delayed job）**：在指定时间后执行的任务。
   - **定时任务（Recurring job）**：按计划周期性执行的任务。
   - **连续任务（Continuations）**：在另一个任务完成后执行的任务。

3. **自动重试机制**：
   任务失败时，Hangfire 会自动重试任务执行，确保任务最终完成。重试策略可以根据需要进行配置。

4. **分布式处理**：
   Hangfire 支持在多个服务器上分布式执行任务，利用多个工作节点共同处理任务队列，从而提高任务处理的并发性和可靠性。

5. **实时监控**：
   提供一个基于 Web 的仪表板，允许开发人员监控任务的执行状态、任务队列、任务历史记录和任务失败原因等。仪表板还支持重新排队和删除任务。

6. **简便的集成**：
   通过简单的 NuGet 包安装和配置，即可将 Hangfire 集成到现有的 .NET 应用程序中。其直观的 API 使得任务的定义和管理变得非常容易。

### 使用场景

1. **电子邮件通知**：
   在后台处理电子邮件发送任务，避免阻塞主线程，提高应用程序响应速度。

2. **数据处理和分析**：
   在后台执行数据处理、转换和分析任务，如批量数据导入、定期数据清理等。

3. **报告生成**：
   定期生成报表并将结果发送给用户或存储在系统中。

4. **定时任务**：
   例如，每天凌晨执行系统备份，定期发送提醒通知等。

5. **任务工作流**：
   组合多个任务形成复杂的工作流，每个任务依赖于前一个任务的完成。

### 简单示例

下面是一个简单的 ASP.NET Core 项目中集成 Hangfire 的示例：

1. **安装 Hangfire**：
   在项目中通过 NuGet 包管理器安装 Hangfire：
   ```bash
   Install-Package Hangfire
   ```

2. **配置 Hangfire**：
   在 `Startup.cs` 文件中进行配置：
   ```csharp
   public void ConfigureServices(IServiceCollection services)
   {
       // 配置 Hangfire 使用内存存储（仅用于开发和测试）
       services.AddHangfire(config => config.UseMemoryStorage());
       services.AddHangfireServer();
   }

   public void Configure(IApplicationBuilder app, IHostingEnvironment env)
   {
       app.UseHangfireDashboard(); // 启用 Hangfire 仪表板
       app.UseHangfireServer();    // 启用 Hangfire 服务器
   }
   ```

3. **定义任务**：
   在应用程序中定义一个简单的任务并进行调度：
   ```csharp
   public class EmailService
   {
       public void SendWelcomeEmail(string userEmail)
       {
           // 发送电子邮件的逻辑
           Console.WriteLine($"Sending welcome email to {userEmail}");
       }
   }

   public class HomeController : Controller
   {
       private readonly IBackgroundJobClient _backgroundJobs;

       public HomeController(IBackgroundJobClient backgroundJobs)
       {
           _backgroundJobs = backgroundJobs;
       }

       public IActionResult Index()
       {
           // 调度一个立即执行的任务
           _backgroundJobs.Enqueue<EmailService>(emailService => emailService.SendWelcomeEmail("user@example.com"));
           return View();
       }
   }
   ```

### 总结

Hangfire 是一个功能强大的后台任务管理工具，适用于各种 .NET 应用程序。它提供了丰富的任务调度和管理功能，支持任务的持久化存储和分布式执行，简化了后台任务的开发和维护工作。通过 Hangfire，开发人员可以轻松实现高效、可靠的后台任务处理，提高应用程序的性能和用户体验。