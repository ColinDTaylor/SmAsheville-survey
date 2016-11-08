// NOTE: Almost all of this is deprecated at this point and replaced by the queries module

// TODO: I think most of what this is currently doing can be accomplished by the queries module

var aliasHandler = require('./alias-handler.js')
var queries = require('./queries.js')
// Module used to manipulate the data for use with the PR.

// Should this be a class? I don't yet know how to use classes in ES6 or if I even ever should

// TODO:80 make a set of seasons which contains the ranges of tournaments at each one.
// NOTE:20 these are projected seasons, they might end up being different if we have to skip a week
// TODO:110 make the seasons based on actual real world seasons, it'll be cleaner that way.

var PrData = {}

// TODO:40 create a class "Player" which generates all of these stats in its constructor

PrData.uniqueParticipants = function (input) {}

PrData.mostRecentTournament = function (input) {}

PrData.bestPlacement = function (input) {}

// TODO:160 make this take a season as an input, requires seasonal alias lists
// output = sorted array of arrays in the form ['tag', attendancNum]
PrData.attendance = function () {
  let outputArray = []
  let playerIndex = 0

  // TODO: make this use map() instead of for loops
  // use the big list to add all of the alias uses together to get one attendance number
  for (let player in aliasHandler.bigList) {
    outputArray[playerIndex] = [player, 0]
    for (let alias in aliasHandler.bigList[player]) {
      // TODO:120 make this bugfix unecessary, a "player" class should do the trick
      if (alias === 'usualTag') {
        continue
      }
      // console.log(aliasHandler.bigList[player][alias])
      outputArray[playerIndex][1] += aliasHandler.bigList[player][alias]
    }
    playerIndex++
  }
  // sort the player arrays by attendance, highest to lowest.
  outputArray.sort((a, b) => {
    if (a[1] < b[1]) {
      return 1
    }
    if (a[1] > b[1]) {
      return -1
    }
    // a must equal b
    return 0
  })
  return outputArray
}

// NOTE: This is deprecated and replaced by queries.HorribleMonsterEligibilityFunction()
PrData.generateEligibility = function (season) {
  // TODO:270 update to work cross-seasonally
  let attendance = PrData.attendance()
  let eligibleAttendance = []
  let missingTop8 = []
  let eligible = []

  // generate attendance list for players with 3 or more tournament entries
  return queries.getSeasonalTop8s(season).then(top8s => {
    let indexp = 0
    for (let participant of attendance) {
      // console.log(participant)
      if (participant[1] >= 3) {
        indexp++
        // console.log(indexp)
        eligibleAttendance.push(participant[0])
      }
    }

    for (let participant of eligibleAttendance) {
      if (top8s.includes(participant)) {
        eligible.push(participant)
      } else {
        missingTop8.push(participant)
      }
    }
    // console.log(top8s.length)
    // console.log(eligibleAttendance.length)
    // console.log(attendance.length)
    // console.log(eligible.length)
    // console.log(eligible)
    return eligible
  })
}

PrData.avgPlacement = function (input) {}

PrData.generateRecord = function (input) {}

PrData.notableWins = function (input) {}

PrData.notableLosses = function (input) {}

PrData.handleLists = function () {
  // TODO: set this function up to actually accupt an input

  return queries.getSurveylists().then(data => {
    return data
  })
}

module.exports = PrData

// PrData. = function(input) {
//
// }
