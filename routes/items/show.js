const Item = require('node-nest/lib/db/item').default

module.exports = {
  method: 'get',
  path: '/:itemId',
  handler: function *() {
    const { itemId } = this.request.params
    this.body = yield Item.findById(itemId)
  }
}
