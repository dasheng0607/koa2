授权
========

部分接口需要获得用户授权同意后才能调用。此类接口调用时：
  - 如果用户未接受或拒绝过此权限，会弹窗询问用户，用户点击同意后方可调用接口；
  - 如果用户已授权，可以直接调用接口；
  - 如果用户已拒绝授权，则短期内不会出现弹窗，而是直接进入接口 fail 回调。**请开发者兼容用户拒绝授权的场景。**

## 获取授权信息
开发者可以使用 [`wx.getSetting`](./setting.md#wxgetsettingobject) 获取用户当前的授权状态。

## 打开设置界面
用户可以在小程序设置界面（右上角 - 关于 - 右上角 - 设置）中控制对该小程序的授权状态。

开发者可以调用 [`wx.openSetting`](./setting.md#wxopensettingobject) 打开设置界面，引导用户开启授权。

## 提前发起授权请求
开发者可以使用 [`wx.authorize`](./authorize.md#wxauthorizeobject) 在调用需授权 API 之前，提前向用户发起授权请求。



## scope 列表

| scope                  | 对应接口                                             | 描述       |
|------------------------|------------------------------------------------------|------------|
| scope.userInfo         | wx.getUserInfo                                       | 用户信息   |
| scope.userLocation     | wx.getLocation, wx.chooseLocation                    | 地理位置   |
| scope.address          | wx.chooseAddress                                     | 通讯地址   |
| scope.invoiceTitle     | wx.chooseInvoiceTitle                                | 发票抬头   |
| scope.werun            | wx.getWeRunData                                      | 微信运动步数|
| scope.record           | wx.startRecord                                       | 录音功能   |
| scope.writePhotosAlbum | wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum | 保存到相册 |
| scope.camera           | &lt;camera /&gt;                                     | 摄像头     |

**注意：wx.authorize({scope: "scope.userInfo"})，无法弹出授权窗口，请使用 [&lt;button open-type="getUserInfo"&gt;&lt;/button&gt;](../component/button.md)**
