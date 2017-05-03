const { Joi } = require('koa-joi-router')
const Item = require('node-nest/lib/db/item').default

module.exports = {
  method: 'get',
  path: '/count',
  validate: {
    query: {
      find: Joi.object()
    }
  },
  handler: function * () {
    const { find } = this.request.query
    const query = Item.count(find)

    this.body = yield query.exec()
  }
}
