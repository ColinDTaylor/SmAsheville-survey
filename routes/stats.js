var express = require('express');
var assert = require('assert');
var router = express.Router();
var database = require('../public/javascripts/database.js');
var challongeApi = require('../public/javascripts/api-basics.js');
var stats = require('../public/javascripts/api-get.js');
var aliases = require('../public/javascripts/alias-handler.js');
var queries = require('../public/javascripts/queries.js');
var prData = require('../public/javascripts/pr-data.js');

/* GET stats listing */
router.get('/', function(req, res, next) {

    prData.generateEligibility('spring_2016');

    res.send("stats r 4 nerds");
});

module.exports = router;








// /*--------------CODE GRAVEYARD--------------*/
//
//     // rip
//
//     // console.log(tournamentArray);
//
//     // setTimeout(function () {
//     //
//     //         },  2000);
//
//     // res.send("ssssssI");
//
//     // for (var key in data) {
//     //     if (!data.hasOwnProperty(key)) continue;
//     //
//     //     var tournament = data[key];
//     // }
//
//     // This should get the data from challonge, then generate an array of promises
//     // which are there to push the data to the database when it is ready.
//
//     // Promise.all(promiseArray).then(function() {
//     //     console.log('test');
//     //     database.close();
//     // });
//
//     // var buut = butt(tEST);
//
//     // function butt(ho) {
//     //     return ho;
//     // }
//
//     //res.send(console.log("I got nuffin"));
//     //console.log(tEST);
//
//
//     // data.forEach(function (item) {
//     //     console.log(item); // FIX: this doesn't work because of the unecessary containing object
//     // });
//
//     //
//     //         Stop the app from crashing upon trying to insert a doc that already exists
//     //
//     //         TODO: fix this graceful error handler so it can be used.
//     //
//     //         if (err) {
//     //             if (err.name === 'MongoError' && err.code === 11000) {
//     //                 // Duplicate record found
//     //                 console.log("***** collection '" +
//     //                             collection.s.name +
//     //                             "' already has a document with the ID '" +
//     //                             item.tournament._id + "', skipping... *****");
//     //                 reject();
//     //             } else {
//     //                 // Some other error
//     //                 return res.status(500).send(err);
//     //             }
//     //         } else {
//     //             console.log("Inserting " + item.tournament.name + " into '" + collection.s.name + "'");
//     //         }
//     // //
//     // //         resolve();
// promiseArray.push(new Promise (function (resolve, reject) {
//
//     collection.insert(
//         item.tournament,
//
//         function(err, result) {
//             assert.equal(err, null);
//             assert.equal(1, result.result.n);
//             assert.equal(1, result.ops.length);
//             console.log("Inserting " + item.tournament.name + " into '" + collection.s.name + "'");
//         });
// }));
// database.connect("SmAsheville").then(function(db) {
//     // res.send("stats r 4 nedrs");
//
//     col = db.collection("raw_participants");
//     var docs = col.find({name: 'Absolome'}, {}).limit(10);
//
//     console.log(docs);
// });
// stats.getTournaments(60, 72).then(function(data) {
//
//     console.log('succesfully got data from challonge');
//
//     database.populate(data, "spring_2016.tounaments", "tournaments");
// });
//
// stats.getParticipants(60, 72).then(function(data) {
//
//     console.log('succesfully got participant data from challonge');
//
//     database.populate(data, "spring_2016.participants", "participants");
// });

// var avagadro = aliases.lookupAlias("Avagadro");

// queries.getSeasonalTop8s('spring_2016').then(result => {
//     console.log(result);
// });
