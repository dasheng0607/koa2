// models/user.js
const Sequelize = require('sequelize')
const db = require('../config/db.js'),
  userModel = '../schema/user.js'; // 引入user的表结构
userNew = '../schema/userNew.js'; // 引入user的表结构
const TodolistDb = db.Todolist; // 引入数据库
// var User1 = TodolistDb.define('userNew', {
//   firstName: {
//     type: Sequelize.STRING,
//     field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// }, {
//     freezeTableName: true // Model 对应的表名将与model名相同
//   });
// const User1 = TodolistDb.import(userNew);
// User1.sync({ force: false }).then(function () {
//   // 已创建数据表
//   return User1.create({
//     firstName: 'John2',
//     lastName: 'Hancock3'
//   });
// });
TodolistDb.dropAllSchemas();

const User = TodolistDb.import(userModel); // 用sequelize的import方法引入表结构，实例化了User。

const getUserById = async (id) => { // 注意是function* 而不是function 对于需要yield操作的函数都需要这种generator函数。
  const userInfo = await User.findOne({ // 用yield控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })
  return userInfo // 返回数据
}
module.exports = {
    getUserById  // 导出getUserById的方法，将会在controller里调用
}