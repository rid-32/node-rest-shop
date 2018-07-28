import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import config from 'config'

import { products as productRoutes, orders as orderRoutes } from 'api/routes'

const app = express()

if (config.get('env') !== 'test') {
  if (config.get('env') === 'development') {
    app.use(morgan('dev'))
  } else {
    app.use(morgan('combined'))
  }
}

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())

// обработка CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE')
    return res.status(200).json({})
  }
  next()
})

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  })
})

export default app
