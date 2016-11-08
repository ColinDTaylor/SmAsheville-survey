var express = require('express')
var router = express.Router()
// var queries = require('../js/queries')
var Season = require('../js/seasons')
// var database = require('../js/mongoose-main.js').Operations
// var api = require('../js/api-get')

// I don't remember what the heck I was using this for honestly

/* GET stats listing */
router.get('/', function (req, res, next) {
  let test = new Season(2016, Season.spring)
  console.log(test.participants)
  res.send('whea')
})

module.exports = router

// queries.getSeasonalTop8s().then(docs => {
//   let test = new Seasons(2017, Seasons.spring)
//   console.log(test)
//   res.send(docs)
// })
