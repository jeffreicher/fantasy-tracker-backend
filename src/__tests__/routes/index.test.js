const request = require('supertest')
const index = require('../../routes/index')
const app = require('../../server')
const http = require('http')
describe('Tests paths', () => {
  let server
  const port = 2425
  beforeEach(done => {
    jest.setTimeout(10000)
    server = http.createServer(app)
    server.listen({ port }, done)
  })
  afterEach(done => {
    server.close(done)
  })
  test('It should respond with the GET method', async () => {
    // const app = express()
    // app.get('/scoreboard', function(req, res) {
    //   res.status(200).send(req.query.val)
    // })
    await request(server)
      .get('/scoreboard')
      .query({ date: '02-02-2012' })
      .expect(200)
      .end((err, res) => {
        // do anything you want!
        if (err) throw err
      })
  })
})
