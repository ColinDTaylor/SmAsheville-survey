/*    THIS IS ALL PRETTY MUCH DEPRECATED    */
/*    use the mongoose functions instead    */

// TODO: Remove all uses of this

var challongeApi = require('./api-basics.js');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// let MongooseModels = require('./mongoose.js');

// Connection URL
// var url = 'mongodb://localhost:27017/SmAsheville';

var database = {};
var dbObj = {};

// Use connect method to connect to the server
database.connect = function(dbName) {
    var url = 'mongodb://localhost:27017/' + dbName;

    var dbObj = new Promise(function (resolve, reject) {
        MongoClient.connect(url, function(err, db) {
          assert.equal(null, err);
          if (err){
            console.log('SOMTHING WENT SOUTH');
            reject();
          }
          resolve(db);
        });
    });

    return dbObj;
};

database.close = function(db) {
    db.close();
    console.log("Disconnected succesfully from server");
};

database.populate = function(data, col, type) { // data = challonge data, col = collection
    database.connect('SmAsheville').then(function (db) {   // type = string for type of data: "tournament", "participant", or "match"
        console.log('connected to mongoDB');

        var collection = db.collection(col);
        var promiseArray = [];

        // TODO:130 make this convert the tournamentId into a real tournament name

        // TODO:180 seriously wtf man
        var prevId;
        for (let tournament of data) {
            switch (type) {
                case "participants":

                    cleanParticipantData(tournament);

                    // for (let player of tournament) {
                    //     if (player.participant.tournamentId != prevId) {
                    //         console.log("inserting participants for tournamentId " + player.participant.tournamentId + "...");
                    //     }
                    //     promiseArray.push(insertionPromise(player.participant, collection, type));
                    //     prevId = player.participant.tournamentId;
                    // }
                    break;

                    // TODO:210 test this
                case "tournaments":
                    console.log("inserting " + tournament.tournament.name + "...");
                    promiseArray.push(insertionPromise(tournament.tournament, collection, type));
                    break;

                    // TODO:0 add match data
                case "matches":
                    for (var match of tournament) {
                        if (player.match.tournamentId != prevId) {
                            console.log("inserting matches for tournamentId " + player.match.tournamentId + "...");
                        }
                        promiseArray.push(insertionPromise(player, collection, type));
                        prevId = player.match.tournamentId;
                    }
                    break;
            }
        }

        Promise.all(promiseArray).then(function () {
            console.log('all inserts done, closing...');
            db.close();
            console.log('closed');
        });
    });
};
function insertionPromise(document, collection, type) {
    return new Promise(function(resolve, reject) {

        collection.insert(
            document,
            function(err, result) {
                assert.equal(err, null);
                assert.equal(1, result.result.n);
                assert.equal(1, result.ops.length);
                switch (type) {
                    case "tournaments":
                        console.log("Inserting " + document.name + " into '" + collection.s.name + "'");
                        break;
                    case "participants":
                        // console.log("Inserting " + document.participant.name + " into '" + collection.s.name + "'");
                        break;
                    case "matches":
                        // console.log("Inserting " + document.match.tournamentId + " into '" + collection.s.name + "'");
                        break;
                    default:

                }
                resolve(result);
            }
        );

    });
}

// The idea behind this is to take an array of tags and iterate them all through some horrible massive switch statement
// There has GOT to be a better way.

database.cleanTournamentData = function(data) {

};

database.cleanParticipantData = function(data) {

    for (let player in data) {
        console.log(player);
    }
};

database.cleanMatchData = function(data) {
    //Unused for now
};

module.exports = database;
