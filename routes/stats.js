var express = require('express')
var router = express.Router()
var queries = require('../js/queries.js')
var Seasons = require('../js/seasons')
// var database = require('../js/mongoose-main.js').Operations

/* GET stats listing */
router.get('/', function (req, res, next) {
  queries.getSeasonalTop8s().then(docs => {
    let test = new Seasons(2017, Seasons.spring)
    res.send(docs)
  })
})

module.exports = router
