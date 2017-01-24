const nest = require('../../nest')

module.exports = {
  method: 'get',
  path: '/stop',
  handler: function *() {
    yield nest.stop()

    this.body = { success: true }
  }
}

