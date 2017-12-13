---
layout: post
title: script标签属性用type还是language？
categories: [blog ]
tags: [ ]
description: script标签属性用type还是language？
---

一个网站的建设，经常会用到JavaScript,其中必须用到script标签来外调js文件，但是script标签属性用type还是language？

type 和 language 属性都可用来指定 script标签中的脚本的类型。所以可以使用下面两种属性：

	language = "JavaScript"

或者：

	type = "text/javascript"

看了一下w3school，language 属性在 HTML 和 XHTML 标准中受到了非议。

#### HTML 与 XHTML 之间的差异

在 HTML 4.01 中，script 元素的 "language" 属性不被赞成使用。

在 XHTML 1.0 Strict DTD 中，script 元素的 "language" 属性不被支持。

#### HTML 4 和 XHTML 在处理脚本中的内容方面有所不同：

在 HTML 4 中，内容类型声明为 CDATA，就是说不会对实体进行解析。

在 XHTML 中，内容类型声明为 (#PCDATA)，也就是说会对实体进行解析。

这意味着，在 XHTML 中，应该编码所有特殊的字符，或者把所有内容嵌套在 CDATA 部分中。

为了确保在 XHTML 文档中脚本正确进行解析，请使用如下语法：

	<script type="text/javascript"><![CDATA[
	  document.write("Hello World!")
	//]]></script>

这两个标准提倡使用 type 属性。遗憾的是，这两个属性的值是不一样的。

其中属性type，值是MIME-type，意思是指示脚本的 MIME 类型，而language值是script，是不赞成使用。规定脚本语言。请使用 type 属性代替它。

您可能偶尔会看见language 的值为 VBScript（对 type 而言是 text/vbscript），表示包含的脚本代码是用 Microsoft 的 Visual Basic Script 编写的。

利用 JavaScript，您还可以使用 language 的值 "JavaScript 1.1"，表示包含的脚本语句只能被 Netscape 3.0 或更新的版本处理。Netscape 2.0 只支持 JavaScript 1.0，而无法处理标记为 "JavaScript 1.1" 的脚本。

各浏览器对于 "type" 和 "language" 属性本身均支持，但是对于其中设置的脚本语言类型识别与支持各异：

"type" 和 "language" 同时存在时，所有浏览器均优先识别 "type" 属性内的脚本类型；
其中 IE 浏览器实际支持 JScript 和 VBScript 脚本语言标示以及 Script Encoder 加密；
Firefox Chrome SafariOpera对"type"属性值的具体识别宽容度不一致，相对ChromeSafari对属性值正确性校验更加宽松，Firefox 的校验最为严格；
在 "Language" 属性值识别宽容度比较中，各浏览器中 Chrome Safari 依然最为宽松，IE 最为严格，Firefox 与 Opera 持平；
Language Encode 比较中，只有 IE 支持 JScript.Encoder 以及 VBScript.Encoder类型设置，FirefoxChromeSafari均不支持，Opera 中则是该属性值被修复为默认的 Javascript 脚本语言后才有输出值。

为了保证脚本程序可以正常执行，除非特意使用仅 IE 支持的 VBScript 和 Script Encoder 机制外，应当将 SCRIPT 标记的 "type" 属性设置为 "javascript"，并且不要设置已经废弃的 "Languange" 属性。