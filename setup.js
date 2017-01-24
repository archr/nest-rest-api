const config = require('./config')

module.exports = function setup (newConfig) {
  Object.assign(config, newConfig)
  require('./nest')
}
