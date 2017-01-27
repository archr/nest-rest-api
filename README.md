#nest-rest-api

  A rest api for the [nest](https://github.com/d-oliveros/nest) library.

## Requirements
  * MongoDB up and running
  * Node >=6.9.1

## Installation

```js
$ npm install nest-rest-api
```

## Usage

File `index.js`

```js
const nestApi = require('nest-rest-api')
const routes = require('./routes')

// nest configuration
nestApi.setup({
  workers: 4,         // Set the amount of workers scraping in parallel to 4
  mongo: {
    db: 'nest',       // Use the 'nest' mongo collection
    host: '127.0.0.1' // Connect to the Mongo process running at localhost
    port: '27017'     // Connect to the Mongo process running at port 27017
  },
  routes              // Routes
})

// start server
nestApi.app.listen(3000)
```

Start nest
```sh
curl http://localhost:3000/queue/start
```

## Api

| Endpoint       | Method | Description      |
| ---            | ---    | ---              |
| /queue/start   | GET    | Start nest       |
| /queue/stop    | GET    | Stop nest        |
| /queue/status  | GET    | Status of nest   |
| /jobs          | GET    | Job list         |
| /jobs          | POST   | Create a job     |
| /items         | GET    | Item list        |
| /items/:itemId | GET    | Item information |

## Examples

  View the [./examples](examples) directory for working examples.

## License

  MIT

