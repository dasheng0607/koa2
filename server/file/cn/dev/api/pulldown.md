### Page.onPullDownRefresh()

在 Page 中定义 [onPullDownRefresh](../framework/app-service/page.md#onpulldownrefresh) 处理函数，监听该页面用户下拉刷新事件。

### wx.startPullDownRefresh(OBJECT)
{% version('1.5.0', 'text') %}

开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致

**Object参数说明：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| success | Function |  否 | 接口调用成功的回调函数 |
| fail | Function |  否 | 接口调用失败的回调函数 |
| complete | Function |  否 | 接口调用结束的回调函数（调用成功、失败都会执行） |


**success返回参数说明：**

| 参数名 | 类型   | 说明     |
|--------|--------|----------|
| errMsg | String | 接口调用结果 |


**示例代码：**

```javascript
wx.startPullDownRefresh()
```

### wx.stopPullDownRefresh()

停止当前页面下拉刷新。

**示例代码：**

```javascript
Page({
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  }
})
```
