var challongeApi = require('./api-basics.js')

var stats = {}

// TODO: make these work on a time basis, not url
// but then how would I differentiate doubles brackets from singles?

stats.getTournaments = function (firstTournament, lastTournament) {
  var promiseArray = []

  if (lastTournament - firstTournament > 100) {
    console.log("Heck no that's too many tournaments")
    return 0
  }

  for (var i = firstTournament; i <= lastTournament; i++) {
    promiseArray.push(challongeApi.showTournament('smasheville' + i))
  }

  return Promise.all(promiseArray).then(function (data) {
    // this add an _id field that is equal to the weekly's number (for mongo)
    // for (var item of data) {
    //     item.tournament._id = 't_' + item.tournament.name.substring(11, 13)
    // }
    return data
  })
}

stats.getParticipants = function (firstTournament, lastTournament) {
  let promiseArray = []

  if (lastTournament - firstTournament > 50) {
    console.log('Please break up requests into smaller chunks to avoid overloading the API')
    return 0
  }

  // TODO: change this to work with dates instead of numbers

  for (let i = firstTournament; i <= lastTournament; i++) {
    promiseArray.push(challongeApi.indexParticipants('smasheville' + i))
  }

  return Promise.all(promiseArray).then(function (data) {
    // console.log(data)
    // this add an _id field that is equal to the weekly's number (for mongo)
    // for (var item of data) {
    //     item.tournament._id = item.tournament.name.substring(11, 13)
    // }
    return data
  })
}

stats.getMatches = function (firstTournament, lastTournament) {
  var promiseArray = []

  if (lastTournament - firstTournament > 100) {
    console.log("Heck no that's too many tournaments")
    return 0
  }

  for (var i = firstTournament; i <= lastTournament; i++) {
    promiseArray.push(challongeApi.showTournament('smasheville' + i))
  }

  return Promise.all(promiseArray).then(function (data) {
    // this add an _id field that is equal to the weekly's number (for mongo)
    // for (var item of data) {
    // item.tournament._id = item.tournament.name.substring(11, 13)
    // }

    return data
  })
}

module.exports = stats
