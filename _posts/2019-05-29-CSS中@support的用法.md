---
layout: post
title: CSS中@support的用法
categories: [blog ]
tags: [css ]
description: css中的support
---

CSS中的@support主要是用于检测浏览器是否支持CSS的某个属性，其实就是条件判断，如果支持某个属性，你可以写一套样式，如果不支持某个属性，你也可以提供另外一套样式作为替补。但是这里有一点需要注意的是：@support对于浏览器的版本也是有要求的，不是说所有的浏览器以及其所有的版本都是支持@support的。
下面就来说一下@support的用法：

1.基本语法是这样的：

    @support(prop:value){

    /*自己的样式*/

    }

    @supports (display: flex) { div { display: flex; }}

> 注释：如果浏览器支持display:flex属性的话，那么div的样式就是display:flex

2.逻辑操作符：“not” 的用法

    @supports not (display: flex) { div { float: right; }}

> 注释：如果浏览器不支持display:flex属性的话，那么div的样式就是display:right

3.逻辑操作符：“and”的用法

    @supports (display: flex) and ( box-shadow: 2px 2px 2px black ) {
        /*自己的样式*/
    }

> 注释：如果浏览器支持display:flex和box-shadow的属性，就执行里面自己的样式

4.逻辑操作符：“or” 的用法

    @supports (display: -webkit-flex) or (display: -moz-flex) or(display: flex) {
        /*自己的样式 */
    }

> 注释：如果浏览器支持其中一个就可以执行里面自己的样式

5.混用的例子

“or”和“and”混用，在@supports中“or”和“and”混用时，必须使用括号（）来区分其优先级

    @supports ((transition-property: color) or (animation-name: foo)) and (transform: rotate(10deg)) {
        /*自己的样式 */
    }
    @supports (transition-property: color) or ((animation-name: foo) and (transform: rotate(10deg))) {
            /*自己的样式 */
    }

“or”、“and” 和 “not” 混用

    @supports (display: grid) and (not (transition-property: color) or (animation-name: foo)){
    /*自己的样式 */
    }






