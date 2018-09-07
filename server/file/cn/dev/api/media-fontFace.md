### wx.loadFontFace(OBJECT)
{% version('2.1.0', 'text') %}

动态加载网络字体，文件地址需为下载类型。IOS下仅支持https格式文件地址。

**OBJECT参数说明：**

| 参数         | 类型          | 必填   | 说明                                  |
| ---------- | ----------- | ---- | ----------------------------------- |
| family      | String      | 是    | 定义的字体名称                     |
| source   | String | 是    | 字体资源的地址 |
| desc | Object | 否    |     可选的字体描述符    |
| success    | Function    | 否    | 接口调用成功的回调函数       |
| fail       | Function    | 否    | 接口调用失败的回调函数                         |
| complete   | Function    | 否    | 接口调用结束的回调函数（调用成功、失败都会执行）            |

**desc参数说明：**

| 字段 | 值   | 说明                  |
|------|--------|-----------------------|
| style | normal / italic / oblique | 定义字体的样式，默认是"normal"  |
| weight | normal / bold / 100 / 200../ 900 | 定义字体的粗细，默认是"normal" |
| variant | normal / small-caps / inherit | 设置小型大写字母的字体显示文本，默认是"normal  " |


**示例代码：**

```javascript
wx.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://sungd.github.io/Pacifico.ttf")',
  success: function(res) {
    console.log(res.status) //  loaded
  },
  fail: function(res) {
    console.log(res.status) //  error
  },
  complete: function(res) {
    console.log(res.status);
  }
});
```

#### Tip
1. 引入的外部字体资源，建议格式为TTF和WOFF，WOFF2在低版本的IOS上会不兼容。
