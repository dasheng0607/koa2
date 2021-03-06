# 产品定位及功能介绍

微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。

# 小程序注册

## 注册小程序帐号

在微信公众平台官网首页（[mp.weixin.qq.com](https://mp.weixin.qq.com/)）点击右上角的“立即注册”按钮。

![](./image/a.png)

## 选择注册的帐号类型

选择“小程序”，点击“查看类型区别”可查看不同类型帐号的区别和优势。

## 填写邮箱和密码

请填写未注册过公众平台、开放平台、企业号、未绑定个人号的邮箱。

## 激活邮箱

登录邮箱，查收激活邮件，点击激活链接。

## 填写主体信息

点击激活链接后，继续下一步的注册流程。请选择主体类型选择，完善主体信息和管理员信息。

### 选择主体类型

![](./image/03271.png)

主体类型说明如下：

| **帐号主体**  |                  **范围**                  |
| :-------: | :--------------------------------------: |
|    个人     |           18岁以上有国内身份信息的微信实名用户            |
|    企业     |             企业、分支机构、企业相关品牌。              |
| 企业（个体工商户） |                  个体工商户。                  |
|    政府     | 国内、各级、各类政府机构、事业单位、具有行政职能的社会组织等。目前主要覆盖公安机构、党团机构、司法机构、交通机构、旅游机构、工商税务机构、市政机构等。 |
|    媒体     |           报纸、杂志、电视、电台、通讯社、其他等。           |
|   其他组织    |            不属于政府、媒体、企业或个人的类型。            |


### 填写主体信息并选择验证方式

- 企业类型帐号可选择两种主体验证方式。
  - 方式一：需要用公司的对公账户向腾讯公司打款来验证主体身份。打款信息在提交主体信息后可以查看到。
  - 方式二：通过微信认证验证主体身份，需支付300元认证费。认证通过前，小程序部分功能暂无法使用。

![](./image/2.png)

- 政府、媒体、其他组织类型帐号，必须通过微信认证验证主体身份。认证通过前，小程序部分功能暂无法使用。

![](./image/3.png)

- 微信认证入口：登录小程序 - 设置 - 微信认证详情

![](./image/w.png)

### 填写管理员信息

![](./image/4.png)

### 确认主体信息不可变更

![](./image/5.png)

### 点击确认完成注册流程

选择对公打款的用户，请根据页面提示，向指定的收款帐号汇入指定金额。

**注意：请在10天内完成汇款，否则将注册失败。**

![](./image/6.png)

选择通过微信认证验证主体身份的用户，完成注册流程后请尽快进行微信认证，认证完成之前部分功能暂不可使用。

# 小程序信息完善及开发前准备

## 登录小程序管理平台

完成注册后，在微信公众平台官网首页（[mp.weixin.qq.com](https://mp.weixin.qq.com/)）的登录入口直接登录。

![](./image/a.png)

## 完善小程序信息

**完成注册后，微信小程序信息完善步骤和开发可同步进行。**

选择对公打款的用户，完成汇款验证后，可以补充小程序名称信息，上传小程序头像，填写小程序介绍并选择服务范围。

![](./image/u.png)

选择通过微信认证验证主体身份的用户，需先完成微信认证后，才可以补充小程序名称信息，上传小程序头像，填写小程序介绍并选择服务范围。
![](./image/7.png)

**提示：**

- 如果选择了特殊行业的服务类目，需要提供资质材料提交审核。点击查看所需[资质材料](https://developers.weixin.qq.com/miniprogram/product/material.html)

## 面向个人开发者开放的服务类目

**面向个人开发者开放的服务类目，会随着相关政策、法律法规以及平台规定的变化而变化，请开发者以提交时开放的类目为准，本文档仅供参考。**

<table>
  <tr>
    <td>
      <p><b><span>一级分类</span></b></p>
    </td>
    <td width=149 valign=bottom>
      <p><b><span>二级分类</span></b></p>
    </td>
    <td width=301 valign=bottom>
      <p><b><span>三级分类</span></b></p>
    </td>
  </tr>
  <tr>
    <td width=106 valign=center rowspan=4>
      <p><span>快递业与邮政</span></p>
    </td>
    <td width=149 valign=center rowspan=2>
      <p><span>快递、物流</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>寄件/收件</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>查件&nbsp;</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>邮政</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>装卸搬运</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=106 valign=center rowspan=5>
      <p><span>教育</span></p>
    </td>
    <td width=149 valign=bottom>
      <p><span>教育信息服务</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>特殊人群教育</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>婴幼儿教育</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>在线教育</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>教育装备</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=106 valign=center>
      <p><span>出行与交通</span></p>
    </td>
    <td width=149 valign=bottom>
      <p><span>代驾</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=106 valign=center rowspan=15>
      <p><span>生活服务</span></p>
    </td>
    <td width=149 valign=bottom>
      <p><span>家政</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>环保回收/废品回收</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>摄影/扩印</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=center rowspan=11>
      <p><span>丽人</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>美甲</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>美容</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>美睫</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>美发</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>纹身</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>祛痘</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>纤体瘦身</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>SPA</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>舞蹈</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>瑜伽</span></p>
    </td>
  </tr>
  <tr>
    <td width=301 valign=bottom>
      <p><span>其他</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>婚庆服务</span></p>
    </td>
      <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=106 valign=center rowspan=3>
      <p><span>餐饮</span></p>
    </td>
    <td width=149 valign=bottom>
      <p><span>点评与推荐</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>菜谱</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>餐厅排队</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=106 valign=center rowspan=2>
      <p><span>旅游</span></p>
    </td>
    <td width=149 valign=bottom>
      <p><span>旅游攻略</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>出境WiFi</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=106 valign=center rowspan=13>
      <p><span>工具</span></p>
    </td>
    <td width=149 valign=bottom>
      <p><span>记账</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>日历</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>天气</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>办公</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>字典</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>图片/音频/视频</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>计算类</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>报价/比价</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>信息查询</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>　</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>效率</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>预约</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>健康管理</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>企业管理</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=106 valign=center rowspan=3>
      <p><span>商业服务</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>律师</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>会展服务</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>

  </tr>
  <tr>
    <td width=106 valign=center rowspan=2>
      <p><span>体育</span></p>
    </td>
    <td width=149 valign=bottom>
      <p><span>体育培训</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
  <tr>
    <td width=149 valign=bottom>
      <p><span>在线健身</span></p>
    </td>
    <td width=301 valign=bottom>
      <p><span>/</span></p>
    </td>
  </tr>
</table>

## 开发前准备

### 绑定开发者

登录微信公众平台小程序，进入用户身份-开发者，新增绑定开发者。

个人主体小程序最多可绑定5个开发者，10个体验者。

未认证的组织类型小程序最多可绑定10个开发者，20个体验者

已认证的小程序最多可绑定20个开发者，40个体验者。

![](./image/g.png)

![](./image/h.png)

### 获取AppID

进入“设置-开发设置”，获取AppID信息。

![](./image/i.png)

# 代码审核与发布

## 提交审核

登录微信公众平台小程序，进入开发管理，开发版本中展示已上传的代码，管理员可提交审核或是删除代码。

![](./image/q.png)

## 审核信息填写

### 配置功能页面

填写重要业务页面的类目与标签，重要业务页面组数不多于5组。

![](./image/s.png)

### 测试帐号

当小程序需要开发者提供测试帐号才能完成审核体验时，小程序在首次提交审核时将被打回，再次提交审核时将开放提供测试帐号的入口，该入口将由开发者提供帐号给微信审核人员审核微信小程序时登录使用。

![](./image/03272.jpg)

### 完成提交

提交审核完成后，开发管理页中审核版本模块展示审核进度。

![](./image/t.png)

**提示：**

- 开发者可参考[《微信小程序平台常见拒绝情形》](https://developers.weixin.qq.com/miniprogram/product/reject.html)，详细了解审核标准。

### 代码发布

代码审核通过，需要开发者手动点击发布，小程序才会发布到线上提供服务。

**注意：**

内测期间，代码发布按钮不可点击。

# 小程序申请微信认证

政府、媒体、其他组织类型帐号，必须通过微信认证验证主体身份。企业类型帐号，可以根据需要确定是否申请微信认证。已认证帐号可使用微信支付权限。

个人类型帐号暂不支持微信认证。

认证入口：登录小程序—设置—基本设置—微信认证—详情

![](./image/x.png)

# 小程序申请微信支付

已认证的小程序可申请微信支付。

![](./image/y.png)

# 小程序绑定微信开放平台帐号

小程序绑定微信开放平台帐号后，可与帐号下的其他移动应用、网站应用及公众号打通，通过UnionID机制满足在多个应用和公众号之间统一用户帐号的需求。

**UnionID机制说明**：如果开发者拥有多个移动应用、网站应用、和公众帐号（包括小程序），可通过UnionID来区分用户的唯一性，因为只要是同一个微信开放平台帐号下的移动应用、网站应用和公众帐号（包括小程序），用户的unionid是唯一的。换句话说，同一用户，对同一个微信开放平台下的不同应用，UnionID是相同的。用户的UnionID可通过调用“获取用户信息”接口获取。

了解“获取用户信息”接口请查看开发文档—API—开放接口—用户信息。

**绑定小程序流程说明**：登录微信开放平台（[open.weixin.qq.com](https://open.weixin.qq.com/)）—管理中心—公众帐号—绑定公众帐号

![](./image/z.png)

注意：微信开放平台帐号必须完成开发者资质认证才可以绑定小程序。

# 公众号关联小程序

公众号关联小程序后，将可在图文消息、自定义菜单、模板消息等功能中使用小程序。

**关联规则：**

1. 所有公众号都可以关联小程序。
2. 一个公众号可关联10个同主体的小程序，3个不同主体的小程序。
3. 一个小程序可关联500个公众号。
4. 公众号一个月可新增关联小程序13次，小程序一个月可新增关联500次。

**关联流程：**

登录公众号后台-小程序-小程序管理-添加-关联小程序

![](./image/06211.png)

![](./image/06212.png)
