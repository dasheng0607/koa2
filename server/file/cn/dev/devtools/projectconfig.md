## 项目配置文件

可以在项目根目录使用 `project.config.json` 文件对项目进行配置。

| 字段名  | 类型 |  说明  |
| -------| ------  | ------ |
| miniprogramRoot | Path String | 指定小程序源码的目录(需为相对路径) |
| qcloudRoot  | Path String | 指定腾讯云项目的目录(需为相对路径)  |
| pluginRoot | Path String | 指定插件项目的目录(需为相对路径)   |
| compileType | String | 编译类型   |
| setting | Object |  项目设置  |
| libVersion | String | 基础库版本 |
| appid | String | 项目的 appid，**只在新建项目时读取** |
| projectname | String | 项目名字，**只在新建项目时读取** |
| packOptions | Object | 打包配置选项     |
| scripts | Object | 自定义预处理  |

compileType 有效值

| 名字   | 说明 |
| ----- | ----- |
| miniprogram | 当前为普通小程序项目  |
| plugin | 当前为小程序插件项目 |

setting 中可以指定以下设置

| 字段名 | 类型  | 说明  |
| ----- | ----- | ----- |
| es6 | Boolean | 是否启用 es6 转 es5 |
| postcss | Boolean | 上传代码时样式是否自动补全 |
| minified | Boolean | 上传代码时是否自动压缩 |
| urlCheck | Boolean | 是否检查安全域名和 TLS 版本 |

scripts 中指定自定义预处理的命令

| 名字   | 说明 |
| ----- | ----- |
| beforeCompile | 预览前预处理命令  |
| beforePreview |  预览前预处理命令 |
| beforeUpload | 上传前预处理命令 |

#### packOptions
`packOptions` 用以配置项目在打包过程中的选项。打包是预览、上传时对项目进行的必须步骤。

目前可以指定 `packOptions.ignore` 字段，用以配置打包时对符合指定规则的文件或文件夹进行忽略，以跳过打包的过程，这些文件或文件夹将不会出现在预览或上传的结果内。

`packOptions.ignore` 为一对象数组，对象元素类型如下：

| 字段名 | 类型  | 说明  |
| ----- | ----- | ----- |
| value | string | 路径或取值 |
| type | string | 类型 |

其中，`type` 可以取的值为 `folder`、`file`、`suffix`、`prefix`，分别对应文件夹、文件、后缀、前缀。

示例配置如下。

```json
{
  "packOptions": {
    "ignore": [{
      "type": "file",
      "value": "test/test.js"
    }, {
      "type": "folder",
      "value": "test"
    }, {
      "type": "suffix",
      "value": ".webp"
    }, {
      "type": "prefix",
      "value": "test-"
    }]
  }
}
```
**注**: `value` 字段的值不支持通配符、正则表达式。若表示文件或文件夹路径，以小程序目录 (`miniprogramRoot`) 为根目录。

**项目配置示例：**

```json
{
  "miniprogramRoot": "./src",
  "qcloudRoot": "./svr",
  "setting": {
    "postcss": true,
    "es6": true,
    "minified": true,
    "urlCheck": false
  },
  "packOptions": {}
}
```
