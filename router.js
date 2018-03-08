const serve = require('koa-send')
const Router = require('koa-router')

async function cache(ctx, next) {
  const cacheHeaders = {
    'Cache-Control': 'private, max-age=3600',
  }
  ctx.set(cacheHeaders)
  await next()
}

async function serveStatic(ctx, next) {
  try {
    await serve(ctx, ctx.path, {
      root: './static',
      index: 'index.html',
    })
  } catch (e) {
    await serve(ctx, './static/index.html')
  }
}

const router = new Router()
//router.all('*', cache, serveStatic)
router.all('*', serveStatic)

module.exports = router
