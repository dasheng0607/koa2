#### camera
{% version('1.6.0', 'text') %}

系统相机。

需要[用户授权](../api/authorize-index.md) scope.camera

| 属性名           | 类型        | 默认值 | 说明                                                            | 最低版本             |
| ---------------- | ----------- | ------ | --------------------------------------------------------------- | -------------------- |
| mode             | String      | normal | 有效值为 normal, scanCode                                       | {%version('2.1.0')%} |
| device-position  | String      | back   | 前置或后置，值为front, back                                     |                      |
| flash            | String      | auto   | 闪光灯，值为auto, on, off                                       |                      |
| scan-area        | Array       |        | 扫码识别区域，格式为[x, y, w, h]，x,y是相对于camera显示区域的左上角，w,h为区域宽度，单位px，仅在 mode="scanCode" 时生效 | {%version('2.1.0')%} |
| bindstop         | EventHandle |        | 摄像头在非正常终止时触发，如退出后台等情况                      |                      |
| binderror        | EventHandle |        | 用户不允许使用摄像头时触发                                      |                      |
| bindscancode     | EventHandle |        | 在成功识别到一维码时触发，仅在 mode="scanCode" 时生效           | {%version('2.1.0')%} |

相关api：[wx.createCameraContext](../api/api-camera.md)

##### Bug & Tip

1. `tip`: `camera` 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。可使用 `cover-view` `cover-image`覆盖在上面。
1. `tip`: 同一页面只能插入一个 `camera` 组件。
1. `tip`: 请勿在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用 `camera` 组件。
1. `bug`: `scan-area` 属性目前存在识别区域不准的问题，建议先不指定

**示例：**

{% minicode('VBZ3Jim26zYu') %}

```html
<!-- camera.wxml -->
<camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>
<button type="primary" bindtap="takePhoto">拍照</button>
<view>预览</view>
<image mode="widthFix" src="{{src}}"></image>
```

```javascript
// camera.js
Page({
	takePhoto() {
		const ctx = wx.createCameraContext()
		ctx.takePhoto({
			quality: 'high',
			success: (res) => {
				this.setData({
					src: res.tempImagePath
				})
			}
		})
	},
	error(e) {
		console.log(e.detail)
	}
})
```
