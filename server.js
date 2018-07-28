import http from 'http'
import config from 'config'

import app from 'app'
import dbs from 'dbs'

const port = config.get('port') || 8000
const server = http.createServer(app)

dbs
  .init()
  .then(() => {
    console.log('Connection with databases is created successfully!')
    server.listen(port, () => console.log(`Server listens on port ${port}`))
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
