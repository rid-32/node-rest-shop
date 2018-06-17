import express from 'express'
import morgan from 'morgan'

import { products as productRoutes, orders as orderRoutes } from 'api/routes'

const app = express()

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined'))
}

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

export default app
