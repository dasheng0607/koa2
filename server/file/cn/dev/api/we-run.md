### wx.getWeRunData(OBJECT)
{% version('1.2.0', 'text') %}

获取用户过去三十天微信运动步数，需要先调用 [wx.login](./api-login.md#wxloginobject) 接口。

需要[用户授权](./authorize-index.md) scope.werun

**OBJECT参数说明：**

| 参数名   | 类型     | 必填 | 说明                                             | 最低版本   |
|----------|----------|------|--------------------------------------------------| ---------- |
| timeout  | Number   | 否   | 超时时间，单位 ms                                | {%version('1.9.90')%} |
| success  | Function | 否   | 接口调用成功的回调函数                           | |
| fail     | Function | 否   | 接口调用失败的回调函数                           | |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） | |

**success返回参数说明：**

| 参数名        | 类型   | 说明                                                                                                |
|---------------|--------|-----------------------------------------------------------------------------------------------------|
| errMsg        | String | 调用结果                                                                                            |
| encryptedData | String | 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](./signature.md#加密数据解密算法) |
| iv            | String | 加密算法的初始向量，详细见[加密数据解密算法](./signature.md#加密数据解密算法)                       |


**示例代码：**

```javascript
wx.getWeRunData({
    success(res) {
        const encryptedData = res.encryptedData
    }
})
```

encryptedData 解密后为以下 json 结构，详见[加密数据解密算法](./signature.md#加密数据解密算法)

| 属性         | 类型        | 说明                         |
|--------------|-------------|------------------------------|
| stepInfoList | ObjectArray | 用户过去三十天的微信运动步数 |

**stepInfo 结构如下**

| 属性      | 类型   | 说明                       |
|-----------|--------|----------------------------|
| timestamp | Number | 时间戳，表示数据对应的时间 |
| step      | Number | 微信运动步数               |

```json
{
    "stepInfoList": [
        {
            "timestamp": 1445866601,
            "step": 100
        },
        {
            "timestamp": 1445866602,
            "step": 100
        }
    ]
}
```
