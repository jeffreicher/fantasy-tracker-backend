const server = require('./app')
const PORT = 2424

server.listen(PORT, () => {
  console.log('Server started on PORT: ', PORT)
})

module.exports = server
