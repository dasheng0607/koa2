### wx.setTabBarBadge(OBJECT)
{% version('1.9.0', 'text') %}

为 tabBar 某一项的右上角添加文本

**OBJECT 参数说明：**

| 参数     | 类型     | 必填 | 说明                                     |
| -------- | -------- | ---- | ---------------------------------------- |
| index    | Number   | 是   | tabBar的哪一项，从左边算起               |
| text     | String   | 是   | 显示的文本，超过 3 个字符则显示成“…”    |
| success  | Function | 否   | 接口调用成功的回调函数                              |
| fail     | Function | 否   | 接口调用失败的回调函数                              |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）    |

**示例代码：**

```javascript
wx.setTabBarBadge({
  index: 0,
  text: '1'
})
```

### wx.removeTabBarBadge(OBJECT)
{% version('1.9.0', 'text') %}

移除 tabBar 某一项右上角的文本

**OBJECT 参数说明：**

| 参数     | 类型     | 必填 | 说明                                     |
| -------- | -------- | ---- | ---------------------------------------- |
| index    | Number   | 是   | tabBar的哪一项，从左边算起               |
| success  | Function | 否   | 接口调用成功的回调函数                              |
| fail     | Function | 否   | 接口调用失败的回调函数                              |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）    |

### wx.showTabBarRedDot(OBJECT)
{% version('1.9.0', 'text') %}

显示 tabBar 某一项的右上角的红点

**OBJECT 参数说明：**

| 参数     | 类型     | 必填 | 说明                                     |
| -------- | -------- | ---- | ---------------------------------------- |
| index    | Number   | 是   | tabBar的哪一项，从左边算起               |
| success  | Function | 否   | 接口调用成功的回调函数                              |
| fail     | Function | 否   | 接口调用失败的回调函数                              |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）    |

### wx.hideTabBarRedDot(OBJECT)
{% version('1.9.0', 'text') %}

隐藏 tabBar 某一项的右上角的红点

**OBJECT 参数说明：**

| 参数     | 类型     | 必填 | 说明                                     |
| -------- | -------- | ---- | ---------------------------------------- |
| index    | Number   | 是   | tabBar的哪一项，从左边算起               |
| success  | Function | 否   | 接口调用成功的回调函数                              |
| fail     | Function | 否   | 接口调用失败的回调函数                              |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）    |

### onTabItemTap
{% version('1.9.0', 'text') %}

点击 tab 时触发，见 [链接](../framework/app-service/page.md)

**示例代码：**

```javascript
Page({
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  }
})
```

### wx.setTabBarStyle(OBJECT)
{% version('1.9.0', 'text') %}

动态设置 tabBar 的整体样式

**OBJECT 参数说明：**

| 参数            | 类型     | 说明                                     |
| --------------- | -------- | ---------------------------------------- |
| color           | HexColor | tab 上的文字默认颜色                     |
| selectedColor   | HexColor | tab 上的文字选中时的颜色                 |
| backgroundColor | HexColor | tab 的背景色                             |
| borderStyle     | String   | tabbar上边框的颜色， 仅支持 black/white  |
| success         | Function | 接口调用成功的回调函数                              |
| fail            | Function | 接口调用失败的回调函数                              |
| complete        | Function | 接口调用结束的回调函数（调用成功、失败都会执行）    |

**示例代码：**

```javascript
wx.setTabBarStyle({
    color: '#FF0000',
    selectedColor: '#00FF00',
    backgroundColor: '#0000FF',
    borderStyle: 'white'
})
```

### wx.setTabBarItem(OBJECT)
{% version('1.9.0', 'text') %}

动态设置 tabBar 某一项的内容

**OBJECT 参数说明：**

| 参数             | 类型     | 必填 | 说明                                     |
| ---------------- | -------- | ---- | ---------------------------------------- |
| index            | Number   | 是   | tabBar 的哪一项，从左边算起              |
| text             | String   | 否   | tab 上按钮文字                           |
| iconPath         | String   | 否   | 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片 |
| selectedIconPath | String   | 否   | 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效        |
| success          | Function | 否   | 接口调用成功的回调函数                              |
| fail             | Function | 否   | 接口调用失败的回调函数                              |
| complete         | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）    |

**示例代码：**

```javascript
wx.setTabBarItem({
    index: 0,
    text: 'text',
    iconPath: '/path/to/iconPath',
    selectedIconPath: '/path/to/selectedIconPath'
})
```

### wx.showTabBar(OBJECT)
{% version('1.9.0', 'text') %}

显示 tabBar

**OBJECT 参数说明：**

| 参数             | 类型     | 必填 | 说明                                     |
| ---------------- | -------- | ---- | ---------------------------------------- |
| animation        | Boolean  | 否   | 是否需要动画效果，默认无                 |
| success          | Function | 否   | 接口调用成功的回调函数                              |
| fail             | Function | 否   | 接口调用失败的回调函数                              |
| complete         | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）    |

### wx.hideTabBar(OBJECT)
{% version('1.9.0', 'text') %}

隐藏 tabBar

**OBJECT 参数说明：**

| 参数             | 类型     | 必填 | 说明                                     |
| ---------------- | -------- | ---- | ---------------------------------------- |
| animation        | Boolean  | 否   | 是否需要动画效果，默认无                 |
| success          | Function | 否   | 接口调用成功的回调函数                              |
| fail             | Function | 否   | 接口调用失败的回调函数                              |
| complete         | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）    |
