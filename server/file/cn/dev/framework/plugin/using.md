# 使用插件

## 申请使用插件

在使用插件前，首先要在小程序管理后台的“设置-第三方服务-插件管理”中添加插件。开发者可登录小程序管理后台，通过 appId 查找插件并添加。插件开发者通过申请后，方可在小程序中使用相应的插件。

## 引入插件代码包

对于插件的使用者，使用插件前要在 `app.json` 中声明需要使用的插件，例如：

```json
{
  "plugins": {
    "myPlugin": {
      "version": "1.0.0",
      "provider": "wxxxxxxxxxxxxxxxxx"
    }
  }
}
```

如上例所示， `plugins` 定义段中可以包含多个插件声明，每个插件声明中都必须指明插件的 appid 和需要使用的版本号。

## 使用插件的 js 接口

在引入插件代码包之后，就可以在这个小程序中使用插件提供的自定义组件或者 js 接口。

如果需要使用插件的 js 接口，可以使用 `requirePlugin` 方法：

```js
var myPluginInterface = requirePlugin('myPlugin')

myPluginInterface.hello()
```

## 使用插件的自定义组件

使用插件提供的自定义组件，和使用普通自定义组件的方式相仿。在 `json` 文件定义需要引入的自定义组件时，使用 `plugin://` 协议即可，例如：

```json
{
  "usingComponents": {
    "hello-component": "plugin://myPlugin/hello-component"
  }
}
```

出于对插件的保护，插件提供的自定义组件在使用上有一定的限制：

* 页面中的 `this.selectComponent` 接口无法获得插件的自定义组件实例对象；
* `wx.createSelectorQuery` 等接口的 `>>>` 选择器无法选入插件内部。

## 使用插件的页面

插件的页面从小程序基础库版本 {%version('2.1.0')%} 开始支持。

需要跳转到插件页面时， `url` 应使用 `plugin://` 前缀。

**代码示例：**

```html
<navigator url="plugin://myPlugin/hello-page">
  Go to pages/hello-page!
</navigator>
```
