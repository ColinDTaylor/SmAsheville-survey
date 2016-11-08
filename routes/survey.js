// #Done:0 create the survey route!

var express = require('express')
var router = express.Router()
var database_mongoose = require('../js/mongoose-main.js').Operations

/* GET survey page. */
router.get('/', (req, res) => {
  res.render('survey', {
    stylesheet: 'stylesheets/survey-styles.css',
    title: 'SmAsheville Power Rankings Survey',
    questions: ['Which player do you think improved most this season?'],
    playerArray: playerArray,
    attendedArray: attendedArray,
    rankedArray: null
  })
})

router.get('/thanks', (req, res) => {
  res.send('Thanks! You may return to change your answers any time')
})

router.post('/', (req, res) => {
  // TODO:10 add some kind of validation regex to the survey results
  // a kinda lazy way to add in an IP address to my data for future use
  // TODO: use this IP address to reload a player's previous selection
  req.body.ip_addr = req.ip

  console.log(req.body)

  database_mongoose.logSurveyResponse(req.body)

  res.sendStatus(200)
})

module.exports = router

router.get('/more-like-surGAY', function (req, res, next) {
  res.send('ZINGER')
})

const playerArray = [
  'Cold',
  'Pelipper',
  'Ryko',
  'Pants',
  'QueTPie',
  's.L | tenbutts',
  'KUN$',
  'Dembo',
  's.L| Absolome',
  'Avacado',
  'MILK',
  'Weis',
  'MP',
  'GEEZer',
  'Gravity'
]

const attendedArray = [
  's.L | Absolome',
  'Ryko',
  'QueTPie',
  'Pelipper',
  'HYP | EZVega',
  'Cold',
  'MILK',
  'Vasculinity',
  'Lime',
  'Weis',
  'MP',
  's.L | tenbutts',
  'Avacado',
  'Gravity',
  '401k',
  'GEEZer',
  'Botch',
  'KUN$',
  '60%cat',
  'Dembo',
  'Kepis',
  'LDC',
  'THKyle',
  'drevis',
  'Pants',
  'Kelso',
  'Clay',
  'Savage Henry',
  'Simmons',
  'zeloft',
  'Gheist',
  'Dubs'
]
