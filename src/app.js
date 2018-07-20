import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import { products as productRoutes, orders as orderRoutes } from 'api/routes'

const app = express()

if (process.env.NODE_ENV !== 'test') {
  if (process.env.NODE_ENV === 'development') {
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
