var express = require('express')
var router = express.Router()
// var api = require('../js/api-get')
// var database = require('../js/mongoose-main').Operations

router.get('/', (req, res, next) => {
  res.send('this is a placeholder lol')
})

router.get('/:oldTournament/:newTournament', (req, res, next) => {
  res.send(`yo check it out you said ${req.oldTournament} and ${req.newTournament}`)
})

module.exports = router
