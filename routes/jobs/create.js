const nest = require('../../nest')

module.exports = {
  method: 'post',
  path: '/',
  validate: { type: 'json' },
  handler: function *() {
    const { body } = this.request

    this.assert(body.key, 401)
    this.body = yield nest.queue(body.key, body)
  }
}

