---
name: regex
title: Regex
icon: skill-icons:regex-light
description: Regex,全称Regular Expression，中文称为正则表达式，是一种文本模式
---

## Regex

:Icon{name=arcticons:regex .size-32}

Regex，全称 Regular Expression，中文称为正则表达式，是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为“元字符”）。它是计算机科学的一个概念，用于对字符串操作的一种逻辑公式，即用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑。

正则表达式使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。正则表达式在文本处理中发挥着重要的作用，包括模式匹配、数据验证、文本提取等多种任务。例如，它可以用于搜索文本中的特定模式，如电子邮件地址、URL、电话号码或日期；也可以用于验证输入数据，确保用户的输入遵循特定格式；还可以用于从文本中提取特定信息，如从字符串中提取所有数字或解析 CSV 文件等结构化数据。

正则表达式在不同的编程语言中有着不同的实现方式，但基本上都支持各种元字符和修饰符来创建复杂的模式匹配规则。通过学习和掌握正则表达式的语法和用法，可以大大提高文本处理的效率和准确性。

请注意，正则表达式的具体语法和用法可能因编程语言和上下文的不同而有所差异。因此，在使用正则表达式时，建议查阅相关编程语言的文档或参考资源，以了解具体的语法规则和用法示例。

下面分别展示了如何在 C#、JavaScript 和 Dart 中使用正则表达式（Regex）进行字符串匹配和替换的示例代码。

::CodeTab{csharp=C# ts=Typescript dart=Dart ts-icon='vscode-icons:file-type-typescript'}

#csharp

### C#

在 C# 中，正则表达式通过 `System.Text.RegularExpressions` 命名空间中的 `Regex` 类来使用。

```csharp
using System;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        string input = "Hello, World!";
        string pattern = @"\bWorld\b";

        // 创建 Regex 对象
        Regex regex = new Regex(pattern);

        // 检查是否匹配
        bool isMatch = regex.IsMatch(input);
        Console.WriteLine($"Is match: {isMatch}");

        // 查找匹配项
        Match match = regex.Match(input);
        if (match.Success)
        {
            Console.WriteLine($"Matched value: {match.Value}");
        }

        // 替换匹配项
        string result = regex.Replace(input, "Universe");
        Console.WriteLine($"Replaced string: {result}");
    }
}
```

#ts

### JavaScript

在 JavaScript 中，正则表达式通过 `RegExp` 对象或直接使用正则表达式字面量来使用。

```javascript
const input = 'Hello, World!';
const pattern = /\bWorld\b/;

// 检查是否匹配
const isMatch = pattern.test(input);
console.log(`Is match: ${isMatch}`);

// 查找匹配项
const match = input.match(pattern);
if (match) {
  console.log(`Matched value: ${match[0]}`);
}

// 替换匹配项
const result = input.replace(pattern, 'Universe');
console.log(`Replaced string: ${result}`);
```

#dart

### Dart

在 Dart 中，正则表达式通过 `RegExp` 类来使用。

```dart
void main() {
  String input = "Hello, World!";
  String pattern = r'\bWorld\b';

  // 创建 RegExp 对象
  RegExp regex = RegExp(pattern);

  // 检查是否匹配
  bool isMatch = regex.hasMatch(input);
  print('Is match: $isMatch');

  // 查找匹配项
  Match match = regex.firstMatch(input);
  if (match != null) {
    print('Matched value: ${match.group(0)}');
  }

  // 替换匹配项
  String result = input.replaceAll(regex, 'Universe');
  print('Replaced string: $result');
}
```

::

这三个例子展示了如何在不同的编程语言中使用正则表达式来检查字符串匹配、查找匹配项以及进行替换操作。
