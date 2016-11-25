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

const prLists =
[
{
  '_id': 'garbage' ,
  'tag': 'Absolome',
  'ip_addr': '97.89.146.238',
  'unranked_players': [ ],
  'pr_list': [
    'Cold',
    'Pelipper',
    'Ryko',
    'Pants',
    'QueTPie',
    's.L | tenbutts',
    'KUN$',
    'Dembo',
    's.L| Absolome',
    'MILK',
    'Avacado',
    'Vasculinity',
    'MP',
    'Weis',
    'Gravity',
    'GEEZer'
  ],
  'answers': [
    'Avacado'
  ],
  '__v': 0
},
{
  '_id': 'garbage' ,
  'tag': 'Avacado',
  'ip_addr': '97.95.253.9',
  'unranked_players': [ ],
  'pr_list': [
    'Wingull/Pelipper',
    'Cold',
    'Ryko',
    'QueTPie',
    'Pants',
    'KUN$',
    's.L | tenbutts',
    'Avacado',
    's.L| Absolome',
    'Dembo',
    'MILK',
    'GEEZer',
    'Vasculinity',
    'Weis',
    'MP',
    'Gravity'
  ],
  'answers': [
    'Avacado'
  ],
  '__v': 0
},
{
  '_id': 'garbage' ,
  'tag': 'KUN$',
  'ip_addr': '24.246.166.150',
  'unranked_players': [ ],
  'pr_list': [
    'Wingull/Pelipper',
    'Ryko',
    'QueTPie',
    'Cold',
    'Pants',
    'KUN$',
    's.L | tenbutts',
    'Vasculinity',
    's.L| Absolome',
    'MILK',
    'MP',
    'Avacado',
    'Dembo',
    'GEEZer',
    'Weis',
    'Gravity'
  ],
  'answers': [
    'Vasculinity'
  ],
  '__v': 0
},
{
  '_id': 'garbage' ,
  'tag': 'Vasculinity',
  'ip_addr': '152.18.120.14',
  'unranked_players': [ ],
  'pr_list': [
    'Wingull/Pelipper',
    'Cold',
    'Ryko',
    'Pants',
    'QueTPie',
    's.L| Absolome',
    's.L | tenbutts',
    'KUN$',
    'Dembo',
    'Vasculinity',
    'Avacado',
    'MILK',
    'Weis',
    'GEEZer',
    'MP',
    'Gravity'
  ],
  'answers': [
    'Ryko'
  ],
  '__v': 0
},
{
  '_id': 'garbage' ,
  'tag': 'Pelipper',
  'ip_addr': '152.18.85.127',
  'unranked_players': [ ],
  'pr_list': [
    'Cold',
    'Wingull/Pelipper',
    'Ryko',
    'Pants',
    'QueTPie',
    's.L | tenbutts',
    'KUN$',
    's.L| Absolome',
    'Dembo',
    'Avacado',
    'MILK',
    'Vasculinity',
    'GEEZer',
    'MP',
    'Weis',
    'Gravity'
  ],
  'answers': [
    'Avacado'
  ],
  '__v': 0
},
{
  '_id': 'garbage' ,
  'tag': 'Ryko',
  'ip_addr': '75.131.175.237',
  'unranked_players': [ ],
  'pr_list': [
    'Wingull/Pelipper',
    'Ryko',
    'Pants',
    'Cold',
    'QueTPie',
    'KUN$',
    'Vasculinity',
    's.L | tenbutts',
    's.L| Absolome',
    'Dembo',
    'MILK',
    'Avacado',
    'Weis',
    'MP',
    'Gravity',
    'GEEZer'
  ],
  'answers': [
    'Pelipper'
  ],
  '__v': 0
},
{
  '_id': 'garbage' ,
  'tag': 'Cold',
  'ip_addr': '152.27.15.204',
  'unranked_players': [ ],
  'pr_list': [
    'Cold',
    'Wingull/Pelipper',
    'Pants',
    'Ryko',
    'QueTPie',
    'Dembo',
    'KUN$',
    's.L | tenbutts',
    'Avacado',
    's.L| Absolome',
    'Vasculinity',
    'Gravity',
    'Weis',
    'MILK',
    'GEEZer',
    'MP'
  ],
  'answers': [
    'MILK'
  ],
  '__v': 0
},
{
  '_id': 'garbage' ,
  'tag': 'tenbutts',
  'ip_addr': '97.89.146.238',
  'unranked_players': [ ],
  'pr_list': [
    'Cold',
    'Wingull/Pelipper',
    'Ryko',
    'Pants',
    'QueTPie',
    's.L | tenbutts',
    'KUN$',
    's.L| Absolome',
    'Avacado',
    'MILK',
    'Vasculinity',
    'Dembo',
    'Weis',
    'MP',
    'Gravity',
    'GEEZer'
  ],
  'answers': [
    'Avacado'
  ],
  '__v': 0
}]

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
  // TODO: add this to a real, permanent function

  // This is just a way to render the PR data in a form that the condorcet generator can handle
  let output = ''

  for (let list of prLists) {
    output += (`${list.pr_list.join(' > ')} \n\n`)
  }

  res.render('dev', {testData: output})
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
