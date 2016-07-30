// TODO: update this to use mongoose instead

var aliasHandler = require('./alias-handler.js')
var database = require('./mongoose-main.js').Models
// This file is here to contain all functions that query the existing database for certain datasets

var Queries = {}

// This function generates a list of players who have gotten a top 8 result in the given season
// Input is a string of the season name you're looking for (ex: 'spring_2016')
// Note: the players are only supplied if they got a top 8 at a tournament with over 16 players

// TODO: The model for this kind of query needs to use a modular collection name
// This is a beta version of the above function using mongoose instead
Queries.getSeasonalTop8s = function (season) {
  return Queries.getSeasonalSmallTournaments()
  .then(smallIds => {
    return database.Participants
      .find()
      .where('finalRank').lte(8)
      .where('tournamentId').nin(smallIds)
      .select('name tournamentId -_id')
      .exec()
  }).then(result => {
    // TODO: offload this alias cleaning to another function
    let outputSet = []
    result.map(currentDoc => {
      let cleanedTag = aliasHandler.lookupAlias(currentDoc.name)
      if (!outputSet.includes(cleanedTag)) {
        outputSet.push(cleanedTag)
      }
    })
    return outputSet
  })
}

// This is mostly a helper function used to generate a list of tournament IDs for tournaments with
// less than 16 participants. Input = same as getSeasonalTop8s + an active connecttion object
// output = array of tournament IDs.

Queries.getSeasonalSmallTournaments = function (season) {
  return database.Tournaments
    .find()
    .where('participantsCount').lt(16)
    .select('-_id id')
    .exec().then(ids => {
      let idArray = []
      ids.map(index => {
        idArray.push(index.id)
      })
      return idArray
    })
}

module.exports = Queries
