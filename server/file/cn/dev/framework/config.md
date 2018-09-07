# 全局配置

`app.json`文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。

以下是一个包含了部分常用配置选项的 `app.json` ：
```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/index"
  ],
  "window": {
    "navigationBarTitleText": "Demo"
  },
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    }, {
      "pagePath": "pages/logs/logs",
      "text": "日志"
    }]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": true
}
```

#### app.json 配置项列表

| 属性                                | 类型       | 必填  | 描述            |
| --------------------------------- | ----------- | ---- | ------------- |
| [pages](#pages)                   | String Array| 是   | 页面路径列表  |
| [window](#window)                 | Object      | 否   | 全局的默认窗口表现   |
| [tabBar](#tabbar)                 | Object      | 否   | 底部 `tab` 栏的表现   |
| [networkTimeout](#networktimeout) | Object      | 否   | 网络超时时间        |
| [debug](#debug)                   | Boolean     | 否   | 是否开启 debug 模式，默认关闭 |
| [functionalPages](#functionalPages) | Boolean   | 否   | 是否启用插件功能页，默认关闭 |
| [subPackages](#subPackages)         | Object Array | 否   | 分包结构配置        |
| [workers](#workers)                 | String    | 否   | `Worker` 代码放置的目录 |


#### pages

用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径+文件名 信息。文件名不需要写文件后缀，框架会自动去寻找对于位置的 `.json`, `.js`, `.wxml`, `.wxss` 四个文件进行处理。

**数组的第一项代表小程序的初始页面（首页）。小程序中新增/减少页面，都需要对 pages 数组进行修改。**

如开发目录为：

```
├── app.js
├── app.json
├── app.wxss
├── pages
│   │── index
│   │   ├── index.wxml
│   │   ├── index.js
│   │   ├── index.json
│   │   └── index.wxss
│   └── logs
│       ├── log.wxml
│       └── log.js
└── utils
```

则需要在 app.json 中写

```json
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ]
}
```

### window

用于设置小程序的状态栏、导航条、标题、窗口背景色。

| 属性                          | 类型     | 默认值   | 描述                                                 | 最低版本        |
|------------------------------|----------|---------|------------------------------------------------------------------------------------------| ----------------- |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 `#000000`                                                              |                   |
| navigationBarTextStyle       | String   | white   | 导航栏标题颜色，仅支持 `black` / `white`                                                       |                   |
| navigationBarTitleText       | String   |         | 导航栏标题文字内容                                                                       |                   |
| navigationStyle              | String   | default | 导航栏样式，仅支持以下值：<br/>`default` 默认样式<br/> `custom` 自定义导航栏，只保留右上角胶囊按钮   | 微信版本 6.6.0    |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                                                             |                   |
| backgroundTextStyle          | String   | dark    | 下拉 loading 的样式，仅支持 `dark` / `light`                                        |                   |
| backgroundColorTop           | String   | #ffffff | 顶部窗口的背景色，仅 iOS 支持                                                            | 微信版本 6.5.16   |
| backgroundColorBottom        | String   | #ffffff | 底部窗口的背景色，仅 iOS 支持                                                            | 微信版本 6.5.16   |
| enablePullDownRefresh        | Boolean  | false   | 是否全局开启下拉刷新。<br/>详见 [Page.onPullDownRefresh](./app-service/page.md#onpulldownrefresh) |
| onReachBottomDistance        | Number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为px。<br/>详见 [Page.onReachButom](./app-service/page.md#onreachbottom) |


**注：HexColor（十六进制颜色值），如"#ff00ff"**

**注：navigationStyle 只在 `app.json` 中生效。开启 custom 后，低版本客户端需要做好兼容。开发者工具基础库版本切到 1.7.0（不代表最低版本，只供调试用）可方便切到旧视觉**

如 app.json ：

```json
{
  "window":{
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "微信接口功能演示",
    "backgroundColor": "#eeeeee",
    "backgroundTextStyle": "light"
  }
}
```

![](../image/config.jpg#width:600px)

### tabBar

如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

| 属性            | 类型     | 必填 | 默认值 | 描述                                                 |
|-----------------|----------|------|--------|------------------------------------------------------|
| color           | HexColor | 是   |        | tab 上的文字默认颜色                                 |
| selectedColor   | HexColor | 是   |        | tab 上的文字选中时的颜色                             |
| backgroundColor | HexColor | 是   |        | tab 的背景色                                         |
| borderStyle     | String   | 否   | black  | tabbar上边框的颜色， 仅支持 `black` / `white`              |
| list            | Array    | 是   |        | tab 的列表，详见 `list` 属性说明，最少2个、最多5个 tab |
| position        | String   | 否   | bottom | tabBar的位置，仅支持 `bottom` / `top`                                   |

其中 list 接受一个数组，**只能配置最少2个、最多5个 tab**。tab 按数组的顺序排序，每个项都是一个对象，其属性值如下：

| 属性             | 类型   | 必填 | 说明                                                                                             |
|------------------|--------|------|--------------------------------------------------------------------------------------------------|
| pagePath         | String | 是   | 页面路径，必须在 pages 中先定义                                                                  |
| text             | String | 是   | tab 上按钮文字                                                                                   |
| iconPath         | String | 否   | 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，不支持网络图片。<br/>**当 `postion` 为 `top` 时，不显示 icon。** |
| selectedIconPath | String | 否   | 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，不支持网络图片。<br/>**当 `postion` 为 `top` 时，不显示 icon。** |


![](../image/tabbar.png)

### networkTimeout

各类网络请求的超时时间，单位均为毫秒。

| 属性           | 类型  | 必填   | 默认值| 说明                         |
| ------------- | ------ | ---- |---- | -------------------------- |
| request       | Number | 否  | 60000 | [wx.request](../api/network-request.md) 的超时时间，单位毫秒。      |
| connectSocket | Number | 否  | 60000 | [wx.connectSocket](../api/network-socket.md) 的超时时间，单位毫秒。 |
| uploadFile    | Number | 否  | 60000 | [wx.uploadFile](../api/network-file.md#wxuploadfileobject) 的超时时间，单位毫秒。   |
| downloadFile  | Number | 否  | 60000 | [wx.downloadFile](../api/network-file.md#wxdownloadfileobject) 的超时时间，单位毫秒。 |

### debug

可以在开发者工具中开启 `debug` 模式，在开发者工具的控制台面板，调试信息以 `info` 的形式给出，其信息有Page的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题。

### functionalPages
{% version('2.1.0', 'text') %}
启用[插件功能页](./plugin/functional-pages.md)时，插件所有者小程序需要设置其 `functionalPages` 为 `true`。

### subPackages

> 微信客户端 6.6.0 ，基础库 1.7.3 及以上版本支持

启用[分包加载](./subpackages.md)时，声明项目分包结构。

### workers

{% version('1.9.90', text) %}

使用 [Worker](./workers.md) 处理多线程任务时，设置 `Worker` 代码放置的目录

# 页面配置

每一个小程序页面也可以使用`.json`文件来对本页面的窗口表现进行配置。

页面的配置只能设置 `app.json` 中部分 `window` 配置项的内容，页面中配置项会覆盖 `app.json` 的 `window` 中相同的配置项。

#### 页面配置项列表
| 属性                         | 类型     | 默认值  | 描述                                                                                     |
|------------------------------|----------|---------|------------------------------------------------------------------------------------------|
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 `#000000`                                                              |
| navigationBarTextStyle       | String   | white   | 导航栏标题颜色，仅支持 `black` / `white`                                                       |
| navigationBarTitleText       | String   |         | 导航栏标题文字内容                                                                       |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                                                             |
| backgroundTextStyle          | String   | dark    | 下拉 loading 的样式，仅支持 `dark` / `light`                                        |
| enablePullDownRefresh        | Boolean  | false   | 是否全局开启下拉刷新。<br/>详见 [Page.onPullDownRefresh](./app-service/page.md#onpulldownrefresh) |
| onReachBottomDistance        | Number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为px。<br/>详见 [Page.onReachButom](./app-service/page.md#onreachbottom) |
| disableScroll                | Boolean  | false   | 设置为 `true` 则页面整体不能上下滚动；只在页面配置中有效，无法在 `app.json` 中设置该项 |

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "微信接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```

> 页面的`.json`只能设置 `window` 相关的配置项，以决定本页面的窗口表现，所以无需写 `window` 这个键。

