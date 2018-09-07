### wx.makeVoIPCall(OBJECT)
{% version('1.5.0', 'text') %}

调起 VoIP 音视频通话界面。

**Object参数说明：**

| 参数             | 类型     | 默认值 | 必填 | 说明                                                          |
| ---------------- | -------- | ------ | -----| ------------------------------------------------------------- |
| allowBackCamera  | Boolean  | false  | 否   | 是否展示切换按钮以允许用户转换到后置摄像头                    |
| showOther        | Boolean  | false  | 否   | 是否显示对端视频流                                            |
| avatarUrl        | String   |        | 否   | 客服头像的图像链接                                            |
| context          | String   |        | 否   | 用于区分业务上下文的透传值                                    |
| success          | Function |        | 否   | 返回用户选择的收货地址信息                                    |
| fail             | Function |        | 否   | 接口调用失败的回调函数                                        |
| complete         | Function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）              |


**回调结果：**

| 回调类型   | errMsg                             | 说明     |
| ---------- | ---------------------------------- | -------- |
| success    | makeVoIPCall:ok                    | 调用成功 |
| fail       | makeVoIPCall:fail cancel           | 用户取消 |
| fail       | makeVoIPCall:fail (detail message) | 调用失败 |

#### 返回参数
| 参数   | 说明                                          |
|--------|-----------------------------------------------|
| errMsg | 调用结果，ok:成功，cancel:用户取消，fail:失败 |

```javascript
wx.makeVoIPCall({
  allowBackCamera: true,
  showOther: true,
  avatarUrl: '..',
  context: '...',
  complete: function(res) {
    console.log(res)
  }
})
```
