import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Handling GET request to /products' })
})

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Handling POST request to /products' })
})

router.get('/:productId', (req, res) => {
  const id = req.params.productId
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered special ID',
      id,
    })
  } else {
    res.status(200).json({
      message: 'You passed an ID',
      id,
    })
  }
})

router.patch('/:productId', (req, res) => {
  res.status(200).json({
    message: 'Updated product!',
  })
})

router.delete('/:productId', (req, res) => {
  res.status(200).json({
    message: 'Deleted product!',
  })
})

export default router
