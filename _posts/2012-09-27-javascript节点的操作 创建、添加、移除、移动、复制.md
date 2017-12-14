---
layout: post
title: javascript节点的操作 创建、添加、移除、移动、复制
categories: [blog ]
tags: [ ]
description: javascript节点的操作 创建、添加、移除、移动、复制
---


1）创建新节点

	createDocumentFragment() //创建一个DOM片段
	createElement() //创建一个具体的元素
	createTextNode() //创建一个文本节点

（2）添加、移除、替换、插入

	appendChild()
	removeChild()
	replaceChild()
	insertBefore()

（3）查找

	getElementsByTagName() //通过标签名称
	getElementsByName() //通过元素的Name属性的值
	getElementById() //通过元素Id，唯一性

本节要用到的html例子

	<ul id="myList">
	<li>项目一</li>
	<li>项目二</li>
	<li>项目三</li>
	</ul>

1.创建元素节点

	document.createElement() 方法 用于创建元素，接受一个参数，即要创建元素的标签名，返回创建的元素节点
	var div = document.createElement("div"); //创建一个div元素
	div.id = "myDiv"; //设置div的id
	div.className = "box"; //设置div的class

创建元素后还要把元素添加到文档树中

2.添加元素节点

	appendChild() 方法 用于向childNodes列表的末尾添加一个节点，返回要添加的元素节点
	var ul = document.getElementById("myList"); //获得ul
	var li = document.createElement("li"); //创建li
	li.innerHTML = "项目四"; //向li内添加文本
	ul.appendChild(li); //把li 添加到ul子节点的末尾

添加后:

<ul id="myList">
<li>项目一</li>
<li>项目二</li>
<li>项目三</li>
<li>项目四</li>
</ul>

appendChild() 方法还可以添加已经存在的元素，会将元素从原来的位置移到新的位置

	var ul = document.getElementById("myList"); //获得ul
	ul.appendChild(ul.firstChild); //把ul的第一个元素节点移到ul子节点的末尾

运行后(IE)：

<ul id="myList">
<li>项目二</li>
<li>项目三</li>
<li>项目一</li>
</ul>

insertBefore() 方法 ，如果不是在末尾插入节点，而是想放在特定的位置上，用这个方法，该方法接受2个参数，第一个是要插入的节点，第二个是参照节点，返回要添加的元素节点

	var ul = document.getElementById("myList"); //获得ul
	var li = document.createElement("li"); //创建li
	li.innerHTML= "项目四"; //向li内添加文本
	ul.insertBefore(li,ul.firstChild); //把li添加到ul的第一个子节点前

添加后:

<ul id="myList">
<li>项目四</li>
<li>项目一</li>
<li>项目二</li>
<li>项目三</li>
</ul>

	var ul = document.getElementById("myList"); //获得ul
	var li = document.createElement("li"); //创建li
	li.innerHTML= "项目四"; //向li内添加文本
	ul.insertBefore(li,ul.lastChild); //把li添加到ul的子节点末尾

添加后:

<ul id="myList">
<li>项目一</li>
<li>项目二</li>
<li>项目三</li>
<li>项目四</li>
</ul>

	var ul = document.getElementById("myList"); //获得ul
	var li = document.createElement("li"); //创建li
	li.innerHTML= "项目四"; //向li内添加文本
	var lis = ul.getElementsByTagName("li") //获取ul中所有li的集合
	ul.insertBefore(li,lis[1]); 　　　　//把li添加到ul中的第二个li节点前

添加后:

<ul id="myList">
<li>项目一</li>
<li>项目四</li>
<li>项目二</li>
<li>项目三</li>
</ul>

3.移除元素节点

removeChild() 方法 ，用于移除节点，接受一个参数，即要移除的节点，返回被移除的节点，注意被移除的节点仍然在文档中，不过文档中已没有其位置了

	var ul = document.getElementById("myList"); //获得ul
	var fromFirstChild = ul.removeChild(ul.firstChild); //移除ul第一个子节点
	var ul = document.getElementById("myList"); //获得ul
	var lis = ul.getElementsByTagName("li") //获取ul中所有li的集合
	ul.removeChild(lis[0]); 　　　　　　//移除第一个li，与上面不同，要考虑浏览器之间的差异


4.替换元素节点

	replaceChild() 方法 ，用于替换节点，接受两个参数，第一参数是要插入的节点，第二个是要替换的节点，返回被替换的节点
	var ul = document.getElementById("myList"); //获得ul
	var fromFirstChild = ul.replaceChild(ul.firstChild); //替换ul第一个子节点
	var ul = document.getElementById("myList"); //获得ul;
	var li = document.createElement("li"); //创建li
	li.innerHTML= "项目四"; //向li内添加文本
	var lis = ul.getElementsByTagName("li") //获取ul中所有li的集合
	var returnNode = ul.replaceChild(li,lis[1]); //用创建的li替换原来的第二个li

5.复制节点

	cloneNode() 方法，用于复制节点， 接受一个布尔值参数， true 表示深复制（复制节点及其所有子节点）， false 表示浅复制（复制节点本身，不复制子节点）
	var ul = document.getElementById("myList"); //获得ul
	var deepList = ul.cloneNode(true); //深复制
	var shallowList = ul.cloneNode(false); //浅复制
