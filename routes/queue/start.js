const nest = require('../../nest')

module.exports = {
  method: 'get',
  path: '/start',
  handler: function *() {
    yield nest.start()

    this.body = { success: true }
  }
}

