import request from 'supertest'

import app from 'app'

/* eslint no-undef:0 */
describe('Errors hangler', () => {
  test('should return 404 status code', () => {
    return request(app)
      .get('/')
      .expect(404, {
        error: {
          message: 'Not found',
        },
      })
  })
})

describe('CORS handler', () => {
  test('should return headers: allow-origin and allow-headers', () => {
    return request(app)
      .get('/')
      .expect('Access-Control-Allow-Origin', '*')
      .expect(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      )
  })

  test('should return header allow-methods and 200 status code', () => {
    return request(app)
      .options('/')
      .expect(200)
      .expect('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE')
  })
})
