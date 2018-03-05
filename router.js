const serve = require('koa-send')
const Router = require('koa-router')

const router = new Router()
router.all('*', async function (ctx) {
  try {
    await serve(ctx, ctx.path, {
      root: './static',
      index: 'index.html',
    })
  } catch (e) {
    await serve(ctx, './static/index.html')
  }
})

module.exports = router
