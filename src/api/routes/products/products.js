import mongoose from 'mongoose'
import _ from 'lodash'

import Product from 'api/models/product'

import * as object from 'helpers/object'

export const getProducts = async (req, res) => {
  let products = {}

  try {
    products = await Product.find().exec()
    res.status(200).json(products)
  } catch (err) {
    res.status(404)
  }
}

export const postProducts = async (req, res) => {
  const newProduct = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  })

  try {
    const createdProduct = await newProduct.save()
    res.status(201).json({
      message: 'New product was created!',
      createdProduct,
    })
  } catch (err) {
    res.status(400).json({
      message: 'Product was not created',
    })
  }
}

export const getProductById = async (req, res) => {
  const id = req.params.productId
  let product = {}
  try {
    product = await Product.findById(id).exec()
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({
        message: 'Product was not found',
      })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const patchProduct = async (req, res) => {
  const id = req.params.productId
  let updatedProduct = {}
  // req.body - это коллекция, каждый элемент которой должен иметь свойства
  // propName и value
  // для изменения нескольких свойств
  if (_.isArray(req.body)) {
    updatedProduct = req.body.reduce(
      (acc, item) =>
        object.hasProps(item, ['propName', 'value'])
          ? { ...acc, [item.propName]: item.value }
          : { ...acc },
      {}
    )
  }
  // req.body - это объект со свойствами propName и value
  // для изменения только одного свойства
  if (object.hasProps(req.body, ['propName', 'value'])) {
    updatedProduct = { [req.body.propName]: req.body.value }
  }

  try {
    await Product.update({ _id: id }, { $set: updatedProduct }).exec()
    res.status(200).json({
      message: 'Product was updated successfully!',
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteProduct = async (req, res) => {
  const id = req.params.productId

  try {
    await Product.remove({ _id: id }).exec()
    res.status(200).json({ message: 'Product was removed successfully!' })
  } catch (error) {
    res.status(500).json(error)
  }
}
