# WXML

WXML（WeiXin Markup Language）是框架设计的一套标签语言，结合[基础组件](../../../component/index.md)、[事件系统](./event.md)，可以构建出页面的结构。

用以下一些简单的例子来看看 WXML 具有什么能力：

### [数据绑定](./data.md)

```html
<!--wxml-->
<view> {{message}} </view>
```
```js
// page.js
Page({
  data: {
    message: 'Hello MINA!'
  }
})
```

### [列表渲染](./list.md)
```html
<!--wxml-->
<view wx:for="{{array}}"> {{item}} </view>
```
```js
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5]
  }
})
```

### [条件渲染](./conditional.md)
```html
<!--wxml-->
<view wx:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
<view wx:elif="{{view == 'APP'}}"> APP </view>
<view wx:else="{{view == 'MINA'}}"> MINA </view>
```
```js
// page.js
Page({
  data: {
    view: 'MINA'
  }
})
```

### [模板](./template.md)
```html
<!--wxml-->
<template name="staffName">
  <view>
    FirstName: {{firstName}}, LastName: {{lastName}}
  </view>
</template>

<template is="staffName" data="{{...staffA}}"></template>
<template is="staffName" data="{{...staffB}}"></template>
<template is="staffName" data="{{...staffC}}"></template>
```
```js
// page.js
Page({
  data: {
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  }
})
```

### [事件](./event.md)
```html
<view bindtap="add"> {{count}} </view>
```
```js
Page({
  data: {
    count: 1
  },
  add: function(e) {
    this.setData({
      count: this.data.count + 1
    })
  }
})
```

具体的能力以及使用方式在以下章节查看：

[数据绑定](./data.md)、[列表渲染](./list.md)、[条件渲染](./conditional.md)、[模板](./template.md)、[事件](./event.md)、[引用](./import.md)

