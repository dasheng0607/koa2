# API 接口
| 方法                                            | 说明                                  |
|-------------------------------------------------|---------------------------------------|
| [createCanvasContext](create-canvas-context.md) | 创建 canvas 绘图上下文(指定 canvasId) |
| [createContext](create-context.md)(不推荐使用)  | 创建 canvas 绘图上下文                |
| [drawCanvas](draw-canvas.md)(不推荐使用)        | 进行绘图                              |
| [canvasToTempFilePath](temp-file.md)            | 导出图片                              |

# context 对象的方法列表

### 颜色，样式，阴影
| 方法                                     | 说明         |
| ---------------------------------------- | ------       |
| [setFillStyle](set-fill-style.md)        | 设置填充样式 |
| [setStrokeStyle](set-stroke-style.md)    | 设置线条样式 |
| [setShadow](set-shadow.md)               | 设置阴影     |


### 渐变
| 方法                                                  | 说明                             |
| ----------------------------------------              | ----------------                 |
| [createLinearGradient](create-linear-gradient.md)     | 创建一个线性渐变                 |
| [createCircularGradient](create-circular-gradient.md) | 创建一个圆形渐变                 |
| [addColorStop](add-color-stop.md)                     | 在渐变中的某一点添加一个颜色变化 |

### 线条样式
| 方法                                     | 说明                 |
| ---------------------------------------- | ----------           |
| [setLineWidth](set-line-width.md)        | 设置线条宽度         |
| [setLineCap](set-line-cap.md)            | 设置线条端点的样式   |
| [setLineJoin](set-line-join.md)          | 设置两线相交处的样式 |
| [setMiterLimit](set-miter-limit.md)      | 设置最大倾斜         |

### 矩形
| 方法                                  | 说明                                 |
| ------------------------------------- | ------------------                   |
| [rect](rect.md)                       | 创建一个矩形                         |
| [fillRect](fill-rect.md)              | 填充一个矩形                         |
| [strokeRect](stroke-rect.md)          | 画一个矩形（不填充）                 |
| [clearRect](clear-rect.md)            | 在给定的矩形区域内，清除画布上的像素 |

### 路径
| 方法                                      | 说明                                                     |
| ----------------------------------------  | ----------------------------                             |
| [fill](fill.md)                           | 对当前路径进行填充                                       |
| [stroke](stroke.md)                       | 对当前路径进行描边                                       |
| [beginPath](begin-path.md)                | 开始一个路径                                             |
| [closePath](close-path.md)                | 关闭一个路径                                             |
| [moveTo](move-to.md)                      | 把路径移动到画布中的指定点，但不创建线条。               |
| [lineTo](line-to.md)                      | 添加一个新点，然后在画布中创建从该点到最后指定点的线条。 |
| [arc](arc.md)                             | 添加一个弧形路径到当前路径，顺时针绘制。                 |
| [quadraticCurveTo](quadratic-curve-to.md) | 创建二次方贝塞尔曲线                                     |
| [bezierCurveTo](bezier-curve-to.md)       | 创建三次方贝塞尔曲线                                     |

### 变形
| 方法                               | 说明                   |
| ---------------------------------- | -----------            |
| [scale](scale.md)                  | 对横纵坐标进行缩放     |
| [rotate](rotate.md)                | 对坐标轴进行顺时针旋转 |
| [translate](translate.md)          | 对坐标原点进行缩放     |

### 文字
| 方法                                     | 说明                     |
| ---------------------------------------- | ------------             |
| [fillText](fill-text.md)                 | 在画布上绘制被填充的文本 |
| [setFontSize](set-font-size.md)          | 设置字体大小             |
| [setTextBaseline](set-text-baseline.md)  | 设置字体基准线           |
| [setTextAlign](set-text-align.md)        | 设置字体对齐方式         |

### 图片
| 方法                                | 说明             |
| ----------------------------------- | --------         |
| [drawImage](draw-image.md)          | 在画布上绘制图像 |

### 混合
| 方法                                     | 说明               |
| ---------------------------------------- | ---------          |
| [setGlobalAlpha](set-global-alpha.md)    | 设置全局画笔透明度 |

### 其他
| 方法                                         | 说明                              |
| -------------------                          | ----------------------            |
| [save](save-restore.md#save)                 | 保存当前绘图上下文                |
| [restore](save-restore.md#restore)           | 恢复之前保过的绘图上下文          |
| [draw](draw.md)                              | 进行绘图                          |
| [getActions](get-actions.md)(不推荐使用)     | 获取当前`context`上存储的绘图动作 |
| [clearActions](clear-actions.md)(不推荐使用) | 清空当前的存储绘图动作            |

