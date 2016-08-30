var express = require('express')
var router = express.Router()
var api = require('../js/api-get')
var database = require('../js/mongoose-main').Operations
var queries = require('../js/queries')
var prdata = require('../js/pr-data.js')

router.get('/', (req, res, next) => {
  res.send('This dev url is for use by PRIME NERDS ONLY')
})

router.get('/populate-tournaments/:collectionName/:first/:last', (req, res, next) => {
  api.getTournaments(req.params.first, req.params.last).then(data => {
    database.insertTournaments(data, req.params.collectionName).then(docs => {
      res.send('shoes')
    })
  })
})

router.get('/populate-participants/:collectionName/:first/:last', (req, res, next) => {
  api.getParticipants(req.params.first, req.params.last).then(data => {
    database.insertParticipants(data, req.params.collectionName).then(docs => {
      res.send('boots')
    })
  })
})

router.get('/getEligibility', (req, res, next) => {
  queries.HorribleMonsterEligibilityFunction().then(eligibility => {
    console.log(eligibility.ranking)

    res.send('<pre>' + eligibility.ranking.join('\n') + '</pre>')
  })
})

router.get('/jesus/thesedangnerds/iswearimactuallyalmostdone/ivebeensuperbusy/heresthevotinglist', (req, res, next) => {
  queries.HorribleMonsterEligibilityFunction().then(eligibility => {
    console.log(eligibility.ranking)

    res.send('<pre>' + eligibility.ranking.join('\n') + '</pre>')
  })
})

router.get('/test', (req, res, next) => {
  prdata.handleLists().then(rawData => {
    // TODO: add this to a real, permanent function
    let output = ''

    for (let list of rawData) {
      output += (`${list.pr_list.join(' > ')} \n\n`)
    }

    res.render('dev', {testData: output})
  })
})

router.get('/test/p', (req, res, next) => {
  prdata.handleLists().then(rawData => {
    // TODO: add this to a real, permanent function
    let output = ''

    for (let list of rawData) {
      output += (`${list.tag} : ${list.pr_list.join(' > ')} \n\n`)
    }

    res.render('dev', {testData: output})
  })
})

module.exports = router
