---
layout: post
title: vue3+vite2添加eslint出现问题
categories: [blog]
tags: [vue3, vite2, eslint]
description: vue3+vite2添加eslint出现问题
---

vue3+vite2添加eslint出现问题，如下

1.error Parsing error: ‘＞‘ expected  
原因默认情况下，ESLint 使用Espree作为其解析器。要指示 npm 模块用作您的解析器，请使用文件中的parser选项指定它.eslintrc。
.eslintrc配置内容

```json
{
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
}
```

2.【vue eslint】报错`Component name “xxxxx“ should always be multi-word.eslintvue`解决方案   
原因：新手在组件命名的时候不够规范，根据官方风格指南，除了根组件（App.vue）外，自定义组件名称应该由多单词组成，防止和html标签冲突。而最新的vue-cli创建的项目使用了最新的vue/cli-plugin-eslint插件，在vue/cli-plugin-eslint v7.20.0版本之后就引用了vue/multi-word-component-names规则，所以在编译的时候判定此次错误。  
.eslintrc配置内容

```js
{
  "rules": {
    "vue/multi-word-component-names":"off",
  }
}
```

3.script setup 中 `defineProps is not undefined`  
.eslintrc.js文件添加

```js
{
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true // 
  },
}
```

4.script setup 中 `defineOptions is not undefined`  
(1).下载插件`npm i unplugin-vue-define-options -D`我们直接来看一下这个插件的使用方式:   
(2).在vite中使用

```js
// vite.config.ts
import DefineOptions from 'unplugin-vue-define-options/vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue(), DefineOptions()],
})
```

(3).ts项目需要在tsconfig.json中添加一个配置     

```js
{
  "compilerOptions": {
    "types": ["unplugin-vue-define-options"]
  }
}
```

(4).使用方式

```html
<script setup lang="ts">
  defineOptions({
    name: 'App'
  })
</script>
```


