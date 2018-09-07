# API

框架提供丰富的微信原生API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。

**说明：**

- wx.on 开头的 API 是监听某个事件发生的API接口，接受一个 CALLBACK 函数作为参数。当该事件触发时，会调用 CALLBACK 函数。
- 如未特殊约定，其他 API 接口都接受一个OBJECT作为参数。
- OBJECT中可以指定`success`, `fail`, `complete`来接收接口调用结果。

| 参数名      | 类型       | 必填   | 说明                       |
| -------- | -------- | ---- | ------------------------ |
| success  | Function | 否    | 接口调用成功的回调函数              |
| fail     | Function | 否    | 接口调用失败的回调函数              |
| complete | Function | 否    | 接口调用结束的回调函数（调用成功、失败都会执行） |


**API列表：**

**网络 API 列表：**

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

**媒体 API 列表：**

| API                                      | 说明           |
| ---------------------------------------- | ------------ |
| [wx.chooseImage](./media-picture.md#wxchooseimageobject) | 从相册选择图片，或者拍照 |
| [wx.previewImage](./media-picture.md#wxpreviewimageobject) | 预览图片         |
| [wx.startRecord](./media-record.md#wxstartrecordobject) | 开始录音         |
| [wx.stopRecord](./media-record.md#wxstoprecord) | 结束录音         |
| [wx.playVoice](./media-voice.md#wxplayvoice) | 播放语音         |
| [wx.pauseVoice](./media-voice.md#wxpausevoice) | 暂停播放语音       |
| [wx.stopVoice](./media-voice.md#wxstopvoice) | 结束播放语音       |
| [wx.getBackgroundAudioPlayerState](./media-background-audio.md#wxgetbackgroundaudioplayerstateobject) | 获取音乐播放状态     |
| [wx.playBackgroundAudio](./media-background-audio.md#wxplaybackgroundaudioobject) | 播放音乐         |
| [wx.pauseBackgroundAudio](./media-background-audio.md#wxpausebackgroundaudio) | 暂停播放音乐       |
| [wx.seekBackgroundAudio](./media-background-audio.md#wxstopbackgroundaudio) | 控制音乐播放进度     |
| [wx.stopBackgroundAudio](./media-background-audio.md#wxstopbackgroundaudio) | 停止播放音乐       |
| [wx.onBackgroundAudioPlay](./media-background-audio.md#wxonbackgroundaudioplaycallback) | 监听音乐开始播放     |
| [wx.onBackgroundAudioPause](./media-background-audio.md#wxonbackgroundaudiopausecallback) | 监听音乐暂停       |
| [wx.onBackgroundAudioStop](./media-background-audio.md#wxonbackgroundaudiostopcallback) | 监听音乐结束       |
| [wx.chooseVideo](./media-video.md)       | 从相册选择视频，或者拍摄 |
| [wx.loadFontFace](./media-fontFace.md) | 动态加载字体 | 
**文件 API 列表：**

| API                                      | 说明           |
| ---------------------------------------- | ------------ |
| [wx.saveFile](./file.md)                 | 保存文件         |
| [wx.getSavedFileList](./file.md#wxgetsavedfilelistobject) |  获取已保存的文件列表 |
| [wx.getSavedFileInfo](./file.md#wxgetsavedfileinfoobject) | 获取已保存的文件信息 |
| [wx.removeSavedFile](./file.md#wxremovesavedfileobject) | 删除已保存的文件信息 |
| [wx.openDocument](./file.md#wxopendocumentobject) | 打开文件 |


**数据 API 列表：**

| API                                      | 说明       |
| ---------------------------------------- | -------- |
| [wx.getStorage](./data.md#wxgetstorageobject) | 获取本地数据缓存 |
| [wx.getStorageSync](./data.md#wxgetstoragesynckey) | 获取本地数据缓存 |
| [wx.setStorage](./data.md#wxsetstorageobject) | 设置本地数据缓存 |
| [wx.setStorageSync](./data.md#wxsetstoragesynckeydata) | 设置本地数据缓存 |
| [wx.getStorageInfo](./data.md#wxgetstorageinfoobject) | 获取本地缓存的相关信息 |
| [wx.getStorageInfoSync](./data.md#wxgetstorageinfosync) | 获取本地缓存的相关信息 |
| [wx.removeStorage](./data.md#wxremovestorageobject) | 删除本地缓存内容 |
| [wx.removeStorageSync](./data.md#wxremovestoragesynckey) | 删除本地缓存内容 |
| [wx.clearStorage](./data.md#wxclearstorageobject) | 清理本地数据缓存 |
| [wx.clearStorageSync](./data.md#wxclearstoragesync) | 清理本地数据缓存



**位置 API 列表：**

| API                                      | 说明     |
| ---------------------------------------- | ------ |
| [wx.getLocation](./location.md#wxgetlocationobject) | 获取当前位置 |
| [wx.chooseLocation](./location.md#wxchooselocationobject) | 打开地图选择位置 |
| [wx.openLocation](./location.md#wxopenlocationobject) | 打开内置地图 |
| [wx.createMapContext](./api-map.md#wxcreatemapcontextmapid) | 地图组件控制 |


**设备 API 列表：**

| API                                      | 说明       |
| ---------------------------------------- | -------- |
| [wx.getNetworkType](./device.md#wxgetnetworktypeobject) | 获取网络类型   |
| [wx.onNetworkStatusChange](./device.md#wxonnetworkstatuschangecallback) | 监听网络状态变化 |
| [wx.getSystemInfo](./systeminfo.md#wxgetsysteminfoobject) | 获取系统信息   |
| [wx.getSystemInfoSync](./systeminfo.md#wxgetsysteminfosync) | 获取系统信息 |
| [wx.onAccelerometerChange](./accelerometer.md#wxonaccelerometerchangecallback) | 监听加速度数据 |
| [wx.startAccelerometer](./accelerometer.md#wxstartaccelerometerobject) | 开始监听加速度数据 |
| [wx.stopAccelerometer](./accelerometer.md#wxstopaccelerometerobject) | 停止监听加速度数据 |
| [wx.onCompassChange](./compass.md#wxoncompasschangecallback) | 监听罗盘数据   |
| [wx.startCompass](./compass.md#wxstartcompassobject) | 开始监听罗盘数据 |
| [wx.stopCompass](./compass.md#wxstopcompassobject) | 停止监听罗盘数据 |
| [wx.setClipboardData](./clipboard.md#wxsetclipboarddataobject) | 设置剪贴板内容 |
| [wx.getClipboardData](./clipboard.md#wxgetclipboarddataobject) | 获取剪贴板内容 |
| [wx.makePhoneCall](./phonecall.md#wxmakephonecallobject) | 拨打电话 |
| [wx.scanCode](./scancode.md#wxscancodeobject) | 扫码 |

**界面 API 列表：**

| API                                      | 说明        |
| ---------------------------------------- | --------- |
| [wx.showToast](./api-react.md#wxshowtoastobject) | 显示提示框 |
| [wx.showLoading](./api-react.md#wxshowloadingobject) | 显示加载提示框 |
| [wx.hideToast](./api-react.md#wxhidetoast) | 隐藏提示框 |
| [wx.hideLoading](./api-react.md#wxhideloading) | 隐藏提示框 |
| [wx.showModal](./api-react.md#wxshowmodalobject) | 显示模态弹窗 |
| [wx.showActionSheet](./api-react.md#wxshowactionsheetobject) | 显示菜单列表 |
| [wx.setNavigationBarTitle](./ui.md#wxsetnavigationbartitleobject) | 设置当前页面标题  |
| [wx.showNavigationBarLoading](./ui.md#wxshownavigationbarloading) | 显示导航条加载动画 |
| [wx.hideNavigationBarLoading](./ui.md#wxhidenavigationbarloading) | 隐藏导航条加载动画 |
| [wx.setBackgroundColor](./ui-background.md#wxsetbackgroundcolor)       | 动态设置窗口的背景色                 |
| [wx.setBackgroundTextStyle](./ui-background.md#wxsetbackgroundtextstyle)| 动态设置下拉背景字体、loading 图的样式 |
| [wx.navigateTo](./ui-navigate.md#wxnavigatetoobject) | 新窗口打开页面   |
| [wx.redirectTo](./ui-navigate.md#wxredirecttoobject) | 原窗口打开页面   |
| [wx.switchTab](./ui-navigate.md#wxswitchtabobject) | 切换到 tabbar 页面 |
| [wx.navigateBack](./ui-navigate.md#wxnavigateback) | 退回上一个页面   |
| [wx.createAnimation](./api-animation.md) | 动画        |
| [wx.createContext](./canvas/create-canvas-context.md) | 创建绘图上下文   |
| [wx.drawCanvas](./canvas/draw-canvas.md) | 绘图        |
| [wx.stopPullDownRefresh](./pulldown.md#wxstoppulldownrefresh) | 停止下拉刷新动画  |

**WXML节点信息 API 列表：**

| API                                      | 说明        |
| ---------------------------------------- | --------- |
| [wx.createSelectorQuery](./wxml-nodes-info.md#wxcreateselectorquery) | 创建查询请求 |
| [selectorQuery.in](./wxml-nodes-info.md#selectorqueryincomponent) | 指定在哪个自定义组件中选取节点 |
| [selectorQuery.select](./wxml-nodes-info.md#selectorqueryselectselector) | 根据选择器选择单个节点 |
| [selectorQuery.selectAll](./wxml-nodes-info.md#selectorqueryselectallselector) | 根据选择器选择全部节点 |
| [selectorQuery.selectViewport](./wxml-nodes-info.md#selectorqueryselectviewport) | 选择显示区域 |
| [nodesRef.boundingClientRect](./wxml-nodes-info.md#nodesrefboundingclientrectcallback) | 获取布局位置和尺寸 |
| [nodesRef.scrollOffset](./wxml-nodes-info.md#nodesrefscrolloffsetcallback) | 获取滚动位置 |
| [nodesRef.fields](./wxml-nodes-info.md#nodesreffieldsfieldscallback) | 获取任意字段 |
| [selectorQuery.exec](./wxml-nodes-info.md#selectorqueryexeccallback) | 执行查询请求 |

**WXML节点布局相交状态：**

| API                                      | 说明        |
| ---------------------------------------- | --------- |
| [wx.createIntersectionObserver](./intersection-observer.md#wxcreateintersectionobserverthisoptions) | 创建 IntersectionObserver 对象 |
| [intersectionObserver.relativeTo](./intersection-observer.md#intersectionobserverrelativetoselectormargins) | 指定参照节点 |
| [intersectionObserver.relativeToViewport](./intersection-observer.md#intersectionobserverrelativetoviewportmargins) | 指定页面显示区域作为参照区域 |
| [intersectionObserver.observe](./intersection-observer.md#intersectionobserverobservetargetselectorcallback) | 指定目标节点并开始监听 |
| [intersectionObserver.disconnect](./intersection-observer.md#intersectionobserverdisconnect) | 停止监听 |

**开放接口：**

| API                                      | 说明     |
| ---------------------------------------- | ------ |
| [wx.login](./api-login.md)                  | 登录     |
| [wx.getUserInfo](./open.md#wxgetuserinfoobject) | 获取用户信息 |
| [wx.chooseAddress](./address.md#wxchooseaddressobject) | 获取用户收货地址 |
| [wx.requestPayment](./api-pay.md#wxrequestpaymentobject) | 发起微信支付 |
| [wx.addCard](./card.md#wxaddcardobject) | 添加卡券 |
| [wx.openCard](./card.md#wxopencardobject) | 打开卡券 |
