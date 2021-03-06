# canvasContext.setGlobalAlpha

### 定义
设置全局画笔透明度。

### 语法
```javascript
canvasContext.setGlobalAlpha(alpha)
canvasContext.globalAlpha = alpha // 基础库 1.9.90 起支持
```

### 参数
| 参数  | 类型   | 范围 | 说明                                     |
|-------|--------|------|------------------------------------------|
| alpha | Number | 0~1  | 透明度，0 表示完全透明，1 表示完全不透明 |

### 例子
```javascript
const ctx = wx.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.setGlobalAlpha(0.2)
ctx.setFillStyle('blue')
ctx.fillRect(50, 50, 150, 100)
ctx.setFillStyle('yellow')
ctx.fillRect(100, 100, 150, 100)

ctx.draw()
```

![](../../image/canvas/global-alpha.png)
