var database = require('./database.js');
var aliasHandler = require('./alias-handler.js');
// This file is here to contain all functions that query the existing database for certain datasets

var Queries = {};
var dbPromise = database.connect('SmAsheville');


// our top 8 query
// db.spring_2016.participants.distinct('name', {finalRank: {$lt: 8}})

// This function generates a list of players who have gotten a top 8 result in the given season
// Input is a string of the season name you're looking for (ex: 'spring_2016')
// Note: the players are only supplied if they got a top 8 at a tournament with over 16 players
Queries.getSeasonalTop8s = function(season) {
    return dbPromise.then(db => {
        let p_collection = db.collection(season + '.participants');
        return Queries.getSeasonalSmallTournaments('spring_2016', db)
        .then(smallTournaments => {
            return p_collection.distinct('name', {finalRank: {$lt: 8},
                                           tournamentId: {$nin: smallTournaments}});
        }).then(docs => {
            let outputArray = [];
            for (let player of docs) {
                let cleanedAlias = aliasHandler.lookupAlias(player);

                if (!outputArray.includes(cleanedAlias)) {

                    outputArray.push(cleanedAlias);
                }
            }
            return outputArray;
        });
    });
};

// This is mostly a helper function used to generate a list of tournament IDs for tournaments with
// less than 16 participants. Input = same as getSeasonalTop8s + an active connecttion object
// output = array of tournament IDs.
Queries.getSeasonalSmallTournaments = function(season, db = null) {

    let seasonTournaments = season + ".tournaments";
    let t_collection = db.collection(seasonTournaments);

    return t_collection.find({participantsCount: {$lt: 16}},{_id: 0, id: 1}).toArray().then(ids => {
        let result = [];
        for (let item of ids) {
            result.push(item.id);
        }

        return(result);
    });
};

module.exports = Queries;
