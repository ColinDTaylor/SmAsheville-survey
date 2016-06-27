var express = require('express');
var router = express.Router();
var database = require('../public/javascripts/database.js');
var prData = require('../public/javascripts/api-stuff.js');

/* GET stats listing */
router.get('/', function(req, res, next) {
  prData.showTournament('SmAsheville71', function(data){

      res.send((data.tournament.name));
      database.insert('TestCollection', {test: 'heheheheh'}, function() {
          database.close();
      });

      database.getParticipants(60, 72, function(result) {
        //   console.log(result);
      });
  });
});

module.exports = router;
