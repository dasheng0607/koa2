体验评分是一项给小程序的体验好坏打分的功能，它会在小程序运行过程中实时检查，分析出一些可能导致体验不好的地方，并且定位出哪里有问题，以及给出一些优化建议。

### 运行环境要求

- 下载并安装 beta 版开发者工具，[下载地址](./beta.md)。
- 基础库需要切到 2.2.0 或以上版本。

### 使用流程

1. 打开开发者工具，在详情里切换基础库到 2.2.0 版本
2. 在调试器区域切换到 Audits 面板
3. 点击左上角”开始“按钮（见下图），然后自行操作小程序界面，运行过的页面就会被“体验评分”检测到
4. 点击“Stop"停止分析，就会看到一份分析报告，之后便可根据分析报告进行相关优化

![audits](../image/devtools/audits.png)
