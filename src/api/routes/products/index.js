import { Router } from 'express'

import * as products from './products'

const router = Router()

router
  .route('/')
  .get(products.getProducts)
  .post(products.postProducts)

router
  .route('/:productId')
  .get(products.getProductById)
  .patch(products.patchProduct)
  .delete(products.deleteProduct)

export default router
