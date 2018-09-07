### wx.setClipboardData(OBJECT)
{% version('1.1.0', 'text') %}

设置系统剪贴板的内容

**OBJECT参数说明：**

| 参数       | 类型       | 必填   | 说明                       |
| -------- | -------- | ---- | ------------------------ |
| data  | String | 是 | 需要设置的内容  |
| success  | Function | 否    | 接口调用成功的回调函数              |
| fail     | Function | 否    | 接口调用失败的回调函数              |
| complete | Function | 否    | 接口调用结束的回调函数（调用成功、失败都会执行） |

**示例代码：**

```javascript
wx.setClipboardData({
  data: 'data',
  success: function(res) {
    wx.getClipboardData({
      success: function(res) {
        console.log(res.data) // data
      }
    })
  }
})
```


### wx.getClipboardData(OBJECT)
{% version('1.1.0', 'text') %}

获取系统剪贴板内容

**OBJECT参数说明：**

| 参数       | 类型       | 必填   | 说明                       |
| -------- | -------- | ---- | ------------------------ |
| success  | Function | 否    | 接口调用成功的回调函数              |
| fail     | Function | 否    | 接口调用失败的回调函数              |
| complete | Function | 否    | 接口调用结束的回调函数（调用成功、失败都会执行） |


**success返回参数说明：**

| 参数      | 类型   | 说明           |
|-----------|--------|----------------|
| data | String | 剪贴板的内容 |

**示例代码：**

```javascript
wx.getClipboardData({
  success: function(res){
    console.log(res.data)
  }
})
```


