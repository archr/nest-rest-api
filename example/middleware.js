const Koa = require('koa')
const mount = require('koa-mount')
const nestApi = require('../index')
const routes = require('./routes')

const app = new Koa()

nestApi.setup({
  routes
})

app.use(mount('/api', nestApi.app))

app.listen(5000)
console.log('nest-api running on port 5000')

nestApi.nest.queue('hackernews-articles')
nestApi.nest.start()

