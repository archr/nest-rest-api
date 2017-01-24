const convert = require('koa-convert')
const router = require('koa-joi-router')
const forEach = require('lodash.foreach')

module.exports = function createRoute ({ prefix, routes }) {
  const rtr = router()
  rtr.prefix(prefix)

  forEach(routes, route => {
    rtr.route(route)
  })

  return convert(rtr.middleware())
}
