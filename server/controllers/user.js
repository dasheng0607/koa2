// controllers/user.js 

const user = require('../models/user.js');

const getUserInfo = async (ctx) => {
  const id = ctx.params.id // 获取url里传过来的参数里的id
  const result = await user.getUserById(id) // 通过yield “同步”地返回查询结果
  console.log('result', result)
  ctx.body = result // 将请求的结果放到response的body里返回
}

module.exports = {
    getUserInfo
}