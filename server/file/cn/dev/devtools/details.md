## 运行环境差异

微信小程序运行在三端：iOS、Android 和 用于调试的开发者工具。

三端的脚本执行环境以及用于渲染非原生组件的环境是各不相同的：

- 在 iOS 上，小程序的 javascript 代码是运行在 JavaScriptCore 中，是由 WKWebView 来渲染的，环境有 iOS8、iOS9、iOS10
- 在 Android 上，小程序的 javascript 代码是通过 X5 JSCore来解析，是由 [X5](https://x5.tencent.com/tbs/) 基于 Mobile Chrome 53/57 内核来渲染的
- 在 开发工具上， 小程序的 javascript 代码是运行在 nwjs 中，是由 Chrome Webview 来渲染的

尽管三端的环境是十分相似的，但是还是有些许区别：

- `ES6` 语法支持不一致：语法上开发者可以通过开启 `ES6` 转 `ES5` 的功能来规避。[详情](./project.md#es6-转-es5)

- `wxss` 渲染表现不一致：尽管可以通过开启样式补全来规避大部分的问题 [详情](./project.md#样式补全)，还是建议开发者需要在 iOS 和 Android 上分别检查小程序的真实表现。

### 客户端ES6 API 支持情况

微信小程序已经支持了绝大部分的 ES6 API，具体表格如下：

1. `tip`: TBS 3.0 是指微信小程序 Android 运行环境
1. `tip`: `Array.values` 不支持
1. `tip`: `Proxy` 不支持

| String               | iOS8 | iOS9 | iOS10 |  TBS3.0 |
| -------------------- | ---- | ---- | ----- |  ------ |
| codePointAt          |      |      |       |        |
| normalize            |  ✘   |  ✘   |       |        |
| includes             |      |      |       |        |
| startsWith           |      |      |       |        |
| endsWith             |      |      |       |        |
| repeat               |      |      |       |        |
| String.fromCodePoint |      |      |       |        |

| Array     | iOS8 | iOS9 | iOS10 |  TBS3.0 |
| ---------- | ---- | ---- | ----- |  ------ |
| copyWithin |      |      |       |        |
| find       |      |      |       |        |
| findIndex  |      |      |       |        |
| fill       |      |      |       |        |
| entries    |      |      |       |        |
| keys       |      |      |       |        |
| values     | ✘    |      |       | ✘      |
| includes   | ✘    |      |       |        |
| Array.from |      |      |       |        |
| Array.of   |      |      |       |        |

| Number        | iOS8 | iOS9 | iOS10 |  TBS3.0 |
| ------------- | ---- | ---- | ----- |  ------ |
| isFinite      |      |      |       |        |
| isNaN         |      |      |       |        |
| parseInt      |      |      |       |        |
| parseFloat    |      |      |       |        |
| isInteger     |      |      |       |        |
| EPSILON       |      |      |       |        |
| isSafeInteger |      |      |       |        |

| Math   | iOS8 | iOS9 | iOS10 |  TBS3.0 |
| ------ | ---- | ---- | ----- |  ------ |
| trunc  |      |      |       |        |
| sign   |      |      |       |        |
| cbrt   |      |      |       |        |
| clz32  |      |      |       |        |
| imul   |      |      |       |        |
| fround |      |      |       |        |
| hypot  |      |      |       |        |
| expm1  |      |      |       |        |
| log1p  |      |      |       |        |
| log10  |      |      |       |        |
| log2   |      |      |       |        |
| sinh   |      |      |       |        |
| cosh   |      |      |       |        |
| tanh   |      |      |       |        |
| asinh  |      |      |       |        |
| acosh  |      |      |       |        |
| atanh  |      |      |       |        |

| Object                   | iOS8 | iOS9 | iOS10 |  TBS3.0 |
| ------------------------ | ---- | ---- | ----- |  ------ |
| is                       |      |      |       |        |
| assign                   |      |      |       |        |
| getOwnPropertyDescriptor |      |      |       |        |
| keys                     |      |      |       |        |
| getOwnPropertyNames      |      |      |       |        |
| getOwnPropertySymbols    |      |      |       |        |

| Other   | iOS8 | iOS9 | iOS10 | TBS3.0 |
| ------- | ---- | ---- | ----- |  ------ |
| Symbol  |      |      |       |        |
| Set     |      |      |       |        |
| Map     |      |      |       |        |
| Proxy   | ✘    | ✘    |       | ✘      |
| Reflect |      |      |       |        |
| Promise |      |      |       |        |
