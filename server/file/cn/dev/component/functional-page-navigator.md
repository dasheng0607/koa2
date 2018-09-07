#### functional-page-navigator

这个组件从小程序基础库版本 {%version('2.1.0')%} 开始支持。

仅在插件的自定义组件中有效，用于跳转到插件功能页。

| 属性名             | 类型      | 默认值            | 说明                                                       | 最低版本              |
| ------------------ | --------- | ----------------- | -------------------------------------------------------- | -------------------- |
| version            | String    | release           | 跳转到的小程序版本，有效值 `develop`（开发版），`trial`（体验版），`release`（正式版）；**线上版本必须设置为 `release` ** | {%version('2.1.0')%} |
| name               | String    |                   | 要跳转到的功能页                                           | {%version('2.1.0')%} |
| args               | Object    | null              | 功能页参数，参数格式与具体功能页相关                         | {%version('2.1.0')%} |
| bindsuccess        | EventHandle |                 | 功能页返回，且操作成功时触发， detail 格式与具体功能页相关     | {%version('2.1.0')%} |
| bindfail           | EventHandle |                 | 功能页返回，且操作失败时触发， detail 格式与具体功能页相关     | {%version('2.1.0')%} |

**name 有效值：**

| 值                  | 说明                                              | 接受的 args                                          | success 返回的 detail | fail 返回的 detail | 最低版本 |
| ------------------- | ------------------------------------------------- | ---------------------------------------------------- | -------------------- | ------------------ | ------- |
| loginAndGetUserInfo | 获取用户信息，对应 `wx.login` 和 `wx.getUserInfo` | 与 `wx.getUserInfo` 接受的 args 相同（除回调函数外） | `wx.login` 和 `wx.getUserInfo` 的结果的并集 | 与 `wx.login` 或 `wx.getUserInfo` 相同 | {%version('2.1.0')%} |
| requestPayment      | 支付，对应 `wx.requestPayment`                    | `fee` 字段，表示需要显示在页面中的金额，单位为分； `paymentArgs` 字段，任意数据，传递给功能页中的响应函数 | 与 `wx.requestPayment` 相同 | 与 `wx.requestPayment` 相同 | {%version('2.1.0')%} |

**示例代码：**

```html
<!-- sample.wxml -->
<functional-page-navigator name="loginAndGetUserInfo" bind:success="loginSuccess">
  <button>登录到插件</button>
</functional-page-navigator>
```

```js
// redirect.js navigator.js
Component({
  methods: {
    loginSuccess: function(e) {
      console.log(e.detail.code) // wx.login 的 code
      console.log(e.detail.userInfo) // wx.getUserInfo 的 userInfo
    }
  }
})
```

**Tips:**

* 功能页是插件所有者小程序中的一个特殊页面，开发者不能自定义这个页面的外观。
* 在功能页展示时，一些与界面展示相关的接口将被禁用（接口调用返回 fail ）。
* 这个组件本身可以在开发者工具中使用，但功能页的跳转目前不支持在开发者工具中调试，请在真机上测试。
