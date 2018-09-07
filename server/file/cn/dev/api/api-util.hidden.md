### wx.arrayBufferToBase64(arrayBuffer)
{% version('1.1.0', 'text') %}

将 ArrayBuffer 数据转成 Base64 字符串

**示例代码**

```javascript
const arrayBuffer = new Uint8Array([11, 22, 33])
const base64 = wx.arrayBufferToBase64(arrayBuffer)
```

### wx.base64ToArrayBuffer(base64)
{% version('1.1.0', 'text') %}

将 Base64 字符串转成 ArrayBuffer 数据

**示例代码**
```javascript
const base64 = 'CxYh'
const arrayBuffer = wx.base64ToArrayBuffer(base64)
```
