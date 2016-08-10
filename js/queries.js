// TODO: update this to use mongoose instead

var aliasHandler = require('./alias-handler.js')
var database = require('./mongoose-main.js').Models
// This file is here to contain all functions that query the existing database for certain datasets

var Queries = {}

// POLISH: allow these functions to take either a start and end date, or a season

// Theses two functions are nearly identical, but they're easier to maintain if kept separate
// `selection` is an optional string arg which allows the caller to specify wanted fields
Queries.getParticipantsByDates = function (startDate, endDate, selection) {
  return database.Participants
    .find()
    .where('createdAt').gte(startDate)
    .where('createdAt').lte(endDate)
    .select(selection)
    .sort('createdAt')
    .exec().then(docs => {
      return docs
    })
}

Queries.getTournamentsByDates = function (startDate, endDate, selection) {
  return database.Tournaments
    .find()
    .where('createdAt').gte(startDate)
    .where('createdAt').lte(endDate)
    .select(selection)
    .sort('createdAt')
    .exec().then(docs => {
      return docs
    })
}

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

// TODO: make these actually accept a season parameter
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

Queries.getSeasonalTotalAttendance = function (season) {
  return database.Participants
  .aggregate()
  .append({$project: {_id: 0, name: 1}})
  .group({_id: '$name', count: {$sum: 1}})
  .sort({count: -1})
  .exec().then(names => {
    return names
  })
}

// Generates an array of objects which have an "_id" corresponding to each month of the season,
// alongside a set of unique tags representing ever person that entrered a weekly that season.
Queries.getSeasonalMonthlyAttendance = function () {
  return database.Participants
  .aggregate()
  .append({$project: {_id: 0, name: 1, id: 1, createdAt: 1}})
  .group({
    _id: {$month: '$createdAt'},
    tags: {$addToSet: '$name'}
  })
  .exec().then(result => {
    let monthsActive = {}

    // create an object of arrays from our array of objects (hah), one array for each month in the
    // season. The arrays contain only one copy of each cleaned alias.

    // hmm, it'd be much easier to work with this if it was an array of names which have each
    // season they entered pushed into them.

    result.map((doc) => {
      doc.tags.map((name) => {
        let cleanedName = aliasHandler.lookupAlias(name)

        if (!monthsActive[cleanedName]) {
          // if the array of seasons does not exist yet, make it.
          monthsActive[cleanedName] = []
          monthsActive[cleanedName].push(doc._id)
        } else if (!monthsActive[cleanedName].includes(doc._id)) {
          // push this season into the array of seasons, unless it's already there.
          monthsActive[cleanedName].push(doc._id)
        }
      })
    })
    return monthsActive
  })
}

// TODO: move this over to PRdata
Queries.HorribleMonsterEligibilityFunction = function () {
  return Queries.getSeasonalMonthlyAttendance().then(docs => {
    let attendance = {
      active: [],
      inactive: []
    }

    for (let player in docs) {
      if (docs[player].length >= 4) {
        attendance.active.push(player)
      } else if (!docs[player].includes(3) && docs[player].length === 3) {
        attendance.active.push(player)
      } else {
        attendance.inactive.push(player)
      }
    }
    return attendance
  }).then(attendance => {
    let eligibility = {
      attendance: attendance.active,
      ineligible: {
        inactive: attendance.inactive,
        noTop8: []
      },
      ranking: []
    }

    return Queries.getSeasonalTop8s().then(top8s => {
      for (let person of attendance.active) {
        if (top8s.includes(person)) {
          eligibility.ranking.push(person)
        } else {
          eligibility.ineligible.noTop8.push(person)
        }
      }
      return eligibility
    })
  })
}

module.exports = Queries
