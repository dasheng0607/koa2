### wx.setBackgroundColor(OBJECT)
{% version('2.1.0', 'text') %}

动态设置窗口的背景色

**OBJECT 参数说明：**

| 参数                   | 类型     | 说明                                    |
| --------------------- | -------- | --------------------------------------- |
| backgroundColor       | HexColor | 窗口的背景色                             |
| backgroundColorTop    | HexColor | 顶部窗口的背景色，仅 iOS 支持             |
| backgroundColorBottom | HexColor | 底部窗口的背景色，仅 iOS 支持             |

**示例代码：**

```javascript
wx.setBackgroundColor({
    backgroundColor: '#ffffff', // 窗口的背景色为白色
})

wx.setBackgroundColor({
    backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
    backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
})
```

### wx.setBackgroundTextStyle(OBJECT)
{% version('2.1.0', 'text') %}

动态设置下拉背景字体、loading 图的样式

**OBJECT 参数说明：**

| 参数             | 类型      | 说明                                                       |
| ---------------- | -------- | ---------------------------------------------------------- |
| textStyle        | String   | 下拉背景字体、loading 图的样式，仅支持 'dark', 'light'        |

**示例代码：**

```javascript
wx.setBackgroundTextStyle({
    textStyle: 'dark', // 下拉背景字体、loading 图的样式为dark
})
```
