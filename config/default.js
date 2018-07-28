const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.DEV_PORT,
  mongodbUrl: `${process.env.DEV_MONGODB_URL}:${process.env.DEV_MONGODB_PORT}/${
    process.env.DEV_MONGODB_NAME
  }`,
  mongodbPort: process.env.DEV_MONGODB_PORT,
}
