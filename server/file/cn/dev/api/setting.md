### wx.openSetting(OBJECT)
{% version('1.1.0', 'text') %}

>  此接口即将废弃，请使用 [&lt;button&gt;](../component/button.md) 组件来使用此功能

调起客户端小程序设置界面，返回用户设置的操作结果。

注：设置界面只会出现小程序已经向用户请求过的权限。

**Object 参数说明：**

| 参数     | 类型     | 必填 | 说明                                               |
|----------|----------|------|----------------------------------------------------|
| success  | Function | 否   | 接口调用成功的回调函数，返回内容详见返回参数说明。 |
| fail     | Function | 否   | 接口调用失败的回调函数                             |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）   |

**success返回参数说明：**

| 参数        | 类型   | 说明                                                                                                                   |
|-------------|--------|------------------------------------------------------------------------------------------------------------------------|
| authSetting | Object | 用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权，详见 [scope 列表](./authorize-index.md#scope-列表) |

**示例代码：**

```javascript
wx.openSetting({
  success: (res) => {
    /*
     * res.authSetting = {
     *   "scope.userInfo": true,
     *   "scope.userLocation": true
     * }
     */
  }
})
```

### wx.getSetting(OBJECT)
{% version('1.2.0', 'text') %}

获取用户的当前设置。

注：返回值中只会出现小程序已经向用户请求过的权限。

**Object 参数说明：**

| 参数     | 类型     | 必填 | 说明                                               |
|----------|----------|------|----------------------------------------------------|
| success  | Function | 否   | 接口调用成功的回调函数，返回内容详见返回参数说明。 |
| fail     | Function | 否   | 接口调用失败的回调函数                             |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）   |

**success返回参数说明：**

| 参数        | 类型   | 说明                                                                                                                   |
|-------------|--------|------------------------------------------------------------------------------------------------------------------------|
| authSetting | Object | 用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权，详见 [scope 列表](./authorize-index.md#scope-列表)|

**示例代码：**

```javascript
wx.getSetting({
  success: (res) => {
    /*
     * res.authSetting = {
     *   "scope.userInfo": true,
     *   "scope.userLocation": true
     * }
     */
  }
})
```
