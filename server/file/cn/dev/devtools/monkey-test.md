# 云真机测试 Beta
为了方便广大开发者**检测小程序程序缺陷**、**评估小程序产品质量**，我们提供了免费的云真机测试环境以及一整套测试方案。在小程序交付到真实用户手中使用之前，你可以将小程序分发到我们的云平台以模拟用户使用的方式进行测试，执行完毕后自动生成测试报告。

## 特点
- **缺陷发现**：测试过程中自动发现小程序抛出的JS异常；
- **性能数据分析**：测试过程中收集包含加载时间、CPU占用率、内存占用量等数据指标；
- **机型覆盖**：小程序会被随机分配到4~8个不同机型的机器（由当时的机器资源决定）来执行，借此可以观察小程序在不同机型的执行表现；
- 其他：弱网络环境测试、多场景测试等（开发中）。

## 开始测试
没有比这个更简单了，点击「测试」按钮，一段时间后查看你的测试报告！

## 最后
提交测试后**当前的小程序版本**会被提交到云端测试队列等待测试，一般情况下24小时内（或者更快）会返回结果，如果第二天仍然没有收到测试报告，请在[开发者论坛](https://developers.weixin.qq.com/)反馈，我们的工程师会尽快处理

目前我们的系统仍然有大量不完善的地方，我们也在尽力做到更好，为开发者提供更有价值的工具一直是我们的目标。

你有什么建议、需求、疑问欢迎在[开发者论坛](https://developers.weixin.qq.com/)反馈。 （`#云测试`）

## Q & A

### 云真机是真实的机器吗？
是的。机器由[WeTest腾讯质量开发平台](http://wetest.qq.com/)部署和维护

### 为什么我的小程序里一个很明显的JS错误没有在云测试时发现？
在目前阶段，云测试的代理算法是一个以高页面覆盖率为目标的穷举随机算法，缺陷发现能力较弱。它的每一次的执行路径都不一样，且受执行时间限制，所以有可能没有执行到缺陷存在的路径。

### 云测试能发现我的小程序中的文本错误吗？
不能。代理算法不是一个智能体（虽然我们在努力给它添加更多的智能行为），对人来说显而易见的错误它可能却无法发现，尤其是业务类错误。文本错误至少要求语义理解的能力，所以它不能。

### 测试结果太差时会影响小程序的提审和发布吗?
不影响。测试报告只是一种提供给你对照分析的工具，怎么利用完全取决于你自己。

### 我的小程序有额外的登录体系（非微信登录），测试时总是停在登录页面怎么办？
这个功能是下一次迭代的内容，届时你可以配置测试账号和密码，帮助代理算法自动登录从而遍历到更多的页面。