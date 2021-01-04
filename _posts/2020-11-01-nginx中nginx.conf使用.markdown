---
layout: post
title: nginx中nginx.conf使用
categories: [blog]
tags: [nginx]
description: nginx中nginx.conf使用
---

#### nginx域名配置

一般配置文件在/etc/nginx/nginx.conf文件中，如下

    server {
        listen       80;
        #配置域名
        server_name  xxxxxxx.com; 
        
        location / {
            #针对vue路由history下
            try_files $uri $uri/ /index.html; 
            #项目目录
            root   /root/web/; 
            index  index.html index.htm;
        }
        #prod-api是代理的路径
        location /api/{
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header REMOTE-HOST $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            ##后端服务的地址
            proxy_pass http://127.0.0.1:1080;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

#### nginx一些命令

    nginx 	#打开 nginx
    nginx -t   #测试配置文件是否有语法错误
    nginx -s reopen	 #重启Nginx
    nginx -s reload	 #重新加载Nginx配置文件，然后以优雅的方式重启Nginx
    nginx -s stop  #强制停止Nginx服务
    nginx -s quit  #优雅地停止Nginx服务（即处理完所有请求后再停止服务）
    kill -QUIT 主进程号  #从容停止Nginx  
    kill -TERM 主进程号  #快速停止Nginx  
    pkill -9 nginx  #强制停止Nginx


#### SSH自动登录config文件配置

一般登录服务器使用下面命令，输入密码登录，每次都很繁琐

> ssh root@127.0.0.1
> root@127.0.0.1's password: 

为了解决这个问题，可以使用ssh中的config配置文件

1.本地配置 ~/.ssh/config 文件

    Host HostId 
        HostName 127.0.0.1
        User root
        ServerAliveInterval 60
        PreferredAuthentications publickey
        IdentityFile ~/.ssh/id_rsa

~/.ssh/id_rsa 是本地的生成的秘钥，没有的话ssh-keygen -t rsa，然后一直回车就可以生成

2.拷贝公钥到服务器上

2.1 一种方法是直接用ssh-copy-id，会拷贝之前生成的公钥

    ssh-copy-id 别名

这里可以用别名的前提是之前已经配置好了。如果没有的话，就只有像ssh在配置前的操作一样。

2.2 另外一种方法是用scp进行拷贝，替换下面的username和hostname

    scp .ssh/id_rsa.pub username@hostname:~/.ssh/

然后将拷贝之后的id_rsa.pub内容添加到.ssh/authorized_keys里面（如果不存在，那么就创建一个）

    cat id_rsa.pub >> .ssh/authorized_keys

3.重启服务器的ssh服务

    nginx -s reload

操作完成后，直接ssh HostId 就可以直接连接了

