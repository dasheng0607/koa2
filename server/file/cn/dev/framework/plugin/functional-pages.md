# 插件功能页

插件功能页从小程序基础库版本 {%version('2.1.0')%} 开始支持。

插件不能直接调用 `wx.login` 等较为敏感的接口。在需要访问一些敏感接口时，可以使用插件功能页的方式。使用插件功能页可以实现以下这些功能：

* 获取用户信息，包括 `openid` 和昵称等（相当于 `wx.login` 和 `wx.getUserInfo` 的功能）。
* 支付（相当于 `wx.requestPayment` ）。

需要注意的是：插件使用支付功能，需要进行额外的权限申请，申请位置位于[管理后台](https://mp.weixin.qq.com)的“小程序插件 -> 基本设置 -> 支付能力”设置项中。另外，无论是否通过申请，主体为个人小程序在使用插件时，都无法正常使用插件里的支付功能。

在具体使用功能页时，插件可以在插件的自定义组件中放置一个 `<functional-page-navigator>` 组件，用户在点击这个组件区域时，可以跳转到一个固定的页面，允许用户执行登录或其他操作。

## 激活功能页特性

功能页是 **插件所有者小程序** 中的一个特殊页面。

插件所有者小程序，指的是与插件 AppID 相同的小程序。例如，“小程序示例”小程序开发了一个“小程序示例插件”，无论这个插件被哪个小程序使用，这个插件的插件所有者小程序都是“小程序示例”。

启用插件功能页时，需要在插件所有者小程序 `app.json` 文件中添加 `functionalPages` 定义段，其值为 `true` 。

```json
{
  "functionalPages": true
}
```

注意，新增或改变这个字段时，需要这个小程序发布新版本，才能在正式环境中使用插件功能页。

## 跳转到功能页

在插件需要登录时，可以在插件的自定义组件中放置一个 `<functional-page-navigator>` 组件。

**代码示例：**

```html
<functional-page-navigator name="loginAndGetUserInfo" args="" version="develop" bind:success="loginSuccess">
  <button>登录到插件</button>
</functional-page-navigator>
```

用户在点击这个区域时，会自动跳转到插件所有者小程序的功能页。功能页会提示用户进行登录或其他相应的操作。操作结果会以组件事件的方式返回。

具体用法和支持的功能页列表详见 [组件说明](../../component/functional-page-navigator.md) 。

## 真机开发测试的常规步骤

目前，功能页的跳转目前不支持在开发者工具中调试，请在真机上测试。初次进行真机开发测试时，通常步骤如下。

1. 在开发者工具上的 **普通小程序项目** 模式创建或编辑插件所有者小程序项目，在 `app.json` 中设置 `"functionalPages": true` 来激活功能页特性，并点击“预览”。
2. 用测试用的真机扫一下预览二维码，此时会进入插件所有者小程序，进入后可以直接退出这个小程序。
3. 在开发者工具上另开一个 **插件项目** 来创建或编辑插件，放置 `functional-page-navigator` 组件并将属性设置为 `version="develop"` 。
4. 此时点击预览可以生成插件预览二维码，用测试用的真机扫码即可预览功能页；如果更改了插件代码，通常重复3、4两个步骤即可。
5. 如果过了一段时间之后，跳转功能页时出现“开发版已过期”这样的提示，从第1步开始重试一次。

注意，在插件提审前，需要：

1. 确保已发布设置了 `"functionalPages": true` 的插件所有者小程序；
2. 确保所有的 `functional-page-navigator` 组件属性设置为 `version="release"` 。

## 功能页函数

在使用支付功能页时，插件所有者小程序需要提供一个函数来响应支付请求。这个响应函数应当写在小程序根目录中的 `functional-pages/request-payment.js` 文件中，名为 `beforeRequestPayment` 。如果不提供这段代码，将通过 fail 事件返回失败。

**注意：功能页函数不应 require 其他非 functional-pages 目录中的文件，其他非 functional-pages 目录中的文件也不应 require 这个目录中的文件。这样的 require 调用在未来将不被支持。**

**代码示例：**

```js
// functional-pages/request-payment.js
exports.beforeRequestPayment = function(paymentArgs, callback) {
  paymentArgs // 就是 functional-page-navigator 的 args 属性中 paymentArgs

  // 在这里可以执行一些支付前的参数处理逻辑，包括通知后台调用统一下单接口
  // 小程序 API 也可以调用，如 wx.login 和 wx.getStorage （如同在插件所有者小程序代码中调用这些接口）

  // 在 callback 中需要返回两个参数： err 和 requestPaymentArgs
  // err 应为 null （或者一些失败信息）
  // requestPaymentArgs 将被用于调用 wx.requestPayment
  callback(null, {
    // 这里的参数与 wx.requestPayment 相同，除了 success/fail/complete 不被支持
    timeStamp: timeStamp,
    nonceStr: nonceStr,
    package: package,
    signType: signType,
    paySign: paySign,
  })
}
```

**这个目录和文件应当被放置在插件所有者小程序代码中（而非插件代码中），它是插件所有者小程序的一部分（而非插件的一部分）。** 如果需要新增或更改这段代码，需要发布插件所有者小程序，才能在正式版中生效；需要重新预览插件所有者小程序，才能在开发版中生效。

## 功能页常见问题 FAQ

* Q：如何正确编辑插件所有者小程序？
* A：应该在开发者工具的“小程序”类型项目中编辑，而不是在“插件”类型的项目中编辑。比如，“小程序示例插件”的所有者小程序是“小程序示例”，它们的 AppID 都是 `wxidxxxxxxxxxxxxxx` ，如果是初次开发“小程序示例”小程序，可以在开发者工具中创建一个小程序项目，其 AppID 为 `wxidxxxxxxxxxxxxxx` ；如果之前开发过“小程序示例”小程序，直接打开之前的小程序项目即可。

* Q：点击 `<functional-page-navigator>` 之后没有任何反应。
* A：请检查引用插件的小程序和插件本身是不是同一个 AppID ，如果是，这种情况下使用 `<functional-page-navigator>` 不会有任何反应。

* Q：点击 `<functional-page-navigator>` 之后，展示了一个页面提示“页面不存在”。
* A：这种情况是因为插件所有者小程序没有正确设置 `"functionalPages": true` 。如果 `functional-page-navigator` 的 `version="develop"` ，这部手机需要扫码并进入插件所有者小程序一次；如果 `version="release"` ，请确保包含 `"functionalPages": true` 的插件所有者小程序已被发布。

* Q：点击 `<functional-page-navigator version="develop">` 之后，弹窗提示“小程序开发版已过期”。
* A：遇到这种情况，重新扫码并进入插件所有者小程序一次即可。

* Q：点击 `<functional-page-navigator name="requestPayment">` 之后，展示了一个页面提示“该功能无法使用”。
* A：在使用插件功能页时，小程序不能是个人小程序，同时，插件也需要额外的步骤申请开通插件支付权限（位于 [管理后台](https://mp.weixin.qq.com) -> 小程序插件 -> 基本设置 -> 支付能力 ）。

* Q：点击 `<functional-page-navigator name="requestPayment">` 之后，点击页面中的“支付”按钮，立刻退出了支付功能页。
* A：这通常是因为没有找到功能页函数 `beforeRequestPayment` ，请检查插件所有者小程序的 `functional-pages/request-payment.js` 文件和其中的 `beforeRequestPayment` 函数是否存在。

* Q：点击 `<functional-page-navigator>` 之后，展示了一个仅有返回按钮的页面。
* A：请检查 `<functional-page-navigator>` 的 `name` 属性是否被正确设置。

* Q：开发版可以正常跳转，但审核反馈不能跳转。
* A：请发布设置了 `"functionalPages": true` 的插件所有者小程序，且所有的 `functional-page-navigator` 组件属性设置为 `version="release"` 。

#### Bugs & Tips

* Tip：如果使用插件的小程序就是插件所有者小程序，插件功能页不能使用。
* Bug：在微信版本 6.6.7 中，功能页被拉起时会触发 App 的部分生命周期并使得功能页启动时间变得比较长。在后续的微信版本中这一行为会发生变更，使 App 生命周期不再被触发。
