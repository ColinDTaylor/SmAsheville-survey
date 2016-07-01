var challongeApi = require('./api-basics.js');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


// Connection URL
var url = 'mongodb://localhost:27017/challongeApiTest';

var database = {};
var dbObj = {};


// TODO: make this less awkward
database.connect = function() {

    // Use connect method to connect to the server

    var dbObj = new Promise(function (resolve, reject) {
        MongoClient.connect(url, function(err, db) {
          //assert.equal(null, err);
          if (err){
            console.log('SOMTHING WENT SOUTH');
            reject();
          }
          resolve(db);
        });
    });

    return dbObj.then(function (db) {
        return db
    });
}

database.close = function() {
    dbObj.close();
    console.log("Disconnected succesfully from server");
}

database.insert = function(db, col, newDoc, callback) {

    // Get the collection
    var collection = db.collection(col);
    // Insert some documents
    collection.insert(
        newDoc,
        function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            assert.equal(1, result.ops.length);
            console.log("Inserted sum documents into the collection");

            callback();
    });

}

module.exports = database;

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
