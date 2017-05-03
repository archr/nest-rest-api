const { Joi } = require('koa-joi-router')
const Item = require('node-nest/lib/db/item').default

module.exports = {
  method: 'get',
  path: '/',
  validate: {
    query: {
      limit: Joi.number().positive(),
      skip: Joi.number().integer().greater(-1),
      sort: Joi.string(),
      select: Joi.string(),
      find: Joi.object()
    }
  },
  handler: function * () {
    const { limit, skip, sort, find, select } = this.request.query
    const query = Item.find(find)

    if (limit) query.limit(limit)
    if (skip) query.skip(skip)
    if (sort) query.sort(sort)
    if (select) query.select(select)

    this.body = yield query.exec()
  }
}
