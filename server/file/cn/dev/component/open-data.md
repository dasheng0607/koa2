#### open-data
{% version('1.4.0', 'text') %}

用于展示微信开放的数据。


| 属性名   | 类型   | 默认值  | 说明                        |
| -------- | ------ | ------- | --------------------------- |
| type     | String |         | 开放数据类型                |
| open-gid | String |         | 当 type="groupName" 时生效, 群id |
| lang     | String | en      | 当 type="user*" 时生效，以哪种语言展示 userInfo，有效值有：en, zh_CN, zh_TW |

**type 有效值：**

| 值            | 说明          | 最低版本              |
| ------------- | ------------- | --------------------- |
| groupName     | 拉取群名称    | {%version('1.4.0')%}  |
| userNickName  | 用户昵称      | {%version('1.9.90')%} |
| userAvatarUrl | 用户头像      | {%version('1.9.90')%} |
| userGender    | 用户性别      | {%version('1.9.90')%} |
| userCity      | 用户所在城市  | {%version('1.9.90')%} |
| userProvince  | 用户所在省份  | {%version('1.9.90')%} |
| userCountry   | 用户所在国家  | {%version('1.9.90')%} |
| userLanguage  | 用户的语言    | {%version('1.9.90')%} |

**Tips:** 只有当前用户在此群内才能拉取到群名称

**示例：**

{% minicode('vbdmRcmV67YB') %}

```html
<open-data type="groupName" open-gid="xxxxxx"></open-data>
<open-data type="userAvatarUrl"></open-data>
<open-data type="userGender" lang="zh_CN"></open-data>
```


**Tips:**
关于open-gid的获取请查看 [转发](../api/share.md#wxgetshareinfoobject)
