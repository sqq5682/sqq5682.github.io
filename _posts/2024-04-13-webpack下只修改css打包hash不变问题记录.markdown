---
layout: post
title: webpack下只修改css打包hash不变问题记录
categories: [blog]
tags: [webpack, css, mini-css-extract-plugin, extract-text-webpack-plugin]
description: webpack下只修改css打包hash不变问题记录
---

## webpack下只修改css打包hash不变问题记录

最近接触原有项目，发现只修改css文件吗，打包后hash值却没有发生变化，导致后续没有上传cdn，打开项目找到文件`webpack.base.conf.js`中

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [

            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: themeVariables
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: false
    }),
  ],
}
```

这里主要使用[ExtractTextPlugin](https://www.npmjs.com/package/extract-text-webpack-plugin)，该项目用的`webpack4.x`，把`chunkhash`修改成`contentHash`，但是报错:

```
Error: Path variable [contenthash] not implemented in this context: focus.index.[contenthash].css
```

后来看之前的项目以及查资料，才知道在webpack4.x下应该使用[mini-css-extract-plugin]()，这个在webpack4中代替extract-text-webpack-plugin，此插件是将 CSS 样式提取到单独的文件中。 它为每个包含 CSS 的 JS 文件创建一个 CSS 文件。即通过 JS 文件中import进来的样式文件。它支持CSS和SourceMaps的按需加载。建立在新的webpack v4功能（模块类型）之上，并且需要在webpack 4版本才能工作。

相比extract-text-webpack-plugin：

> 异步加载     
> 没有重复的编译（性能）    
> 更容易使用    
> 特定于CSS     

修改后的`webpack.base.conf.js`如下，打包完美解决。

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  url: false
              }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: themeVariables
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),
  ],
}
```