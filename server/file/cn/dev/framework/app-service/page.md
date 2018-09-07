# 页面 Page

`Page(Object)` 函数用来注册一个页面。接受一个 `Object` 类型参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

**Object 参数说明：**

| 属性              | 类型     | 描述                                       |
| ----------------- | -------- | ---------------------------------------- |
| [data](#data) | Object | 页面的初始数据                                  |
| [onLoad](#onloadobject-query) | Function | 生命周期回调—监听页面加载                           |
| [onShow](#onshow)  | Function | 生命周期回调—监听页面显示                           |
| [onReady](#onready)| Function | 生命周期回调—监听页面初次渲染完成                       |
| [onHide](#onhide)  | Function | 生命周期回调—监听页面隐藏                           |
| [onUnload](#onunload) | Function | 生命周期回调—监听页面卸载                           |
| [onPullDownRefresh](#onpulldownrefresh) | Function | 监听用户下拉动作                     |
| [onReachBottom](#onreachbottom)     | Function | 页面上拉触底事件的处理函数                            |
| [onShareAppMessage](#onshareappmessageobject) | Function | 用户点击右上角转发                                |
| [onPageScroll](#onpagescrollobject)      | Function | 页面滚动触发事件的处理函数                            |
| [onTabItemTap](#ontabitemtapobject)      | Function | 当前是 tab 页时，点击 tab 时触发                      |
| 其他              | Any      | 开发者可以添加任意的函数或数据到 `Object` 参数中，在页面的函数中用 `this` 可以访问 |

**Object 内容在页面加载时会进行一次深拷贝，需考虑数据大小对页面加载的开销**

**示例代码：**

```javascript
//index.js
Page({
  data: {
    text: "This is page data."
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})
```

### data

`data` 是页面第一次渲染使用的**初始数据**。

页面加载时，`data` 将会以`JSON`字符串的形式由逻辑层传至渲染层，因此`data`中的数据必须是可以转成`JSON`的类型：字符串，数字，布尔值，对象，数组。

渲染层可以通过 [WXML](../view/wxml/index.md) 对数据进行绑定。

**示例代码：**

{% minicode('2PeBsKmn6EZ9') %}

```html
<view>{{text}}</view>
<view>{{array[0].msg}}</view>
```

```javascript
Page({
  data: {
    text: 'init data',
    array: [{msg: '1'}, {msg: '2'}]
  }
})
```

### 生命周期回调函数

生命周期的触发以及页面的路由方式[详见](./route.md)

#### onLoad(Object query)
页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。

**参数说明**

| 名称 | 类型     | 说明                    |
| ------| ------ | ----------------------- |
| query | Object | 打开当前页面路径中的参数 |

#### onShow()
页面显示/切入前台时触发。

#### onReady()
页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  
注意：对界面内容进行设置的 API 如`wx.setNavigationBarTitle`，请在`onReady`之后进行。详见[生命周期](#生命周期)

#### onHide()
页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，小程序切入后台等。

#### onUnload()
页面卸载时触发。如`redirectTo`或`navigateBack`到其他页面时。

### 页面事件处理函数

#### onPullDownRefresh()
监听用户下拉刷新事件。

- 需要在`app.json`的[`window`](../config.md#window)选项中或[页面配置](../config.md#页面配置)中开启`enablePullDownRefresh`。
- 可以通过[`wx.startPullDownRefresh`](../../api/pulldown.md#wxstartpulldownrefreshobject)触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
- 当处理完数据刷新后，[`wx.stopPullDownRefresh`](../../api/pulldown.md#wxstoppulldownrefresh)可以停止当前页面的下拉刷新。

#### onReachBottom()
监听用户上拉触底事件。

- 可以在`app.json`的[`window`](../config.md#window)选项中或[页面配置](../config.md#页面配置)中设置触发距离`onReachBottomDistance`。
- 在触发距离内滑动期间，本事件只会被触发一次。

#### onPageScroll(Object)
监听用户滑动页面事件。

**Object 参数说明：**

| 属性        | 类型     | 说明                  |
| --------- | ------ | ------------------- |
| scrollTop | Number | 页面在垂直方向已滚动的距离（单位px） |

#### onShareAppMessage(Object)
监听用户点击页面内转发按钮（`<button>` 组件 `open-type="share"`）或右上角菜单“转发”按钮的行为，并自定义转发内容。

**注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮**

**Object 参数说明：**

| 参数   | 类型   | 说明                                                                           | 最低版本               |
|--------|--------|--------------------------------------------------------------------------------|------------------------|
| from   | String | 转发事件来源。<br/>`button`：页面内转发按钮；<br/>`menu`：右上角转发菜单        | {% version('1.2.4') %} |
| target | Object | 如果 `from` 值是 `button`，则 `target` 是触发这次转发事件的 `button`，否则为 `undefined` | {% version('1.2.4') %} |
| webViewUrl | String | 页面中包含`<web-view>`组件时，返回当前`<web-view>`的url | {% version('1.6.4') %} |


此事件需要 return 一个 Object，用于自定义转发内容，返回内容如下：

**自定义转发内容**

| 字段     | 说明                                                                                                | 默认值                                    | 最低版本               |
|----------|----------------------------------------------------------------------------------------------------|-------------------------------------------|------------------------|
| title    | 转发标题                                                                                            | 当前小程序名称                            |                        |
| path     | 转发路径                                                                                            | 当前页面 path ，必须是以 / 开头的完整路径 |                        |
| imageUrl | 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。          |    使用默认截图      | {% version('1.5.0') %} |

**示例代码**

{% minicode('mffqUKmr6fZU') %}

```javascript
Page({
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
})
```

#### onTabItemTap(Object)
{% version('1.9.0', 'text') %}

点击 tab 时触发

**Object 参数说明：**

| 参数   | 类型   | 说明                                | 最低版本               |
|--------|--------|----------------------------------|------------------------|
| index   | String | 被点击tabItem的序号，从0开始        | {% version('1.9.0') %} |
| pagePath | String | 被点击tabItem的页面路径 | {% version('1.9.0') %} |
| text | String | 被点击tabItem的按钮文字 | {% version('1.9.0') %} |


**示例代码：**

```javascript
Page({
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  }
})
```

### 组件事件处理函数

`Page` 中还可以定义组件事件处理函数。在渲染层的组件中加入[事件绑定](../view/wxml/event.md)，当事件被触发时，就会执行 Page 中定义的事件处理函数。

**示例代码：**

{% minicode('vUf6fKmX64Zn') %}

```html
<view bindtap="viewTap"> click me </view>
```

```javascript
Page({
  viewTap: function() {
    console.log('view tap')
  }
})
```

### Page.prototype.route
{% version('1.2.0', 'text') %}

到当前页面的路径，类型为`String`。

### Page.prototype.setData(Object data, Function callback)

`setData` 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 `this.data` 的值（同步）。

#### 参数说明
| 字段       | 类型       | 必填   | 描述       | 最低版本                 |
| -------- | -------- | ---- | -------- | -------------------- |
| data     | Object   | 是    | 这次要改变的数据 |                      |
| callback | Function | 否    | setData引起的界面更新渲染完毕后的回调函数   | {% version('1.5.0') %} |

`Object` 以 `key: value` 的形式表示，将 `this.data` 中的 `key` 对应的值改变成 `value`。

**其中 `key` 可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性，如 `array[2].message`，`a.b.c.d`，并且不需要在 this.data 中预先定义。**

**注意：**

1. **直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致**。
1. 仅支持设置可 JSON 化的数据。
1. 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
1. 请不要把 data 中任何一项的 value 设为 `undefined` ，否则这一项将不被设置并可能遗留一些潜在问题。

**示例代码：**

{% minicode('HofnzKmb6fZe') %}

```html
<!--index.wxml-->
<view>{{text}}</view>
<button bindtap="changeText"> Change normal data </button>
<view>{{num}}</view>
<button bindtap="changeNum"> Change normal num </button>
<view>{{array[0].text}}</view>
<button bindtap="changeItemInArray"> Change Array data </button>
<view>{{object.text}}</view>
<button bindtap="changeItemInObject"> Change Object data </button>
<view>{{newField.text}}</view>
<button bindtap="addNewField"> Add new data </button>
```

```js
//index.js
Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{text: 'init data'}],
    object: {
      text: 'init data'
    }
  },
  changeText: function() {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function() {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function() {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text':'changed data'
    })
  },
  changeItemInObject: function(){
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function() {
    this.setData({
      'newField.text': 'new data'
    })
  }
})
```


## 生命周期

**以下内容你不需要立马完全弄明白，不过以后它会有帮助。**

下图说明了 Page 实例的生命周期。

![](../../image/mina-lifecycle.png#max-height:1000px;height:1000px)
