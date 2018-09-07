const Sequelize = require('sequelize') // 引入sequelize

// 使用url连接的形式进行连接，注意将root: 后面的XXXX改成自己数据库的密码
const Todolist = new Sequelize('mysql://root:mk4373MKU@localhost/todolist', {
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
})
// const Todolist = new Sequelize('todolist', 'root', 'mk4373MKU', {
//     host: 'localhost',
//     dialect: 'mysql',
//     operatorsAliases: false,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
//     define: {
//         timestamps: false
//     }
// });
module.exports = {
  Todolist // 将Todolist暴露出接口方便Model调用
}

