开发者工具提供了命令行与 HTTP 服务两种接口供外部调用，开发者可以通过命令行或 HTTP 请求指示工具进行登录、预览、上传等操作。

## HTTP

http 服务在工具启动后自动开启，HTTP 服务端口号在用户目录下记录，可通过检查用户目录、检查用户目录下是否有端口文件及尝试连接来判断工具是否安装/启动。

端口号文件位置：

macOS : `~/Library/Application Support/微信web开发者工具/Default/.ide`

Windows :  `~/AppData/Local/微信web开发者工具/User Data/Default/.ide`

### 1. 打开工具或指定项目

接口定义：

URL： /open

HTTP 方法: GET

| URL 参数 | 必填 | 说明 |
| :-------: | ------  | ------ |
| projectpath | 否 | 打开指定路径中的项目。如项目已打开，自动刷新项目。如项目未创建，自动创建并打开项目 |

示例：
```bash
# 打开工具
http://127.0.0.1:端口号/open
# 打开/刷新项目
http://127.0.0.1:端口号/open?projectpath=项目全路径
```

注意：
- 项目路径中必须含正确格式的 project.config.json 且其中有 appid 和 projectname 字段。
- 项目路径需经 URL encode

### 2. 登录

接口定义：

URL：/login

HTTP 方法：GET

| URL 参数 | 必填 | 说明 |
| :-------: | ------  | ------ |
| format | 否 | 指定登录二维码返回格式，可选值有 image、base64、terminal，默认 image。图片格式为 png |
| qroutput | 否 | 指定文件路径，在文件写入二维码数据。如指定，二维码将被写入指定路径的文件内，如未指定，二维码将作为请求相应体返回 |

示例：
```bash
# 登录，返回图片格式的二维码
http://127.0.0.1:端口号/login
# 登录，取 base64 格式二维码
http://127.0.0.1:端口号/login?format=base64
# 登录，取 base64 格式二维码，并写入 /Users/username/logincode.txt
http://127.0.0.1:端口号/login?format=base64&qroutput=%2FUsers%2Fusername%2Flogincode.txt
```


### 3. 预览

接口定义：

URL：/preview

HTTP 方法：GET

| URL 参数 | 必填 | 说明 |
| :-------: | ------  | ------ |
| projectpath | 是 | 预览指定路径中的项目。如项目已打开，自动刷新项目。如项目未创建，自动创建并预览项目 |
| format | 否 | 指定登录二维码返回格式，可选值有 image、base64、terminal，默认 image。图片格式为 png |
| qroutput | 否 | 指定文件路径，在文件中写入二维码数据。如指定，二维码将被写入指定路径的文件内，如未指定，二维码将作为请求相应体返回 |
| infooutput | 否 | 指指定后，会将本次预览的额外信息以 json 格式输出至指定路径，如代码包大小、分包大小信息。 |

示例：
```bash
# 预览路径为 /Users/username/demo 的项目，返回图片格式的二维码
http://127.0.0.1:端口号/preview?projectpath=%2FUsers%2Fusername%2Fdemo
# 预览路径为 /Users/username/demo 的项目，返回 base64 格式的二维码
http://127.0.0.1:端口号/preview?projectpath=%2FUsers%2Fusername%2Fdemo&format=base64
# 预览路径为 /Users/username/demo 的项目，返回 base64 格式的二维码，并写入 /Users/username/logincode.txt
http://127.0.0.1:端口号/preview?projectpath=%2FUsers%2Fusername%2Fdemo&format=base64&qroutput=%2FUsers%2Fusername%2Flogincode.txt
# 预览路径为 /Users/username/demo 的项目，返回图片格式的二维码，并将预览信息输出至 /Users/username/info.json
http://127.0.0.1:端口号/preview?projectpath=%2FUsers%2Fusername%2Fdemo&infooutput=%2Users%2username%2info.json
```

### 4. 上传

接口定义：

URL：/upload

HTTP 方法：GET

| URL 参数 | 必填 | 说明 |
| :-------: | ------  | ------ |
| projectpath | 是 | 上传指定路径中的项目 |
| version | 是 | 版本号 |
| desc | 否 | 本次上传的版本备注 |
| infooutput | 否 | 指定后，会将本次上传的额外信息以 json 格式输出至指定路径，如代码包大小、分包大小信息。 |

示例：
```bash
# 上传路径为 /Users/username/demo 的项目，指定版本号为 v1.0.0
http://127.0.0.1:端口号/upload?projectpath=%2FUsers%2Fusername%2Fdemo&version=v1.0.0
# 上传路径为 /Users/username/demo 的项目，指定版本号为 v1.0.0，并带上备注
http://127.0.0.1:端口号/upload?projectpath=%2FUsers%2Fusername%2Fdemo&version=v1.0.0&desc=test
# 上传路径为 /Users/username/demo 的项目，指定版本号为 v1.0.0，并将上传信息输出至 /Users/username/info.json 
http://127.0.0.1:端口号/upload?projectpath=%2FUsers%2Fusername%2Fdemo&version=v1.0.0&infooutput=%2Users%2username%2info.json
```

### 5. 自动化测试

接口定义：

URL：/test

HTTP 方法：GET

| URL 参数 | 必填 | 说明 |
| :-------: | ------  | ------ |
| projectpath | 是 | 测试指定路径中的项目 |

示例：
```bash
# 提交路径为 /Users/username/demo 的项目进行测试
http://127.0.0.1:端口号/test?projectpath=%2FUsers%2Fusername%2Fdemo
```

### 请求响应

正常情况下 HTTP 相应状态码为 200，错误时 400，返回如下格式的 JSON 字符串：
```javascript
{
  "code": 40000,
  "error": "原因"
}
```
