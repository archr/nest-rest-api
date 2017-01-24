const Koa = require('koa')
const logger = require('koa-logger')

const app = new Koa()

app.use(logger())

app.use(require('./routes/jobs'))
app.use(require('./routes/items'))
app.use(require('./routes/queue'))

module.exports = app
