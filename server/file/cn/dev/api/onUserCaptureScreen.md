### wx.onUserCaptureScreen(CALLBACK)
{% version('1.4.0', 'text') %}

监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件

**CALLBACK返回参数：**

 无

**示例代码：**

```javascript
wx.onUserCaptureScreen(function(res) {
    console.log('用户截屏了')
})
```
