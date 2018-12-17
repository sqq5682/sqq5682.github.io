---
layout: page
title: "html&css"
description: "嘿，你总算找到我啦"
header-img: "img/plane.jpg"
---

#### 什么是盒子模型？

在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框（border），元素的外边距（margin）四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4个部分一起构成了css中元素的盒模型。

#### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

行内元素：a、b、span、img、input、strong、select、label、em、button、textarea  
块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote  
空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img

#### CSS实现垂直水平居中

一道经典的问题，实现方法有很多种，以下是其中一种实现：

HTML结构：

	<div class="wrapper">      
		<div class="content"></div> 
	</div>

CSS：

	.wrapper {     
		position: relative;     
		width: 500px;    
		height: 500px;     
		border: 1px solid red;   
	} 
	.content{     
		position: absolute;     
		width: 200px;     
		height: 200px;     
		/*top、bottom、left和right 均设置为0*/     
		top: 0;     
		bottom: 0;     
		left: 0;     
		right: 0;     
		/*margin设置为auto*/     
		margin:auto;     
		border: 1px solid green;     
	}

#### 简述一下src与href的区别

href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。  
src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。  
当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

#### 简述同步和异步的区别

同步是阻塞模式，异步是非阻塞模式。  
同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；  
异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。

#### px和em的区别

相同点：px和em都是长度单位；  
异同点：px的值是固定的，指定是多少就是多少，计算比较容易。em得值不是固定的，并且em会继承父级元素的字体大小。浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em。

#### 浏览器的内核分别是什么?

IE: trident内核Firefox：gecko内核Safari：webkit内核Opera：以前是presto内核，Opera现已改用Google Chrome的Blink内核Chrome：Blink(基于webkit，Google与Opera Software共同开发)

#### 什么叫优雅降级和渐进增强？

渐进增强 progressive enhancement：  
针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。  
优雅降级 graceful degradation：  
一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

区别：

a. 优雅降级是从复杂的现状开始，并试图减少用户体验的供给  
b. 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要  
c. 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

#### sessionStorage 、localStorage 和 cookie 之间的区别

 共同点：用于浏览器端存储的缓存数据  
不同点：  
(1)、存储内容是否发送到服务器端：当设置了Cookie后，数据会发送到服务器端，造成一定的宽带浪费；web storage,会将数据保存到本地，不会造成宽带浪费；  
(2)、数据存储大小不同：Cookie数据不能超过4K,适用于会话标识；web storage数据存储可以达到5M;  
(3)、数据存储的有效期限不同：cookie只在设置了Cookid过期时间之前一直有效，即使关闭窗口或者浏览器；sessionStorage,仅在关闭浏览器之前有效；localStorage,数据存储永久有效；  
(4)、作用域不同：cookie和localStorage是在同源同窗口中都是共享的；sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；

#### Web Storage与Cookie相比存在的优势

(1)、存储空间更大：IE8下每个独立的存储空间为10M，其他浏览器实现略有不同，但都比Cookie要大很多。  
(2)、存储内容不会发送到服务器：当设置了Cookie后，Cookie的内容会随着请求一并发送的服务器，这对于本地存储的数据是一种带宽浪费。而Web Storage中的数据则仅仅是存在本地，不会与服务器发生任何交互。  
(3)、更多丰富易用的接口：Web Storage提供了一套更为丰富的接口，如setItem,getItem,removeItem,clear等,使得数据操作更为简便。cookie需要自己封装。  
(4)、独立的存储空间：每个域（包括子域）有独立的存储空间，各个存储空间是完全独立的，因此不会造成数据混乱。


#### Ajax的优缺点及工作原理？

定义和用法:  
AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。Ajax 是一种用于创建快速动态网页的技术。Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。  
传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。

优点：  
1.减轻服务器的负担,按需取数据,最大程度的减少冗余请求  
2.局部刷新页面,减少用户心理和实际的等待时间,带来更好的用户体验  
3.基于xml标准化,并被广泛支持,不需安装插件等,进一步促进页面和数据的分离

缺点：    
1.AJAX大量的使用了javascript和ajax引擎,这些取决于浏览器的支持.在编写的时候考虑对浏览器的兼容性.    
2.AJAX只是局部刷新,所以页面的后退按钮是没有用的.  
3.对流媒体还有移动设备的支持不是太好等  

AJAX的工作原理：  
1.创建ajax对象（XMLHttpRequest/ActiveXObject(Microsoft.XMLHttp)）  
2.判断数据传输方式(GET/POST)  
3.打开链接 open()  
4.发送 send()  
5.当ajax对象完成第四步（onreadystatechange）数据接收完成，判断http响应状态（status）200-300之间或者304（缓存）执行回调函数

#### 请指出document load和document ready的区别？

共同点：这两种事件都代表的是页面文档加载时触发。  
异同点：  
ready 事件的触发，表示文档结构已经加载完成（不包含图片等非文字媒体文件）。  
onload 事件的触发，表示页面包含图片等文件在内的所有元素都加载完成。

#### 请说出三种减少页面加载时间的方法。（加载时间指感知的时间或者实际加载时间）

1.优化图片  
2.图像格式的选择（GIF：提供的颜色较少，可用在一些对颜色要求不高的地方）  
3.优化CSS（压缩合并css，如margin-top,margin-left...)  
4.网址后加斜杠（如www.campr.com/目录，会判断这个“目录是什么文件类型，或者是目录。）  
5.标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。这不但影响速度，也影响浏览体验。当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容。从而加载时间快了，浏览体验也更好了。）  
6.减少http请求（合并文件，合并图片）。

#### doctype（文档类型）的作用是什么？你知道多少种文档类型？

此标签可告知浏览器文档使用哪种HTML或XHTML规范。该标签可声明三种DTD类型，分别表示严格版本、过渡版本以及基于框架的HTML文档。  
HTML 4.01规定了三种文档类型：Strict、Transitional以及Frameset。  
XHTML 1.0规定了三种XML文档类型：Strict、Transitional以及Frameset。  
Standards（标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，而Quirks（包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。


