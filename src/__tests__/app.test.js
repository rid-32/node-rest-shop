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
