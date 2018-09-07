关于小程序中网络相关API的说明
==========

**网络API列表：**

| API                                      | 说明            |
| ---------------------------------------- | ------------- |
| [wx.request](./network-request.md)       | 发起网络请求        |
| [wx.uploadFile](./network-file.md#wxuploadfileobject) | 上传文件          |
| [wx.downloadFile](./network-file.md#wxdownloadfileobject) | 下载文件          |
| [wx.connectSocket](./network-socket.md#wxconnectsocketobject) | 创建 WebSocket 连接 |
| [wx.onSocketOpen](./network-socket.md#wxonsocketopencallback) | 监听 WebSocket 打开 |
| [wx.onSocketError](./network-socket.md#wxonsocketerrorcallback) | 监听 WebSocket 错误 |
| [wx.sendSocketMessage](./network-socket.md#wxsendsocketmessageobject) | 发送 WebSocket 消息 |
| [wx.onSocketMessage](./network-socket.md#wxonsocketmessagecallback) | 接受 WebSocket 消息 |
| [wx.closeSocket](./network-socket.md#wxclosesocket) | 关闭 WebSocket 连接 |
| [wx.onSocketClose](./network-socket.md#wxonsocketclosecallback) | 监听 WebSocket 关闭 |


在小程序中使用网络相关的 API 时，需要注意下列问题，请开发者提前了解。

## 1. 服务器域名配置

每个微信小程序需要事先设置一个通讯域名，小程序可以跟指定的域名与进行网络通信。包括普通 HTTPS 请求（`request`）、上传文件（`uploadFile`）、下载文件（`downloadFile`) 和 WebSocket 通信（`connectSocket`）

### 配置流程

服务器域名请在 `小程序后台-设置-开发设置-服务器域名` 中进行配置，配置时需要注意：
- 域名只支持 `https` (`request`、`uploadFile`、`downloadFile`) 和 `wss` (`connectSocket`) 协议；
- 域名不能使用 IP 地址或 localhost
- 域名必须经过 ICP 备案；
- **出于安全考虑，`api.weixin.qq.com` 不能被配置为服务器域名，相关API也不能在小程序内调用。**开发者应将 appsecret 保存到后台服务器中，通过服务器使用 appsecret 获取 accesstoken，并调用相关 API。
- 对于每个接口，分别可以配置最多 20 个域名

### HTTPS 证书
小程序必须使用 HTTPS 请求。小程序内会对服务器域名使用的 HTTPS 证书进行校验，如果校验失败，则请求不能成功发起。由于系统限制，不同平台对于证书要求的严格程度不同。为了保证小程序的兼容性，建议开发者按照最高标准进行证书配置，并使用相关工具检查现有证书是否符合要求。

对证书要求如下：
- HTTPS 证书必须有效。证书必须被系统信任，部署SSL证书的网站域名必须与证书颁发的域名一致，证书必须在有效期内;
- `iOS` 不支持自签名证书;
- `iOS` 下证书必须满足苹果  [App Transport Security (ATS)](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) 的要求;
- TLS 必须支持 1.2 及以上版本。部分旧 `Android` 机型还未支持 TLS 1.2，请确保 HTTPS 服务器的 TLS 版本支持1.2及以下版本;
- 部分 CA 可能不被操作系统信任，请开发者在选择证书时注意小程序和各系统的相关通告。
    - [Chrome 56/57 内核对 WoSign、StartCom 证书限制周知](http://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=800026caeb042e45681583652b70910a)

### 跳过域名校验
在微信开发者工具中，可以临时开启 `开发环境不校验请求域名、TLS版本及HTTPS证书` 选项，跳过服务器域名的校验。此时，在微信开发者工具中及手机开启调试模式时，不会进行服务器域名的校验。

**在服务器域名配置成功后，建议开发者关闭此选项进行开发，并在各平台下进行测试，以确认服务器域名配置正确。**

> 如果手机上出现 “打开调试模式可以发出请求，关闭调试模式无法发出请求” 的现象，请确认是否跳过了域名校验，并确认服务器域名和证书配置是否正确。


## 2. 关于请求
- 默认超时时间和最大超时时间都是 **60s**
- `request`、`uploadFile`、`downloadFile` 的最大并发限制是 **10** 个
- 网络请求的 `referer`  header 不可设置。其格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 `{appid}` 为小程序的 appid，`{version}` 为小程序的版本号，版本号为 `0` 表示为开发版、体验版以及审核版本，版本号为 `devtools` 表示为开发者工具，其余为正式版本。
- 小程序进入后台运行后（非置顶聊天），如果 **5s** 内网络请求没有结束，会回调错误信息 `fail interrupted`；在回到前台之前，网络请求接口调用都会无法调用。


## 3. 关于服务器返回
### 返回值编码
- 建议服务器返回值使用 **UTF-8** 编码。对于非 UTF-8 编码，小程序会尝试进行转换，但是会有转换失败的可能。
- 小程序会自动对 BOM 头进行过滤。

### 回调
- **只要成功接收到服务器返回，无论statusCode是多少，都会进入success回调。请开发者根据业务逻辑对返回值进行判断。**
