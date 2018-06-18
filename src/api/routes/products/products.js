export const getProducts = (req, res) => {
  res.status(200).json({ message: 'Handling GET request to /products' })
}

export const postProducts = (req, res) => {
  res.status(201).json({ message: 'Handling POST request to /products' })
}

export const getProductById = (req, res) => {
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
}

export const patchProduct = (req, res) => {
  res.status(200).json({
    message: 'Updated product!',
  })
}

export const deleteProduct = (req, res) => {
  res.status(200).json({
    message: 'Deleted product!',
  })
}
