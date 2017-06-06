const nestApi = require('../index')
const routes = require('./routes')

nestApi.setup({
  routes
})

nestApi.app.listen(3001)
console.log('nest-api running on port 3001')

nestApi.nest.queue('hackernews-articles')
nestApi.nest.start()
