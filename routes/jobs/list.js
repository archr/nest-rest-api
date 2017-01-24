const Job = require('node-nest/lib/db/queue').default

module.exports = {
  method: 'get',
  path: '/',
  handler: function *() {
    this.body = yield Job.find()
  }
}
