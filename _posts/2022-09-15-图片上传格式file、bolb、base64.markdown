---
layout: post
title: 图片上传格式file、bolb、base64
categories: [blog]
tags: [file, bolb, base64]
description: 图片上传格式file、bolb、base64
---

# 图片上传格式file、bolb、base64
图片的展示方式有三种：分别为file(文件流)、bolb(本地流)、base64(二进制流)，他们之间是可以相互转化的，上传图片一般会拿到blob和file

## bolb: new Blob(array, options)
[Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作。
Blob 表示的不一定是JavaScript原生格式的数据。File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
要从其他非blob对象和数据构造一个 Blob，请使用 Blob() 构造函数。
格式
```js
const Blob = {
    size: 25748
    type: "image/png"
    [[Prototype]]: Blob
}
let hiBlob = new Blob([`<h1>Hi hello!<h1>`], { type: 'text/html' }) // 如上代码，就创建了一个 blob 对象，并声明了 text/html 类型 ，就像是创建一个 .html 文件。只不过它存在于浏览器的内存里。
```
canvas 具有图像操作能力，支持将一个已有的图片作为图片源，来操作图像。
`canvasElement.toBlob(callback)`
如下，通过 canvas 将图片资源转成 blob 对象
```js
const canvasToBlob = async () => {
  return new Promise((resolve, reject) => {
    const url = 'http://eg.com/to/path/someImg.png'
    const img = document.createElement('img')
    img.crossOrigin = 'Anonymous' // 解决跨域图片问题，就是上面提及的
    img.onerror = () => {
      reject()
    }
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.toBlob((bolb) => {
        console.log('blob: ', blob)
        resolve(blob)
      })
    }
    img.src = url
  }
}

```
## file: new File(bits, name[, options])
[File](https://developer.mozilla.org/en-US/docs/Web/API/File)对象是来自用户在一个input元素上选择文件后返回的 FileList 对象,也可以是来自由拖放操作生成的 DataTransfer 对象，或者来自 HTMLCanvasElement 上的 mozGetAsFile() API。
格式
File 对象是特殊类型的 Blob，且可以用在任意的 Blob 类型的 context 中。比如说， FileReader, URL.createObjectURL(), createImageBitmap(), 及 XMLHttpRequest.send() 都能处理 Blob 和 File。
```js
const File = {
    lastModified: 1649490762164
    lastModifiedDate: Sat Apr 09 2022 15:52:42 GMT+0800 (GMT+08:00) {}
    name: "1649490762160-251.png"
    size: 25748
    type: "image/png"
    webkitRelativePath: ""
    [[Prototype]]: File
}
// 1. 参数是字符串组成的数组
let hiFile = new File([`<h1>Hi gauseen!<h1>`], 'fileName', { type: 'text/html' })

// 2. blob 转 file 类型
let hiBlob = new Blob([`<h1>Hi gauseen!<h1>`], { type: 'text/html' })
let hiFile = new File([ hiBlob ], 'fileName', { type: 'text/html' })
```
如上代码，通过 File 构造函数，创建一个 file 对象，与上面的提到的 blob 类似。可以将 blob 转成 file 类型，这意味着上面获取的 blob，可以转成 file 类型。

## DataURL（base64） 
Base64 是一组相似的二进制到文本（binary-to-text）的编码规则，使得二进制数据在解释成 radix-64 的表现形式后能够用 ASCII 字符串的格式表示出来。Base64 这个词出自一种 MIME 数据传输编码。如果是图片的base64，可以是可以用来压缩
语法：data:[<mediatype>][;base64],<data>

如下，黑色 1 像素示例：

```
data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=
```
把blob、file转变base64的方式
1.FileReader
允许 Web 应用程序异步读取存储在用户计算机上的文件（blob 或 file），方法readAsDataURL

```js
// 将 blob 或 file 转成 DataURL（base64） 形式
fileReader(someFile).then(base64 => {
  console.log('base64: ', base64)
})

function fileReader (blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.onload = (e) => {
      resolve(e.target.result)
    }
    reader.readAsDataURL(blob)
  })
}
```
1.canvasElement.toDataURL()
可以通过 canvas 图像处理能力，将图片转成 dataURL 形式.
```js
const canvasToBase64 = async () => {
  return new Promise((resolve, reject) => {
    const url = 'http://eg.com/to/path/someImg.png'
    const img = document.createElement('img')
    img.crossOrigin = 'Anonymous' // 解决跨域图片问题，就是上面提及的
    img.onerror = () => {
      reject()
    }
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      // 获取图片 dataURL，也是 base64 格式
      let dataURL = canvas.toDataURL()
      console.log('dataURL: ', dataURL)
      resolve(dataURL)
    }
    img.src = url
  }
}

```

## 总结三种格式的相互转换

### 图片路径转base64
```js
const urlToBase64 = async (url) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.crossOrigin = 'Anonymous' // 解决跨域图片问题
    img.onerror = () => {
      reject()
    }
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      // 获取图片 dataURL，也是 base64 格式
      let dataURL = canvas.toDataURL()
      console.log('dataURL: ', dataURL)
      resolve(dataURL)
    }
    img.src = url
  }
}
canvasToBase64('http://eg.com/to/path/someImg.png')
```
### file转base64，主要用于图片预览
```js
const fileToBase64 = (file, callback) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => callback(reader.result)
}
```
### blob转base64, 主要用于图片预览
```js
const blobToBase64 = (blob, callback) => { //blob转base64
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => callback(reader.result)
}
```
### file转blob，主要用于文件上传
```js
const fileToBlob = (file, callback) => {
    const type = file.type;
    const reader = new FileReader();
    reader.onload = function(evt) {
        const blob = new Blob([evt.target.result], {type});
        if(typeof callback === 'function') {
            callback(blob)
        } else {
            console.log("blob:", blob);
        }
    };
    reader.readAsDataURL(file);
};
```
### base64转blob，主要用于文件上传
```js
const base64toBlob = (dataurl) => { //base64转blob
    var arr = dataurl.split(','), 
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), 
    n = bstr.length, 
    u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
```
转化详细介绍见：https://blog.csdn.net/NEW_cai/article/details/109230783
### base64转换为file类型，主要用于文件上传
```js
const base64ToFile = (base64URL, filename) => {
    var arr = base64URL.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}
```
转化详细介绍见：https://blog.csdn.net/NEW_cai/article/details/109230783
### blob转file，主要用于文件上传
```js
const blobToFile = (blob, fileName, type) => {  //blob转file方式1
    let files = new window.File([blob], fileName, {type: type})
    return files
}
const blobToFile1 = (blob, fileName) => {  // blob转file方式2
	blob.lastModifiedDate = new Date();  
	blob.name = fileName;  
	return blob;
};

```

