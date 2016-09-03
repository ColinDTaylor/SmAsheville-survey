var express = require('express')
var router = express.Router()
var checker = require('../js/bracket-checker')
// var database = require('../js/mongoose-main').Operations

router.get('/', (req, res, next) => {
  res.render('checker', {
    title: "check 'em",
    stylesheet: '/stylesheets/checker.css'
  })
})

router.get('/:newTournament/:oldTournament', (req, res, next) => {
  // let data = checker.getData(req.params.oldTournament, req.params.newTournament)
  // data.then(stuff => { res.send(`<pre>${ JSON.stringify(stuff, null, '\t') }</pre>`) })
  checker.create(req.params.newTournament, req.params.oldTournament).then(cruff => {
    res.render('checker', {
      title: "check 'em",
      stylesheet: '/stylesheets/checker.css',
      data: cruff
      // data: `<p>${ JSON.stringify(cruff, null, '\t') }</p>`
    })
  })
})

module.exports = router
