### wx.chooseContact(OBJECT)

调起选择手机通讯录联系人界面，返回用户选择的联系人信息。

**OBJECT参数说明：**

| 参数       | 类型       | 必填   | 说明                       |
| -------- | -------- | ---- | ------------------------ |
| success  | Function | 否    | 返回用户选择的联系人信息             |
| fail     | Function | 否    | 接口调用失败的回调函数              |
| complete | Function | 否    | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success返回参数说明：**

| 参数        | 说明            |
| --------    | --------------- |
| phoneNumber | 电话号码        |
| displayName | 联系人名称      |
 

**示例代码：**

```javascript
wx.chooseContact({
  success: function(res) {
    var phoneNumber = res.phoneNumber
    var displayName = res.displayName
  }
})
```
