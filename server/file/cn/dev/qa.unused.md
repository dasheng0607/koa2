## 不能直接操作 Page.data

避免在直接对 Page.data 进行赋值修改，请使用 Page.setData 进行操作才能将数据同步到页面中进行渲染

## 怎么获取用户输入

能够获取用户输入的组件，需要使用组件的属性`bindblur`将用户的输入内容同步到 AppService。

```html
<input id="myInput" bindblur="bindBlur" />
```

```javascript
var inputContent = {}

Page({
  data: {
    inputContent: {}
  },
  bindBlur: function(e) {
    inputContent[e.currentTarget.id] = e.detail.value
  }
})
```

## 为什么脚本内不能使用`window`等对象

页面的脚本逻辑是在`JsCore`中运行，`JsCore`是一个没有窗口对象的环境，所以不能在脚本中使用`window`，也无法在脚本中操作组件

## 为什么 zepto/jquery 无法使用

zepto/jquery 会使用到`window`对象和`document`对象，所以无法使用。


## `wx.navigateTo`无法打开页面

一个应用同时只能打开5个页面，当已经打开了5个页面之后，`wx.navigateTo`不能正常打开新页面。请避免多层级的交互方式，或者使用[`wx.redirectTo`](./api/ui-navigate.md#wxredirecttoobject)

## 样式表不支持级联选择器

WXSS支持以`.`开始的类选择器。如：
```css
.normal_view {
  color: #000000;
  padding: 10px;
}
```

可以使用标签选择器，控制同一类组件的样式。如：使用input标签选择器控制`<input/>`的默认样式。

```css
input {
  width: 100px;
}
```

## 本地资源无法通过 WXSS 获取

`background-image`：可以使用网络图片，或者 base64，或者使用`<image/>`标签

## 如何修改窗口的背景色

使用 page 标签选择器，可以修改顶层节点的样式

```css
page {
  display: block;
  min-height: 100%;
  background-color: red;
}
```

## HTTPS 请求不成功

1. tls 仅支持 1.2 及以上版本
2. 部分 Android 机型需要 tls1.0 或者 tls1.1，所以请确保服务器的 tls 版本为 1.0、1.1、1.2

## 网络请求的 referer

网络请求的 referer 是不可以设置的，格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 `{appid}` 为小程序的 appid，`{version}` 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本。


## 为什么 map 组件总是在最上层

`map`、`canvas`、`video`、`textarea` 是由客户端创建的原生组件，原生组件的层级是最高的，所以页面中的其他组件无论设置 `z-index` 为多少，都无法盖在原生组件上。
原生组件暂时还无法放在 `scroll-view` 上，也无法对原生组件设置 `css` 动画。
