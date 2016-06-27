var express = require('express');
var router = express.Router();
var prData = require('../public/javascripts/api-stuff.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        test:   'Im gay'
                        // test:   prData(function(data){
                        //     toString((data))
                        // })
                    });
});

module.exports = router;
