var challonge = require('challonge');
//var database = require('./database');

var client = challonge.createClient({
    apiKey: 'hvA3eLb7hzOGS5py3PM3ZaGJAlRHTACaktnlobkQ'
});

var prData = {};

// database.testConnection();

/*--------------------TOURNAMENTS-----------------------*/

prData.indexTournaments = function(callback) {
    client.tournaments.index({
        callback: function(err, data){
            if (err) { console.log(err); return; }
            callback(data);
        }
    });
}

prData.showTournament = function(t_id, callback) {
    client.tournaments.show({
        id :    t_id,
        callback: function(err, data){
            if (err) { console.log(err); return; }
            callback(data);
        }
    });
}

/*--------------------PARTICIPANTS-----------------------*/

prData.indexParticipants = function(t_id, callback) {
    client.participants.index({
        id : t_id,
        callback: function(err, data){
            if (err) { console.log(err); return; }
            callback(data);
        }
    });
}

prData.showParticipant = function(t_id, p_id, callback) {
    client.participants.show({
        id : t_id,
        participantId : p_id,
        callback: function(err, data){
            if (err) { console.log(err); return; }
            callback(data);
        }
    });
}

/*--------------------MATCHES-----------------------*/

prData.indexMatches = function(t_id, callback) {
    client.matches.index({
        id : t_id,
        callback: function(err, data){
            if (err) { console.log(err); return; }
            callback(data);
        }
    });
}

prData.showMatch = function(t_id, m_id, callback) {
    client.matches.show({
        id :    t_id,
        matchId : m_id,
        callback: function(err, data){
            if (err) { console.log(err); return; }
            callback(data);
        }
    });
}

module.exports = prData;
