#### contact-button

客服会话按钮，用于在页面上显示一个客服会话按钮，用户点击该按钮后会进入客服会话。

| 属性名       | 类型   | 默认值       | 说明                                                          |
|--------------|--------|--------------|---------------------------------------------------------------|
| size         | Number | 18           | 会话按钮大小，有效值 18-27，单位：px                          |
| type         | String | default-dark | 会话按钮的样式类型                                            |
| session-from | String |              | 用户从该按钮进入会话时，开发者将收到带上本参数的事件推送。本参数可用于区分用户进入客服会话的来源。 |


**type 有效值：**

| 值            | 说明   |
| ------------- | ------ |
| default-dark  |        |
| default-light |        |

**示例代码**
```html
<contact-button 
  type="default-light" 
  size="20"
  session-from="weapp"
>
</contact-button>
```

相关API：[详见客服消息接口文档](../api/custommsg/receive.md)  
相关组件：[button](./button.md) 组件通过设置 open-type="contact" 亦可进入客服会话
