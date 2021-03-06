const Koa = require('koa')
const logger = require('koa-logger')

const config = require('./config')
const serve = require('koa-send')
const router = require('./router')

const app = new Koa()
app.use(logger())

app.use(router.routes()).use(router.allowedMethods())

app.listen(config.port, () => {
  console.log(`Listening at port ${config.port}`)
})
