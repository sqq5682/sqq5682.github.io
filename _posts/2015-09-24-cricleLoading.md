---
layout: post
title: css3 圆形加载进度条实例
categories: [blog ]
tags: [Tool, ]
description: css3 圆形加载进度条实例
---

    <!doctype html>
    <html>
    <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
    <title>圆心加载进度条</title>
    <style type="text/css">
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,
    button,textarea,select,p,blockquote,th,td,img,a,span{margin:0; padding:0;}
    table{border-collapse:collapse;}
    fieldset,img{border:0;}
    a{ outline:none; color:#333;}
    a:link,a:visited{text-decoration:none;}
    a:hover{text-decoration:none;background-clip: contain}
    a,img{border:none;}
    input,textarea{outline:none; resize:none;}
    button,input,textarea,select,optgroup,option,file{font-family:inherit; font-size:inherit; font-style:inherit; font-weight:inherit; outline:none;}
    input[type=text], input[type=password], input[type=tel], textarea { -webkit-appearance: none; -moz-appearance: none; appearance:none; outline:none;}
    body{background:#666;}
    .circleProgress_wrapper{width:252px;height: 252px;position: relative;margin:20px auto;border:4px solid #fff;border-radius:50%;}
    .wrapper{width:130px;height:260px;position: absolute;top:-4px;overflow: hidden;}
    .right{right:-4px;}
    .left{left:-4px;}
    .circleProgress{width:252px;height:252px;border:4px solid transparent;-webkit-transform:rotate(45deg);position: absolute;top:0;border-radius:50%;}
    .rightcircle{right:0;border-top:4px solid #333;border-right:4px solid #333;}
    .leftcircle{left:0;border-bottom:4px solid #333;border-left:4px solid #333;}
    </style>
    </head>
    <body>
    <div class="circleProgress_wrapper">
        <div class="wrapper right">
            <div class="circleProgress rightcircle"></div>
        </div>
        <div class="wrapper left">
            <div class="circleProgress leftcircle"></div>
        </div>
    </div>
    <script type="text/javascript" src="http://cdn.bootcss.com/zepto/1.0rc1/zepto.min.js"></script>
    <script type="text/javascript">
    var numbV=0;
    setInterval(function(){
      if(numbV<100){
        numbV++;
        getCri(numbV)
      }
    },1)
    function getCri(numb){
      if( numb <= 50 ){
        numb=45+(numb*3.6);
          $('.rightcircle').css('transform','rotate('+numb+'deg)');
      }else{
        numb=45+(numb-50)*3.6;
          $('.rightcircle').css('transform','rotate(225deg)');
          $('.leftcircle').css('transform','rotate('+numb+'deg)');
      }
    }
    </script>
    </body> 
    </html>
