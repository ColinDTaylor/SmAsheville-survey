var express = require('express')
var router = express.Router()
var api = require('../js/api-get')
var database = require('../js/mongoose-main').Operations

router.get('/', (req, res, next) => {
  res.send('This dev url is for use by PRIME NERDS ONLY')
})

router.get('/populate-tournaments/:collectionName/:first/:last', (req, res, next) => {
  api.getTournaments(req.params.first, req.params.last).then(data => {
    // res.send(`tournaments successfully populated to collection '${req.params.collectionName}'
    //
    //             ${data.toString()}`)
    res.send(data)
  })
})

router.get('/populate-participants/:collectionName/:first/:last', (req, res, next) => {
  api.getParticipants(req.params.first, req.params.last).then(data => {
    database.insertParticipants(data).then(docs => {
      res.send('boots')
    })
  })
})


module.exports = router
