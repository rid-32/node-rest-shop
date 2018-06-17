import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Orders were fetched',
  })
})

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Order was created',
  })
})

router.get('/:orderId', (req, res) => {
  res.status(200).json({
    message: 'Orders details',
    orderId: req.params.orderId,
  })
})

router.delete('/:orderId', (req, res) => {
  res.status(200).json({
    message: 'Orders deleted',
    orderId: req.params.orderId,
  })
})

export default router
