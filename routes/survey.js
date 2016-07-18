// TODO: create the survey route!

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('survey', {
      stylesheet : "stylesheets/survey-styles.css",
      title  :   "Zhwang!",
      question_1: "mushrooms?",
      question_2: "mushrooms."
  });
});

module.exports = router;
