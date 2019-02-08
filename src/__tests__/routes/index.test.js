const request = require('supertest')
const index = require('../../routes/index')

describe('Tests paths', () => {
  test('It should respond with the GET method', async () => {
    const response = await request(index)
      .get('/scoreboard')
      .query({ date: '02-02-2012' })

    // expect(response.statusCode).toBe(200)
  })
})
