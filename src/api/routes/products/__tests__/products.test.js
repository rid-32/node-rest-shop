import request from 'supertest'
import app from 'app'

/* eslint no-undef: 0 */
describe('Products', () => {
  describe('/GET products', () => {
    test('should get all products', () => {
      return request(app)
        .get('/products')
        .expect(200, {
          message: 'Handling GET request to /products',
        })
    })

    test('should get a product with special ID', () => {
      return request(app)
        .get('/products/special')
        .expect(200, {
          message: 'You discovered special ID',
          id: 'special',
        })
    })

    test('should get a product with any ID', () => {
      const id = 123
      return request(app)
        .get(`/products/${id}`)
        .expect(200, {
          message: 'You passed an ID',
          id,
        })
    })
  })

  describe('/POST products', () => {
    test('should create a product', () => {
      const createdProduct = {
        name: 'apples',
        price: 20,
      }
      return request(app)
        .post('/products')
        .send(createdProduct)
        .expect(201, {
          message: 'Handling POST request to /products',
          createdProduct,
        })
    })
  })

  describe('/PATCH product', () => {
    test('should update a product with specified ID', () => {
      const id = 123
      return request(app)
        .patch(`/products/${id}`)
        .expect(200, {
          message: 'Updated product!',
        })
    })
  })

  describe('/DELETE product', () => {
    test('should delete a product with specified ID', () => {
      const id = 123
      return request(app)
        .delete(`/products/${id}`)
        .expect(200, {
          message: 'Deleted product!',
        })
    })
  })
})
