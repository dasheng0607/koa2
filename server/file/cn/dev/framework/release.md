# 基础库更新日志

[查看开发者工具更新日志](../devtools/uplog.md)

### v2.2.2 (2018.08.02)

1. `A` 新增 API `wx.getAccountInfoSync` 获取小程序基本信息 [详情](../api/account-info.html#wxgetaccountinfosync)
1. `A` 新增 插件 支持调用 `wx.navigateTo` 和 `wx.redirectTo` 跳转到当前插件的页面 [详情](./plugin/development.md#插件页面跳转)
1. `F` 修复 API 某些情况下会显示 `(node) warning: possible EventEmitter memory leak detected.` 的问题，优化提示文案
1. `F` 修复 API `wx.showKeyboard` 同时传入 `maxLength` 和 `defaultValue`，`defaultValue` 为数字时报错问题
1. `F` 修复 小游戏 API `wx.createGameClubButton` 设置 `image` 失效问题
1. `F` 修复 组件 `<picker>` 设置 `fields="month"` 时，`start` 属性失效问题 {% doc(00008a13c7c7e8f46e171fadd56000) %}
1. `F` 修复 组件 `<canvas>` 安卓下的 `arcTo` 接口结果不符合预期的问题 {% doc(00080ac03a47e86a0af62457b58400) %}
1. `F` 修复 组件 `<cover-view>` iOS 全屏时候 `background-color` 显示异常的问题 {% doc(0000aa296e4c50a24d17ca7d651800) %}
1. `F` 修复 组件 `<button>` 不能与 `<cover-view>` 一起 fixed 的问题 {% doc(00086a59fb4f38829917382495b000) %}
1. `F` 修复 组件 `<textarea>` iOS下，页面中使用自动增高时，输入内容换行时的显示问题 {% doc(00024ca78880d8f22bc624fcb5b000) %}
1. `F` 修复 插件 某些情况下没有触发回调问题

### v2.2.1 (2018.07.23)

1. `F` 修复 远程调试模式下，基础库调用 `accessSync` 引起的卡顿问题
1. `F` 修复 组件 `<video>` iOS系统其中一个 `<video>` 组件全屏退出后其他 `<video>` 组件展示异常的问题
1. `F` 修复 组件 `<button>` 某些场景下无法正常跳转 APP 的问题
1. `F` 修复 API `BackgroundAudioManager.paused` Android系统下某些情况下不正确的问题 {% doc(00084a3594403865a3077fbb251800s) %}
1. `F` 修复 API 小程序进入后台后音视频播放没有正常停止的问题
1. `F` 修复 API 小游戏 `wx.onError` 回调函数执行两次的问题
1. `F` 修复 插件 功能页回调事件被多次触发的问题

### v2.2.0 (2018.07.12)

1. `A` 新增 API 小游戏跳小程序 `wx.navigateToMiniProgram` [详情](https://developers.weixin.qq.com/minigame/dev/document/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)
1. `F` 修复 API `wx.scanCode` 在安卓平台返回 `scanType` 错误问题 {% doc(0002e4ac33ca70c771f6fe87855c00) %}

### v2.1.3 (2018.07.09)

### v2.1.2 (2018.07.04)

### v2.1.1 (2018.06.21)

### V2.1.0 (2018.06.14)

1. `A` 新增 API `wx.loadFontFace` 支持动态加载字体 [详情](../api/media-fontFace.md)
1. `A` 新增 API `wx.getLogManager` 可记录用户操作日志，供用户提交意见反馈内容时，提交给开发者协助定位问题 [详情](../api/getLogManager.md)
1. `A` 新增 组件 `<camera />` 的 `scanCode` 模式，支持识别一维码 [详情](../component/camera.md)
1. `U` 更新 API `wx.createSelectorQuery` 可获取节点的样式信息 [详情](../api/wxml-nodes-info.md)
1. `U` 更新 API `wx.scanCode` 返回参数新增 `rawData` 字段 [详情](../api/scancode.md)
1. `U` 更新 API `wx.createLivePusher` 新增 `toggleTorch` 方法支持切换闪光灯 [详情](../api/api-live-pusher.md)
1. `A` 新增 API `wx.getAvailableAudioSources` 获取当前可用的音频输入源 [详情](../api/getAvailableAudioSources.md)
1. `A` 新增 API `wx.getMenuButtonBoundingClientRect` 获取菜单按钮布局信息接口 [详情](https://developers.weixin.qq.com/minigame/dev/document/ui/wx.getMenuButtonBoundingClientRect.html)
1. `A` 新增 API `wx.onDeviceOrientationChange` 监听屏幕方向的改变 [详情](https://developers.weixin.qq.com/minigame/dev/document/device/orientation/wx.onDeviceOrientationChange.html)
1. `A` 新增 API `FileSystemManager.appendFile` 追加文件内容 [详情](https://developers.weixin.qq.com/minigame/dev/document/file/FileSystemManager.appendFile.html)
1. `A` 新增 API `wx.setBackgroundColor` 和 `wx.setBackgroundTextStyle` 动态设置背景相关信息 [详情](../api/ui-background.md)
1. `A` 新增小游戏 API `wx.updateKeyboard` 更新键盘 [详情](https://developers.weixin.qq.com/minigame/dev/document/ui/keyboard/wx.updateKeyboard.html)
1. `A` 新增小游戏 API `wx.loadSubpackage` 加载分包 [详情](https://developers.weixin.qq.com/minigame/dev/tutorial/base/subpackages.html)
1. `U` 更新 组件 `<button />` 可以嵌套在原生组件内，显示在原生组件之上 [详情](../component/button.md)
1. `U` 更新 组件 `<button />` 新增 `open-type` 值为 `feedback`，打开“意见反馈”页面 [详情](../component/button.md)
1. `U` 更新 组件 `<cover-view />` `<cover-image />` 新增 `scroll-top` 属性 [详情](../component/cover-view.md)
1. `U` 更新 组件 `<cover-view />` `<cover-image />` 支持 rotate 和 scale 的样式设置 [详情](../component/cover-view.md)
1. `U` 更新 组件 `<cover-image />` 新增 `bindload` 和 `binderror` 事件 [详情](../component/cover-view.md)
1. `U` 更新 组件 `<movable-view />` 新增 `animation` 属性 [详情](../component/movable-view.md)
1. `U` 更新 组件 `<live-pusher />` 新增 `zoom` 属性支持调整焦距 [详情](../component/live-pusher.md)
1. `U` 更新 组件 `<input />` 在 `bindinput` 时返回 `keyCode` 键值 [详情](../component/input.md)
1. `U` 更新 API `wx.startAccelerometer` 新增 `interval` 参数指定回调频率 [详情](../api/accelerometer.md#wxstartaccelerometerobject)
1. `F` 修复 API `wx.reportAnalytics` 在插件下调用异常的问题
1. `F` 修复 API `wx.hideToast` 在 iOS 下无法让前面的 `showLoading` 消失的问题
1. `F` 修复 组件 `<image />` 在连续更新src时导致显示不正确的问题
1. `F` 修复 组件 `<image />` 设置 border-radius 出现闪动的问题
1. `F` 修复 组件 `<canvas />` 设置的shadow会影响fillStyle的问题
1. `F` 修复 组件 `<movable-view />` 缩放的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000ecad1f3c210c5bbc67ea8750000)
1. `F` 修复 组件 `<input />` 在某些情况下未被正常销毁的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a8c18c480908ed8c641ac75f400)
1. `F` 修复 组件 `<video />` 设置 playbackRate 为 1.25 无效的问题
1. `F` 修复 组件 `<map />` 在开发者工具双击地图缩放不触发 `bindregionchange` 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000c64a0f388b0f19fa6fe2cb51c00)
1. `F` 修复 框架 在 video 全屏后有setData操作时导致字体变大的问题

### v2.0.9 (2018.06.08)

### V2.0.8 (2018.05.18)

1. `U` **仅针对开发工具**，更新小程序/小游戏转发相关接口，移除转发回调

### v2.0.7 (2018.05.16)

1. `U` **仅针对开发工具**，废弃小程序/小游戏 `wx.openSetting` 接口
1. `U` **仅针对开发工具**，废弃小程序 `wx.navigateToMiniProgram` 接口
1. `U` 更新小程序组件 `<button>` 新增 `open-type` 属性有效值 `openSetting` [详情](../component/button.md)
1. `U` 更新小程序组件 `<navigator>` 新增 `target` 属性可跳转到绑定的小程序 [详情](../component/navigator.md)
1. `A` 新增小游戏接口 `wx.createOpenSettingButton` 接口 [详情](https://developers.weixin.qq.com/minigame/dev/document/open-api/setting/wx.createOpenSettingButton.html)

### v2.0.6 (2018.05.11)

### v2.0.5 (2018.05.08)

### v2.0.4 (2018.04.28)

### v2.0.3 (2018.04.26)
### v2.0.2 (2018.04.20)
### v2.0.1 (2018.04.14)


### v2.0.0 (2018.04.12)

1. `A` 新增 `require` 支持循环依赖
1. `U` 更新 API `wx.saveImageToPhotosAlbum` 支持保存包内文件
1. `F` 修复 API `wx.hideTabBar` 第一次调用失败的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000ea2e6db4e50f0c8763741756000)
1. `F` 修复 API `wx.showToast` 在插件中无法设置自定义图片的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000484c9cac770ca5d7660cd255c00)
1. `F` 修复 API `wx.closeBluetoothAdapter` 在安卓端没有释放资源的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000668b26bcdb053d9769ac7651400)
1. `F` 修复 API `wx.chooseVideo` 在 iOS 上使用前置摄像头拍摄的视频没有声音的问题
1. `F` 修复 API `wx.getBackgroundAudioManager` 在 iOS 播放音频文件完毕之后，播放视频四秒后会自动暂停的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000c4a5065c3d8a25166124445a400)
1. `F` 修复 API `wx.openDocument` 在安卓上海外用户调用会直接报错的问题
1. `F` 修复 API `wx.previewImage` 在安卓第二次会失败的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000862deb50f50463046e502054c00)
1. `F` 修复 API `wx.getSystemInfo` 在进行首次 tab 切换时返回的 `screenHeight` 数值错误的问题
1. `F` 修复 组件 `<map />` 在开发工具上手动改变经纬度不会触发 regionchange 的问题
1. `F` 修复 组件 `<cover-image />` 在图片加载完没有自动调整高度的问题
1. `F` 修复 组件 `<textarea />` 在设置 `adjust-position="{{false}}"` 时，无法触发 `bindfocus` 事件的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000caccf9bc9707af976b3f8456000)
1. `F` 修复 组件 `<video />` 在全屏时隐藏 video 不会自动退出全屏的问题
1. `F` 修复 组件 `<canvas />` 在自定义组件的 `ready` 生命周期里调用 `drawImage` 无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000064ef124e88ba5b764f6eb51800)
1. `F` 修复 组件 `<canvas />` 在 iOS 上调用 `setTextAlign` 接口居中后，调用 `wx.canvasToTempFilePath` 接口导出的图片出现错位的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a6efbb6ceb0ed73263c4d151000)
1. `F` 修复 组件 `<picker />` 在 iOS 上字体适配的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=421986b2a6e1e9c6da9fc4d4d6ddd11a)
1. `F` 修复 在插件中无法使用 Behavior 的问题
1. `F` 修复 在 iOS 上配置里设置 `backgroundColorTop` 会使 `backgroundColor` 失效的问题
1. `F` 修复 生命周期 `onItemTap` 、`onShow` 的触发时序在 iOS 和安卓没对齐的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&&docid=0008ca834f4108b4bf66a46ef56000)
1. `F` 修复 iOS 在自定义标题栏模式下在聚集输入框弹起键盘时导致顶部胶囊上移的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a44e15045507d3d6605a4556400)
1. `F` 修复 tabBar 在 iOS、安卓、开发工具上三端展示不对齐的问题

### v1.9.98 (2018.04.04)

### v1.9.97 (2018.03.30)

### v1.9.96 (2018.03.22)

### v1.9.95 (2018.03.20)

### v1.9.94 (2018.03.15)

### v1.9.93 (2018.03.08)

### v1.9.92 (2018.03.05)

1. `A` 新增 API `wx.createWorker` 可创建多线程 Worker [详情](../api/createWorker.md)
1. `A` 新增 API `wx.getUpdateManager` 提供小程序强制更新机制 [详情](../api/getUpdateManager.md)
1. `A` 新增 API `canvasContext.measureText` 支持查看文本在当前canvas状态下的大小 [详情](../api/canvas/measure-text.md)
1. `A` 新增 API `canvasContext.globalCompositeOperation` 支持设置要在绘制新形状时应用的合成操作的类型 [详情](../api/canvas/global-composite-operation.md)
1. `A` 新增 API `canvasContext.arcTo` 可根据控制点和半径绘制圆弧路径 [详情](../api/canvas/arc-to.md)
1. `A` 新增 API `canvasContext.strokeText` 提供绘制文本的方法 [详情](../api/canvas/stroke-text.md)
1. `A` 新增 API `canvasContext.lineDashOffset` 可设置虚线偏移量 [详情](../api/canvas/line-dash-offset.md)
1. `A` 新增 API `canvasContext.createPattern` 可对指定的图像创建模式 [详情](../api/canvas/create-pattern.md)
1. `A` 新增 API `canvasContext.shadowBlur/shadowColor/shadowOffsetX/shadowOffsetY` 可设置阴影的相关样式 [详情](../api/canvas/set-shadow.md)
1. `A` 新增 API `canvasContext.font` 可设置当前字体样式 [详情](../api/canvas/font.md)
1. `A` 新增 API `canvasContext.transform` 可使用矩阵多次叠加当前变换 [详情](../api/canvas/transform.md)
1. `A` 新增 API `canvasContext.setTransform` 使用矩阵重新设置（覆盖）当前变换 [详情](../api/canvas/set-transform.md)
1. `A` 新增 API `LivePusherContext.snapshot` 可在推流中进行拍照 [详情](../api/api-live-pusher.md)
1. `A` 新增 配置 `window.backgroundColorTop` `window.backgroundColorBottom` 可分别设置窗口顶部和底部的背景颜色 [详情](../framework/config.md)
1. `U` 更新 API `wx.createInnerAudioContext` 新增 `volumn` 属性，可调节音量 [详情](../api/createInnerAudioContext.md)
1. `U` 更新 API `wx.login` `wx.getUserInfo` `wx.getShareInfo` `wx.getWeRunData` 新增 `timeout` 参数，可设置超时时间 [详情](../api/api-login.md)
1. `U` 更新 API `wx.getImageInfo` 增加返回 `orientation` 和 `type` 值 [详情](../api/media-picture.md#wxgetimageinfoobject)
1. `U` 更新 组件 `<cover-view />` 支持设置 `overflow: scroll` 产生局部滚动区域 [详情](../component/cover-view.md)
1. `U` 更新 组件 `<cover-view />` 支持设置 `position: fixed` 使之相对窗口固定 [详情](../component/cover-view.md)
1. `U` 更新 组件 `<open-data />` 支持渲染 userInfo 相关信息 [详情](../component/open-data.md)
1. `U` 更新 组件 `<movable-view />` 新增 `bindchange` 事件 [详情](../component/movable-view.md)
1. `U` 更新 组件 `<movable-view />` 支持缩放手势 [详情](../component/movable-view.md)
1. `U` 更新 组件 `<movable-view />` 新增 `bindvtouchmove` `bindvtouchmove` 事件 [详情](../component/movable-view.md)
1. `U` 更新 组件 `<movable-view />` 新增 `disabled` 属性以禁用滑动 [详情](../component/movable-view.md)
1. `U` 更新 组件 `<input />` `<textarea />` 新增 `adjust-position` 属性控制是否自动上推页面 [详情](../component/input.md)
1. `U` 更新 组件 `<input />` `<textarea />` 在 `bindfocus` 事件回调里返回键盘高度 [详情](../component/input.md)
1. `U` 更新 组件 `<picker />` 新增 `bindcancel` 事件 [详情](../component/picker.md)
1. `U` 更新 组件 新增 `bindtouchforcechange` 事件 [详情](../framework/view/wxml/event.md)
1. `U` 更新 自定义组件 样式前缀化支持类名传递 [详情](../framework/custom-component/wxml-wxss.md)
1. `F` 修复 API `wx.showModal` 的 `cancelText` 和 `confirmText` 只能输入 4 个英文字符的问题
1. `F` 修复 组件 `<live-player />` 无法停止播放的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e2242cc0df08455263ce9651800)
1. `F` 修复 组件 `<input />` 多个空格在失焦时只显示一个空格的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=00080a60a547780f8a26543ec51400)
1. `F` 修复 组件 `<input />` 在 disabled 状态下设置 color 无效的问题
1. `F` 修复 组件 `<slider />` 设置 transform 导致滑块滑动异常的问题
1. `F` 修复 组件 `<form />` 在安卓下键盘弹起时不触发 submit 事件的问题
1. `F` 修复 框架 在安卓滚动时点击会触发 tap 事件的问题
1. `F` 修复 框架 `onReachBottom` 事件在快速滑动出现触发次数异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0071cf5e4aa19bbc146c9ff964db7fb5)
1. `F` 修复 框架 转换 rpx 单位无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=2a21c3154dacc19a16550b6627e86a55)


### v1.9.91 (2018.02.09)

### v1.9.90 (2018.02.07)

### v1.9.9 (2018.02.05)

### v1.9.8 (2018.02.03)

### v1.9.7 废弃

### v1.9.6 (2018.01.29)


### v1.9.5 (2018.01.24)
1. `A` 新增 配置 `window.navigationStyle` 支持全屏显示小程序 [详情](../framework/config.md)
1. `U` 更新 组件 `<button />` `open-type` 新增 `launchApp` 属性 [详情](../component/button.md)

### v1.9.4 (2018.01.25)

### v1.9.3 (2018.01.23)

### v1.9.2 (2018.01.09)

### v1.9.1 (2018.01.04)

### v1.9.0 (2018.01.02)
1. `A` 新增 API tabBar 相关接口 [详情](../api/ui-tabbar.md)
1. `A` 新增 API `wx.canvasGetImageData` 可返回 `<canvas />` 的像素数据 [详情](../api/canvas/get-image-data.md)
1. `A` 新增 API `wx.canvasPutImageData` 可将像素数据绘制到 `<canvas />` [详情](../api/canvas/put-image-data.md)
1. `U` 更新 组件 `<swiper />` 增加 `current-item-id`、`previous-margin`、`next-margin`、`display-multiple-items`、`skip-hidden-item-layout`、`bindanimationfinish` 属性 [详情](../component/swiper.md)
1. `U` 更新 组件 `<input />` 支持 selection 选区 [详情](../component/input.md)
1. `U` 更新 组件 `<textarea />` 支持 selection 选区 [详情](../component/textarea.md)
1. `U` 更新 组件 `<live-player />` 增加 `bindnetstatus` 事件 [详情](../component/live-player.md)
1. `U` 更新 组件 `<live-pusher />` 增加 `bindnetstatus` 事件 [详情](../component/live-pusher.md)
1. `U` 更新 组件 `<video />` 可对控制栏进行更细粒度控制 [详情](../component/video.md)
1. `U` 更新 组件 `<slider />` 支持 `block-size` 设置滑块尺寸和 `block-color` 设置滑块颜色 [详情](../component/slider.md)
1. `U` 更新 API 背景音频接口 `backgroundAudioManager` 支持直播流音频
1. `U` 更新 API `canvasContext.drawImage` 支持从源图像裁剪后再画到 `<canvas />` [详情](../api/canvas/draw-image.md)
1. `U` 更新 API `wx.showToast` 文本统一限制为 7 个汉字长度，并增加无 icon 类型 [详情](../api/api-react.md)
1. `F` 修复 API `wx.chooseVideo` 接口的 `compressed` 参数不生效的问题
1. `F` 修复 API WebSocket 接口在 Android 下服务连接失败的时候，没有立刻触发 `error` 和 `close` 事件，而是等到超时
1. `F` 修复 API Android 背景音频接口 `backgroundAudioManager` 不能播放本地文件的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=c7b223db52aff88b3c3a15f2fb5ddfc6)
1. `F` 修复 API `wx.setEnableDebug` 接口在 Android 下会导致小程序一直在重启的问题
1. `F` 修复 API `wx.showToast` 在 iOS 下连续调用两次再调用 `wx.hideToast` 时遮罩层没去掉的问题
1. `F` 修复 API `wx.startPullDownRefresh` 在 iOS 下没有触发 `onPullDownRefresh` 事件的问题
1. `F` 修复 API `wx.previewImage` 在 Android 下长按GIF发送后退出小程序的问题
1. `F` 修复 API `wx.pageScrollTo` 导致 fixed 元素闪动的问题，并增加 `duration` 参数 [详情](../api/scroll.md)
1. `F` 修复 自定义组件通过动态设置的回调方法时会执行两遍的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=915568549&docid=037127b97509bc7eff550b9e7b94765d)

### v1.7.4 (2017.12.22)
### v1.7.3 (2017.12.19)
### v1.7.2 (2017.12.15)
### v1.7.1 (2017.12.08)

### v1.7.0 (2017.12.04)

1. `A` 新增 组件 `<camera />` 开发工具上的调试支持 [详情](../component/camera.md)
1. `U` 更新 API `WebSocket` 支持创建多条 WebSocket 连接 [详情](../api/network-socket.md)
1. `U` 更新 API `wx.request` 支持发送和接收 ArrayBuffer 类型的数据 [详情](../api/network-request.md)
1. `U` 更新 API `wx.createCanvasContext` 的 `draw` 接口，回调通知渲染完成 [详情](../api/canvas/draw.md)
1. `U` 更新 API `wx.canvasToTempFilePath` 支持设置输出图片格式与质量参数 [详情](../api/canvas/temp-file.md)
1. `U` 更新 API `wx.createInnerAudioContext` 去掉切到前台时恢复播放的策略
1. `U` 更新 组件 `<slider />` 增加 `bindchanging` 事件 [详情](../component/slider.md)
1. `U` 更新 组件 `<progress />` 增加 `active-mode` 属性 [详情](../component/progress.md)
1. `U` 更新 组件 `<video />` 在 `timeupdate` 事件回调中新增返回 `duration` 参数 [详情](../component/video.md)
1. `U` 更新 组件 `<video />` 新增 `direction` 参数，支持全屏时设置画面方向 [详情](../component/video.md)
1. `U` 更新 组件 `<scroll-view />` 优化 `scrolltoupper` 与 `scrolltolower` 事件的触发频率
1. `U` 更新 组件 `<cover-view />` 优化在安卓下的渲染性能
1. `F` 修复 API `wx.createInnerAudioContext` 接口返回参数的时间单位不正确的问题
1. `F` 修复 API `wx.hideLoading` 会把 `wx.showToast` 给隐藏掉的问题
1. `F` 修复 API `wx.hideLoading` 一调用立即消失的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=7ab07fac071fa04c3fdc56d52fc80309)
1. `F` 修复 API `wx.canvasToTempFilePath` 在 `<canvas />` 不可见时导出失败以及导致crash的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=31fdba041e9797382c400a9017baa19e)
1. `F` 修复 API `wx.uploadFile` 文件格式的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=f46c4f8c9992a29a4d824cdfdccf9488)
1. `F` 修复 API `wx.getRecorderManager` 在 iOS 下设置最大时长10分钟失效的问题
1. `F` 修复 API `wx.getRecorderManager` 在安卓下小程序退到后台时，将默认行为从停止录音调整为暂停录音
1. `F` 修复 组件 `<input />` disabled 时字体样式无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=b245c19a0bce8a8c1831f22c56cb4292)
1. `F` 修复 组件 `<navigator />` 快速点击时会新开两个页面的问题
1. `F` 修复 组件 `<cover-view />` 在 iOS 下圆角半径的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=d8a743cb8afbbe62dc3917d967a1eac4)
1. `F` 修复 组件 `<cover-view />` 设置 `text-align: center` 在安卓上下也会居中的问题
1. `F` 修复 组件 `<cover-image />` 总是显示在 `<cover-view />` 之上的问题
1. `F` 修复 组件 `<audio />` 在播放结束的时候没有恢复背景音乐的问题
1. `F` 修复 组件 `<picker />` 偶现需要点击两次才能收起的问题
1. `F` 修复 组件 `<image />` `mode` 从 `widthFix` 改成其他值时高度没更新的问题
1. `F` 修复 组件 `<scroll-view />` 滚动时出现闪动的问题
1. `F` 修复 组件 `<video />` 在全屏后拉起系统控制面板时退出全屏的问题
1. `F` 修复 trace 面板无法连接设备的问题

### v1.6.8 (2017.12.20)
### v1.6.7 (2017.12.15)
### v1.6.6 (2017.11.15)
### v1.6.5 (2017.11.07)
### v1.6.4 (2017.10.30)
### v1.6.3 (2017.10.23)
### v1.6.2 (2017.10.19)
### v1.6.1 (2017.10.14)


### v1.6.0 (2017.10.11)

1. `A` 新增 API `checkIsSoterEnrolledInDevice` 判断设备是否录入指纹等生物信息的接口 [详情](../api/checkIsSoterEnrolledInDevice.md)
1. `A` 新增 API `getRecorderManager` 获取全局唯一的录音管理器 [详情](../api/getRecorderManager.md)
1. `A` 新增 API `createInnerAudioContext` 创建并返回内部 audio 上下文 innerAudioContext 对象 [详情](../api/createInnerAudioContext.md)
1. `A` 新增 组件 `<camera />` 相机组件 [详情](../component/camera.md)
1. `U` 更新 API `startRecord` 增加 duration 参数用于设置最长录音时间 [详情](../api/media-record.md)
1. `U` 更新 API `chooseVideo` 增加 compressed 参数，用于设置是否压缩用户选择的视频 [详情](../api/media-video.md#wxchoosevideoobject)
1. `U` 更新 组件 `<map />` polyline 支持 arrowIconPath 参数，用于更换箭头图标 [详情](../component/map.md)
1. `U` 更新 组件 `<map />` marker 的 label 参数增加样式设置 [详情](../component/map.md)
1. `U` 更新 组件 `<map />` 新增渲染更新完成事件 bindupdated [详情](../component/map.md)
1. `U` 更新 组件 `<video />` 支持 pageGesture 属性，控制非全屏模式下是否开启声音和亮度手势 [详情](../component/video.md)
1. `U` 更新 组件 `<video />` 在 bindfullscreenchange 的 detail 中返回横竖屏信息
1. `U` 更新 组件 `<video />` 支持 initial-time 属性用于指定初始化播放的位置 [详情](../component/video.md)
1. `U` 更新 组件 `<canvas />` 支持 clip 方法实现剪切 [详情](../api/canvas/clip.md)
1. `U` 更新 组件 `<canvas />` 支持 setLineDash 方法实现设置虚线样式 [详情](../api/canvas/set-line-dash.md)
1. `U` 更新 组件 `<cover-view />` 支持动画 [详情](../component/cover-view.md)
1. `U` 更新 组件 `<cover-image />` iconPath 支持网络图片 [详情](../component/cover-view.md)
1. `U` 更新 组件 `<textarea />` 支持 show-confirm-bar，用于设置是否显示键盘上方带有「完成」按钮那一栏 [详情](../component/textarea.md)
1. `U` 更新 组件 `<textarea />` 支持在 bindblur 回调中返回 cursor，收起键盘时返回光标位置 [详情](../component/textarea.md)
1. `U` 更新 组件 `<swiper />` 性能优化，支持隐藏当前页、前后页之外的页面，避免复杂页面切换卡顿
1. `U` 更新 框架 `referrerInfo.appId` onLaunch 及 onShow 时部分跳转小程序场景增加返回 referrerInfo.appId [详情](../framework/app-service/app.md)
1. `U` 更新 调试 vConsole WXML 面板支持显示 Computed Styles
1. `F` 修复 API `openDocument` 在 iOS 下打开带密码的 PDF 文件时无法输入密码的问题
1. `F` 修复 API `openDocument` 在 iOS 下打开 Excel 无法切换 tab 的问题
1. `F` 修复 API `authorize` scope 为数组时，三端回调行为不一致问题
1. `F` 修复 API `showActionSheet` cancel 时会同时回调 success 和 fail 问题
1. `F` 修复 API `getSystemInfo` 在开发者工具上未返回 brand 字段的问题
1. `F` 修复 API `chooseInvoiceTitle` 在开发者工具上未返回 invoiceTitleInfo 字段的问题
1. `F` 修复 API `pageScrollTo` 在开发者工具上失效问题
1. `F` 修复 API `startPullDownRefresh` 在开发者工具上失效问题
1. `F` 修复 API `getFileInfo` 在开发者工具上只回调 complete 问题
1. `F` 修复 API `startBluetoothDevicesDiscovery` 在开发者工具上返回值和真机不一致问题
1. `F` 修复 API `onBluetoothDeviceFound` 在开发者工具 devices 错误返回二维数组问题
1. `F` 修复 API `playBackgroundAudio` 在 iOS 下失败报 fail no current music，但音乐正常播放问题
1. `F` 修复 API `request` 被 abort 后仍然占据并发数问题
1. `F` 修复 API `createAnimation` backgroundColor 无法使用渐变背景色问题
1. `F` 修复 API `setNavigationBarColor` 在 iOS 下会导致导航栏 title 和按钮变成透明问题
1. `F` 修复 组件 `<image />` 在 devtools 提示 404 但不影响显示问题
1. `F` 修复 组件 `<map />` 在初始化时在各端事件派发不一致问题
1. `F` 修复 组件 `<map />` markers 的 callout 没有限制 borderRadius 取值范围问题
1. `F` 修复 组件 `<map />` markers 的 title 和 callout 在各端表现不一致问题
1. `F` 修复 组件 `<map />` 在 Android 下 marker 的 callout 下方无三角形问题
1. `F` 修复 组件 `<input />` 在开发者工具上，bindinput 派发的事件对象 timestamp 不为 timeStamp 的问题
1. `F` 修复 组件 `<canvas />` longtap 事件在工具上触发类型为 binglongtap 的问题，应为 longtap
1. `F` 修复 组件 `<video />` 在 iOS 下在全屏播放时会出现一部分下一个视频的内容的问题
1. `F` 修复 组件 `<video />` 在开发者工具点击播放后 controls 无法进行控制问题
1. `F` 修复 组件 `<input />` 在 Android 下输入汉字时，bindinput 会带上当前正在输入的英文字母问题
1. `F` 修复 组件 `<textarea />` 在 Android 下使用 setData 设置 value，auto-height 失效问题
1. `F` 修复 组件 `<picker />` 在 Android 下省市区选择器缺少中山市、东莞市地域信息
1. `F` 修复 组件 `<picker />` 在 Android 下 year 小于 1970 不生效问题
1. `F` 修复 组件 `<textarea />` 两个 textarea 连续切换未触发第一个 textarea 的 blur 问题
1. `F` 修复 组件 `<swiper />` 只展示其中一部分的 bug [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=318390035&docid=5faa1b7e895de9884a067273546aca22)
1. `F` 修复 框架 iOS8 下 Promise 不会执行 resolve 的问题

### v1.5.8 (2017.12.06)
### v1.5.7 (2017.10.03)
### v1.5.6 (2017.09.27)
### v1.5.5 (2017.09.26)
### v1.5.4 (2017.09.21)

### v1.5.3 (2017.08.28)

1. `F` 修复 组件 `<swiper />` 在 iOS 下首张图片在某些情况下初始不显示的问题
1. `F` 修复 API `canIUse` 无法判断 `getPhoneNumber` 可用情况的问题

### v1.5.2 (2017.08.23)

1. `F` 修复 组件 `<map />` markers 里同时没有设置 callout 和 title 属性时，点击时报 Cannot read property 'always' of null 错误的问题
1. `F` 修复 组件 `<image />` bindload 被重复执行两次的问题
1. `F` 修复 组件 `<image />` 连续更新 src 会显示图片错误
1. `F` 修复 API `chooseInvoiceTitle` 在工具上报错问题
1. `F` 修复 API `SelectorQuery.selectViewport` 失效问题

### v1.5.1 (2017.08.18)

1. `F` 修复 组件 `<image />` 覆盖兄弟节点或图片圆角不显示问题

### v1.5.0 (2017.08.17)

1. `A` 新增 API `checkIsSupportSoterAuthentication` `startSoterAuthentication` 生物认证接口 [详情](../api/checkIsSupportSoterAuthentication.md)
1. `A` 新增 API `startPullDownRefresh` 主动触发下拉刷新接口 [详情](../api/pulldown.md#wx.startpulldownrefresh)
1. `A` 新增 API `chooseInvoiceTitle` 选择发票抬头接口 [详情](../api/chooseInvoiceTitle.md)
1. `A` 新增 框架 触摸类事件增加 capture 阶段 [详情](../framework/view/wxml/event.md)
1. `A` 新增 框架 长按事件 `longpress` [详情](../framework/view/wxml/event.md)
1. `A` 新增 框架 page.json 支持设置 onReachBottom 距离 [详情](../framework/config.md)
1. `U` 更新 API `getSystemInfo` 增加 fontSizeSetting 支持读取用户字体大小设置 [详情](../api/systeminfo.md)
1. `U` 更新 API `getSystemInfo` 增加 brand 支持读取手机品牌字段 [详情](../api/systeminfo.md)
1. `F` 修复 API `getSystemInfo` 在华为或者魅族带虚拟按键的设备上获取 windowWidth 和 windowHeight 为 0 问题
1. `U` 更新 API `writeBLECharacteristicValue` 根据写入属性特征值决定回调时机
1. `U` 更新 API `shareAppMessage` 增加 imageUrl 参数支持分享自定义配图 [详情](../api/share.md)
1. `U` 更新 API `getBluetoothDevices` `onBluetoothDeviceFound` 设备信息增加 localName 字段 [详情](../api/bluetooth.md#wxgetbluetoothdevicesobject)
1. `F` 修复 API `switchTab` 在页面注册前调用会报错的问题
1. `F` 修复 API `selectorQuery` movable-view 等组件无法在 selectorQuery 中被 class 选择器选中问题
1. `F` 修复 API `setNavigationBarColor` 在 iOS 下被 app.json 里 navigationBarTextStyle 覆盖设置问题
1. `F` 修复 API `getSetting` `openSetting` 在 iOS 下部分生命周期函数中调用失效
1. `F` 修复 API `canvasToTempFilePath` 在 iOS 下导出的图片为白色背景的问题
1. `F` 修复 API `captureScreen` 在 Android 下生成的文件扩展名为 unknown 问题
1. `F` 修复 API `getBeacons` 在 Android 下未获取到设备时 beacons 字段缺失问题
1. `F` 修复 API `chooseLocation` 在 Android 下回调函数 latitude、longitude 类型为 string 问题，应为 number
1. `F` 修复 API `connectSocket` 在 Android 下接口的请求包 header 中没有 origin 问题
1. `F` 修复 API `previewImage` 在 iOS 下导航栏没有显示当前图片索引位置(1/n)的问题
1. `F` 修复 API `previewImage` 在 iOS 下横屏后退出，tabBar 漂移到页面中间问题
1. `F` 修复 API `chooseImage` 在 Android 下未处理图片旋转的情况
1. `F` 修复 API `showToast` `showLoading` 在 iOS 下异步 hide 后重新调用 show，show 不生效问题
1. `F` 修复 API `pageScrollTo` 导致 video 组件错位问题
1. `U` 更新 组件 `<picker />` 增加 custom-item，region 模式支持自定义项 [详情](../component/picker.md)
1. `F` 修复 组件 `<picker />` 在 iOS 下 mode=year 时点击会 crash 问题
1. `U` 更新 组件 `<picker-view />` 增加 mask-style、mask-class 支持自定义半透明蒙层的颜色 [详情](../component/picker-view.md)
1. `F` 修复 组件 `<picker />` region 模式在 form submit 的 detail 没有应该返回省市区问题
1. `U` 更新 组件 `<textarea />` `<input />` 增加 cursor 支持主动设置和读取光标位置 [详情](../component/textarea.md)
1. `F` 修复 组件 `<textarea />` 在 iOS 下编辑时切换键盘，光标会跳到最后的问题
1. `F` 修复 组件 `<textarea />` 在 Android 下页面 onLoad 中设置 value 无效问题
1. `F` 修复 组件 `<textarea />` 在 Android 下设置 cursor-spacing 无效问题
1. `F` 修复 组件 `<form />` 在 textarea input 同时使用时，先点击 textarea，再点击 input 后，无法提交表单的问题
1. `F` 修复 组件 `<input />` 在 Android 下 bindinput 事件回调函数缺少 detail.cursor 参数问题
1. `F` 修复 组件 `<input />` 在 Android 下与 auto-height 的 textarea 同时使用，不会弹出数字键盘问题
1. `F` 修复 组件 `<input />` bindfocus 中调用 chooseLocation 并 setData，导致所有 input 失效问题
1. `U` 更新 组件 `<button />` 增加 show-message-card 等属性，支持客服会话分享卡片 [详情](../component/button.md)
1. `U` 更新 组件 `<image />` 支持图片懒加载
1. `F` 修复 组件 `<image />` 传入本地文件路径在 iOS 上无法触发浏览器重绘的问题
1. `F` 修复 组件 `<movable-view />`动态生成的 movable-view 定位不准确的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=506508913&docid=d1065522b9924526b012dd9d4b811dab)
1. `F` 修复 组件 `<cover-view />` 通过 wx:if 控制不生效的问题
1. `F` 修复 组件 `<map />` 在 iOS 下 bindcontroltap 事件同时会触发 bindtap 的问题
1. `F` 修复 组件 `<canvas />` 在 iOS 下线条的渐变、宽度同时设置会丢掉线条宽度的问题
1. `F` 修复 组件 `<cover-view />` 在 Android 下 border-radius 无效问题
1. `F` 修复 组件 `<rich-text />` 自动 trim 问题
1. `F` 修复 组件 `<video />` 在 Android 下，未开始播放时，组件上无法触发页面滑动问题
1. `F` 修复 组件 `<cover-view />` 点击时会穿透到 map，触发 map 的 tap 事件问题
1. `F` 修复 video 上下文 seek 秒数会被取整，无法精确定位问题
1. `F` 修复 框架 `onReachBottom` handler 不存在的 warning 在某些情况下异常出现的问题
1. `U` 更新 框架 `setData` 支持异步回调 [详情](../framework/app-service/page.md#pageprototypesetdata)
1. `U` 更新 框架 `hover-stop-propagation` 支持拦截点击态 [详情](../component/view.md)
1. `U` 更新 框架 后台拉起小程序时 reLaunch 优化
1. `U` 更新 框架 页面跳转和弹窗授权类接口支持在 App onLaunch 时机调用
1. `F` 修复 框架 在部分 Android 下出现页面放大的问题

### v1.4.4 (2018.07.26)

### v1.4.3 (2018.07.20)
1. `A` 新增 API `setTopBarText` 设置置顶信息 [详情](../api/ui.md#wxsettopbartextobject)

### v1.4.2 (2018.07.19)
1. `F` 修复 组件 `<cover-view />` 在某些情况下真机上无法覆盖在 `<map />` 组件上的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=3966c31758ee359cd956cfaebd4e8683)
1. `F` 修复 组件 `<open-data />` 请求数据顺序的问题
1. `F` 修复 组件 `<canvas />` 动态变化大小后 `canvasToTempFilePath` 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=21fb347ea7d9a0715faeb1e274c32a66)

### v1.4.1 (2018.07.17)
1. `U` 更新 API `createSelectorQuery` 可获取元素的属性
1. `U` 更新 API `reLaunch` 逻辑，此版本开始 `reLaunch` 不可在小程序进入后台后调用
1. `F` 修复 API `getBLEDeviceCharacteristics` 在开发者工具中请求失败的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=28012b227d377bcf8482702760c37ff5)
1. `F` 修复 API `canvasToTempFilePath` 在 iOS 中坐标偏移的问题 [详情](http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=4ab78e3831f27bba978a9dd501ba9210)
1. `F` 修复 组件 `<rich-text />` 没有检查参数为空的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=f4c572208d66102411b9119a07c1cfd5)
1. `F` 修复 组件 `<open-data />` 组件无法获取群名称的问题 [详情](http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=ffe8f510fffb57cd39aa520af5779071)
1. `F` 修复 组件 `<map />` 在开发者工具中无法移动和触发事件的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=8961072b9a2ebc7be89b6d62df8c8067)
1. `F` 修复 组件 `<cover-image />` 在开发者工具中无法预览临时图片的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=f666e86c5871733ee41a0f7b5e3e4898)
1. `F` 修复 组件 `<text-area />` 在 iOS 中设置 `color` 无效的问题 [详情](http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=c123349d20be1c79c565e852339c5aab)
1. `F` 修复 基础框架 重新打开小程序的时 `App.onShow` 未正确获取 `path` 和 `query` 的问题

### v1.4.0 (2017.07.10)

1. `A` 新增 API `createSelectorQuery` 获取元素布局信息 [详情](../api/wxml-nodes-info.md#wxcreateselectorquery)
1. `A` 新增 API `getFileInfo` 获取文件信息 [详情](../api/getFileInfo.md)
1. `A` 新增 API `onUserCaptureScreen` 监听用户进行截屏事件 [详情](../api/onUserCaptureScreen.md#wxonusercapturescreen)
1. `A` 新增 API `pageScrollTo` 使页面滚动到指定位置 [详情](../api/scroll.md)
1. `A` 新增 API `setNavigationBarColor` 支持小程序修改标题栏颜色 [详情](../api/setNavigationBarColor.md)
1. `A` 新增 API `setEnableDebug` 控制线上版本 vConsole 的打开关闭 [详情](../api/setEnableDebug.md)
1. `A` 新增 API `setKeepScreenOn` 允许小程序设置屏幕保持常亮 [详情](../api/setKeepScreenOn.md)
1. `U` 更新 API `closeSocket` 新增 code, reason 参数 [详情](../api/network-socket.md#wxclosesocketobject)
1. `U` 更新 API `connectSocket` 接口增加 支持 protocols 参数定义子协议 [详情](../api/network-socket.md)
1. `U` 更新 API `getUserInfo` 增加 lang 参数指定返回用户信息语言 [详情](../api/open.md)
1. `U` 更新 API `openDocument` 增加 fileType 参数用于指定文件类型 [详情](../api/file.md#wxopendocumentobject)
1. `U` 更新 API `request` 超过并发限制做队列处理
1. `U` 更新 API `request` 返回 requestTask 支持 abort 操作 [详情](../api/network-request.md#返回值)
1. `U` 更新 API `uploadFile` `downloadFile` 返回 uploadTask/downloadTask 支持监听进度更新及 abort 操作 [详情](../api/network-file.md#返回值)
1. `F` 修复 API `canvasToTempFilePath` 在 iOS 下保存图片不清晰的问题
1. `F` 修复 API `chooseLocation` 直接选第一个默认地址，成功后返回信息为空的问题
1. `F` 修复 API `chooseVideo` 当录制视频超过 10s 时，播放结束会导致进度条错误的问题
1. `F` 修复 API `getSystemInfo` 在 App 的 onLaunch 和 onShow 中返回不正确的 windowHeight 的问题
1. `F` 修复 API `onBluetoothDeviceFound` 返回数据格式不正确的问题
1. `F` 修复 API `reLaunch` 在客户端上跳转不成功的问题
1. `F` 修复 API `request` 在 Android Http 状态码是 302 时异常的问题
1. `F` 修复 API `showToast` 在 iOS 上页面滚动时出现会随着页面滚动的问题
1. `A` 新增 canvas 上下文 `setTextBaseline` 接口 设置绘制文本时的文本基线 [详情](../api/canvas/set-text-baseline.md)
1. `F` 修复 canvas 上下文 `setTextAlign` iOS 中文字过长时 center 对齐方式失效的问题
1. `F` 修复 canvas 上下文 `disable-scroll` 在客户端上设置失败的问题
1. `F` 修复 canvas 上下文 `drawImage` 在工具中同时多次绘制相同图片时只生效一个的问题
1. `A` 新增 map 上下文 `translateMarker` 增加 rotate 参数 [详情](../api/api-map.md)
1. `A` 新增 map 上下文 `getScale` `getRegion` 接口 支持返回当前缩放级别和视野范围 [详情](../api/api-map.md)
1. `F` 修复 map 上下文 `translateMarker` 接口自动旋转计算出错的问题
1. `F` 修复 map 上下文 `includeMapPoint` 接口的 padding 参数单位错误的问题
1. `A` 新增 video 上下文 `requestFullScreen` `exitFullScreen` 接口 支持全屏 [详情](../api/api-video.md)
1. `A` 新增 video 上下文 `playbackRate` 接口 支持倍速播放 [详情](../api/api-video.md)
1. `F` 修复 video 上下文 `seek` 接口 在播放前设置无效的问题
1. `A` 新增 组件 `<cover-view />` 原生组件上显示基础原生视图 [详情](../component/cover-view.md)
1. `A` 新增 组件 `<open-data>` 实现展示微信开放数据 [详情](../component/open-data.md)
1. `A` 新增 组件 `<rich-text />` 支持富文本 [详情](../component/rich-text.md)
1. `U` 更新 组件 `<map />` 改变 scale 时增加动画过渡效果
1. `U` 更新 组件 `<picker />` 新增多列模式和省市区类型 [详情](../component/picker.md)
1. `U` 更新 组件 `<swiper />` 在 change 事件的返回值中增加 `source` 字段表示引起变化的原因
1. `U` 更新 组件 `<text />` 增加 space 属性支持多空格显示 [详情](../component/text.md)
1. `U` 更新 组件 `<text />` 增加 decode 属性支持将 `&nbsp;` 转成对应字符 [详情](../component/text.md)
1. `U` 更新 组件 `<video />` 增加 loop 属性支持循环播放 [详情](../component/video.md)
1. `U` 更新 组件 `<video />` 增加 muted 属性支持静音播放 [详情](../component/video.md)
1. `U` 更新 组件 `<video />` 增加 bindfullscreenchange 事件监听视频全屏变化 [详情](../component/video.md)
1. `U` 更新 组件 `<video />` 支持手势操作控制音量和亮度
1. `U` 更新 组件 `<video />` 支持视频拖动增加 icon 提示
1. `U` 更新 组件 `<video />` 在 Android 下切换成原生播放器
1. `F` 修复 组件 `<canvas />` 在 Devtools 中 disable-scroll 和文档描述不符的问题
1. `F` 修复 组件 `<input />` 在 Android 中收起键盘同时 update 会更新失败的问题
1. `F` 修复 组件 `<input />` 在 bindfocus 时更新 value 失效的问题
1. `F` 修复 组件 `<map />` longitude latitude scale 属性更新后地图没有变化的问题
1. `F` 修复 组件 `<map />` 事件没有带上 target 等信息的问题
1. `F` 修复 组件 `<scroll-view />` 同时更新列表与 scroll-top 参数时，scroll-top 不立即生效的问题
1. `F` 修复 组件 `<swpier />` 在 Android 和 Devtools 中的渲染延迟问题
1. `F` 修复 组件 `<swiper />` 圆点区域滑动无效问题
1. `F` 修复 组件 `<switch />` 因 label 点击而改变时没有触发 change 事件的问题
1. `F` 修复 组件 `<textarea />` 设置了 auto-height 后底部出现多余空白的问题
1. `F` 修复 组件 `<textarea />` disabled 变为 false 后更新不生效的问题
1. `F` 修复 组件 `<video />` 视频续播退出后，位置不对的问题
1. `F` 修复 组件 `<video />` 弹幕重叠问题
1. `A` 新增 性能分析 开发者工具增加 Trace 功能 [详情](../framework/performance/tools.md)
1. `A` 新增 性能建议文档 [详情](../framework/performance/tips.md)
1. `A` 增加 页面事件 `onPageScroll` 监听页面滚动事件 [详情](../framework/app-service/page.md)
1. `U` 更新 框架 小程序运行机制 [详情](../framework/operating-mechanism.md)
1. `F` 修复 框架 app.json 中 backgroundColor 在 Android 设置错误问题
1. `F` 修复 框架 背景音频播放在打开多个小程序时会被 kill 的问题
1. `A` 新增 vConsole 加入 WXML 面板

### v1.3.0 (2017.06.21)
1. `A` 新增 `wx.navigateToMiniProgram` 从一个小程序打开另一个小程序[详情](../api/navigateToMiniProgram.md)
1. `A` 新增 `wx.navigateBackMiniProgram` 返回到上一个小程序[详情](../api/navigateBackMiniProgram.md)

### v1.2.6 (2017.06.20)

### v1.2.5 (2017.06.09)

### v1.2.4 (2017.06.05)
### v1.2.3 (2017.06.01)


### v1.2.2 (2017.05.23)
1. `F` 修复 API `wx.getBackgroundAudioPlayerState` 在开发工具音乐开始播放后也回调 fail 的问题
1. `F` 修复 API `mapContext.getCenterLocation` 在开发者工具上无 success 回调问题


### v1.2.1 (2017.05.20)

1. `A` 新增 API 6 个 iBeacon 相关接口 [详情](../api/iBeacon.md)
1. `A` 新增 API `wx.getSetting` 获取小程序的授权设置 [详情](../api/setting.md#wxgetsettingobject)
1. `A` 新增 API `wx.authorize` 提前授权 [详情](../api/authorize.md#wxauthorizeobject)
1. `A` 新增 API `wx.getScreenBrightness` 获取屏幕亮度 [详情](../api/device.md#wxgetscreenbrightnessobject)
1. `A` 新增 API `wx.setScreenBrightness` 设置屏幕亮度 [详情](../api/device.md#wxsetscreenbrightnessobject)
1. `A` 新增 API `wx.addPhoneContact` 保存联系人到系统通讯录 [详情](../api/device.md#wxaddphonecontactobject)
1. `A` 新增 API `wx.updateShareMenu` 动态更新转发菜单设置 [详情](../api/share.md#wxupdatesharemenuobject)
1. `A` 新增 API `wx.vibrateShort` `wx.vibrateLong` 振动 [详情](../api/device.md#wxvibratelongobject)
1. `A` 新增 API `wx.getWeRunData` 获取微信运动数据 [详情](../api/we-run.md#wxgetwerundataobject)
1. `A` 新增 API `wx.saveImageToPhotosAlbum` 保存图片到系统相册 [详情](../api/media-picture.md#wxsaveimagetophotosalbumobject)
1. `A` 新增 API `wx.saveVideoToPhotosAlbum` 保存视频到系统相册 [详情](../api/media-picture.md#wxsavevideotophotosalbumobject)
1. `A` 新增 API `wx.getBackgroundAudioManager` 获取背景音频管理器 [详情](../api/getBackgroundAudioManager.md)
1. `U` 更新 API `wx.canvasToTempFilePath` 增加 `x` `y` `width` `height` `destWidth` `destHeight` 参数 [详情](../api/canvas/temp-file.md)
1. `U` 更新 API `wx.getLocation` 支持返回高度，水平/垂直精度 [详情](../api/location.md#wxgetlocationobject)
1. `U` 更新 API `wx.scanCode` 新增 `onlyFromCamera` 参数，指定扫码不能从相册选择 [详情](../api/scancode.md#wxscancodeobject)
1. `F` 修复 API `wx.getBluetoothDevices` Android 上回调错误的问题
1. `F` 修复 API `wx.getLocation` 在安卓上调用，移动后返回的位置不更新问题
1. `F` 修复 API `wx.makePhoneCall` 在 Android 无法调用分机问题
1. `F` 修复 API `wx.setNavigationBarTitle` 异常问题
1. `A` 新增 组件 `<movable-view />` 实现拖拽能力 [详情](../component/movable-view.md)
1. `U` 更新 组件 `<button />` `open-type` 新增 `share` 属性 [详情](../component/button.md)
1. `U` 更新 组件 `<map />` `marker` 上方支持气泡窗口 [详情](../component/map.md)
1. `U` 更新 组件 `<map />` `marker` 可以增加 label 标签 [详情](../component/map.md)
1. `U` 更新 组件 `<map />` 可以改变经纬度在 `marker` 图标的锚点 [详情](../component/map.md)
1. `U` 更新 组件 `<map />` 新增箭头样式路线 [详情](../component/map.md)
1. `U` 更新 组件 `<map />` 可以设置路线边框 [详情](../component/map.md)
1. `U` 更新 组件 `<map />` `mapContext` 新增 translateMarker 接口，支持 marker 平移动画 [详情](../api/api-map.md)
1. `U` 更新 组件 `<map />` `mapContext` 新增 includePoints 接口，可以设置 padding [详情](../api/api-map.md)
1. `U` 优化 组件 `<scroll-view />` `scroll-into-view` 支持横向定位 [详情](../component/scroll-view.md)
1. `U` 优化 组件 `<switch />` 增加振动反馈 [详情](../component/switch.md)
1. `U` 优化 组件 `<picker-view />` 滚动时增加声音和振动反馈 [详情](../component/picker-view.md)
1. `F` 修复 组件 `<picker-view />` 中同时改变列表和 value 时显示不正确的问题
1. `F` 修复 组件 `<scroll-view />` 横向滚动在频繁 setData 时卡顿的问题 [详情](../component/scroll-view.md)
1. `F` 修复 组件 `<scroll-view />` 横向滚动设置了 `min-height` 滚动异常问题
1. `F` 修复 组件 `<scroll-view />` 通过 `wx:if` 隐藏后显示， `enable-back-to-top` 失效问题
1. `F` 修复 组件 `<scroll-view />` 滑动时停止并快速点击，不触发 `touch*` 事件的问题
1. `F` 修复 组件 `<swiper />` Android 下第一个指示点残缺问题
1. `F` 修复 组件 `<image />` 动态设置 `src=""` 已显示的图片没有消失的问题
1. `F` 修复 组件 `<image />` src 属性带有空格导致微信中无法显示图片的问题
1. `F` 修复 组件 `<image />` 在 iOS 中连续设置本地图片和网络图片的时序问题
1. `F` 修复 组件 `<input />` 失焦的时候文本重影问题
1. `F` 修复 组件 `<input />` 在 Android 下切换到另一个 `<input />` 时键盘不显示的问题
1. `F` 修复 组件 `<input />` 密码类型重影问题
1. `F` 修复 组件 `<video />` 在 iOS 中关闭屏幕锁定方向后开启全屏，视频方向不正常的问题
1. `F` 修复 组件 `<video />` iOS 拍摄的视频在 Android 中播放方向颠倒问题
1. `F` 修复 组件 `<video />` Android 中切换视频，上一个视频的弹幕任然显示的问题
1. `F` 修复 组件 `<video />` 视频在全屏状态下弹幕不生效问题
1. `F` 修复 组件 `<video />` iOS 最底部弹幕被进度条遮挡问题
1. `F` 修复 组件 `<video />` iOS 全屏状态下进度条断层，并且闪烁的问题
1. `F` 修复 组件 `<video />` iOS 播放器默认显示弹幕按钮的问题
1. `F` 修复 组件 `<video />` iOS 播放时点击右上角查看小程序信息，返回后播放器卡住问题
1. `F` 修复 组件 `<video />` iOS 播放过程中断网，已缓冲视频播放完后画面停止，但是进度条还在走动问题
1. `F` 修复 组件 `<video />` iOS 在全屏播放的情况下，无法切换视频地址
1. `F` 修复 组件 `<video />` 弹幕文字重叠的问题
1. `F` 修复 组件 `<video />` 直播视频操作进度条问题
1. `F` 修复 组件 `<video />` 全屏后导致原生组件层级错乱问题
1. `A` 增加 框架能力 在 `Page` 实例中可以通过 `route` 字段获取页面路径 [详情](./app-service/page.md)
1. `A` 新增 开发体验 体验版支持打开 vConsole 调试
1. `A` 新增 开发体验 客户端增加性能面板 [详情](./performance)
1. `U` 优化 系统能力 Android 在锁屏情况下小程序被关闭
1. `U` 优化 系统能力 iOS 下页面 crash 重启
1. `F` 修复 自定义分析 在页面初始化之前的上报失败问题

### v1.2.0 (2017.05.18)

### v1.1.1 (2017.04.13)
1. `A` 新增 API `wx.canIUse` 获取兼容性 [详情](../api/api-caniuse.md)
1. `U` 优化 代码包限制从 1m 提高至 2m ，开发者可以点击工具 `项目-配置信息-刷新` 来更新项目配置
1. `F` 修复 API `wx.reLaunch` 无法使用相对路径的问题
1. `F` 修复 组件 `<swiper />` 动画中断时状态更新错误的问题
1. `F` 修复 组件 `<scroll-view />` 横向滚动初次渲染高度错误的问题
1. `F` 修复 组件 `<pick-view />` 触发多余事件的问题
1. `F` 修复 框架能力 `App.onLaunch` 和 `App.onShow` 的 `query` 没有缺省值的问题

### v1.1.0 (2017.03.31)

1. `A` 新增 18 个蓝牙相关的 API [详情](../api/bluetooth.md)
1. `A` 新增 API `wx.chooseAddress` 获取收货地址 [详情](../api/address.md)
1. `A` 新增 API `wx.openSetting` 打开小程序设置界面 [详情](../api/setting.md)
1. `A` 新增 API `wx.reLaunch` [详情](../api/ui-navigate.md#wxrelaunchobject)
1. `A` 新增 API `wx.arrayBufferToBase64`、`wx.base64ToArrayBuffer` <!-- (../api/api-util.md) -->
1. `A` 新增 API `wx.showLoading`、`wx.hideLoading` [详情](../api/api-react.md#wxshowloadingobject)
1. `A` 新增 API `wx.startAccelerometer`、`wx.stopAccelerometer` [详情](../api/accelerometer.md)
1. `A` 新增 API `wx.startCompass`、`wx.stopCompass` [详情](../api/compass.md)
1. `A` 新增 API `wx.getClipboardData`、`wx.setClipboardData` 操作剪贴板 [详情](../api/clipboard.md)
1. `A` 新增 API `wx.addCard`、`wx.openCard` 支持微信卡券 [详情](../api/card.md)
1. `A` 新增 API `wx.onNetworkStatusChange` 监听网络变化 [详情](../api/device.md#wxonnetworkstatuschangecallback)
1. `A` 新增 API `wx.hideShareMenu ` `wx.showShareMenu` [详情](../api/share.md)
1. `A` 新增 API `CanvasContext.setTextAlign` 文字的对齐 API [详情](../api/canvas/set-text-align.md)
1. `U` 更新 API `wx.getSystemInfo` 返回 `screenWidth`、`screenHeight` `SDKVersion` [详情](../api/systeminfo.md)
1. `U` 更新 API `wx.showModal` 在用户点击取消情况下的返回值 [详情](../api/api-react.md#wxshowmodal)
1. `U` 更新 API `wx.showToast` 支持 `image` 参数自定义提示框图片 [详情](../api/api-react.md#wxshowtoastobject)
1. `U` 更新 API `wx.getUserInfo` 增加参数 `withCredentials` [详情](../api/open.md)
1. `F` 修复 API `wx.showNavigationBarLoading` 在 `iOS` 下首次调用可能失败的问题
1. `F` 修复 API 成功调用 `wx.requestPayment` 并完成支付后用户未点击本次支付的完成按钮时，模板消息无法下放的问题
1. `F` 修复 API `wx.onBackgroundAudioStop` 在锁屏情况下偶现无法触发回调的问题
1. `F` 修复 API `wx.playBackgroundAudio` 在 `Android` 环境中，某些情况无法继续播放已暂停音乐的问题
1. `F` 修复 API `wx.previewImage` 在 `Android` 下返回的时候会触发 `page.onShow` 的问题
1. `F` 修复 API `wx.chooseImage` 在选择图片的时候若对图片编辑会导致返回结果中没有图片地址的问题
1. `F` 修复 API `wx.onBackgroundAudioStop` 在调用 `wx.seekBackgroundAudio` 时会意外触发的问题
1. `F` 修复 API `wx.getBackgroundAudioPlayerState ` 回调结果不统一的问题
1. `A` 新增 框架能力 可通过 `App.onLaunch`、`App.onShow` 获取进入小程序的场景值 [详情](../framework/app-service/app.md#场景值)
1. `U` 优化 框架能力 支持获取用户转发状态 [详情](../api/share.md)
1. `U` 更新 组件 `<swiper />` 属性 `indicator-color`、 `indicator-active-color` 支持修改面板指示点颜色 [详情](../component/swiper.md)
1. `U` 更新 组件 `<input />` 属性 `confirm-type`、`confirm-hold` [详情](../component/input.md)
1. `U` 更新 组件 `<video />` 属性 `duration` [详情](../component/video.md)
1. `U` 更新 组件 `<text />` 的 `selectable` 属性支持长按选择 [详情](../component/text.md)
1. `U` 更新 组件 `<navigator />` 的属性 `open-type` 的可选值 `reLaunch`、`navigateBack` [详情](../component/navigator.md)
1. `U` 更新 组件 `<picker-view />` 的 `indicator-class` 属性
1. `U` 优化 组件 `<map />` 的 `iconPath` `marker`、`controls` 支持临时文件
1. `U` 优化 组件 `<video />` 的 `src` 属性错误时候，频繁触发 `timeupdate` 事件的问题
1. `U` 优化 组件 `<image />` 支持 `.svg` 文件
1. `U` 优化 组件 `<video />` 控制条的体验问题
1. `U` 优化 组件 `picker-view` 的使用体验，支持快速滚动到所点击项
1. `U` 优化 组件 `<swiper />` 在用户右滑返回时候的体验问题
1. `U` 优化 组件 `<slider/>` 和 `<process/>` 统一颜色设置的属性名 [详情](../component/slider.md)
1. `F` 修复 组件 `<form />` 在拉起键盘时候，可能无法触发提交的问题
1. `F` 修复 组件 `<slider />` 无法通过数据绑定来设置默认值的问题
1. `F` 修复 组件 `<video />` 动态设置 `danmuList` 不生效的问题
1. `F` 修复 组件 `<textarea />` 不支持样式 `min-height`、`max-height` 的问题
1. `F` 修复 组件 `<picker-view />` 外层有hidden变化时显示空白的问题
1. `F` 修复 组件 `<video />` 封面图片在 iOS 下会未自适应的问题
1. `F` 修复 组件 `<video />` 在偶现播放视屏时候出现加载图标的问题
1. `F` 修复 组件 `<swiper />` 在某些情况下图片无法显示的问题
1. `F` 修复 组件 `<picker/>` iOS 日期选择器，第二次选择只更新年份的情况下，对应月份没有更新的问题
1. `F` 修复 组件属性 `hover-class` 由 none 变为其他值时点击态无效的问题
1. `F` 修复 组件 `<textarea />` disabled 属性在默认隐藏再显示情况下不生效的问题
1. `F` 修复 组件 `<swiper/>` 内嵌 `<swiper/>` 时内部 `<swiper/>` 无法正常使用的问题
1. `F` 修复 Android客户端 某些情况下调用 `wx.request` 返回 `fail:interrupted` 的问题
1. `F` 修复 iOS客户端 打开个人热点并有连接时，tabBar 显示异常的问题

### v1.0.1 (2017.03.03)

### v1.0.0 (2017.02.06)
1. `A` 新增 API `wx.getNetworkType` 在无网络返回状态 [详情](../api/device.md#wxgetnetworktypeobject)
1. `F` 修复 API `wx.request` `wx.uploadFile` `wx.downloadFile` 在 Android 下 `statusCode` 不是 `Number` 类型的问题
1. `F` 修复 API `wx.scanCode` 在 iOS 下取消扫码没有回调的问题
1. `F` 修复 API `wx.switchTab` 在某些情况下未调用 `onShow` 的问题
1. `F` 修复 API `wx.reqeust` data 中有特殊字符时无法发起请求的问题
1. `F` 修复 API `wx.getNetworkType` 在 iOS 下返回参数错误的问题
1. `F` 修复 API `wx.downloadFile` 在 iOS 下没有处理 `header` 参数的问题
1. `F` 修复 API `wx.playBackgroundAudio` 在音乐暂停后不会正确播放其他音乐的问题
1. `F` 修复 API `wx.playBackgroundAudio` 在 Android 下播放结束后会触发两次 `onBackgroundAudioStop` 的问题
1. `F` 修复 API `<video />` 在 Android 下 seek 后播放失败的问题
1. `F` 修复 API 需要授权弹框时，弹框重叠的问题
1. `F` 修复 组件 `<video />` 在 iOS 全屏播放后无法使用控制栏的问题
1. `F` 修复 组件 `<video />` 在 Android 下 seek 后播放失败的问题
1. `U` 优化 `App.onError` 不捕获 API 的 `fail` 回调
1. `F` 修复 `wx:for` 在遇到 `wx:key` 相同的场景时，出现渲染异常的问题
1. `F` 修复 `wx:for` 在设置了 `wx:key` 并且数据发生添加、删除或者位置改变的时候出现 `wx:index` 错乱的问题
1. `F` 修复 组件 `<picker-view-column />` 中内容动态变化后高度不正确的问题

### 2017.01.06

1. `U`: 更新 获取小程序页面二维码接口的调用总次数为 十万 次 [详情](../api/qrcode.md)

### 2017.01.05

1. `F`: 修复 touch 事件在开发工具上出现 `preventDefault inside passive event` 的问题

### 2017.01.04

1. `U` 更新 API `wx.getLocation` `wx.getUserInfo` `wx.chooseLocation` `wx.startRecord` 调用时需要用户授权确认，当用户拒绝授权时，回调 "`${APIName}:fail auth deny`"
1. `U` 更新 API `wx.scanCode` 新增 charSet、scanType、path 返回参数 [详情](../api/scancode.md)
1. `U` 更新 组件 `<video />` 全屏按钮显示的逻辑（跟随 controls 属性显示）
1. `F` 修复 API `wx.switchTab` 后 `getCurrentPages` 不正确的问题
1. `F` 修复 API `wx.uploadFile` 的时候，`formData` 传入数字的时候，会变成 `[object Number]` 的问题
1. `F` 修复 API `wx.navigateTo` 接口在 iOS 上页面未显示时调用失败的问题
1. `F` 修复 API `wx.checkSession` 接口在部分 Android 机器上没有回调的问题
1. `F` 修复 API `wx.reqeust` `wx.downloadFile` 接口在客户端未检查 301 重定向后的域名合法性的问题
1. `F` 修复 组件 `<textarea />` 在 Android 动态设置 `focus` 无效的问题
1. `F` 修复 组件 `<picker />` 在 iOS 上点击取消也触发 `bindchange` 事件的问题
1. `F` 修复 组件 `<textarea />` `<input />` 在 Android 上 maxlength <= 0 时异常的问题
1. `F` 修复 组件 `<video />` 在 Android 上播放 m3u8 直播视频时，duration 显示异常的问题
1. `F` 修复 组件 `<video />` 在 iOS 进度条时长没显示完整的问题
1. `F` 修复 组件 `<audio />` 先 seek 后 play 异常的问题
1. `F` 修复 组件 `<radio-group />` 中的 `<radio />` 被全部置为 false 时的状态同步错误的问题
1. `F` 修复 组件 `<swiper />`同时设置 `current` 和 `children` 时，`current` 可能失效的问题
1. `F` 修复 组件属性 `placeholder-class` `hover-class` 为带空格的字符串时样式设置无效的问题
1. `F` 修复 连续 `setData` 时序异常的问题
1. `F` 修复 iOS8 上大量引用本地路径图片会导致页面卡死的问题


### 2016-12-22

1. `F` 修复 `<input/>` 组件在开发者工具上失去焦点时清空内容的问题
1. `F` 修复 开发者工具在项目编译后不触发 `App.onShow` 的问题
1. `F` 修复 在 `<template />` 中使用 `wx:for` 中取不到 `data` 中的值的问题

### 2016-12-21
1. `A` 新增 API `wx.switchTab`  [详情](../api/ui-navigate.md#wxswitchtabobject)
1. `A` 新增 API `wx.scanCode`  [详情](../api/scancode.md)
1. `A` 新增 API `wx.createMapContext`  [详情](../api/api-map.md)
1. `A` 新增 API `wx.createCanvasContext`  [详情](../api/canvas/create-canvas-context.md)
1. `A` 新增 API `wx.showToast` 调用参数 mask [详情](../api/api-react.md)
1. `A` 新增 页面方法 `Page.onShareAppMessage` 用于自定义转发内容 [详情](../api/share.md)
1. `A` 新增 框架方法 `App.onError`  [详情](../framework/app-service/app.md)
1. `A` 新增 页面配置  `disabelScroll` [详情](../framework/config.md#页面配置)
1. `A` 新增 `<picker-view/>` 组件 [详情](../component/picker-view.md)
1. `A` 新增 `<contact-button/>` 组件，用于显示客服会话按钮 [详情](https://developers.weixin.qq.com/miniprogram/dev/component/contact-button.html)
1. `A` 新增 `<navigator/>` 组件属性 openType [详情](../component/navigator.md)
1. `A` 新增 `<switch/>` `<checkbox/>` `<radio/>` 组件属性 color
1. `A` 新增 `<video/>` 组件属性 objectFit  [详情](../component/video.md)
1. `A` 新增 `<map/>`  组件属性 markers polyline circles include-points controls show-location [详情](../component/map.md)
1. `A` 新增 `<swiper/>` 组件属性 circular 控制衔接滑动 [详情](../component/swiper.md)
1. `A` 新增 `<input/>` 组件属性 cursor-spacing [详情](../component/input.md)
1. `A` 新增 `<textarea/>` 组件属性 cursor-spacing [详情](../component/textarea.md)
1. `A` 新增 `<picker/>` 组件属性 disabled [详情](../component/picker.md)
1. `A` 新增 `<view/>` 组件属性 hover-class [详情](../component/view.md)
1. `A` 新增 `<slider/>` 组件属性 `color`、`selected-color` [详情](../component/slider.md)
1. `A` 新增 `<scroll-view/>` 组件属性 scroll-x, scroll-y 动态修改支持 [详情](../component/scroll-view.md)
1. `A` 新增 `<map/>` 组件事件 bindtap bindmarkertap bindcontrolstap bindregionchange [详情](../component/map.md)
1. `A` 新增 `<input/>`组件事件 bindconfirm [详情](../component/input.md)
1. `A` 新增 `<video/>` 组件事件 bindtimeupdate [详情](../component/video.md)
1. `A` 新增 `<textarea/>` 组件事件 bindconfirm [详情](../component/textarea.md)
1. `A` 新增 `<textarea/>` 组件事件 bindinput [详情](../component/textarea.md)
1. `A` 新增 `<canvas/>` 组件事件 bindlongtap [详情](../component/canvas.md)
1. `A` 新增 `AudioContext.setSrc()` 上下文 API [详情](../api/api-audio.md#audiocontext)
1. `A` 新增 `CanvasContext` 上下文 [详情](../api/canvas/intro.md)
1. `A` 新增 `CanvasContext.arc()` 上下文 API [详情](../api/canvas/arc.md)
1. `A` 新增 `CanvasContext.fillRect()` 上下文 API [详情](../api/canvas/fill-rect.md)
1. `A` 新增 `CanvasContext.strokeRect()` 上下文 API [详情](../api/canvas/stroke-rect.md)
1. `A` 新增 `CanvasContext.createLinearGradient()` 上下文 API [详情](../api/canvas/create-linear-gradient.md)
1. `A` 新增 `CanvasContext.createCircularGradient()` 上下文 API [详情](../api/canvas/create-circular-gradient.md)
1. `A` 新增 `<scroll-view/>` 组件表现 滚动时禁止将页面滚动
1. `U` 更新 API `wx.getSystemInfo` 新增 platform 返回参数 [详情](../api/systeminfo.md)
1. `U` 更新 API `wx.downloadFile` 当 HTTP 状态码为 200 或 304 的时候会返回 tmpFilePath [详情](../api/network-file.md#wxdownloadfileobject)
1. `U` 更新 API `wx.showModal` 调用参数 confirmText cancelText 的字数限制 [详情](../api/api-react.md#wxshowmodalobject)
1. `U` 更新 API `wx.navigateTo` `wx.redirectTo` 不允许跳转到 tabbar 页面，请使用 `wx.switchTab` [详情](../api/ui-navigate.md#wxswitchtabobject)
1. `U` 更新 WXML dataset 返回 支持 Object 和 Array
1. `U` 更新 `<image/>` 组件属性 mode 可选 widthFix [详情](../component/image.md)
1. `U` 更新 `<picker/>` 组件属性 range 增加 ObjectArray 类型支持 [详情](../component/picker.md)
1. `U` 更新 `<switch/>` `<checkbox/>` `<radio/>` 默认样式
1. `U` 更新 `CanvasContext.save()` `CanvasContext.restore()` 上下文 API 保存画笔 style
1. `U` 更新 `CanvasContext.arc()` 上下文 API 参数调整，新增 `eAngle`, `counterclockwise`，去除 `sweepAngle` [详情](../api/canvas/arc.md)
1. `U` 优化 `<swiper/>` 滑动体验
1. `U` 优化 `<swiper/>` `<slider/>` 在 `<scroll-view/>` 交互体验
1. `U` 优化 `<navigator/>` `<button/>` 组件点击体验
1. `F` 修复 `wx.request` 在 Android 上 method 只能用大写值的问题
1. `F` 修复 `wx.uploadFile` 在 iOS 上无法设置 header 的问题
1. `F` 修复 `wx.getLocation` type=gcj02 在 iOS 上不生效的问题
1. `F` 修复 `wx.showToast` 退出小程序后依然显示的问题
1. `F` 修复 `wx.showModal` 返回参数在 Android 和 iOS 不一致的问题
1. `F` 修复 `wx.showModal` content 太长时或 title 为空时，布局错乱的问题
1. `F` 修复 `wx.showModal` cancelText 和 confirmText 为空时，没有显示默认值的问题
1. `F` 修复 `wx.showModal` 期间，键盘弹出，无法收起键盘的问题
1. `F` 修复 `wx.getImageInfo` 在 Android 无法获取 http 链接图片的问题
1. `F` 修复 `wx.getSystemInfo` 因为 tabbar 出现导致获取的屏幕高度不一致的问题
1. `F` 修复 `wx.downloadFile` 在 Android 上下载后图片无法显示的问题
1. `F` 修复 `wx.request` 没有对请求数据正确 encode 的问题
1. `F` 修复 `wx.login` 在 iOS 中 App.onLaunch 没有回调的问题
1. `F` 修复 `wx.createAnimationContext` 设置 transformOrigin 异常及动画不能进行下一步的问题
1. `F` 修复 `wx.navigateTo` `wx.redirectTo` 在 iOS 上，Page.onLoad 无法调用的问题
1. `F` 修复 `catch` 阻止事件的默认行为失效的问题
1. `F` 修复 `setInterval` 在 iOS 传参错误导致页面卡死的问题
1. `F` 修复 `onReachBottom` 触发多次的问题
1. `F` 修复 `<swiper/>` 拥有文本节点后代时出错的问题
1. `F` 修复 `<switch/>` `<radio/>` `<checkbox/>` `<image/>` `<video/>` hidden 属性不生效的问题
1. `F` 修复 `<checkbox/>` `<radio/>` label 无法生效的问题
1. `F` 修复 `<scroll-view/>` 滑动到顶部或底部闪屏的问题
1. `F` 修复 `<video/>` 在 iOS 上事件不生效的问题
1. `F` 修复 `<video/>` 在 iOS 被移除了声音会继续存在的问题
1. `F` 修复 `<text/>` 内嵌不会动态更新 class 和 style 的问题
1. `F` 修复 `<button/>` disabled 时文字颜色不对的问题
1. `F` 修复 `<input/>` focus 属性无效的问题
1. `F` 修复 `<input/>` 在 iOS9 使用 display:flex 的时候，第一次输入不显示的问题
1. `F` 修复 `<input/>` 初始值为 undefined 时显示异常的问题
1. `F` 修复 `<input/>` placeholder 重影的问题
1. `F` 修复 `<input/>` `<textare/>` 聚焦前后颜色异常的问题
1. `F` 修复 `<textarea/>` position:fixed 定位异常的问题
1. `F` 修复 `<textarea/>` 在打开 picker 后不触发 blur 事件的问题
1. `F` 修复 `<textarea/>` 设置 auto-height 时高度变化的问题
1. `F` 修复 `<textarea/>` 销毁异常的问题
1. `F` 修复 `<video/>` 在 Android 全屏按钮点击两次才能生效的问题
1. `F` 修复 `<audio/>` 在多个页面中使用相同 id 冲突的问题
1. `F` 修复 `<canvas/>` drawImage 无法正常显示的问题
1. `F` 修复 `<image/>` 在 bindload 事件里面 setData 会出现死循环的问题
1. `F` 修复 `<scroll-view/>` scroll-into-view 失效的问题
1. `F` 修复 `<form/>` submit 取不到 input 的内容的问题
1. `D` 即将移除 `<navigator/>` redirect 属性
1. `D` 即将移除 `wx.createContext` 接口
1. `D` 即将移除 `<input/>` auto-focus 属性，直接使用 focus 属性即可
1. `D` 即将移除 `<map />` covers 属性

### 2016.10.31
1. `F` 修复 `<button/>` 组件的部分事件调用的问题
1. `F` 修复 动态变更 `<swiper-item/>` 组件列表时存在的 `<swiper>` 组件更新的问题
1. `F` 修复 部分 rpx 无效

### 2016.10.28
1. `F` 修复 `page.prototype.setData` 在 `onLoad` 和 `onShow` 中未及时设置的问题
1. `F` 修复 `wx.navigateTo` 在某些情况下失效的问题
1. `F` 修复 `wx.getStorageInfoSync` 返回值中有多余 `errMsg` 的问题
1. `A` 增加 四个文件管理 API `wx.getSavedFileList`、`wx.getSavedFileInfo`、`wx.removeSavedFile`、`wx.openDocument` [详情](../api/file.md)
1. `A` 增加 四个数据管理 API `wx.removeStorage`、`wx.removeStorageSync`、`wx.getStorageInfo`、`wx.getStorageInfoSync` [详情](../api/data.md)
1. `A` 新增 四个交互反馈 API `wx.showToast`、`wx.showModal`、`wx.hideModal`、`wx.showActionSheet` [详情](../api/api-react.md)
1. `A` 新增 选择地理位置 API `wx.chooseLocation` [详情](../api/location.md#wxchooselocationobject)
1. `A` 新增 获取图片信息 API `wx.getImageInfo` [详情](../api/media-picture.md#wxgetimageinfoobject)
1. `A` 新增 音频组件控制 API `wx.createAudioContext` [详情](../api/api-audio.md)
1. `A` 新增 视频组件控制 API `wx.createVideoContext` [详情](../api/api-video.md)
1. `A` 新增 两个设备 API `wx.getSystemInfoSync`、`wx.makePhoneCall` [详情](../api/device.md#wxgetsysteminfosync)
1. `A` 新增 绘图 API `wx.canvasToTempFilePath` [详情](../api/canvas/temp-file.md#wxcanvastotempfilepathobject)
1. `A` 新增 开放能力 API `wx.checkSession` [详情](../api/api-login.md)
1. `A` 新增 `wx.navigateBack` delta 参数，支持多层级返回 [详情](../api/ui-navigate.md#wxnavigatebackobject)
1. `A` 新增 `wx.sendSocketMessage`、`wx.onSocketMessage` 支持收发 ArrayBuffer 数据类型
1. `A` 新增 `getCurrentPages()` 方法， 获取页面栈 [详情](../framework/app-service/page.md#getcurrentpages)
1. `A` 新增 `Page.onReachBottom()` 方法，监听页面到达底部 [详情](../framework/app-service/page.md)
1. `A` 新增 事件对象增加 changedTouches 列表，反应手指触摸位置的变化 [详情](../framework/view/wxml/event.md)
1. `A` 新增 `<textarea/>` 组件 [详情](../component/textarea.md)
1. `A` 新增 `<canvas/>` 多点触摸 [详情](../component/canvas.md)
1. `A` 新增 `<canvas/>` disable-scroll 属性 [详情](../component/canvas.md)
1. `A` 新增 `<image/>` bindload 事件返回图片宽高 [详情](../component/image.md)
1. `A` 新增 `<text/>` 嵌套 `<text/>` 功能 [详情](../component/text.md)
1. `A` 新增 `<video/>` controls autoplay 属性 [详情](../component/video.md)
1. `A` 新增 `<video/>` 支持设置弹幕、发送弹幕 [详情](../component/video.md)
1. `A` 新增 `<video/>` 播放类事件 [详情](../api/api-video.md)
1. `A` 新增 WXML `wx:key` 支持，提升列表渲染时性能 [详情](../framework/view/wxml/list.md#wxkey)
1. `A` 新增 WXML 关键字、数据路径计算 [详情](../framework/view/wxml/data.md)
1. `U` 新增 app.json `tabBar` 属性 `position` 用于指定显示位置 [详情](../framework/config.md#tabbar)
1. `F` 修复 `wx.navigateTo` api 超过 5 个页面，调用失败无返回的问题
1. `U` 修复 `<navigator/>` 设置 `display: flex` 失效的问题
1. `F` 修复 `<input/>` `text-align:center`、`text-align:right` 不支持的问题
1. `F` 修复 `<input/>` 聚焦时异常的问题
1. `F` 修复 `<image/>` base64 图片显示的问题
1. `F` 修复 动态节点更新导致表单组件重置问题
1. `F` 修复 使用 rpx 单位部分手机出现边框显示不全的问题
1. `F` 修复 不同页面中相同的 `canvas-id` 共享同一个绘图上下文的问题
1. `F` 修复 page 里面的属性对象内的 function 失效的问题
1. `F` 修复 `wx.drawCanvas` 在 canvas 宽高为 0 的情况下画不出来的问题
1. `F` 修复 `wx.request` header 设置 'Content-Type' 异常的问题
1. `D` 即将移除 `App.prototype.getCurrentPage`，可使用更功能更强大的 `getCurrentPages` 替代 [详情](../framework/app-service/app.md#appprototypegetcurrentpage)
1. `D` 即将移除 `<audio/>` action 属性，可使用更方便的音频组件控制 API 替代 [详情](../api/api-audio.md)
1. `D` 即将移除组件： `<toast/>` `<loading/>` `<action-sheet/>` `<modal/>`, 可使用更方便的交互反馈 API 替代 [详情](../api/api-react.md)

### 2016.10.11
1. `A` 增加 `<video/>` Android 添加了默认的控件
1. `A` 增加 模块化中可使用 `exports` 对外暴露接口
1. `A` 增加 模块化中 `require` 可不写 `.js` 后缀
1. `F` 修复 `<swiper/>` 滑动灵敏度
1. `F` 修复 `<toast/>` 中图标位置偏上，没有居中的问题
1. `F` 修复 `<view/>` 标签 hidden 属性失效的问题
1. `F` 修复 `<input/>` iOS10 下首次输入不显示的问题
1. `F` 修复 `<button/>` type="mini" 的问题
1. `F` 修复 `<button/>` 出现 loading 时，loading和文字对齐的问题
1. `F` 修复 `<canvas/>` drawImage 图片路径不正确的问题
1. `F` 修复 Page 中 data 之外的数据无法被重置的问题
1. `F` 修复 大小写导致的 wx.request 的 header 参数属性被重复设置的问题
1. `F` 修复 app.js 中无法使用 `require` 的问题
1. `R` 移除 `<switch/>` 组件多余点击态
1. `R` 移除 `<view/>` 标签 inline 属性
1. `R` 移除 `<page/>` 标签的 height 100% 的默认样式

