---
layout: post
title: cocos creator实现打飞机小游戏
categories: [blog]
tags: [cocos creator]
description: cocos creator实现打飞机小游戏
---

## cocos creator实现打飞机小游戏

这里跟着cocos creator视频教程做了一个打飞机的简单小游戏

![](../img/uploads/2023/6.png)

1.新建项目

在assets文件夹中，创建plane文件夹，在其下创建resources，用来存放，游戏的图片资源，再创建Script文件夹，用来放脚本信息，新建planeGame场景。

![](../img/uploads/2023/5.png)

2.背景制作

添加bg节点把背景图片素材，拖入bg节点，因为背景有循环效果，因此需要2个图片素材，这里命名background1和background2，新建脚本文件BgControl.ts,代码如下

```js
const {ccclass, property} = cc._decorator;
@ccclass
export default class BgControl extends cc.Component {

    start () {

    }

    update (dt) {
        for(let bgNode of this.node.children) {
            bgNode.y -= 50 * dt
            if(bgNode.y < -850) {
                bgNode.y += 850 * 2
            }
        }
    }
}

```

这里使用了声明周期函数update，每一帧都执行一个函数，这个脚本文件绑定到bg节点上，根据背景的高度，重复循环

(未完待更新)


