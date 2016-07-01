var challongeApi = require('./api-basics.js');
var database = require('./database');

var stats = {};

stats.getTournaments = function(firstTournament, lastTournament) {

    var promiseArray = [];

    if (lastTournament - firstTournament > 100) {
        console.log("Heck no that's too many tournaments");
        return result;
    }

    for (var i = firstTournament; i <= lastTournament; i++) {
        promiseArray.push(challongeApi.showTournament('smasheville' + i));
    }

    return Promise.all(promiseArray).then(function(data) {

        // this add an _id field that is equal to the weekly's number (for mongo)
        for (item of data) {
            item.tournament._id = item.tournament.name.substring(11, 13);
        }

        return data;
    });
}

// Fix challonge's awkward formatting
// TODO: FIX THIS HORRIBLE MONSTER
function formatData(data) {
    //
    // var formattedData = {};
    //
    // data.forEach(function (item) {
    //     item. = item.tournament;
    // });

    // for (var key in formattedData) {
    //     if (!formattedData.hasOwnProperty(key)) continue;
    //
    //     var tournament = formattedData[key];
    //
    //     outPutArray.push(tournament);
    //     console.log(key);
    // }

    // console.log(formattedData);

    return data;
}

stats.populateDatabase = function(data) {

}



// tournamentArray = stats.getTournaments(60, 72).then(function(data) {
//
// Connect to MongoDB
//     database.connect(function () {
//     console.log("Connected succesfully to server");
// });
//
//     // data.forEach(function (entry) {
//     //     data.append
//     // });
//
//     data.forEach(function (entry) {
//         var name = entry.tournament.name;
//         var tournamentObject = entry.tournament;
//         database.insert('TestCollection', {name : tournamentObject}, function () {
//             console.log('Inserted ' + entry.tournament.name);
//         });
//     });
//
// });

module.exports = stats;













/*--------------CODE GRAVEYARD--------------*/

// rip


// challongeApi.showTournament('smasheville' + i, function(data) {
//     console.log(data.tournament.name);
//     result[data.tournament.name] = data;
// });


// if (data.tournament.name == 'SmAsheville' + lastTournament) {
//     console.log(Object.keys(result));
//     callback(result);
// }


// var tournamentPromise = new Promise(function(resolve, reject) {
//
//   if (/* everything turned out fine */) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });
