var express = require('express')
var router = express.Router()
var queries = require('../js/queries.js')
// var database = require('../js/mongoose-main.js').Operations

/* GET stats listing */
router.get('/', function (req, res, next) {
  queries.getSeasonalTop8s().then(docs => {
    res.send(docs)
  })
})

module.exports = router
