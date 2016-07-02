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
        for (var item of data) {
            item.tournament._id = item.tournament.name.substring(11, 13);
        }

        return data;
    });
};

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



stats.populateDatabase = function(data) {

};



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


// Example JSON: Tournament
// {
//     "tournament": {
//         "id": 2569632,
//         "name": "SmAsheville69",
//         "url": "smasheville69",
//         "description": "\u003cp\u003eAsheville melee\u003c/p\u003e",
//         "tournament_type": "double elimination",
//         "started_at": "2016-05-26T16:49:52.236-04:00",
//         "completed_at": "2016-05-26T20:44:01.092-04:00",
//         "require_score_agreement": false,
//         "notify_users_when_matches_open": true,
//         "created_at": "2016-05-26T16:15:29.535-04:00",
//         "updated_at": "2016-05-26T20:44:01.384-04:00",
//         "state": "complete",
//         "open_signup": false,
//         "notify_users_when_the_tournament_ends": true,
//         "progress_meter": 100,
//         "quick_advance": false,
//         "hold_third_place_match": false,
//         "pts_for_game_win": "0.0",
//         "pts_for_game_tie": "0.0",
//         "pts_for_match_win": "1.0",
//         "pts_for_match_tie": "0.5",
//         "pts_for_bye": "1.0",
//         "swiss_rounds": 0,
//         "private": false,
//         "ranked_by": "match wins",
//         "show_rounds": true,
//         "hide_forum": false,
//         "sequential_pairings": false,
//         "accept_attachments": false,
//         "rr_pts_for_game_win": "0.0",
//         "rr_pts_for_game_tie": "0.0",
//         "rr_pts_for_match_win": "1.0",
//         "rr_pts_for_match_tie": "0.5",
//         "created_by_api": false,
//         "credit_capped": false,
//         "category": null,
//         "hide_seeds": false,
//         "prediction_method": 0,
//         "predictions_opened_at": null,
//         "anonymous_voting": false,
//         "max_predictions_per_user": 1,
//         "signup_cap": null,
//         "game_id": 59766,
//         "participants_count": 23,
//         "group_stages_enabled": false,
//         "allow_participant_match_reporting": true,
//         "teams": false,
//         "check_in_duration": null,
//         "start_at": null,
//         "started_checking_in_at": null,
//         "tie_breaks": ["match wins vs tied", "game wins", "points scored"],
//         "locked_at": null,
//         "event_id": null,
//         "public_predictions_before_start_time": false,
//         "ranked": false,
//         "grand_finals_modifier": null,
//         "description_source": "\u003cp\u003eAsheville melee\u003c/p\u003e",
//         "subdomain": null,
//         "full_challonge_url": "http://challonge.com/smasheville69",
//         "live_image_url": "http://challonge.com/smasheville69.svg",
//         "sign_up_url": null,
//         "review_before_finalizing": true,
//         "accepting_predictions": false,
//         "participants_locked": true,
//         "game_name": "Super Smash Bros. Melee`",
//         "participants_swappable": false,
//         "team_convertable": false,
//         "group_stages_were_started": false
//     }
// }

/*--------------CODE GRAVEYARD--------------*/
//
// rip
//
//
// challongeApi.showTournament('smasheville' + i, function(data) {
//     console.log(data.tournament.name);
//     result[data.tournament.name] = data;
// });
//
// if (data.tournament.name == 'SmAsheville' + lastTournament) {
//     console.log(Object.keys(result));
//     callback(result);
// }
//
// var tournamentPromise = new Promise(function(resolve, reject) {
//
//   if (/* everything turned out fine */) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });
//
// Fix challonge's awkward formatting
// TODO: FIX THIS HORRIBLE MONSTER
// function formatData(data) {
//
//     var formattedData = {};
//
//     data.forEach(function (item) {
//         item. = item.tournament;
//     });
//
//     for (var key in formattedData) {
//         if (!formattedData.hasOwnProperty(key)) continue;
//
//         var tournament = formattedData[key];
//
//         outPutArray.push(tournament);
//         console.log(key);
//     }
//
//     console.log(formattedData);
//
//     return data;
// }
