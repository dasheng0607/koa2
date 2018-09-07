## 内存管理

### wx.onMemoryWarning(callback)
{% version('2.0.2', 'text') %}

监听内存不足的告警事件，Android下有告警等级划分，只有LOW和CRITICAL会回调开发者；iOS无等级划分。

**CALLBACK返回参数：**

| 参数 | 类型   | 说明 |
|------|--------|------|
| level    | Number | 仅Android有该字段，对应系统内存告警等级宏定义 |

Android下告警等级对应系统宏：

```
TRIM_MEMORY_RUNNING_MODERATE = 5
TRIM_MEMORY_RUNNING_LOW = 10
TRIM_MEMORY_RUNNING_CRITICAL = 15
```

**示例代码：**

```js
wx.onMemoryWarning(function () {
  console.log('onMemoryWarningReceive')
})
```
