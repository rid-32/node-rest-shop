import { Router } from 'express'

import * as orders from './orders'

const router = Router()

router
  .route('/')
  .get(orders.getOrders)
  .post(orders.postOrders)

router
  .route('/:orderId')
  .get(orders.getOrderById)
  .delete(orders.deleteOrder)

export default router
