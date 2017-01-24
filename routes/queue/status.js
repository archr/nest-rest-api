const nest = require('../../nest')

module.exports = {
  method: 'get',
  path: '/status',
  handler: function *() {
    this.body = {
      status: nest.running ? 'Running' : 'Stopped'
    }
  }
}

