const nest = require('../../nest')
const Item = require('node-nest/lib/db/item').default
const Job = require('node-nest/lib/db/queue').default

module.exports = {
  method: 'get',
  path: '/status',
  handler: function * () {
    const items = yield Item.count()
    const jobs = yield Job.count()
    const jobsFinished = yield Job.count({ 'state.finished': true })

    this.body = {
      status: nest.running ? 'Running' : 'Stopped',
      workers: nest.workersAmount,
      items: {
        total: items
      },
      jobs: {
        total: jobs,
        finished: jobsFinished
      }
    }
  }
}
