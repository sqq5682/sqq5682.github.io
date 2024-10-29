---
layout: post
title: 浏览器跨域
categories: [blog]
tags: [ajax, fetch, axios]
description: 前端常用请求方法，Ajax、fetch、axios的区别
---

## 前端常用请求方法，Ajax、fetch、axios的区别与优缺点

### ajax

#### 1.什么是AJAX?
AJAX全称为“Asynchronous JavaScript and XML”（异步JavaScript和XML），是一种创建交互式网页应用的网页开发技术。它使用：
使用XHTML+CSS来标准化呈现；
使用XML和XSLT进行数据交换及相关操作；
使用XMLHttpRequest对象与Web服务器进行异步数据通信； 
使用Javascript操作Document Object Model进行动态显示及交互； 
使用JavaScript绑定和处理所有数据。

#### 2.与传统的web应用比较
传统的Web应用交互由用户触发一个HTTP请求到服务器,服务器对其进行处理后再返回一个新的HTHL页到客户端, 每当服务器处理客户端提交的请求时,客户都只能空闲等待,并且哪怕只是一次很小的交互、只需从服务器端得到很简单的一个数据,都要返回一个完整的HTML页,而用户每次都要浪费时间和带宽去重新读取整个页面。这个做法浪费了许多带宽，由于每次应用的交互都需要向服务器发送请求，应用的响应时间就依赖于服务器的响应时间。这导致了用户界面的响应比本地应用慢得多。

#### 3.AJAX的工作原理
Ajax的工作原理相当于在用户和服务器之间加了—个中间层(AJAX引擎),使用户操作与服务器响应异步化。并不是所有的用户请求都提交给服务器,像—些数据验证和数据处理等都交给Ajax引擎自己来做, 只有确定需要从服务器读取新数据时再由Ajax引擎代为向服务器提交请求。
Ajax其核心有JavaScript、XMLHTTPRequest、DOM对象组成，通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用JavaScript来操作DOM而更新页面。这其中最关键的一步就是从服务器获得请求数据。

#### 4.ajax使用步骤
1.创建XmlHttpRequest对象
2.调用open方法设置基本请求信息
3.设置发送的数据，发送请求
4.注册监听的回调函数
5.拿到返回值，对页面进行更新

##### (1).XMLHTTPRequest对象
Ajax的一个最大的特点是无需刷新页面便可向服务器传输或读写数据(又称无刷新更新页面),这一特点主要得益于XMLHTTP组件XMLHTTPRequest对象。
XMLHttpRequest对象方法描。 

|方法|描述|
|---|---|
|abort()|停止当前请求|
|getAllResponseHeaders()|把HTTP请求的所有响应首部作为键/值对返回|
|getResponseHeader("header")|返回指定首部的串值|
|open(method,url)|建立对服务器的调用,还有3个可选参数，是否异步、用户名、密码|
|send(content)|向服务器发送请求|
|abort()|停止当前请求|
|setRequestHeader(header, value)|把指定首部设置为所提供的值。|

XMLHttpRequest 对象属性描述

|状态值|描述|
|---|---|
|0|请求还未初始化，还未调用open()|
|1|请求已建立但未发送，还未调用send()|
|2|接受原始响应数据，为解析做准备|
|3|正在解析数据,根据响应头部返回的MIME类型把数据转换成能通过responseText等形式存取的格式|
|4|响应完成，数据解析完成|

|属性|描述|
|---|---|
|onreadystatechange|状态改变的事件触发器，每个状态改变时都会触发这个事件处理器，通常会调用一个JavaScript函数|
|readyState|请求的状态。有5个可取值：0 = 未初始化，1 = 正在加载，2 = 已加载，3 = 交互中，4 = 完成|
|responseText|服务器的响应，返回数据的文本。|
|responseXML|服务器的响应，返回数据的兼容DOM的XML文档对象 ，这个对象可以解析为一个DOM对象。|
|responseBody|服务器返回的主题（非文本格式）|
|responseStream|服务器返回的数据流|
|status|服务器的HTTP状态码（如：404 = "文件末找到" 、200 ="成功" ，等等）|
|statusText|服务器返回的状态文本信息 ，HTTP状态码的相应文本（OK或Not Found（未找到）等等）|

ajax的get/post请求
其实get和post的请求方式大致是相同的，下面分别是get和post的示例代码：

get方式

```js
//步骤一:创建异步对象
var xhr = new XMLHttpRequest();
//步骤二:设置请求的基本参数
xhr.open('get','test.php');
//步骤三:发送请求
xhr.send();
//步骤四:注册onreadystatechange监听事件，只要状态改变就会调用
xhr.onreadystatechange = function () {
  if (ajax.readyState == 4 && ajax.status == 200) {
    //步骤五 如果能够进到这个判断 说明数据完美到手
    console.log(ajax.responseText);//操作返回内容
  }
}
```

post方式

```js
//创建异步对象  
var xhr = new XMLHttpRequest();
//设置请求基本信息，并加上请求头
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.open('post', 'test.php' );
//发送请求
xhr.send('name=Lan&age=18');
xhr.onreadystatechange = function () {
  // 这步为判断服务器是否正确响应
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  } 
};
```

onreadystatechange
这个监听函数是来监听readyState这个状态值得：

|状态值|描述|
|---|---|
|0|请求还未初始化，还未调用open()|
|1|请求已建立但未发送，还未调用send()|
|2|接受原始响应数据，为解析做准备|
|3|正在解析数据,根据响应头部返回的MIME类型把数据转换成能通过responseText等形式存取的格式|
|4|响应完成，数据解析完成|

#### 5.ajax优缺点

##### (1).AJAX的优点
**<1>.无刷新更新数据。**

AJAX最大优点就是能在不刷新整个页面的前提下与服务器通信维护数据。这使得Web应用程序更为迅捷地响应用户交互，并避免了在网络上发送那些没有改变的信息，减少用户等待时间，带来非常好的用户体验。

**<2>.异步与服务器通信。**

AJAX使用异步方式与服务器通信，不需要打断用户的操作，具有更加迅速的响应能力。优化了Browser和Server之间的沟通，减少不必要的数据传输、时间及降低网络上数据流量。

**<3>.前端和后端负载平衡。**

AJAX可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，AJAX的原则是“按需取数据”，可以最大程度的减少冗余请求和响应对服务器造成的负担，提升站点性能。

**<4>.基于标准被广泛支持。**

AJAX基于标准化的并被广泛支持的技术，不需要下载浏览器插件或者小程序，但需要客户允许JavaScript在浏览器上执行。随着Ajax的成熟，一些简化Ajax使用方法的程序库也相继问世。同样，也出现了另一种辅助程序设计的技术，为那些不支持JavaScript的用户提供替代功能。

**<5>.界面与应用分离。**

Ajax使WEB中的界面与应用分离（也可以说是数据与呈现分离），有利于分工合作、减少非技术人员对页面的修改造成的WEB应用程序错误、提高效率、也更加适用于现在的发布系统。


##### (2).AJAX的缺点
**<1>.AJAX干掉了Back和History功能，即对浏览器机制的破坏。**

在动态更新页面的情况下，用户无法回到前一个页面状态，因为浏览器仅能记忆历史记录中的静态页面。一个被完整读入的页面与一个已经被动态修改过的页面之间的差别非常微妙；用户通常会希望单击后退按钮能够取消他们的前一次操作，但是在Ajax应用程序中，这将无法实现。
后退按钮是一个标准的web站点的重要功能，但是它没法和js进行很好的合作。这是Ajax所带来的一个比较严重的问题，因为用户往往是希望能够通过后退来取消前一次操作的。那么对于这个问题有没有办法？答案是肯定的，用过Gmail的知道，Gmail下面采用的Ajax技术解决了这个问题，在Gmail下面是可以后退的，但是，它也并不能改变Ajax的机制，它只是采用的一个比较笨但是有效的办法，即用户单击后退按钮访问历史记录时，通过创建或使用一个隐藏的IFRAME来重现页面上的变更。（例如，当用户在Google Maps中单击后退时，它在一个隐藏的IFRAME中进行搜索，然后将搜索结果反映到Ajax元素上，以便将应用程序状态恢复到当时的状态。）
但是，虽然说这个问题是可以解决的，但是它所带来的开发成本是非常高的，并与Ajax框架所要求的快速开发是相背离的。这是Ajax所带来的一个非常严重的问题。
一个相关的观点认为，使用动态页面更新使得用户难于将某个特定的状态保存到收藏夹中。该问题的解决方案也已出现，大部分都使用URL片断标识符（通常被称为锚点，即URL中#后面的部分）来保持跟踪，允许用户回到指定的某个应用程序状态。（许多浏览器允许JavaScript动态更新锚点，这使得Ajax应用程序能够在更新显示内容的同时更新锚点。）这些解决方案也同时解决了许多关于不支持后退按钮的争论。

**<2>.AJAX的安全问题。**

AJAX技术给用户带来很好的用户体验的同时也对IT企业带来了新的安全威胁，Ajax技术就如同对企业数据建立了一个直接通道。这使得开发者在不经意间会暴露比以前更多的数据和服务器逻辑。Ajax的逻辑可以对客户端的安全扫描技术隐藏起来，允许黑客从远端服务器上建立新的攻击。还有Ajax也难以避免一些已知的安全弱点，诸如跨站点脚步攻击、SQL注入攻击和基于Credentials的安全漏洞等等。

**<3>.对搜索引擎支持较弱。**

对搜索引擎的支持比较弱。如果使用不当，AJAX会增大网络数据的流量，从而降低整个系统的性能。

**<4>.破坏程序的异常处理机制。**

至少从目前看来，像Ajax.dll，Ajaxpro.dll这些Ajax框架是会破坏程序的异常机制的。关于这个问题，曾在开发过程中遇到过，但是查了一下网上几乎没有相关的介绍。后来做了一次试验，分别采用Ajax和传统的form提交的模式来删除一条数据……给我们的调试带来了很大的困难。

**<5>.违背URL和资源定位的初衷。**

例如，我给你一个URL地址，如果采用了Ajax技术，也许你在该URL地址下面看到的和我在这个URL地址下看到的内容是不同的。这个和资源定位的初衷是相背离的。

**<6>.AJAX不能很好支持移动设备。**

一些手持设备（如手机、PDA等）现在还不能很好的支持Ajax。

**<7>.客户端过肥，太多客户端代码造成开发上的成本。**

编写复杂、容易出错 ；冗余代码比较多（层层包含js文件是AJAX的通病，再加上以往的很多服务端代码现在放到了客户端）；破坏了Web的原有标准。

**<8>.嵌套回调，难以处理。**

##### 5.AJAX注意点及适用和不适用场景
**(1).注意点**

Ajax开发时，网络延迟——即用户发出请求到服务器发出响应之间的间隔——需要慎重考虑。不给予用户明确的回应，没有恰当的预读数据，或者对XMLHttpRequest的不恰当处理，都会使用户感到延迟，这是用户不希望看到的，也是他们无法理解的。通常的解决方案是，使用一个可视化的组件来告诉用户系统正在进行后台操作并且正在读取数据和内容。

**(2).Ajax适用场景**

<1>.表单驱动的交互
<2>.深层次的树的导航
<3>.快速的用户与用户间的交流响应
<4>.类似投票、yes/no等无关痛痒的场景
<5>.对数据进行过滤和操纵相关数据的场景
<6>.普通的文本输入提示和自动完成的场景

**(3).Ajax不适用场景**

<1>.部分简单的表单
<2>.搜索
<3>.基本的导航
<4>.替换大量的文本
<5>.对呈现的操纵

### fetch

Fetch API 是一组用于在 Web 浏览器中进行网络请求的现代 JavaScript API。它提供了一种更简洁、更强大的方式来处理网络请求，相比传统的 XMLHttpRequest 对象，Fetch API 更易于使用且功能更丰富。

#### Fetch的特点：

1. 基于 Promise：Fetch API 是基于 Promise 的，这意味着你可以使用 Promise 的链式方法来处理异步操作，使代码更清晰易懂。
2. 简洁的 API：Fetch API 提供了一组简洁的方法来执行各种类型的 HTTP 请求，包括 GET、POST、PUT、DELETE 等。
3. 支持流式数据：Fetch API 支持读取和写入流式数据，这使得处理大型响应或请求时更加高效。
4. 支持跨域请求：Fetch API 默认支持跨域请求，但在某些情况下可能需要额外配置以处理 CORS（跨域资源共享）。

Fetch是ajax非常好的一个替代品，很有可能将来会完全代替ajax的地位。我们先来看下浏览器的支持情况：

![](https://i-blog.csdnimg.cn/blog_migrate/09041a8b9ecd40d86b1a48919717f9b5.png)

我们可以看到[IE浏览器](https://gitcode.com/open-source-toolkit/a466c?utm_source=highlight_word_gitcode&word=IE%E6%B5%8F%E8%A7%88%E5%99%A8&isLogin=1)完全不支持Fetch，并且移动端的很多浏览器也不支持Fetch，不过可以使用第三方的ployfill来获得支持。[Github.fetch]()

#### Fetch写法

不管是原生的Ajax还是Jquery封装的Ajax都有一个问题就在于回调地狱，fetch很友好的解决了这个问题，fetch大概长这个样子：

```js
fetch(...).then(fun2)
  .then(fun3)
    .....
      .catch(fun)
```

它给人一种同步的流程来书写非同步的操作，成功的解决了回调地狱的问题。Fetch能做到这一点，是因为Fetch API是基于Promise设计的。并且fetch调用非常简单，因为它是挂在BOM上的，属于全局的方法。

#### Fetch获取数据

我们使用Fetch来获取数据时，会返回给我们一个Pormise对象，我们简单看一下：

```js
fetch("http://www.abc.cn/test")
    .then(Response => {
        console.log(Response);s
    })
```

输出如下：

![](https://i-blog.csdnimg.cn/blog_migrate/150452b8db4cb4ef4adcbb5dfaf78377.png)

OK就是true，status是200，我们可以看到这里面并没有我们想要的数据，其实数据都在body属性里面，是一种数据流的形式，一般服务器会给我们返回JSON数据的格式，我们可以调用response.json来转化下数据：

```js
fetch("http://www.abc.cn/test")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    })
```
处理之后，我们继续.then就可以拿到处理之后的数据了。所以这么来看的话通过Fetch来获取数据是非常简洁简单的。

#### Fetch发送数据

Fetch发送数据也非常的简单，API长这样：

```js
fetch('http://www.mozotech.cn/bangbang/index/user/login', {
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams([["username", "Lan"],["password", "123456"]]).toString()
})
.then(res => {
    console.log(res);
    return res.text();
})
.then(data => {
    console.log(data);
})
```

对传入的参数做个说明：

|参数名|描述|
|---|---|
|method|请求的方法，默认GET|
|headers|请求的头信息|
|body|请求的内容主体|

值得一提的是，fetch默认的post的header是Content-Type:text/plain;charset=UTF-8，不过通常我们的post请求是通过表单的形式提交的。所以我们需要把header修改为：Content-Type:application/x-www-form-urlencoded

#### Fetch优缺点

|优缺点|描述|
|---|---|
|优点|解决回调地狱|
|优点|使用起来更加简洁|
|缺点|API 偏底层，需要封装|
|缺点|默认不带Cookie，需要手动添加|
|缺点|浏览器支持情况不是很友好，需要第三方的ployfill|

### Axios

Vue2.0之后，axios开始受到更多的欢迎了。其实axios也是对原生XHR的一种封装，不过是Promise实现版本。
它是一个用于浏览器和 nodejs 的 HTTP 客户端，符合最新的ES规范。简单看下如何使用即可：

```js
axios({
    method: 'post',
    url: '/abc/login',
    data: {
        userName: 'Lan',
        password: '123'
    }
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
```

感觉axios算是比较完美的一种方案了，几乎没有什么大的缺点。

### 总结

其实有这么多种的请求方法和解决方案，总结一下：原生XHR几乎很少开发会用，JqueryAjax属于老当益壮的那种，虽然很老，但是很好用，Fetch是属于初生牛犊，还需要慢慢成长，axios就目前来说，算是非常好的了，无脑使用即可。


参考信息[1](https://blog.csdn.net/qq_43539854/article/details/125053587),[2](https://blog.csdn.net/qq_36407875/article/details/84642060)

