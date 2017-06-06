const { Joi } = require('koa-joi-router')
const Job = require('node-nest/lib/db/queue').default

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
    const query = Job.count(find)

    this.body = yield query.exec()
  }
}
