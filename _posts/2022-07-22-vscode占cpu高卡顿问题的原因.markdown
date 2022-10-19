---
layout: post
title: vscode占cpu高卡顿问题的原因
categories: [blog]
tags: [vscode]
description: vscode占cpu高卡顿问题的原因
---

### 主流解决方案

最近使用 Vscode 总是特别卡顿，网上大部分的解决方案如下

> search.followSymlinksd: false （控制是否在搜索中跟踪符号链接）   
> git.enabled: false （是否启用Git）   
> git.autorefresh: false （是否启用自动刷新）

打开vscode设置–工作台–在settings.json中编辑

```json
{
  "search.followSymlinks": false,
  "files.exclude": {
      "**/.git": true,
      "**/.svn": true,
      "**/.hg": true,
      "**/CVS": true,
      "**/.DS_Store": true,
      "**/tmp": true,
      "**/node_modules": true,
      "**/bower_components": true,
      "**/dist": true
  },
  "files.watcherExclude": {
      "**/.git/objects/**": true,
      "**/.git/subtree-cache/**": true,
      "**/node_modules/**": true,
      "**/tmp/**": true,
      "**/bower_components/**": true,
      "**/dist/**": true
  }
}
```

> search.followSymlinks: false 控制是否在搜索中跟踪符号链接   
> `files.exclude` : 配置用于排除文件和文件夹的 glob 模式。例如，文件资源管理器根据此设置决定要显示或隐藏哪些文件和文件夹。   
> `files.watcherExclude` : 配置文件路径的 glob 模式以从文件监视排除。模式必须在绝对路径上匹配(例如 ** 前缀或完整路径需正确匹配)。更改此设置需要重启。如果在启动时遇到 Code 消耗大量 CPU 时间，则可以排除大型文件夹以减少初始加载。

### 插件问题

都设置后，还是会时不时卡顿，再去查看资源管理器，发现有一些插件也会导致 CPU 过高

按 `ctrl + shift + p` ，输入 `>developer: open process explorer` ，会打开一个任务管理器一样的窗口，查看里面cpu和内存占用最高的进程，然后一个个禁用你的扩展插件，直到cpu和内存占用正常，这样就可以找出耗内存的扩展然后按照你的开发需求更换或者禁用.


