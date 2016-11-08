var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SURPRISE: it\'s nothing',
                        test:   'Im gay'
                        // test:   challongeApi(function(data){
                        //     toString((data))
                        // })
                    })
})

module.exports = router
