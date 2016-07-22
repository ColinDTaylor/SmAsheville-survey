var express = require('express');
var router = express.Router();
var challongeApi = require('../js/api-basics.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        test:   'Im gay'
                        // test:   challongeApi(function(data){
                        //     toString((data))
                        // })
                    });
});

module.exports = router;
