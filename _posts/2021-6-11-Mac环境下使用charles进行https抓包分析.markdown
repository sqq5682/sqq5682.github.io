---
layout: post
title: Mac环境下使用charles进行https抓包分析
categories: [blog]
tags: [charles]
description: Mac环境下使用charles进行https抓包分析
---

### 配置Charles软件

1.打开Charles软件，找到Proxy菜单后打开Proxy Settings配置项，勾选图示中的相关选项

设置https端口443支持 >Proxy>SSL Proxying>设置 add * 443

![](../img/uploads/2021/01/1.png)

2.找到Help菜单栏中的SSL Proxying，选择Install Charles Root Certificate,按照提示完成证书的安装工作

![](../img/uploads/2021/01/2.png)

3.刚安装之后的证书，是不被系统信任的，将其改成系统信任方式：右键选中Charles证书文件，点击“显示简介”，将信任设置改为“始终信任”模式即可(如果mac下没有权限添加，先Save Charles Root certificate到本地，钥匙串访问里面添加本地文件)

![](../img/uploads/2021/01/3.png)

4.手机端安装证书，在Help>SSL Proxying>Install Charles Root Certificate on a Mobile Device or Remote Browser 点击

```
Configure your device to use cHarles as its Http proxy on x.x.x.x: 8888, then browse to chls pro/ssl to download and install the certificate
```
![](../img/uploads/2021/01/4.png)

在ios手机上的safari浏览器，访问https://chls.pro/ssl 并回车，安装信任证书，在关于本机>可信任证书 处于打开状态在手机和mac处于一个局域网，设置手机的手动代理，mac的ip地址以及端口8888
![](../img/uploads/2021/01/5.png)
![](../img/uploads/2021/01/6.png)
![](../img/uploads/2021/01/7.png)










