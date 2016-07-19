// TODO: create the survey route!

var express = require('express');
var router = express.Router();
var prData = require('../public/javascripts/pr-data.js');

/* GET home page. */
router.get('/', function(req, res, next) {


  prData.generateEligibility('spring_2016').then(eligiblePlayers => {

      res.render('survey', {
          stylesheet : "stylesheets/survey-styles.css",
          title  :   "Zhwang!",
          question_1: "mushrooms?",
          question_2: "mushrooms.",
          playerArray: eligiblePlayers
      });
  });
});

module.exports = router;
