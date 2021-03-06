### wx.getOpenDeviceId(OBJECT)
{% version('1.5.0', 'text') %}

获取微信替设备生成的唯一标识，用于判断设备是否更换。获取的数据为AES加密数据，需要自行解密。

**Object参数说明：**

| 参数名   | 类型     | 必填  | 说明                                             | 最低版本  |
| -------- | -------- | ----- | ------------------------                         | --------- |
| success  | Function | 否    | 接口调用成功的回调函数                           |           |
| fail     | Function | 否    | 接口调用失败的回调函数                           |           |
| complete | Function | 否    | 接口调用结束的回调函数（调用成功、失败都会执行） |           |

**success返回参数：**

| 参数                                     | 类型     | 说明                                       |
| -------------------------------------- | ------ | ---------------------------------------- |
| errMsg                                 | String | 接口调用结果                  |
| encryptedData                          | String | 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](./signature.md#加密数据解密算法) |
| iv                                     | String | 加密算法的初始向量，详细见[加密数据解密算法](./signature.md#加密数据解密算法) |


#### 权限开通

为提升服务安全性，金融类目下部分二级类目，类目审核通过后，可以在“设置”-“开发设置”中自助开启该接口调用权限。其余类目不可使用。
