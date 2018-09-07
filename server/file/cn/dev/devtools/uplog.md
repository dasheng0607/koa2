#  开发者工具更新日志

[查看基础库更新日志](../framework/release.md)

### 2018.08.07

1. `F` 修复 Mac 版开发者工具代理一直是 “直连网络” 的问题

### 2018.08.01

1. `F` 修复 小程序使用分包后，云测试提示代码包上限有误的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000aa892f1ca485431b6492ae56000)
1. `F` 修复 素材管理文件列表内容重叠的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=00048414768268bc14f69fecb52800)
1. `F` 修复 模拟器工具栏消失的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000868b9760cb01cba17bca2d5bc00&commentid=00046655c6ca40f3e117cc770518&parent_commentid=000c2ecac8cd38cdbd176b6435fc&token=2016114098&lang=zh_CN)

### 2018.07.20

1. `F` 修复 1.02.1807120 带来的编译不生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1453523220&docid=0004c87e6cc528e510179691150800&inwindow=1)
1. `F` 修复 界面调试样式覆盖规则计算错误的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a4ae7cec2581962e6c49e45bc00&token=940403363&lang=zh_CN)
1. `F` 修复 分包根目录名字后缀相同时报错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1382542218&docid=0008e2c47f0f3018860775ff45c800)

### 2018.07.12

1. `A` 新增 多帐号调试 [详情](./multiaccount.md)
1. `A` 新增 iPad 及横屏调试
1. `A` 新增 素材管理支持 svg 文件
1. `A` 新增 编辑器全局搜索支持更多文本文件
1. `U` 优化 编辑器菜单采用原生菜单，避免被其他界面遮盖导致显示不全
1. `F` 修复 远程调试网络面板某些请求会有乱码的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=00062eac0849301f0ef6e04e456000&highline=network)
1. `F` 修复 自定义组件在 1.6.3 基础库开发者工具报错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1271211997&docid=0006ee3b930f30600f0783b2756400)
1. `F` 修复 快速编译，快速弹出/收回模拟器导致开发者工具黑屏的问题
1. `F` 修复 断网后点击登录会出现开发者工具白屏的问题
1. `F` 修复 用户代码触发开发者工具上传的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=244138274&docid=000c6cc9da8930e5a5e6f02fe5b800)
1. `F` 修复 `wx.setBackgroundColor` 和 `wx.setBackgroundTextStyle` 在页面生命周期使用会报错的问题
1. `F` 修复 插件功能页 json 配置没有生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1553985152&docid=00000874b98458b575f64f2235bc00)
1. `F` 修复 界面调试样式覆盖规则计算错误的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a4ae7cec2581962e6c49e45bc00&token=940403363&lang=zh_CN)
1. `F` 修复 `wx.createAudioInstance` src 是本地项目文件，动态设置 volume = 0 再设置回 1 后没有声音的问题
1. `F` 修复 小游戏分包加载时，分包大小只包含 JS 文件的问题
1. `F` 修复 小游戏使用分包时，2.1.0 以下基础库无法调试的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0000c4809ac1b0e0930765bb256800&highline=%E5%B0%8F%E6%B8%B8%E6%88%8F%E5%88%86%E5%8C%85)
1. `F` 修复 小游戏 `wx.createUserInfoButton` 无法使用本地图片的问题
1. `F` 修复 通过二维码编译的场景值不符合预期的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000406dedf83d84f89d67245c5d000)
1. `F` 修复 `wx.showToast` icon = 'none' 时无法穿透的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e60e87f8de0448df60e66356000&token=1196209900&lang=zh_CN)
1. `F` 修复 自定义分析窗口无法再次打开的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=00062a02f68e40a996b65363951800&comment_lvl=3)
1. `F` 修复 分包根目录名字后缀相同时报错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1382542218&docid=0008e2c47f0f3018860775ff45c800)

### 2018.06.12

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki&download_version=1021806120&version_type=1) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki&download_version=1021806120&version_type=1) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki&download_version=1021806120&version_type=1)

1. `A` 新增 TGit 工具栏入口 [详情](../qcloud/tgit.md)
1. `F` 修复 远程调试分包中使用插件报错的问题

### 2018.06.08

1. `A` 新增 自动预览功能 [详情](./debug.md#自动预览)
1. `A` 新增 远程调试 Network 面板
1. `A` 新增 模拟器静音功能
1. `A` 新增 代码断点检测及提示
1. `A` 新增 支持插件页面
1. `A` 新增 上传插件时推荐版本号
1. `A` 新增 Storage 面板清除按钮及数据详情展示
1. `A` 新增 项目详情 appid 复制按钮
1. `F` 修复 Win10 1803 版本出现自动编译的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000eccb1c5c0f81579c6986175b000)
1. `F` 修复 1.02.1805181 引入的组件中使用抽象节点 componentGenerics 时异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a245810cdc8ddeac6f40d451000)
1. `F` 修复 因在循环中使用断点导致重新编译时提示重启耗时过久的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e04fde747882576c6092a05b400)
1. `F` 修复 项目中引入新插件时报错，需要切换一下基础库才能使用的问题
1. `F` 修复 navigationStyle 为 custom 时显示异常的问题
1. `F` 修复 `wx.setTabbarItem` 后重新编译无法恢复的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0000e67eff0af04773d6352c95bc00)
1. `F` 修复 远程调试 typescript 源文件内容丢失的问题
1. `F` 修复 压缩后的 js 文件无法正常格式化的问题
1. `F` 修复 小游戏视频广告在模拟器缩放的情况下尺寸异常的问题


### 2018.05.18

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki&download_version=1021805181&version_type=1) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki&download_version=1021805181&version_type=1) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki&download_version=1021805181&version_type=1)

1. `F` 修复 1.02.1805150 引入的 `<web-view/>` 组件显示异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1701153588&docid=00048ae52006b8894ac6e9a3153c00)
1. `F` 修复 1.02.1805150 引入的小屏幕电脑上模拟器容器没有滚动条的问题
1. `F` 修复 小程序 iPhoneX 模拟器刘海丢失的问题
1. `F` 修复 覆盖安装后启动的工具版本号还是旧版本的问题
1. `F` 修复 windows 安装界面乱码的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e8c961101d84ecb969822353400&highline=%E5%AE%89%E8%A3%85%20%E4%B9%B1%E7%A0%81)
1. `F` 修复 自定义组件中节点动态删除导致 wxml 面板白屏的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0008a8f45b4e18ba44c66907651c00&token=1501432787&lang=zh_CN)
1. `F` 修复 小游戏调用 `wx.setPreferredFramesPerSecond` 后丢帧的问题
1. `F` 修复 小游戏使用 fs.writeFileSync 写入一个 ArrayBuffer 类型的数据，encoding 指定为 binary 时会导致写入的文件内容错误的问题
1. `F` 修复 使用插件时，插件中的图片没有显示的问题
1. `F` 修复 小程序中带有 sourcemap 时解析失败导致上传报错的问题

### 2018.05.15

1. `A` 新增 素材管理功能 [详情](../qcloud/material.md)
1. `A` 新增 工具栏右键进行工具栏管理 [详情](./page.md#工具栏管理)
1. `A` 新增 独立窗口显示模拟器和调试器的功能 [详情](./page.md#独立窗口)
1. `A` 新增 可以在工具栏切换小程序模式和插件模式
1. `A` 新增 小程序使用的插件有更新时，在控制台提示插件更新
1. `A` 新增 小游戏 `wx.createUserInfoButton` 调试支持（基础库需选择2.0.6）
1. `A` 新增 当插件有更新时，在插件使用者的调试器控制台提示更新
1. `A` 新增 插件 README.md 文档编辑及上传功能
1. `A` 新增 小游戏广告展示
1. `U` 优化 多核编译的实现方案
1. `U` 优化 开发者工具中基础库的更新逻辑，实时获取最新的基础库
1. `F` 修复 1.02.1804251 引入的修改 `game.json` 中的 `deviceOrientation` 不生效的问题
1. `F` 修复 1.02.1804251 引入的小游戏重新编译时音效没有重置的问题
1. `F` 修复 1.02.1804251 引入的 `addEventListener` 报错导致无法显示页面的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a0e8625c090a6b1a6a0a775b000)
1. `F` 修复 小游戏 `wx.getUpdateManager` 无效的问题
1. `F` 修复 小游戏 `wx.onShow` 偶尔不触发的问题
1. `F` 修复 小游戏默认背景颜色与真机不一致的问题
1. `F` 修复 小游戏 状态栏位置异常的问题
1. `F` 修复 小程序业务逻辑（复杂计算或死循环）导致重新编译无效的问题
1. `F` 修复 横屏时 iPhoneX 刘海位置异常的问题
1. `F` 修复 `wx.showModal` 在页面路由之后消失的问题
1. `F` 修复 开启自动保存修改时，在 `app.json` 中新增 `page` 出现多个中间页面的问题
1. `F` 修复 开发者工具 1.6.0 基础库调用 `wx.createInnerAudioContext` 无效的问题
1. `F` 修复 `<picker fields="year" value="2018"/>` 显示 1970 的问题  [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1324768068&docid=000860735d8a68eb7fa6f2a0351c00&inwindow=1&comment_lvl=1)
1. `F` 修复 开发者工具支持 HTTP2 而真机不支持 HTTP2，导致网络 Response Headers 大小写不一致的问题
1. `F` 修复 不处理 `wx.authorize` 授权窗，直接重新编译，再也无法弹出授权窗，清除缓存编译也无法弹出的问题
1. `F` 修复 多开项目时社区消息会重复通知的问题
1. `F` 修复 命令行调用无法打开游客模式的项目的问题
1. `F` 修复 点击胶囊关闭按钮，不会触发 `App.onHide` 的问题
1. `F` 修复 自带背景音乐播放器窗口没有播放按钮的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=769370567&docid=000c224e904dd096bea6a3e1556000&inwindow=1&comment_lvl=1)
1. `F` 修复 快速修改 text 节点时在 WXML 面板中显示异常的问题
1. `F` 修复 referrerInfo.extraData 类型与文档不一致的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=00024622e1c778d5dab68f54d51000&comment_lvl=1)
1. `F` 修复 `<web-view />` src 没有更新的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0006cc97e3c38065eeb69eeee5b800&token=1532068018&devtools=1&comment_lvl=12)

### 2018.04.25

1. `A` 新增 搜索动态页 [详情](https://mp.weixin.qq.com/servicezone/apidocs/html/%E5%BC%80%E5%8F%91%E5%89%8D%E5%BF%85%E8%AF%BB/%E4%BD%93%E9%AA%8Cdemo.html)
1. `A` 新增 `wx.getUserInfo` 升级提示
1. `F` 修复 小游戏使用自定义编译条件预览时，真机没有 query 的问题
1. `F` 修复 `2.0.0` 基础库 `<button open-type="getUserInfo"></button>` 无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=000e66816e4e68694da68dc8b56c00)

### 2018.04.12

1. `F` 修复 1.02.1804080 引入的编译条件为分包内页面时无法加载的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1149299852&docid=000202572c8060847796a59cc5b000)
1. `F` 修复 1.02.1804080 引入的页面白屏的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1093803632&docid=0006ecb698cbd8a85b9649d895b400&inwindow=1)
1. `F` 修复 未使用插件时，出现 `[non-writable]` 的提示的问题
1. `F` 修复 `navigationStyle` 为 `'custom'` 时，获取的 `windowHeight` 与真机不一致的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=713615538&docid=000ca2632108607676965713b56000&inwindow=1)
1. `F` 修复 `wx.showModal` 没有覆盖 tabbar 的问题

### 2018.04.08

1. `A` 新增 编辑器文件标签打开策略设置
1. `A` 新增 iPhone X 刘海效果
1. `A` 新增 `App.onPageNotFound` 的调试支持 [详情](../framework/app-service/app.md)
1. `A` 新增 远程调试带插件的小程序支持
1. `A` 新增 `project.config.json` 的 `ignore` 字段 [详情](./projectconfig.md#packoptions)
1. `A` 新增 项目设置中展示插件信息、分包大小
1. `A` 新增 自定义预处理命令 [详情](./debug.md#自定义预处理)
1. `A` 新增 支持分包中使用插件
1. `F` 修复 同步 API 导致内存泄漏的问题
1. `F` 修复 `<web-view />` 链接带 `#wechat_redirect` 无法加载的问题
1. `F` 修复 在 tabbar 页面调用 `wx.redirectTo` 后再调用 `wx.switchTab` 到同一 tabbar，页面出错的问题
1. `F` 修复 网络请求 API 没有带上对应模拟器设备的 `userAgent` 的问题
1. `F` 修复 项目管理删除无效项目不生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0008ec35474c704a5e76d3ab156400)
1. `F` 修复 只有设置页面时，无法关闭开发者工具的问题
1. `F` 修复 当项目目录在 `node_modules` 下时，无法感知文件变更的问题
1. `F` 修复 1.02.1803210 版本导致的 `WXML` 面板，某些情况下不显示子节点的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=892177389&docid=000a40b7b5c5d0b01286dc4dd56c00&inwindow=1&comment_lvl=17)
1. `F` 修复 远程调试 CanvasContext.measureText 报错的问题
1. `F` 修复 `WXML` 面板无法审查自定义组件内节点的问题
1. `F` 修复 `WXSS` 文件解析异常导致无法查看节点样式的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000264dc12cd005b637621e775b400&comment_lvl=4)
1. `F` 修复 某些情况下新增编译条件无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=653286445&docid=00082ef4904f20d21686ea3ea5bc00)
1. `F` 修复 切换模拟器网络为 offline 后，Socket接口还能正常发送的问题。
1. `F` 修复 BackgroundAudioManager 不回调 onCanplay 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000086896d45d85e6776edfbe54c00)


### 2018.04.12

1. `F` 修复 1.02.1804080 引入的编译条件为分包内页面时无法加载的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1149299852&docid=000202572c8060847796a59cc5b000)
1. `F` 修复 1.02.1804080 引入的页面白屏的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1093803632&docid=0006ecb698cbd8a85b9649d895b400&inwindow=1)
1. `F` 修复 未使用插件时，出现 `[non-writable]` 的提示的问题
1. `F` 修复 `navigationStyle` 为 `'custom'` 时，获取的 `windowHeight` 与真机不一致的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=713615538&docid=000ca2632108607676965713b56000&inwindow=1)
1. `F` 修复 `wx.showModal` 没有覆盖 tabbar 的问题

### 2018.04.08

1. `A` 新增 编辑器文件标签打开策略设置
1. `A` 新增 iPhone X 刘海效果
1. `A` 新增 `App.onPageNotFound` 的调试支持 [详情](../framework/app-service/app.md)
1. `A` 新增 远程调试带插件的小程序支持
1. `A` 新增 `project.config.json` 的 `ignore` 字段 [详情](./projectconfig.md#packoptions)
1. `A` 新增 项目设置中展示插件信息、分包大小
1. `A` 新增 自定义预处理命令 [详情](./debug.md#自定义预处理)
1. `A` 新增 支持分包中使用插件
1. `F` 修复 同步 API 导致内存泄漏的问题
1. `F` 修复 `<web-view />` 链接带 `#wechat_redirect` 无法加载的问题
1. `F` 修复 在 tabbar 页面调用 `wx.redirectTo` 后再调用 `wx.switchTab` 到同一 tabbar，页面出错的问题
1. `F` 修复 网络请求 API 没有带上对应模拟器设备的 `userAgent` 的问题
1. `F` 修复 项目管理删除无效项目不生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0008ec35474c704a5e76d3ab156400)
1. `F` 修复 只有设置页面时，无法关闭开发者工具的问题
1. `F` 修复 当项目目录在 `node_modules` 下时，无法感知文件变更的问题
1. `F` 修复 1.02.1803210 版本导致的 `WXML` 面板，某些情况下不显示子节点的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=892177389&docid=000a40b7b5c5d0b01286dc4dd56c00&inwindow=1&comment_lvl=17)
1. `F` 修复 远程调试 CanvasContext.measureText 报错的问题
1. `F` 修复 `WXML` 面板无法审查自定义组件内节点的问题
1. `F` 修复 `WXSS` 文件解析异常导致无法查看节点样式的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000264dc12cd005b637621e775b400&comment_lvl=4)
1. `F` 修复 某些情况下新增编译条件无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=653286445&docid=00082ef4904f20d21686ea3ea5bc00)
1. `F` 修复 切换模拟器网络为 offline 后，Socket接口还能正常发送的问题。
1. `F` 修复 BackgroundAudioManager 不回调 onCanplay 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000086896d45d85e6776edfbe54c00)

### 2018.03.21

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki&download_version=1021803210) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki&download_version=1021803210) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki&download_version=1021803210)

1. `F` 修复 TLS 版本校验出错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000ca4793889f8b18c76bf5f256400&highline=tls&token=1251231172&lang=zh_CN)
1. `F` 修复 `wx.chooseVideo` 没有回调的问题
1. `F` 修复 插件中没有 `WXML` 文件时报错的问题
1. `F` 修复 开发者工具更新逻辑异常的问题

### 2018.03.15

1. `F` 修复 上报更新导致 `wx.uploadFile` 返回值异常的问题
1. `F` 修复 申请测试报告时报错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=456208041&docid=0004e4ef488c883650762672756c00)
1. `F` 修复 频繁调用 `wx.downloadFile` 后 `wx.saveFile` 于同一网络图片时，可能出错的问题
1. `F` 修复 `wx.setTabBarItem` 不支持图标地址绝对路径的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1212819401&docid=0008ee6f0f0ad8b606765929f59c00&inwindow=1&comment_lvl=2)
1. `F` 修复 onShareAppMessage 不能展示临时图片的问题
1. `F` 修复 插件中自定义组件样式丢失的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000c4c032807b8c750764d66756800&comment_lvl=13)
1. `F` 修复 审查节点时，WXML 面板没有高亮对应节点的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=456208041&docid=000eeac2444e48c65b768d5dc5a400)
1. `F` 修复 工具覆盖安装后出现无法监听文件变更的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1566714570&docid=000a26cda68a88a55d767b2ce56c00&inwindow=1)

### 2018.03.13

1. `A` 新增 小程序插件开发支持 [详情](./plugin.md)
1. `A` 新增 小程序代码片段功能 [详情](./minicode.md)
1. `A` 新增 通过二维码调试功能，可以调试[获取二维码](../api/qrcode.md)所生成的二维码
1. `A` 新增 `Network` 面板显示 `wx.uploadFile`、`wx.downloadFile` 的内容
1. `A` 新增 `wx.getImageInfo` 返回图片的方向和类型
1. `F` 修复 界面调试没有显示 padding、margin 的问题
1. `F` 修复 `wx.request` 没有校验 `method` 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0002e41c52cb08098b46bb3af5b400&token=998348858&lang=zh_CN)
1. `F` 修复 项目列表页中没有按最近使用时间排序的问题
1. `F` 修复 小游戏编译条件场景值为 `1044` 时没有 `shareInfo` 的问题
1. `F` 修复 网页调试 `devicePixelRatio` 不正确的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1462950566&docid=0004e245b9cf984a276639ee356000&inwindow=1)
1. `F` 修复 tabbar 没有 icon 时文字没有居中对齐的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1304261213&docid=000a0ac7dec6c84d6f46afa7152800&inwindow=1)
1. `F` 修复 腾讯云恢复开发环境后，选择智能上传时，没有全量上传的问题
1. `F` 修复 开发者工具可以新建名称为 "." 的文件夹的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=2020845980&docid=00088874174698f68e6696eb151c00&inwindow=1)
1. `F` 修复 公众号网页调试地址栏下拉选择错误的问题
1. `U` 优化 开发者工具卡顿的问题

### 2018.02.27

1. `F` 修复 长文本中文乱码问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1027061435&docid=000e82370640309df8463524851400&inwindow=1)
1. `F` 修复 用命令行 / http 上传第三方平台小程序代码没有上传至对应用户的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=151559511&docid=0008ca1074069022f256a1df351c00)

### 2018.02.08

1. `A` 新增 iPhone X 尺寸
1. `U` 更新 自动补全更新
1. `F` 修复 多开时登录态丢失问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1304261213&docid=0000eab3d84d60bc6946e5f765b400)
1. `F` 修复 Windows 某些版本下工具可能打不开的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0002c0bd2942b0854a46236465b000&token=1304261213&lang=zh_CN)
1. `F` 修复 硬盘空间满的时候，如果保存出错文件会被清空的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1923294032&docid=0002ac463ccb20b077469e04756400&comment_lvl=1)
1. `F` 修复 `wx.getSystemInfo` 返回缺少 `batteryLevel` 的问题
1. `F` 修复 部分 API 自动补全格式错误 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1557132050&docid=00024aa27202d81374468829251000&inwindow=1)
1. `F` 修复 `wx.navigateBackMiniProgram` 返回信息错误问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000eec97c70b00977d460025251000&token=2038396590&lang=zh_CN)
1. `F` 修复 焦点不在编辑器时，按下跳转文件快捷键没有自动让它获取到焦点的问题
1. `F` 修复 在 `app.json` 编辑 `pages` 自动创建文件时，路径逾越了项目路径也能成功的问题
1. `F` 修复 `app.json` 中 `enablePullDownRefresh` 没有严格校验类型的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e44a8fa8718741f26d903c51000&token=2109809508&lang=zh_CN)

### 2018.02.01

1. `A` 新增 多开项目
1. `A` 新增 小程序远程调试(需要更新客户端版本) [详情](./remote-debug.md)
1. `A` 新增 sourceMap 文件解析
1. `A` 新增 `wx.showTabBar`、`wx.hideTabBar`、`wx.setTabBarStyle`、`wx.setTabBarItem`、`Page.onTabItemTap` 调试支持
1. `F` 修复 1.02.1801081 版本 wxss 编译器更新失败的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0008e61e34c9c8be7436a258056804&highline=37%20not%20&token=2109809508&lang=zh_CN)
1. `F` 修复 使用自定义组件后 AppData 面板无法使用的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000ac04c9c871865ab26df3325b400)
1. `F` 修复 Mac 版本，如果目录存在 `.DS_Store`，删除目录时提示非空的问题
1. `F` 修复 部分系统上黑屏的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=000ceab9b34e58a24a26e667456400)
1. `F` 修复 部分系统上无法获取 webgl 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=000ceab9b34e58a24a26e667456400)

### 2017.12.15

1. `A` 新增 命令行调用工具执行打开、预览、上传等功能 [详情](../devtools/cli.md)
1. `A` 新增 通过 HTTP 调用工具执行打开、预览、上传等功能 [详情](../devtools/http.md)
1. `A` 新增 编辑器 Git 展示支持 [详情](../devtools/edit.md)
1. `A` 新增 第三方平台 `ext.json` 新增 `directCommit` 字段,用于直接代小程序提交审核 [详情](../devtools/ext.md)
1. `A` 新增 WXML 面板属性自动补全
1. `U` 更新 编辑器自动补全
1. `U` 优化 提升预览上传性能，预览时展示正在编译的文件
1. `U` 优化 增加预览上传队列，优化频繁预览上传的性能
1. `U` 优化 项目列表小程序封面截图策略与性能
1. `U` 优化 创建项目时目录不合法的提示

### 2017.11.30

1. `A` 新增 详情页中展示基础库用户使用率及线上版小程序设置的最低基础库
1. `A` 新增 项目详情页显示业务域名（webview 可信域名）
1. `A` 新增 开启不校验安全域名时，也不校验 webview 的业务域名
1. `F` 修复 场景值为 1044 时，返回的 `scene` 字段是 `String` 类型而不是 `Number` 类型的问题
1. `F` 修复 断网的时候 socket 没有提示信息的问题
1. `F` 修复 安装包重复下载问题
1. `F` 修复 `wx.downloadFile` 响应 404 时，没有返回 `tempFilePath` 的问题
1. `F` 修复 project.config.json 中 miniprogramRoot 设置的路径以 / 结尾的话会导致编辑器保存自动编译不成功的问题
1. `F` 修复 支持 sourcemap 文件在调试器中的加载。[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=ff21eb384464cb8e1ba5668651e51c63&highline=typescript&token=397816104&lang=zh_CN)
1. `U` 优化 复制二维码的交互
1. `U` 优化 创建项目页增加注册小程序的入口

### 2017.11.16

1. `F` 修复 导航条背景色错误时白屏问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=b36f663acb10612e4c7e352e87434117&token=557005191&lang=zh_CN)
1. `F` 修复 小程序页面跳转时 WXML 面板可能空白的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=557005191&docid=fb21b3675263f8f059875f86e74fc06c)
1. `F` 修复 修复计算上传代码包错误的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=557005191&docid=c038ed11b63330fe2430112de0b1bb33)
1. `A` 新增 新建项目时可以选择创建腾讯云的 quick start 项目。
1. `A` 新增 编辑器右键创建 Component 功能。
1. `F` 修复 模拟器选择 offline 后，没有明确提示问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=8a89915204f492015b717674097afbf8)
1. `F` 修复 `wx.downloadFile` 的 downloadTask.onProgressUpdate 缺少返回参数totalBytesWritten、totalBytesExpectedToWrite 的问题。[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=6fcbcc00aefa130248ef96f34604a820)
1. `F` 修复 工具异常退出后仍然有进程未关闭并占用大量CPU资源的问题。
1. `F` 修复 切换设备时 rpx 计算有误的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=e6210386d71f5ce63aead317e0af7f33)
1. `F` 修复 websocket 自动断开时，未重置连接状态的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=8c82b9661034b9b778a2512012a9b853)
1. `F` 修复 `<web-view />` 页面分享时 Page.onShareAppMessage 回调参数没有 webViewUrl 的问题。[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=e65163ec5fcd1ff96f775d7f89feec66)
1. `F` 修复 `<web-view />` 中的网页有 iframe 导致网页主页面无法调用 JSSDK 的方法的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=5b269e9f217e2002a2d6cba5459cad26&token=890951119&lang=zh_CN)
1. `F` 修复 `<web-view />` 没有校验 iframe 中链接合法性的问题
1. `F` 修复 wxml style 列表无法滚动到底部的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=2140474170&docid=9087bfd028605c8d34395194735b08ad)
1. `F` 修复 wxml 大量节点更新时导致调试器整体卡顿的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=72c9399c023d5ea753caf6eb4e268990&token=355961913&lang=zh_CN)
1. `F` 修复 wxml 显示嵌套 `<text />` 出错的问题。
1. `F` 修复 `wx.authorize` 用户拒绝依然回调 ok 的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=c5d8e9df01a0ee536b31bfc1f737a5d6)
1. `F` 修复 自定义编译条件预览时自定义参数有误的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=ef014ed43af2ad089f5aa17561a71153)
1. `F` 修复 路由 API 在目标页面获取的参数与客户端不一致的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=132cf95b7dd95a14b8491a226fec5c6c)
1. `U` 优化 项目列表的视觉展示。
1. `U` 优化 编辑器显示目录树的功能图标位置固定。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=5170e2e6311c30b53e3109ac01ee1acc)
1. `U` 优化 预览/上传前先计算项目代码包大小再进行编译打包处理，避免项目过大导致内存溢出。

### 2017.11.02

1. `A` 新增 可以上传 php 代码到腾讯云，[QuickStart Demo 地址](https://github.com/tencentyun/wafer2-quickstart-php)
1. `A` 新增 `<web-view />` 组件调试支持 [详情](../component/web-view.md)
1. `A` 新增 自定义组件调试支持，需在项目配置中勾选 "预览/上传时使用新特性" 选项 [详情](../framework/custom-component/index.md)
1. `U` 优化 Storage Panel 大于 300 个项目时，不一次性展示全部
1. `U` 优化 编辑器不补全 BOM、DOM 的接口
1. `F` 修复 不打开 Storage Panel 的情况下调用 `wx.setStorage` 开发者工具内存泄露的问题
1. `F` 修复 Storage Panel 存储非法值导致奔溃的问题
1. `F` 修复 自定义编译条件当场景值为 1020、1035、1036、1043 允许填 appid
1. `F` 修复 Wxml Panel 在节点替换的情况下，旧节点没有移除的问题
1. `F` 修复 `wx.connectSocket` 接口在超过数量限制时表现与客户端不一致的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=473639214&docid=2f8e4df7fe2ccb0f034b0818dc656ef3)
1. `F` 修复 编辑器无法打开大写后缀名的图片的问题
1. `F` 修复 1.01.171019 版本导致 `wx.getImageInfo` 报错的问题
1. `F` 修复 `wx.downloadFile` 下载文件无法打开的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1017952110&docid=3337df5759a22b2dab42cea532f5394a)

### 2017.10.19

1. `F`: 修复 1.01.171013 版本更新导致的 `App.onLaunch` 中 API 调用没有回调的问题
1. `F`: 修复 1.01.171013 windows 版本可执行文件数字签名异常的问题
1. `F`: 修复 getPhoneNumber 需要短信验证时依旧回调成功的问题
1. `F`: 修复 公众号网页调试无法添加自定义设备的问题

### 2017.10.18

1. `F`: 修复 管理项目时选择多个项目，界面异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=515252469&docid=2b5e2ade26baa5735252f293ff93b3d0)
1. `F`: 修复 域名检查大小写敏感的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=515252469&docid=d849903e2ed342cec37f6e8c515f3aa7)
1. `F`: 修复 1.01.171013 版本更新导致的 wxml panel 空白的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=515252469&docid=177ff3dbc7eead6cfce0b6f7a0109bec)
1. `F`: 修复 编辑器全局搜索某些字符时可能崩溃的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=203b769635fa9784b01399445cc57118)


### 2017.10.16

1. `F`: 修复 `wx.canvasToTempFilePath` 出错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=ca4670585cd9574e83fded98fb21f7c4)
1. `F`: 修复 创建项目时， `project.config.json` 没有兼容旧版 svr/client 字段的问题，新字段为 [qcloudRoot/miniprogramRoot](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/edit.html#项目配置文件)
1. `F`: 修复 `image` 组件 `src` 为空时有 404 提示的问题

### 2017.10.13

1. `A`: 新增 清除全部缓存功能
1. `A`: 新增 清除登录状态功能
1. `A`: 新增 控制台输入 `showDecryptedInfo` 可以获取加解密信息，帮助开发者验证解密结果是否正确
1. `A`: 新增 编辑代码时可自动补全 `require`、`import` 语句的 js 文件路径
1. `F`: 修复 第一次编译模拟器白屏的问题
1. `F`: 修复 编辑器文件重命名为已存在文件时直接覆盖的问题
1. `F`: 修复 带端口的域名在域名检查没有错误提示的问题
1. `F`: 修复 `page.json` 中 `disableScroll` 无效的问题
1. `F`: 修复 `wx.openCard` 出错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=884195151&docid=6618f4cb1a6bba0912c4d26ba38c1e75)
1. `F`: 修复 `wx.chooseVideo` 缺失返回值的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1948639319&docid=aa927770e2b465655812597bae1495e9)
1. `F`: 修复 `wx.captureScreen` 失败的问题
1. `F`: 修复 公众号网页调试缺失日志的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=afbadbd49c574073929e71ead0474869&token=1480217028&lang=zh_CN)
1. `F`: 修复 下载并发数在重新编译后没有重置的问题
1. `U`: 优化 模拟器加载小程序的方案调整为不通过代理直连本地服务器，减少代理设置异常对模拟器小程序加载的影响
1. `U`: 优化 调试器 WXML、Storage 的某些内容展示方式


### 2017.09.25 (1.01.170925)

1. `A` 新增 `1.5.4` 基础库
1. `A` 新增 点击模拟器状态栏可以复制相关参数的功能
1. `A` 新增 创建项目时，工程目录下会自动生成 project.config.json 文件，方便导入时保留相关配置
1. `A` 新增 可自定义常用功能的快捷键
1. `U` 优化 新建项目默认打开自动补全样式的功能
1. `U` 优化 进入项目后自动编译小程序
1. `F` 修复 `wx.downloadFile` 当 URL 不合法时不执行回调的问题
1. `F` 修复 调用某些 API 不触发 `onShow`、`onHide` 函数的问题
1. `F` 修复 公众号网页调试 devtools 中无法点击链接打开网页的问题
1. `F` 修复 格式化代码时将 `<text>` 标签内的内容缩进的问题
1. `U` 优化 改良了编辑器在打开、删除、重命名文件时的表现行为
1. `F` 修复 编辑器显示文件大小不正确的问题
1. `U` 优化 部分界面外观优化，更易操作可读

### 2017.09.13 (1.01.170913)

1. `A` 新增 `1.5.3` 基础库
1. `U` 优化 为工具栏、模拟器、编辑器、目录树、调试器界面的显示隐藏切换增加快捷键
1. `U` 优化 编辑器同时编辑若干同名文件时，文件标签的标题显示文件夹或路径名称来区分
1. `U` 优化 上传代码时自动填写上次提交的版本号和备注
1. `U` 修复 工具不支持 fiddler 和 charles 抓包的问题
1. `F` 修复 创建项目时候判断是否空目录时 Mac 下未排除隐藏文件的问题
1. `F` 修复 开发者工具内部错误导致的 crash 问题
1. `F` 修复 工具栏隐藏后无法显示预览二维码的问题
1. `F` 修复 选择旧基础库在重启工具后不生效的问题
1. `F` 修复 API `wx.getWeRunData` 在未开通微信运动时未正确提示的问题
1. `F` 修复 登录态失效时创建项目失败没有提示的问题
1. `F` 修复 地理位置模拟只生效一次的问题
1. `F` 修复 模拟器缩放时页面底部被遮住了一部分的问题
1. `F` 修复 `app.json` 中 `unicode` 未正常展示的问题
1. `F` 修复 点击腾讯云恢复开发环境没有提示的问题
1. `F` 修复 模拟器缩放时切后台后的场景值列表样式异常的问题
1. `F` 修复 编辑器目录在新建和右键点击时显示效果出错的问题
1. `F` 修复 Picker 组件选择第一个值出错的问题
1. `F` 修复 重新编译后 audio api 依然在播放音乐的问题
1. `F` 修复 app.json 指定 tabBar 的`selectedColor`不生效的问题
1. `F` 修复 Windows 系统下无法编辑和保存局域网内文件的问题

### 2017.09.06 (1.01.170906)

1. `F` 修复 使用 `wx:key` 的 `warning` 重复出现的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1483282630&docid=bd07e03ef7b826574eba58406553bc1f)
1. `F` 修复 使用 工具中自定义分享图功能无法使用的问题
1. `F` 修复 从标签页跳转到新的页面，在跳转完成之前会显示其他标签页的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=182238138&docid=e727520d0b578edc6e49916bb3366b47)
1. `F` 修复 公众号开发中 touch 模拟未生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1483282630&docid=44a661767e1e92c4924dc7ccc47b348a)
1. `F` 修复 wxss编译错误提示不正确的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=182238138&docid=60c9b581ec34920804c0e9ef8aa17a81)
1. `F` 修复 使用 `project.config.json` 导致右键新建页面失败的问题
1. `F` 修复 编辑 wxml 文件缺失补全的问题
1. `F` 修复 `navigationBarTextStyle` 默认值错误的问题
1. `F` 修复 `wxml panel` 节点缺失的问题
1. `F` 修复 `wxml panel` 选中元素会跳到之前选中的问题
1. `F` 修复 `wx.request` 的 Referer 附带的 appid 不对的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1483282630&docid=b1b3cb258ff0896eb06ca1b3c22746fa)
1. `F` 修复 `wx.chooseAddress` 没有模拟返回数据的问题
1. `F` 修复 `wxml panel` 中鼠标手势不对的问题
1. `F` 修复 分享无法使用自定义图片的问题
1. `F` 修复 `.sql` 文件无法查看的问题
1. `F` 修复 `storage panel` 显示出旧数据的问题
1. `F` 修复 检查域名和 TLS 版本时，网络请求无法回调的问题
1. `F` 修复 工具中 template 标签内的 wxml 无法格式化
1. `F` 修复 `pageScrollTo` 调用没有效果的问题
1. `F` 修复 新版工具中最小字号只能为 12px 的问题
1. `F` 修复 错误提示框在错误过长的情况下无法关闭的问题
1. `F` 修复 脚本文件名中有空格或者是中文文件名无法加载的问题
1. `U` 优化 编译有错误，不主动弹出调试器
1. `U` 优化 使用 `project.config.json` 修改 client 之外的文件，不触发编译
1. `U` 优化 使用 Webview 复用，优化工具卡顿问题
1. `U` 优化 删除 F8 F10 快捷键占用的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1691622661&docid=708a5cec8212f06eda3480f5d24120ab)
1. `F` 修复 app.json 指定 borderStyle 不生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=917843816&docid=691ae970397971e4b5e4717685def9a7)
1. `U` 优化 编辑器的替换快捷键改为 Ctrl + Shift + R，避免与刷新 Ctrl + R 冲突

### 2017.09.01

1. `F` 修复 `wxml panel` 选中节点跳动的问题
1. `F` 修复 `wxml panel` 鼠标为圆点的问题
1. `F` 修复 编辑器快捷键格式化代码失效的问题
1. `F` 修复 `<picker />` 选择第一个异常的问题
1. `F` 修复 `wxml` 编译导致 `<radio-group/>` 在 `Page.setData` 之后选中状态被重置的问题
1. `F` 修复 第三方平台小程序 `Refer` 异常的问题
1. `F` 修复 公众号网页开发触摸模拟不生效的问题
1. `F` 修复 公众号网页开发页面变大的问题
1. `F` 修复 `console panel` 日志重复显示问题
1. `F` 修复 上传代码时上次的输入没有记录的问题
1. `F` 修复 保存文件自动编译时，文件保存没有生效的问题
1. `F` 修复 ext.json 中 extEnable 为 false，到手机上预览依旧生效的问题
1. `F` 修复 页面字体大小异常的问题
1. `F` 修复 修复了在外部编辑器编辑了文件，工具不能检测到更改的问题
1. `F` 修复 设备选择时 wx.getSystemInfo 的内容不对的问题

### 2017.08.31

1. `A` 新增 快捷键 `F8` 显示隐藏工具栏
1. `U` 优化 当有错误的时候 `console` 面板不会自动弹出
1. `F` 修复 保存时自动编译，编译时自动保存无法保存所有文件的问题
1. `F` 修复 第三方平台小程序打开项目报错的问题
1. `F` 修复 启动工具后显示网络连接错误，增加错误提示
1. `F` 修复 模拟器在一些设备上显示模糊的问题
1. `F` 修复 `wxss` 编译错误提示不正确的问题
1. `F` 修复 某些第三方编辑器打开文件会触发工具自动编译的问题
1. `F` 修复 网页调试 hash 变化会 load 页面的问题
1. `F` 修复 网页调试 `alert`、`confirm` 不显示的问题
1. `F` 修复 网页调试添加卡券屏幕缩放无效的问题
1. `F` 修复 网页调试 `urlbar` 输入后自动匹配，按键盘向下键然后 `load` 不了

### 2017.08.30

1. `A` 新增 申请测试报告功能 [详情](./monkey-test.md)
1. `A` 新增 `WXS` 功能 [详情](../framework/view/wxs/index.md)
1. `A` 新增 发布腾讯云功能 [详情](https://mp.weixin.qq.com/debug/wxadoc/introduction/qcloud.html)
1. `U` 优化 全新的视觉和交互体验
1. `U` 优化 更新内核版本

#### 历史版本下载 2017.08.30 (0.22.203100)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_darwin&from=mpwiki)


### 2017.08.21

1. `F` 修复 1.5.0 基础库造成开发工具 `AppData panel` 失效的问题
1. `F` 修复 API `chooseInvoiceTitle` 出现脚本错误的问题

### 2017.08.18

- 新增 4 个全新 API 包括获取发票抬头，指纹识别，主动触发下拉刷新等
- 更新 API `shareAppMessage` 支持分享时自定义卡片配图
- 更新 组件 `<button />` 支持客服会话分享小程序卡片及传入源页面信息
- 优化后台拉起小程序时 reLaunch 逻辑
- 新增 开发者工具预览版 [详情](./beta.md)


### 工具更新

1. `F` 修复 编辑器设置自动换行和主题不生效的问题。[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1429295584&docid=951b8851981f76e4c8b64fdf90461451)
1. `F` 修复 网页调试 UA 不正确的问题


### 工具更新
1. `A` 新增 功能 自定义数据上报调试 [详情](./debug.md#自定义数据上报)
1. `F` 修复 `<picker />` `bindchange` 事件选中 `value` 值不对的问题
1. `F` 修复 编辑器设置自动换行和主题不生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1429295584&docid=951b8851981f76e4c8b64fdf90461451)


### 工具更新 (0.19.191100)
1. `A` 新增 基础库 1.4.0 调试支持
1. `A` 新增 性能 Trace 工具 [详情](../framework/performance/tools.md)
1. `A` 新增 Win 菜单栏 hover 时改变背景色 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=618904619&docid=663d3f9fe7791717faa67df5728ce424)
1. `F` 修复 全局搜索结果页切换标签回来滚动位置不应回到顶部的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0f9c6e3dfe3bfa4e011c94fccf7e692c&highline=%E5%85%A8%E5%B1%80%E6%90%9C%E7%B4%A2&token=1433672993&lang=zh_CN)
1. `F` 修复 文件大小写不一致问题导致部分文件系统大小写敏感用户开启工具白屏的问题
1. `F` 修复 WXML 和 WXSS 代码格式化时缩进没有依据配置
1. `F` 修复 微信授权窗口没有设置缺省头像的问题
1. `F` 修复 使用 `button` 触发分享时候工具会有两次 `onShareAppMessage` 事件的问题

### 2017.06.22
1. `F` 修复 开发工具中　`wx.uploadFile` header　设置无效的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&docid=19f5b374735b2b4a0cbb8d649d469652)
1. `F` 修复 开发者工具打开公众号网页报项目属性获取失败错误的问题

### 0.18.182100
1. `A` 新增 基础库 1.3.0 调试支持
1. `A` 新增 编辑器状态栏显示文件大小
1. `A` 新增 编辑器增加跳转到左边 / 右边文件的快捷键 `Ctrl(Command) + PageUp` 和 `Ctrl(Command) + PageDown`
1. `A` 新增 显示图片时状态栏右侧会给出图片大小信息
1. `U` 优化 编辑器中删除文件不会硬盘删除而是移到回收站
1. `U` 优化 上传代码的交互，去除扫码确认，并给予默认 `项目备注`
1. `F` 修复 `tabbar` 图标工具上错误支持了 svg 图片的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=97aadd788150cc951c46099914169882)
1. `F` 修复 windows 设置 http_proxy 环境变量可能导致无法登陆问题
1. `F` 修复 新建 `Page` 时 `app.json` 中路径添加出错的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&docid=63f8b1d685aa8c57f962b4e50c160c65)
1. `F` 修复 `wx.uploadFile` `wx.downloadFile` 设置 networkTimeout 无效的问题
1. `F` 修复 提交预览或者上传时，检查 `tabbar` icon 超过 40kb 返回的错误码有误的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&docid=7606af9c39030997693f53be8d30e182)
1. `F` 修复 开启自动保存后 app.json 修改后立刻关闭再打开后内容被置空的问题的问题
1. `F` 修复 开发者工具中可以使用 `Image` 但是移动设备中无法使用的问题
1. `F` 修复 某些情况下上传代码会出现二维码无效提示的问题
1. `F` 修复 上传成功后没有提示的问题

### 2017.05.26
1. `A` 新增 基础库 1.2.2 调试支持
1. `F` 修复 基础库切换导致异常的问题
1. `F` 修复 页面内分享会调用两次 Page.onShareAppMessage 的问题
1. `F` 修复 工具外部修改代码文件或文件夹时出现编译异常的问题
1. `F` 修复 `wx.uploadFile` 网络状态码不为 200 回调 fail 与客户端不一致的问题

### 2017.05.19

1. `A` 新增 基础库 `1.2.1` 调试支持。
1. `U` 优化 `App` 和 `Page` 中的函数自动补全
1. `F` 修复 条件编译中的 query 在 `App.onLaunch` 时多 decode 一次的问题
1. `F` 修复 首页的 json 文件出错，且 tabbar 中有空路径时工具无法启动的问题
1. `F` 修复 开启上传代码样式文件自动补全时，wxss 文件有误导致一直在上传中的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=a71468267c33fb46b1745ee4cddb281e&highline=%E4%B8%8A%E4%BC%A0%E4%B8%AD&token=56565699&lang=zh_CN)
1. `F` 修复 `wx.previewImage` 中参数为非字符串时工具异常的问题
1. `F` 修复 网页调试中刷新和下拉地址栏按钮无效
1. `F` 修复 网页调试菜单栏缺失跳转按钮、Mac 下缺失后退、前进、选中地址栏的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0ed970224f4bc91746baec86d95d7c7e&highline=%E5%90%8E%E9%80%80&token=56565699&lang=zh_CN)
1. `F` 修复 使用"关闭其他标签"后，使用 `Ctrl+s` 保存当前文件，会恢复之前关闭的其他标签的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1908977334&docid=eab58703fefba9341c076ed548722d46)
1. `F` 修复 有时外部修改文件保存后自动编译时报网络错误的问题
1. `F` 修复 有 tabbar 的小程序启动时还未加载完时快速切换到另一个 tab 然后马上切换回来会出错的问题

### 2017.05.09
1. `F` 修复 RapidSSL 证书被判断为非法证书的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=555b9b103527edf9ea14edc3473e67bf&token=1782263126&lang=zh_CN)
1. `F` 修复 `wxss` 压缩导致 @import 文件丢失文件的问题
1. `F` 修复 模拟器内容高度错误的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=162237890&docid=4c9346f5f16112089e3313baa681ee34)
1. `F` 修复 清楚数据缓存功能失效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=aa3468335bace4b9305c5d54b748e330&token=803117483&lang=zh_CN)
1. `F` 修复 `app.json` 中添加新页面不会自动创建页面的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=829105299&docid=ddb330c5c11bc1476293da1d7c564c8a)
1. `F` 修复 文件光标定位问题和从 wxss 栏打开文件双开问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1646378300&docid=b6307a94b190f4fae728b75d36c7b1c2&comment_lvl=1)
1. `F` 修复 设置了文件名字大小写敏感的系统，无法打开开发工具的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=bf5974232a1bcf2d1e973f6a5644c1e8&highline=%E7%99%BD%E5%B1%8F&token=&lang=zh_CN)

### 2017.05.08

1. `A` 新增 `wx.addCard`、`wx.openCard` 调试支持
1. `A` 新增 `wx.request` 时 `https` 证书的校验，非法证书将会请求失败
1. `A` 新增 获取更多转发信息的调试支持 [详情](../api/share.md#获取更多转发信息)
1. `A` 新增 基础库切换[详情](./project.md#基础库版本切换)
1. `A` 新增 脚本断点提示，当有断点时，在 devtools 上方会有相关的提示以及操作区
1. `A` 新增 开发者社区新消息的提醒的功能
1. `A` 新增 详细的菜单项
1. `A` 新增 设备切换为 Android 后支持自定义宽高的功能
1. `A` 新增 wxss文件代码压缩功能
1. `A` 新增 编辑器设置页：支持外观配置，编译配置 [详情](./settings.md#编辑器外观配置)
1. `A` 新增 编辑器配置: tab 是否转空格、tab 的大小[详情](./settings.md#编辑配置支持)
1. `A` 新增 编辑器配置：修改时自动保存、编译时自动保存、文件变化时刷新小程序[详情](./settings.md#编辑配置支持)
1. `A` 新增 编辑器右键新建 Page 的功能
1. `A` 新增 编辑器 ctrl + n 新建临时文件
1. `U` 优化 编辑器自动补全的体验
1. `U` 优化 编辑器获取系统字体缓慢的问题
1. `U` 优化 编辑器全局搜索结果 Tab 位置可移动
1. `U` 优化 编辑器顶部文件栏标签宽度自适应文件名字
1. `U` 优化 编辑器全局搜索的体验问题
1. `U` 优化 编辑器新建文件的体验问题
1. `U` 优化 开发者工具页面切换的速度
1. `U` 优化 wxml panel 的操作体验
1. `F` 修复 `wx.request` 在没有设置超时时间的情况下，超时时没有返回的问题
1. `F` 修复 某些情况下新建目录失败的问题
1. `F` 修复 开发工具中 `wxss` 文件 `background-image` 可以使用本地图片同客户端不一致的问题
1. `F` 修复 wxml panel 对于 `text` 从空值动态添加文本会显示错误的问题
1. `F` 修复 windows 版开发工具在扫码登录页无法关闭应用的问题
1. `F` 修复 登录二维码过期无法自动刷新的问题
1. `F` 修复 编辑器目录树单击打开文件时文件没有获得焦点的问题
1. `F` 修复 编辑器文件列表底部右键菜单显示不全的问题
1. `F` 修复 编辑器跳转文件时，文件名前空白字符时无法搜索文件的问题
1. `F` 修复 编辑器全局搜索结果打开文件失败的问题
1. `F` 修复 `wx.createCanvasContext` 自动补全出错的问题
1. `F` 修复 `wx.chooseAddress` 不会弹授权框以及返回缺失 `telNumber` 的问题
1. `F` 修复 `wx.uploadFile`、`wx.downloadFile` 在 url 格式错误时没有回调的问题
1. `F` 修复 `wx.uploadFile`、`wx.downloadFile` header 中没有 referer 的问题
1. `F` 修复 `wx.request` 在检查 TLS 版本时出现内存泄漏的问
1. `F` 修复 `wx.getSystemInfo` 宽高与真实设备不一致的问题
1. `F` 修复 `wx.getLocation` 返回值缺少 speed、accuracy 的问题
1. `F` 修复 `wx.showModal` 点击取消按钮 res.cancel 为 false 的问题
1. `F` 修复 `wx.scanCode` 网络切换为 `none` 时与客户端表现不一致的问题
1. `F` 修复 `App.onLaunch` 获取的场景值为字符串与客户端不一致的问题
1. `F` 修复 自定义条件编译的参数在 Page.onLoad 中获取的 query 与客户端不一致的问题
1. `F` 修复 使用轮询调用 setData 会导致内存泄露的问题
1. `F` 修复 tabBar iconPath 以 / 或者 ./ 开头，编译出错的问题
1. `F` 修复 自定义预览未填写 启动页面 字段时候，生成的二维码未带上自定义参数的问题
1. `F` 修复 wxml panel 在某些情况下不能正常显示的问题
1. `F` 修复 对 `TrustAsia` 证书判断错误的问题

### 2017.03.29
1. `F` 修复 windows 版工具缺失文件的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=89d55205f6bea555fe4a08f01bd3f4c8)
1. `F` 修复 `wx.scanCode` 失败的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=d0cdda0d26216d6084106059c56a6d96)
1. `F` 修复 API `wx.redirect` 第一次无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=b4c5413fa13a569c949a77e8678ffacf)
1. `F` 修复 无 tabbar 的项目页面栈层数异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=2e4454a2ca365f49cbff2e0d3b8059e1)
1. `F` 修复 默认场景值为 0 的问题

### 2017.03.28

1. `A` 新增 mac 版开发工具支持蓝牙调试
1. `A` 新增 `wx.reLaunch` `wx.chooseAddress` `wx.openSetting`  `wx.getClipboardData` `wx.setClipboardData` `wx.arrayBufferToBase64` `wx.base64ToArrayBuffer` `wx.showLoading` `wx.hideLoading`  `wx.startAccelerometer` `wx.stopAccelerometer` `wx.onNetworkStatusChange` `wx.hideShareMenu ` `wx.showShareMenu` `CanvasContext.setTextAlign` 等 API 的调试支持
1. `A` 新增 小程序项目列表页支持删除项目
1. `A` 新增 自定义编译新增场景值调试支持
1. `A` 新增 后台切换进入前台时的场景值调试支持
1. `A` 新增 进入开发者社区的入口
1. `A` 新增 可在项目列表删除所选项目的功能
1. `A` 新增 svg 格式文件的支持
1. `U` 优化 编辑器 wxml 代码自动补全的体验
1. `U` 优化 可信域名出错时候的错误提示
1. `U` 优化 合并 清除工具授权数据 和 清除手机授权数据 选项为 **清除授权数据**
1. `F` 修复 自定义编译时候启动页面的 `json` 配置失效的问题
1. `F` 修复 开发者工具被缩放时候工具显示错乱的问题
1. `F` 修复 页面文件目录中带 `.` 时，该目录下的样式文件无法找到的问题
1. `F` 修复 `Page.onLoad` 返回的参数被多 decode 一次的问题
1. `F` 修复 小程序页面栈超过 5 层没有正确报错的问题
1. `F` 修复 `wx.chooseImage` 会在某些情况下会返回两个相同的 `localId` 的问题
1. `F` 修复 `<input />` 组件在开发工具无法自动聚焦的问题
1. `F` 修复 关闭项目后再进入时工具大小异常的问题
1. `F` 修复 代码中使用 `print` 会跳出打印窗口的问题
1. `F` 修复 某些情况下压缩代码出错的问题
1. `F` 修复 `wx.canvasToTempFilePath` 不生效的问题

### 2017.02.06
1. `A` 新增 地理位置模拟的功能 [详情](./debug.md#sensor-panel)
1. `A` 新增 移动设备重力感应模拟的功能 [详情](./debug.md#sensor-panel)
1. `A` 新增 模拟器网络状态中新增无网络状态模拟的功能
1. `A` 新增 显示当前调试页面的路径以及参数的功能
1. `A` 新增 当系统中存在代理软件，导致工具无法正常启动时候的提示
1. `A` 新增 控制台方法 `showSystemInfo()` 显示工具运行状态
1. `U` 优化 `代码压缩上传` 的功能，提高代码压缩率
1. `U` 优化 预览和上传代码的速度
1. `U` 优化 工具的网络请求，支持开发者使用 `Charles` 抓包调试
1. `F` 修复 mac 下 `清除缓存菜单` 被 `tabbar` 挡住的问题
1. `F` 修复 `wx.showToast` 在 `mask` 为 `true` 时候层级错误的问题
1. `F` 修复 调用 `wx.stopBackgroundAudio` 后没有触发 `onBackgroundAudioStop`的问题
1. `F` 修复 新建项目时 `appid` 不存在的提示不正确的问题
1. `F` 修复 项目目录中遇到无权限读取的文件时候工具假死的问题
1. `F` 修复 未勾选 `监听文件变化，自动刷新开发者工具` 在编辑模式下仍然自动刷新的问题
1. `F` 修复 自动更新失败的问题（需下个版本完全解决）
1. `F` 修复 取消授权，工具返回未同移动设备保持一致的问题
1. `F` 修复 `.wxml` `.wxss` 文件格式化后无法 `undo` 的问题
1. `F` 修复 `wx.previewImage` 不支持 `localid` 的问题
1. `F` 修复 `tabbar` 页面调用 `wx.navigateback` 后出现 `webviewid` 错误的问题
1. `F` 修复 编辑器中 `wx.createCanvasContext` 补全不正确的问题
1. `F` 修复 工具闪退后可能无法启动的问题
1. `F` 修复 控制台没有输出 `ES6` 语法错误的问题
1. `F` 修复 `windows 10`中右键关闭工具会导致 crash 的问题
1. `F` 修复 授权按钮颜色不正确的问题
1. `F` 修复 `wx.downloadFile` 未处理 URL 中 query 导致获取到的 `localid` 无法使用的问题
1. `F` 修复 获取用户信息时，取消授权没有保存到后台的问题
1. `F` 修复 `navigationBarTextStyle` 未对颜色进行校验的问题

### 2017.01.04
1. `A` 新增  **清除手机授权数据** (缓存-清除手机授权数据) 功能
1. `A` 新增 提交预览或者上传代码时候校验文件编码功能 [详情](./details.md#代码文件必须-UTF8-编码)
1. `U` 升级 [nwjs](http://nwjs.io/blog/v0.19.4/) 到 19.4 版本, 更新至 [Chrome55](http://v8project.blogspot.com/2016/10/v8-release-55.html) 内核
1. `U` 更新 与客户端一致，在`<scroll-view />` 中不会触发下拉刷新
1. `F` 修复 组件 `<picker/>` 在开发工具上初始值设置不对的问题
1. `F` 修复 工具去除 `fetch` api，与微信客户端保持一致
1. `F` 修复 `wx.navigateBack` 出现 webviewID not exist 错误的问题
1. `F` 修复 添加或者删除 `app.wxss` 工具编译缓存没有更新的问题
1. `F` 修复 `wxml` 文件最后一行编译出错导致工具卡死的问题
1. `F` 修复 `wxml` 标签未闭合，没有错误提示的问题
1. `F` 修复 编辑器全局搜索点击搜索结果没有跳转到文件对应行的问题
1. `F` 修复 Appdata panel 对数组数据更新处理错误的问题
1. `F` 修复 一些工具的其他 bug


### 0.11.122100
1. `A` 新增  `wx.switchTab` 的调试支持
1. `A` 新增  `wx.startRecord` `wx.stopRecord` `wx.playVoice` `wx.pauseVoice` `wx.stopVoice` API 调试支持
1. `A` 新增  微信支付调试支持 [详情](./details.md#微信支付的调试)
1. `A` 新增  二维码扫码调试支持
1. `A` 新增  app.json 重复定义页面文件导致提交预览错误的提示
1. `A` 新增  模拟器加载图片网络错误的提示信息
1. `A` 新增  编译时候设置初始化页面以及参数的功能
1. `A` 新增  提交预览时候设置初始化页面以及参数的功能
1. `F` 优化  appdata panel 分页面查看数据，支持动态更新以及 `code` 模式显示
1. `F` 修复  `wx.getBackgroundAudioPlayerState` 在没有音乐播放的时候无返回的问题
1. `F` 修复  `wx.getBackgroundAudioPlayerState ` 获取 status 不正确的问题
1. `F` 修复  wxml panel 某些情况下白屏的问题
1. `F` 修复  wxml panel 属性无法复制，并且复制带有回车的问题
1. `F` 修复  wxml panel 单一文本节点展示没有对齐的问题
1. `F` 修复  app.json 中 tabbar 的 position 设置为 top 时模拟器显示错误的问题
1. `F` 修复  devtools 和编辑器中点击外部链接错误的问题
1. `F` 修复  `wx.requst` 因为缓存无法发送请求的问题

### 工具更新
1. `F` 修复  `wx.request` 在某些情况下重复触发的问题
1. `F` 修复  wxml panel rpx 调试失效的问题
1. `F` 修复  编辑器 textarea 组件 提示错误的问题

### 0.11.112300
1. `A` 增加 控制台指令 `showRequestInfo()` 显示 `wx.request` 请求详细信息
1. `F` 修复 修复 TLS 版本校验出错，导致 `wx.request` 失败的问题

### 0.11.112200

#### 开发者工具基础功能
1. `A` 增加 上传代码时样式自动补全选项，默认开启，开发者可以主动关闭 [详情](./project.md#样式补全)
1. `A` 增加 开发环境不校验请求安全域名以及 TLS 版本选项，默认关闭，开发者可以主动开启 [详情](./project.md#不校验请求域名及-tls-版本)
1. `A` 增加 Page 页面脚本错误的提示信息
1. `A` 增加 同客户的保持一致，校验 `wx.request、wx.downloadFile、wx.uploadFile` 的 TLS 版本
1. `A` 增加 工具窗口位置以及大小的自动保存功能
1. `A` 增加 显示模拟器中的错误信息的功能
1. `A` 增加 wxml panel 双击标签名展开的功能
1. `A` 增加 打开本地开发目录的功能
1. `A` 增加 当前 AppId 的网络配置信息表
1. `F` 修复 同客户端保持一致，移除 `Promise`，开发者需要自行引入兼容库
1. `F` 修复 某些情况下，事件被发布多次的 bug
1. `F` 修复 在 devtools 中使用 Ctrl + R 或者 F5 导致模拟器出现错误的问题
1. `F` 修复 wxml panel 在 mac 中白屏的问题
1. `F` 修复 wxml panel 在 inspect 模式下卡顿的问题
1. `F` 修复 wxml panel 在某些情况下假死的问题
1. `F` 修复 wxml panel sytle 面板文字重叠的问题
1. `F` 修复 wxml panel 无法取消多个样式规则的问题
1. `F` 修复 `wx.request` 设置 content-type 错误的问题
1. `F` 修复 `wx.downloadFile、wx.uploadFile` 未校验可信域名的问题
1. `F` 修复 git 切换分支或者文件大量改变时候模拟器白屏的问题
1. `F` 修复 wxml 文件不存在的时候没有报错信息的问题

#### 编辑模块
1. `A` 增加 wxml、wxss 文件格式化代码的功能
1. `A` 增加 使用 Ctrl + Shift + f 搜索代码的功能
1. `A` 增加 文件树右键功能
1. `A` 增加 关闭右侧文件的功能
1. `A` 增加 使用 Ctrl + p 文件跳转支持模糊搜索
1. `A` 增加 wxml 代码自动补全的和文档显示的功能 [详情](./edit.md#自动补全)
1. `A` 增加 gif 类型文件的显示功能
1. `A` 增加 在硬盘上打开文件的功能
1. `A` 增加 保存 app.json 后，自动创建对应 page.js 和 page.wxml 文件的功能
1. `F` 修复 wxml 自动补全错误的问题
1. `F` 修复 文件过多时候，在 tabbar 上无法点击的问题
1. `F` 修复 修改目录名字可能失败的问题


### 0.10.102800

#### 开发者工具基础功能
1. `A` 增加 监听文件变化，实时刷新模拟器，默认开启，开发者可以在项目中主动关闭
1. `A` 增加 登录界面增加代理配置、切换账号
1. `A` 增加 所有新增 API 以及 组件的调试功能
1. `A` 增加 更友好的错误提示功能
1. `A` 增加 wxml panel rpx 调试支持
1. `A` 增加 wxml panel 实时修改同步模拟器的功能
1. `A` 增加 `wx.previewImage` API 调试支持
1. `F` 修复 工具中无法模拟字体小于 12px 的问题
1. `F` 修复 picker 组件的 start、end 无效的问题
1. `F` 修复 video 组件无法滑动进度条的问题
1. `F` 修复 `wx.getSystemInfo` 再有 tabbar 情况下获取高度错误的问题
1. `F` 修复 `wx.chooseImage` 设置count无效的问题
1. `F` 修复 Page.onLoad 时调用 wx.setNavigationBarTitle 失败的问题
1. `F` 修复 wxml panel 空白以及选择时候卡顿的问题
1. `F` 修复 脚本文件名字为中文时候的编译错误问题
1. `F` 修复 关闭项目时候没有关闭媒体播放的问题

#### 编辑模块
1. `A` 增加 文件自动保存功能 [详情](./edit.md)
1. `A` 增加 编辑显示模拟器并且实时刷新
1. `A` 增加 Ctrl + \ 文件树展开和收起
1. `A` 增加 Ctrl + w 关闭当前编辑页面
1. `A` 增加 Ctrl + p 文件跳转
1. `A` 增加 Ctrl + m 打开或者关闭模拟器
1. `A` 增加 编辑器底部状态栏
1. `A` 增加 json wxml 代码自动补全以及提示功能
1. `F` 修复光标丢失的问题

### 0.10.101400

1. `F` 修复 下拉刷新无法使用的问题
1. `F` 修复 app.json 文件修改后开发工具没有及时更新的问题

### 0.10.101100

#### 开发者工具基础功能
1. `A` 增加 ES6 到 ES5 的转换，默认开启，开发者可以在项目中主动关闭
1. `A` 增加 提交代码时候可选压缩代码，默认关闭，开发者可以在项目中主动开启
1. `A` 增加 `wx.uploadFile` 和 `wx.downloadFile` 调试支持
1. `A` 增加 下拉刷新的调试支持
1. `A` 增加 `<form/>` reportSubmit 模式模拟返回 formId 调试支持
1. `A` 增加 `<video/>` 添加了滑动进度条的功能
1. `A` 增加 `<picker/>` mode=time mode=date
1. `F` 修复 打开地图导致错误的问题
1. `F` 修复 `<map/>` 组件不显示的问题
1. `F` 修复 `<canvas/>` 中 drawImage 闪烁的问题
1. `F` 修复 json 中 `navigationBarTextStyle` 缺省值设置出错的问题
1. `F` 修复 `<picker/>` 在表单提交事件中 value 为空的问题
1. `F` 修复 背景音乐停止时会触发一次 `wx.onBackgroundAudioPause` 的问题
1. `F` 修复 `wx.request` 超时会触发两次 `fail` 和 `complete` 回调的问题
1. `F` 修复 小屏幕下开发者工具无法拖动到底部的问题
1. `F` 修复 `wx.setStorage` 没有限制大小的问题
1. `F` 修复 某些情况下修改了代码文件但工具没有更新的问题

#### 编辑模块
1. `A` 增加 侧边栏可以拖拽位置保存
1. `A` 增加 快捷键 `ctrl + \` or `command + \` 隐藏侧边栏
1. `A` 增加 文件页卡可以拖动排序的功能
1. `F` 修复 `wx.setNavitionBarTitle` 提示错误的问题
1. `F` 修复 某些情况下文件修改不生效的问题

