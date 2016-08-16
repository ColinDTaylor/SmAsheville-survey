// #Done:0 create the survey route!

var express = require('express')
var router = express.Router()
var queries = require('../js/queries')
var database_mongoose = require('../js/mongoose-main.js').Operations

/* GET survey page. */
router.get('/', (req, res) => {
  queries.HorribleMonsterEligibilityFunction().then(eligibility => {
    res.render('survey', {
      stylesheet: 'stylesheets/survey-styles.css',
      title: 'Zhwang!',
      questions: ['Which player do you think improved most this season?'],
      playerArray: eligibility.ranking,
      attendedArray: eligibility.attendance,
      rankedArray: null
    })
  })
})

router.get('/thanks', (req, res) => {
  res.send('Thanks! You may return to change your answers any time')
})

router.post('/', (req, res) => {
  // TODO:10 add some kind of validation regex to the survey results
  // a kinda lazy way to add in an IP address to my data for future use
  // TODO: use this IP address to reload a player's previous selection
  // req.body.ip_addr = req.ip

  console.log(req.body)

  database_mongoose.logSurveyResponse(req.body)

  res.sendStatus(200)
})

module.exports = router

router.get('/more-like-surGAY', function (req, res, next) {
  res.send('ZINGER')
})
