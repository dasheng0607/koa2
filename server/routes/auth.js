// routes/auth.js

const auth = require('../controllers/user.js')
const Router = require('koa-router')
var router = new Router()
// router.get('', )
router.get('/', (ctx, next) => {
  ctx.body = 'Hello node'
})
router.get('/user/:id', auth.getUserInfo) // 定义url的参数是id,用user的auth方法引入router

module.exports = router;   