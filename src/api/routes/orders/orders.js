export const getOrders = (req, res) => {
  res.status(200).json({
    message: 'Orders were fetched',
  })
}

export const postOrders = (req, res) => {
  res.status(201).json({
    message: 'Order was created',
  })
}

export const getOrderById = (req, res) => {
  res.status(200).json({
    message: 'Orders details',
    orderId: req.params.orderId,
  })
}

export const deleteOrder = (req, res) => {
  res.status(200).json({
    message: 'Orders deleted',
    orderId: req.params.orderId,
  })
}
