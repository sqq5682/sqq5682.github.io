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

下面新建PlayerControl.ts是对操作的战机节点的绑定的script，这里引用了敌人管理脚本和子弹预制体，也设置战机碰撞体，

```js
import EnemyControl from "./EnemyControl";
import EnemyManager from "./EnemyManager";
 
const {ccclass, property} = cc._decorator;
 
@ccclass
export default class PlayerControl extends cc.Component {
    @property(cc.Prefab)
    bulletPre: cc.Prefab = null
    @property
    isDie: boolean = false
    start () {
        let size = this.node.getContentSize()
        let winSize = cc.winSize
        let minWidth = size.width/2
        let maxWidth = winSize.width - minWidth
        let maxHeight = winSize.height - minWidth
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event: any) => {
            let x = event.getLocationX() <= minWidth ? minWidth : event.getLocationX() >= maxWidth ? maxWidth : event.getLocationX()
            let y = event.getLocationY() <= minWidth ? minWidth : event.getLocationY() >= maxHeight ? maxHeight : event.getLocationY()
            if(!this.isDie) this.node.setPosition(x, y);
        })
        this.schedule(() => {
            let bullet = cc.instantiate(this.bulletPre)
            bullet.setParent(cc.director.getScene())
            bullet.x = this.node.x
            bullet.y = this.node.y + 60
        }, 0.5)
        cc.director.getCollisionManager().enabled = true
    }
    die() {
        this.isDie = true
        let PqClass = cc.find('enemyManager').getComponent(EnemyManager)
        PqClass.stopSch()
        cc.loader.loadRes('hero1_die', cc.SpriteFrame, (err, res) => {
            this.node.getComponent(cc.Sprite).spriteFrame = res
        })
        setTimeout(() => {
            this.node.destroy()
        }, 300)
    }
    onCollisionEnter(other) {
        if(other.tag == 1){
            other.getComponent(EnemyControl).die()
            this.die()
        }
    }
 
    update (dt) {
        
    }
}
 
```
EnemyControl.ts和EnemyManager.ts具体代码：
```js
// EnemyControl.ts
const {ccclass, property} = cc._decorator;
@ccclass
export default class EnemyControl extends cc.Component {
 
    @property
    isDie: boolean = false
 
    start () {
 
    }
    die() {
        this.isDie = true
        cc.loader.loadRes('enemy0_die', cc.SpriteFrame, (err, res) => {
            this.node.getComponent(cc.Sprite).spriteFrame = res
        })
        setTimeout(() => {
            this.node.destroy()
        }, 300)
    }
 
    update (dt) {
        if(!this.isDie) {
            this.node.y -= 300 * dt
        }
        if(this.node.y < -850){
            this.node.destroy()
        }
    }
}
```

```js
// EnemyManager.ts
const {ccclass, property} = cc._decorator;
 
@ccclass
export default class EnemyManager extends cc.Component {
 
    @property(cc.Prefab)
    enemyPre: cc.Prefab = null;
    @property
    run: boolean = true
    start () {
        this.schedule(() => {
            if(this.run) {
                let enemy = cc.instantiate(this.enemyPre)
                enemy.setParent(cc.director.getScene())
                enemy.y = this.node.y
                enemy.x = Math.random() * 400 + 20
            }
        }, 2)
    }
    stopSch() {
        this.run = false
    }
 
    // update (dt) {}
}
```

```js
// BulletControl.ts
import EnemyControl from "./EnemyControl";
 
const {ccclass, property} = cc._decorator;
 
@ccclass
export default class BulletControl extends cc.Component {
    @property
    speed: number = 800
    start () {
 
    }
 
    update (dt) {
        this.node.y += this.speed * dt
        if(this.node.y > 820) {
            this.node.destroy()
        }
    }
 
    onCollisionEnter(other) {
        if(other.tag == 1){
            other.getComponent(EnemyControl).die()
            this.node.destroy()
        }
    }
}
```

具体整体项目源码参考：[https://gitee.com/sq5682/cocos-plane](https://gitee.com/sq5682/cocos-plane)
