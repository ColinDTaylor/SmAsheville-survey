var express = require('express');
var router = express.Router();
var database = require('../public/javascripts/database.js');
var challongeApi = require('../public/javascripts/api-basics.js');
var stats = require('../public/javascripts/stat-functions.js');
var assert = require('assert');

/* GET stats listing */
router.get('/', function(req, res, next) {

    stats.getTournaments(60, 72).then(function(data) {

        console.log('succesfully got data');

        database.connect().then(function (db) {
            console.log('whats up I connected nice');

            var collection = db.collection('toot');
            var promiseArray = [];

            for (var item of data) {

                promiseArray.push(new Promise (function (resolve, reject) {

                    collection.insert(
                        item.tournament,

                        function(err, result) {
                            assert.equal(err, null);
                            assert.equal(1, result.result.n);
                            assert.equal(1, result.ops.length);
                            resolve();
                    });
                }));

                console.log("Inserting " + item.tournament.name + " into '" + collection.s.name + "'");

            }

            Promise.all(promiseArray).then(function () {
                console.log('all inserts done, closing...');
                db.close()
                console.log('closed');
            });

        });

    });

    res.send("stats r 4 nedrs");
});

module.exports = router;












/*--------------CODE GRAVEYARD--------------*/

// rip

// console.log(tournamentArray);

// setTimeout(function () {
//
//         },  2000);

// res.send("ssssssI");

// for (var key in data) {
//     if (!data.hasOwnProperty(key)) continue;
//
//     var tournament = data[key];
// }

// This should get the data from challonge, then generate an array of promises
// which are there to push the data to the database when it is ready.

// Promise.all(promiseArray).then(function() {
//     console.log('test');
//     database.close();
// });

// var buut = butt(tEST);

// function butt(ho) {
//     return ho;
// }

//res.send(console.log("I got nuffin"));
//console.log(tEST);


// data.forEach(function (item) {
//     console.log(item); // FIX: this doesn't work because of the unecessary containing object
// });
