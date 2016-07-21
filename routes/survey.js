// TODO: create the survey route!

var express = require('express');
var router = express.Router();
var prData = require('../public/javascripts/pr-data.js');
var database_mongoose = require('../public/javascripts/mongoose.js');


/* GET home page. */
router.get('/', (req, res) => {

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

router.post('/', (req, res) => {

    // TODO: add some kind of validation regex to the survey results


    // a kinda lazy way to add in an IP address to my data for future use
    req.body.ip_addr = req.ip;
    // let surveyData = req.body;

    res.sendStatus(200);

    database_mongoose.logSurveyResponse(req.body);
});

module.exports = router;



















router.get('/more-like-surGAY', function(req, res, next) {
    res.send("ZINGER");
});
