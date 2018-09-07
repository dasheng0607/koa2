# 兼容

小程序的功能不断的增加，但是旧版本的微信客户端并不支持新功能，所以在使用这些新能力的时候需要做兼容。

文档会在组件，API等页面描述中带上各个功能所支持的版本号。

可以通过 `wx.getSystemInfo` 或者 `wx.getSystemInfoSync` 获取到小程序的基础库版本号。

也可以通过 `wx.canIUse` [详情](../api/api-caniuse.md) 来判断是否可以在该基础库版本下直接使用对应的API或者组件

### 兼容方式 - 版本比较
微信客户端和小程序基础库的版本号风格为 Major.Minor.Patch（主版本号.次版本号.修订号）。
开发者可以根据版本号去做兼容，以下为参考代码：


```javascript
function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  var len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i])
    var num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

compareVersion('1.11.0', '1.9.9')
// 1
```

### 兼容方式 - 接口

对于新增的 API，可以用以下代码来判断是否支持用户的手机。
```js
if (wx.openBluetoothAdapter) {
  wx.openBluetoothAdapter()
} else {
  // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
  wx.showModal({
    title: '提示',
    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
  })
}
```

### 兼容方式 - 参数

对于 API 的参数或者返回值有新增的参数，可以判断用以下代码判断。
```js
wx.showModal({
  success: function(res) {
    if (wx.canIUse('showModal.cancel')) {
      console.log(res.cancel)
    }
  }
})
```

### 兼容方式 - 组件

对于组件，新增的组件或属性在旧版本上不会被处理，不过也不会报错。如果特殊场景需要对旧版本做一些降级处理，可以这样子做。

```js
Page({
  data: {
    canIUse: wx.canIUse('cover-view')
  }
})
```
```html
<video controls="{{!canIUse}}">
  <cover-view wx:if="{{canIUse}}">play</cover-view>
</video>
```

