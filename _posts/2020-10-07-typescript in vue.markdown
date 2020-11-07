---
layout: post
title: Vue中TypeScript实践
categories: [blog]
tags: [vue,TypeScript]
description: Vue中TypeScript实践
---


### TypeScript有什么用

> 类型检查、直接编译到原生js、引入新的语法糖

### 为什么用ts？

> TypeScript的设计目的应该是解决JavaScript的“痛点”：弱类型和没有命名空间，导致很难模块化，不适合开发大型程序。另外它还提供了一些语法糖来帮助大家更方便地实践面向对象的编程。

typescript不仅可以约束我们的编码习惯，还能起到注释的作用，当我们看到一函数后我们立马就能知道这个函数的用法，需要传什么值，返回值是什么类型一目了然，对大型项目的维护性有很大的提升。也不至于使开发者搬起石头砸自己的脚。

我们为什么选择TypeScript?

TypeScript 里优秀的工具

TypeScript 是 JavaScript 的超集

TypeScript 使得抽象清晰可见

TypeScript 使代码更容易阅读和理解

### 在vue项目中应用ts？

1、首先安装ts

> npm install --save-dev typescript npm install --save-dev ts-loader

2、在根目录建tsconfig.json文件

    {
        "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "lib": ["dom","es2016"],
        "target": "es5"
        },
        "include": ["./src/**/*"]  
    }

3、在配置中添加 ts-loader

    {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
        appendTsSuffixTo: [/\.vue$/],
        }
    }

4、最后把 .ts 后缀添加上就OK了，在webpack.base.conf.js文件下



现在就可以在我们原本的项目中使用ts文件了。




