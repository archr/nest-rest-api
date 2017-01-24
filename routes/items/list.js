const Item = require('node-nest/lib/db/item').default

module.exports = {
  method: 'get',
  path: '/',
  handler: function *() {
    this.body = yield Item.find()
  }
}
