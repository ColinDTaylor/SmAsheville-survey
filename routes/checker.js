var express = require('express')
var router = express.Router()
var checker = require('../js/bracket-checker')
// var database = require('../js/mongoose-main').Operations

router.get('/', (req, res, next) => {
  res.send('this is a placeholder lol')
})

router.get('/:oldTournament/:newTournament', (req, res, next) => {
  // let data = checker.getData(req.params.oldTournament, req.params.newTournament)
  // data.then(stuff => { res.send(`<pre>${ JSON.stringify(stuff, null, '\t') }</pre>`) })
  checker.create('smasheville70', 'smasheville71').then(cruff => {
    res.send(`<pre>${ JSON.stringify(cruff, null, '\t') }</pre>`)
  })
})

module.exports = router
