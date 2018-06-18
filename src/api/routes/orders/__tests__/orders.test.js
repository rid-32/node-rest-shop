import request from 'supertest'
import app from 'app'

/* eslint no-undef: 0 */
describe('Orders', () => {
  describe('/GET orders', () => {
    test('should get all orders', async () => {
      // const response = await request(app)
      await request(app)
        .get('/orders')
        .expect(200, {
          message: 'Orders were fetched',
        })
      // console.log(response)
    })

    test('should get order with specified ID', () => {
      const id = 123
      return request(app)
        .get(`/orders/${id}`)
        .expect(200, {
          message: 'Orders details',
          orderId: id,
        })
    })
  })

  describe('/POST orders', () => {
    test('should create a order', () => {
      return request(app)
        .post('/orders')
        .expect(201, {
          message: 'Order was created',
        })
    })
  })

  describe('/DELETE orders', () => {
    test('should delete order with specified ID', () => {
      const id = 123
      return request(app)
        .delete(`/orders/${id}`)
        .expect(200, {
          message: 'Orders deleted',
          orderId: id,
        })
    })
  })
})
