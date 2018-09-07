### wx.downloadApp(OBJECT)

{% version('2.1.0', 'text') %}

拉起下载器下载应用，下载完成可进行安装。**仅安卓支持**。

**OBJECT参数说明：**

| 参数              | 类型     | 必填   | 说明                                  |
| ----------------- | -------- | ------ | ------------------------------------- |
| taskName          | String   | 是     | 下载任务名称                          |
| taskUrl           | String   | 是     | 下载地址                              |
| fileMD5           | String   | 是     | 文件MD5                               |
| taskSize          | Number   | 否     | 文件大小。若传值，会进行文件大小校验  |
| downloadInWifi    | Boolean  | 否     | 是否只在 Wi-Fi 环境下下载             |
| showNotification  | Boolean  | 否     | 下载完是否在通知栏显示                |

**success返回参数说明：**

| 参数        | 类型      | 说明                  | 
| ----------- | --------  | --------------------- |
| errMsg      | String    | 错误信息              |

**返回值：**

返回一个 `downloadAppTask` 对象，通过 `downloadAppTask`，可监听下载进度变化、取消下载、安装等操作。

#### downloadAppTask

**downloadAppTask 对象的方法列表：**

| 方法             | 参数     | 说明                              |
|------------------|----------|-----------------------------------|
| onCreated        | callback | 下载任务创建成功，返回 downloadId |
| onProgressUpdate | callback | 监听下载进度变化                  |
| pause            |          | 暂停下载任务                      |
| resume           |          | 恢复下载任务                      |
| cancel           |          | 取消下载任务                      |
| install          |          | 安装下载好的应用                  |

**onProgressUpdate 返回参数说明：**

| 参数                     | 类型   | 说明                                 |
|--------------------------|--------|--------------------------------------|
| progress                 | Number | 上传进度百分比                       |

**示例代码：**

```javascript
this._task = wx.downloadApp({
      taskName: '微信6.6.6',
      taskUrl: 'http://dldir1.qq.com/weixin/android/weixin666android1300.apk?t=3',
      fileMd5: '',
      success(res) {
        console.log('downloadApp success', res)
      }
})
this._task.onProgressUpdate((res) => {
      console.log('onProgressChange', res)
      this.setData({ percent: res.progress })
})
this._task.onCreated(res => {
      console.log('onCreated', res)
      this._did = res.downloadId
})
this._task.pause()
this._task.resume()
this._task.install()
this._task.cancel()
```


### wx.getAppInstallState(OBJECT)

{% version('2.1.0', 'text') %}

检查应用是否安装。**仅安卓支持**。

**OBJECT参数说明：**

| 参数              | 类型     | 必填   | 说明                                  |
| ----------------- | -------- | ------ | ------------------------------------- |
| packageName       | String   | 否     | 包名                                  |
| packageNameArray  | Array    | 否     | 包名数组，供批量查询                  |

**success返回参数说明：**

| 参数        | 类型      | 说明                  | 
| ----------- | --------  | --------------------- |
| errMsg      | String    | 错误信息              |
| isInstalled | Boolean   | 是否安装              |
| versionName | String    | 版本号                |
| versionCode | String    | 版本号代码            |
| pkgInfos    | Array     | 批量查询结果，每一项都有 {isInstalled, versionName, versionCode} |



### wx.queryDownloadAppTask(OBJECT)

{% version('2.1.0', 'text') %}

查询下载器中的下载任务。**仅安卓支持**。

**OBJECT参数说明：**

| 参数             | 类型     | 必填   | 说明                                  |
| ---------------  | -------- | ------ | ------------------------------------- |
| downloadId       | Number   | 否     | 下载任务id                            |
| downloadIdArray  | Array    | 否     | 下载任务id 数组，供批量查询           |
| appIdArray       | Array    | 否     | 应用appId数组                         |

**success返回参数说明：**

| 参数        | 类型      | 说明                  | 
| ----------- | --------  | --------------------- |
| errMsg      | String    | 错误信息              |
| state       | String    | 下载状态，有效值有 download_succ, downloading, download_fail, download_wait_wifi, download_pause, default |
| progress    | Number    | 下载进度              |
| result      | Array     | 批量查询结果，每一项有 {appId, downloadId, state, progress} |

### wx.cancelDownloadAppTask(OBJECT)

{% version('2.1.0', 'text') %}

删除下载任务。**仅安卓支持**。

**OBJECT参数说明：**

| 参数             | 类型     | 必填   | 说明                                  |
| ---------------  | -------- | ------ | ------------------------------------- |
| downloadIdArray  | Array    | 否     | 下载任务id 数组，供批量查询           |

**success返回参数说明：**

| 参数        | 类型      | 说明                  | 
| ----------- | --------  | --------------------- |
| errMsg      | String    | 错误信息              |
