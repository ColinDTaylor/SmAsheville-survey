var express = require('express')
var router = express.Router()
var api = require('../js/api-get')
var database = require('../js/mongoose-main').Operations
var queries = require('../js/queries')
var prdata = require('../js/pr-data')
var aliasHandler = require('../js/alias-handler')
// var apib = require('../js/api-basics')
var challongeAPI = require('challonge-node')
const challonge = challongeAPI.withAPIKey('hvA3eLb7hzOGS5py3PM3ZaGJAlRHTACaktnlobkQ')

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

router.get('/generate_condorcet', (req, res, next) => {
  prdata.handleLists().then(rawData => {
    // TODO: add this to a real, permanent function

    // This is just a way to render the PR data in a form that the condorcet generator can handle
    let output = ''

    for (let list of rawData) {
      output += (`${list.pr_list.join(' > ')} \n\n`)
    }

    res.render('dev', {testData: output})
  })
})

router.get('/homo/:alias', (req, res, next) => {
  // 'homo' for homogenize, obviously
  res.send(aliasHandler.processAlias(req.params.alias))
})

router.get('/startTournament/:t_id', (req, res, next) => {
  challonge.tournaments.start(req.params.t_id).then(stuff => {
    console.log(stuff)
  })
  res.send('doot doot')
})

router.get('/resetTournament/:t_id', (req, res, next) => {
  challonge.tournaments.reset(req.params.t_id).then(stuff => {
    console.log(stuff)
  })
  res.send('deet deet')
})

module.exports = router
