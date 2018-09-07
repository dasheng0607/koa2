# 插件调用 API 的限制

插件可以调用的 API 与小程序不同，主要有两个区别：

* 插件的请求域名列表与小程序相互独立；
* 一些 API 不允许插件调用（这些函数不存在于 `wx` 对象下）。

目前，允许插件调用的 API 及其对应版本要求如下。

| API | 最低版本 |
| ------ | ------ |
| `wx.addPhoneContact` | {%version('1.9.6')%} |
| `wx.arrayBufferToBase64` | {%version('1.9.6')%} |
| `wx.base64ToArrayBuffer` | {%version('1.9.6')%} |
| `wx.canvasGetImageData` | {%version('1.9.6')%} |
| `wx.canvasPutImageData` | {%version('1.9.6')%} |
| `wx.canvasToTempFilePath` | {%version('1.9.6')%} |
| `wx.chooseImage` | {%version('1.9.6')%} |
| `wx.chooseLocation` | {%version('1.9.6')%} |
| `wx.chooseVideo` | {%version('1.9.6')%} |
| `wx.closeBLEConnection` | {%version('1.9.6')%} |
| `wx.closeBluetoothAdapter` | {%version('1.9.6')%} |
| `wx.connectSocket` | {%version('1.9.6')%} |
| `wx.createAnimation` | {%version('1.9.6')%} |
| `wx.createAudioContext` | {%version('1.9.6')%} |
| `wx.createBLEConnection` | {%version('1.9.6')%} |
| `wx.createCameraContext` | {%version('1.9.6')%} |
| `wx.createCanvasContext` | {%version('1.9.6')%} |
| `wx.createInnerAudioContext` | {%version('1.9.6')%} |
| `wx.createIntersectionObserver` | {%version('1.9.6')%} |
| `wx.createLivePlayerContext` | {%version('1.9.6')%} |
| `wx.createLivePusherContext` | {%version('1.9.6')%} |
| `wx.createMapContext` | {%version('1.9.6')%} |
| `wx.createSelectorQuery` | {%version('1.9.6')%} |
| `wx.createVideoContext` | {%version('1.9.6')%} |
| `wx.downloadFile` | {%version('1.9.6')%} |
| `wx.getAccountInfoSync` | {%version('2.2.2')%} |
| `wx.getBLEDeviceCharacteristics` | {%version('1.9.6')%} |
| `wx.getBLEDeviceServices` | {%version('1.9.6')%} |
| `wx.getBackgroundAudioManager` | {%version('1.9.6')%} |
| `wx.getBackgroundAudioPlayerState` | {%version('1.9.6')%} |
| `wx.getBeacons` | {%version('1.9.6')%} |
| `wx.getBluetoothAdapterState` | {%version('1.9.6')%} |
| `wx.getBluetoothDevices` | {%version('1.9.6')%} |
| `wx.getClipboardData` | {%version('1.9.6')%} |
| `wx.getConnectedBluetoothDevices` | {%version('1.9.6')%} |
| `wx.getHCEState` | {%version('2.1.0')%} |
| `wx.getImageInfo` | {%version('1.9.6')%} |
| `wx.getLocation` | {%version('1.9.6')%} |
| `wx.getNetworkType` | {%version('1.9.6')%} |
| `wx.getRecorderManager` | {%version('1.9.94')%} |
| `wx.getScreenBrightness` | {%version('1.9.6')%} |
| `wx.getShareInfo` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.getStorage` | {%version('1.9.6')%} |
| `wx.getStorageSync` | {%version('1.9.6')%} |
| `wx.getSystemInfo` | {%version('1.9.6')%} |
| `wx.getSystemInfoSync` | {%version('1.9.6')%} |
| `wx.hideLoading` | {%version('1.9.6')%} |
| `wx.hideNavigationBarLoading` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.hideShareMenu` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.hideToast` | {%version('1.9.6')%} |
| `wx.makePhoneCall` | {%version('1.9.6')%} |
| `wx.makeVoIPCall` | {%version('1.9.6')%} |
| `wx.navigateTo` | {%version('2.2.2')%} （仅限插件页面中调用） |
| `wx.navigateBack` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.notifyBLECharacteristicValueChange` | {%version('1.9.6')%} |
| `wx.notifyBLECharacteristicValueChanged` | {%version('1.9.6')%} |
| `wx.onAccelerometerChange` | {%version('1.9.6')%} |
| `wx.onBLECharacteristicValueChange` | {%version('1.9.6')%} |
| `wx.onBLEConnectionStateChange` | {%version('1.9.6')%} |
| `wx.onBLEConnectionStateChanged` | {%version('1.9.6')%} |
| `wx.onBackgroundAudioPause` | {%version('1.9.6')%} |
| `wx.onBackgroundAudioPlay` | {%version('1.9.6')%} |
| `wx.onBackgroundAudioStop` | {%version('1.9.6')%} |
| `wx.onBeaconServiceChange` | {%version('1.9.6')%} |
| `wx.onBeaconUpdate` | {%version('1.9.6')%} |
| `wx.onBluetoothAdapterStateChange` | {%version('1.9.6')%} |
| `wx.onBluetoothDeviceFound` | {%version('1.9.6')%} |
| `wx.onCompassChange` | {%version('1.9.6')%} |
| `wx.onHCEMessage` | {%version('2.1.0')%} |
| `wx.onNetworkStatusChange` | {%version('1.9.6')%} |
| `wx.onUserCaptureScreen` | {%version('1.9.6')%} （仅限插件页面中调用） |
| `wx.openBluetoothAdapter` | {%version('1.9.6')%} |
| `wx.openLocation` | {%version('1.9.6')%} |
| `wx.pageScrollTo` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.pauseBackgroundAudio` | {%version('1.9.6')%} |
| `wx.pauseVoice` | {%version('1.9.6')%} |
| `wx.playBackgroundAudio` | {%version('1.9.6')%} |
| `wx.playVoice` | {%version('1.9.6')%} |
| `wx.previewImage` | {%version('1.9.6')%} |
| `wx.readBLECharacteristicValue` | {%version('1.9.6')%} |
| `wx.redirectTo` | {%version('2.2.2')%} （仅限插件页面中调用） |
| `wx.removeStorage` | {%version('1.9.6')%} |
| `wx.removeStorageSync` | {%version('1.9.6')%} |
| `wx.reportAnalytics` | {%version('1.9.6')%} （见下方备注） |
| `wx.request` | {%version('1.9.6')%} |
| `wx.saveImageToPhotosAlbum` | {%version('1.9.6')%} |
| `wx.saveVideoToPhotosAlbum` | {%version('1.9.6')%} |
| `wx.scanCode` | {%version('1.9.6')%} |
| `wx.seekBackgroundAudio` | {%version('1.9.6')%} |
| `wx.sendHCEMessage` | {%version('2.1.0')%} |
| `wx.setClipboardData` | {%version('1.9.6')%} |
| `wx.setKeepScreenOn` | {%version('1.9.6')%} |
| `wx.setNavigationBarAlpha` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.setNavigationBarColor` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.setNavigationBarTitle` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.setPageStyle` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.setScreenBrightness` | {%version('1.9.6')%} |
| `wx.setStorage` | {%version('1.9.6')%} |
| `wx.setStorageSync` | {%version('1.9.6')%} |
| `wx.showActionSheet` | {%version('1.9.6')%} |
| `wx.showLoading` | {%version('1.9.6')%} |
| `wx.showModal` | {%version('1.9.6')%} |
| `wx.showNavigationBarLoading` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.showShareMenu` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.showToast` | {%version('1.9.6')%} |
| `wx.startAccelerometer` | {%version('1.9.6')%} |
| `wx.startBeaconDiscovery` | {%version('1.9.6')%} |
| `wx.startBluetoothDevicesDiscovery` | {%version('1.9.6')%} |
| `wx.startCompass` | {%version('1.9.6')%} |
| `wx.startHCE` | {%version('2.1.0')%} |
| `wx.startPullDownRefresh` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.startRecord` | {%version('1.9.6')%} |
| `wx.stopAccelerometer` | {%version('1.9.6')%} |
| `wx.stopBackgroundAudio` | {%version('1.9.6')%} |
| `wx.stopBeaconDiscovery` | {%version('1.9.6')%} |
| `wx.stopBluetoothDevicesDiscovery` | {%version('1.9.6')%} |
| `wx.stopCompass` | {%version('1.9.6')%} |
| `wx.stopHCE` | {%version('2.1.0')%} |
| `wx.stopPullDownRefresh` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.stopRecord` | {%version('1.9.6')%} |
| `wx.stopVoice` | {%version('1.9.6')%} |
| `wx.updateShareMenu` | {%version('2.1.0')%} （仅限插件页面中调用） |
| `wx.uploadFile` | {%version('1.9.6')%} |
| `wx.vibrateLong` | {%version('1.9.6')%} |
| `wx.vibrateShort` | {%version('1.9.6')%} |
| `wx.writeBLECharacteristicValue` | {%version('1.9.6')%} |

#### Bugs & Tips

* `wx.reportAnalytics` 可以被正常调用，但目前不会进行统计展示。
