var express = require('express');
var router = express.Router();
var database = require('../public/javascripts/database.js');
var challongeApi = require('../public/javascripts/api-basics.js');
var stats = require('../public/javascripts/stat-functions.js');

/* GET stats listing */
router.get('/', function(req, res, next) {

    stats.getTournaments(60, 72).then(function(data) {
        console.log('butt');
    });
    res.send('stats r 4 ndrs')



});

module.exports = router;

/*--------------CODE GRAVEYARD--------------*/

// rip

// console.log(tournamentArray);

// setTimeout(function () {
//
//         },  2000);

// res.send("ssssssI");

// var buut = butt(tEST);

//   database.insert('TestCollection', {test: 'heheheheh'}, function() {
//       database.close();
//   });

// function butt(ho) {
//     return ho;
// }

//res.send(console.log("I got nuffin"));
//console.log(tEST);
