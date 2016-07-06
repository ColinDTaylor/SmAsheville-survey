var challonge = require('challonge');
//var database = require('./database');

var client = challonge.createClient({
    apiKey: 'hvA3eLb7hzOGS5py3PM3ZaGJAlRHTACaktnlobkQ'
});

var challongeApi = {};

// database.testConnection();

/*--------------------TOURNAMENTS-----------------------*/

// challongeApi.indexTournaments = function(callback) {
//     client.tournaments.index({
//         callback: function(err, data){
//             if (err) { console.log(err); return; }
//             callback(data);
//         }
//     });
// }

// challongeApi.showTournament = function(t_id, callback) {
//     client.tournaments.show({
//         id :    t_id,
//         callback: function(err, data){
//             if (err) { console.log(err); return; }
//             callback(data);
//         }
//     });
// }

challongeApi.indexTournaments = function() {
    return new Promise(function (resolve, reject) {
        client.tournaments.index({
            callback: function(err, data){
                if (err) { console.log(err); reject("WHOOPS"); }
                resolve(data);
            }
        });
    });
};

challongeApi.showTournament = function(t_id) {
    return new Promise(function (resolve, reject) {
        client.tournaments.show({
            id :    t_id,
            callback: function(err, data){
                if (err) { console.log(err); reject("WHOOPS"); }
                resolve(data);
            }
        });
    });
};

/*--------------------PARTICIPANTS-----------------------*/

challongeApi.indexParticipants = function(t_id) {
    return new Promise(function (resolve, reject) {
        client.participants.index({
            id : t_id,
            callback: function(err, data){
                if (err) { console.log(err); reject("WHOOPS"); }
                resolve(data);
            }
        });
    });
};

challongeApi.showParticipant = function(t_id, p_id) {
    return new Promise(function (resolve, reject) {
        client.participants.show({
            id : t_id,
            participantId : p_id,
            callback: function(err, data){
                if (err) { console.log(err); return; }
                resolve(data);
            }
        });
    });
};

/*--------------------MATCHES-----------------------*/

// TODO: turn match api function wrapper wrappers into promises

challongeApi.indexMatches = function(t_id, callback) {
    client.matches.index({
        id : t_id,
        callback: function(err, data){
            if (err) { console.log(err); return; }
            callback(data);
        }
    });
};

challongeApi.showMatch = function(t_id, m_id, callback) {
    client.matches.show({
        id :    t_id,
        matchId : m_id,
        callback: function(err, data){
            if (err) { console.log(err); return; }
            callback(data);
        }
    });
};

module.exports = challongeApi;
