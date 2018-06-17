// Resolve relative paths using module app-module-path
// Should be in the beginning of the entry file of application
import './config.js'

// Now you can use absolute paths for your modules like for node_modules
import http from 'http'

import app from 'app'

const port = process.env.PORT || 8000
const server = http.createServer(app)

server.listen(port, () => console.log(`Server listens on port ${port}`))
