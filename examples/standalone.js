const nestApi = require('../index')
const routes = require('./routes')

nestApi.setup({
  routes
})

nestApi.app.listen(3000)
console.log('nest-api running on port 3000')

nestApi.nest.queue('hackernews-articles')
nestApi.nest.start()
