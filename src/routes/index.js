var express = require('express')
var router = express.Router()
const scoreboard = require('../routes/scoreboard')

router.get('/scoreboard', async function(req, res) {
  // let querystring = window.location.search.substring(1)
  // console.log(querystring)
  console.log(req)
  console.log(req.query)
  let response = await scoreboard(req.query.date)
  // return response
  res.status(200)
  return res.json({ response })
})

module.exports = router
