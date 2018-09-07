// routes/auth.js
const Router = require('koa-router')
var router = new Router()
const fs = require('fs');
const path = require('path')
const { uploadFile } = require('../models/uploadFile')
// router.get('', )
let staticFile = './server/file/cn/dev'
router.get('/getMarkdown', async (ctx, next) => {
    //
    console.log('param', ctx.query.fileUrl)
    if (ctx.query.fileUrl) {
        let files = [];
        await new Promise((resolve, reject) => { // 读image文件夹
            fs.readFile(staticFile + ctx.query.fileUrl, function (err, picFiles) {
                if (err) ctx.throw(err)
                files = picFiles // 将所有的文件夹名字放到外面来。
                resolve()  // resolve过后，await语句才结束
            })
        })
        ctx.body = files
    } else {
        ctx.status = '400'
        ctx.body = '参数错误'
    }
});
router.get('/getDir', (ctx, next) => {
    let files = getMDDir(staticFile);
    ctx.body = { data: files }
});
function getMDDir(path, pid = '') { //获取md的目录结构
    let tarDir = [];
    let num = 0;
    let fileDir = fs.readdirSync(path);
    fileDir.forEach((ele) => {
        if (fs.lstatSync(path + '/' + ele).isDirectory()) {
            let nextDir = getMDDir(path + '/' + ele, pid + '/' + ele);
            if (Object.keys(nextDir).length) {
                tarDir.push({
                    label: ele,
                    pid: pid,
                    children: nextDir
                })
            }
        } else if (ele.split('.').length == 2 && ele.split('.')[1] === 'md') {
            tarDir.push({
                label: ele,
                pid: pid
            })
            num++;
        }
    });
    return num >= 0 ? tarDir : '';
}
router.post('/saveMarkdown', async (ctx, next) => {
    const data = ctx.request.body // post过来的数据存在request.body里
    console.log('data', data.url)
    await new Promise((resolve, reject) => {
        fs.writeFile(staticFile + data.url, data.data, function (err) {
            if (err) console.error(err);
            resolve(console.log('写入完成'))
        })

    })
    ctx.type = 'text/plain; charset=utf-8';
    ctx.status = 200;
    ctx.body = 'success'
});
router.post('/addMarkdownImg', async (ctx, next) => {
    let result = { success: false }
    let serverFilePath = path.join(__dirname, '../file/cn/dev')
    // 上传文件事件
    result = await uploadFile(ctx, {
        fileType: 'image', // common or album
        path: serverFilePath
    })
    ctx.body = result
});
router.post('/removeMarkdown', async (ctx, next) => {
    const data = ctx.request.body;
    console.log(data.url);
    if (fs.existsSync(staticFile + data.url)) {
        fs.unlinkSync(staticFile + data.url);
        ctx.status = 200;
        ctx.body = '删除成功'
    } else {
        ctx.status = 400;
        ctx.body = '未找到文件'
    }
});
router.post('/addNewMarkdown', async (ctx, next) => {
    const data = ctx.request.body;
    console.log(data.url);
    if (!fs.existsSync(staticFile + data.url)) {
        fs.writeFileSync(staticFile + data.url, '### 新增模块');
        ctx.status = 200;
        ctx.body = '新增成功'
    } else {
        ctx.status = 202;
        ctx.body = '文件已存在'
    }
});
router.get('/', (ctx, next) => {
    ctx.body = 'Hello node'
})

module.exports = router;   