const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const routes = require('./routes')

app.use(cors())

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'src')))

app.use(routes)

module.exports = app
