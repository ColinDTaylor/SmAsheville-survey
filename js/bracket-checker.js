/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* This is the code for my next ssbm.tech pet project: a tool to help us TO weeklies
*
* Basically I need it to take two challonge brackets as input and it outputs whether or not
* any two players played last week in r1 or projected r2 or projected r1 losers.
*
* We do this by hand every weekly, so this should save tons of time!
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
let api = require('./api-basics')
let aliasHandler = require('./alias-handler')
let Checker = {}

Checker.create = function (oldTournament, newTournament) {
  this.old = {}
  this.new = {}
  this.conflicts = {}
  return getData(oldTournament, newTournament).then(data => {
    [this.old.matches, this.new.matches, this.old.participants, this.new.participants] = data

    this.old.idTable = associateIds(this.old.participants)
    this.new.idTable = associateIds(this.new.participants)

    this.old.matchTable = createMatchTable(this.old)
    this.new.matchTable = createMatchTable(this.new)

    // findConflicts(this.new.matchTable1, this.old.matchTable2)

    return 'butz'
  })
}

function getData (oldTournament, newTournament) {
  let promiseArray = []

  promiseArray.push(api.indexMatches(oldTournament).then(docs => {
    return docs
  }))
  promiseArray.push(api.indexMatches(newTournament).then(docs => {
    return docs
  }))

  promiseArray.push(api.indexParticipants(oldTournament).then(docs => {
    return docs
  }))
  promiseArray.push(api.indexParticipants(newTournament).then(docs => {
    return docs
  }))
  return Promise.all(promiseArray)
}

// inputData = an object with two sub-objects, one for participants and one for tournaments
function associateIds (participants) {
  let output = {}
  output.highSeeds = []
  output.participantCount = participants.length

  participants.map(doc => {
    let part = doc.participant
    output[part.id] = aliasHandler.lookupAlias(part.name)
    if ([1, 2].includes(part.seed)) {
      output.highSeeds.push(part.id)
    }
  })

  return output
}

function createMatchTable (inputData) {
  let output = {'1': [], '2': [], '-1': [], 'all': []}
  let ids = inputData.idTable
  let highSeeds = ids.highSeeds

  inputData.matches.map(item => {
    let match = item.match
    let [p1Id, p2Id] = [match.player1Id, match.player2Id]

    // If our bracket isn't a perfect power of 2
    let roundsChecked = powerOf2(ids.participantCount) ? [1, 2, -1] : [1, 2, 3, -1]

    if (roundsChecked.includes(match.round)) {
      let players = []
      players.push(ids[p1Id])
      players.push(ids[p2Id])
      output[match.round].push(players.sort().join(' vs '))
      output.all.push(players.sort().join(' vs '))

      if (highSeeds.includes(match.player1Id) || highSeeds.includes(match.player2Id)) {
        console.log(ids[p1Id] + ' vs ' + ids[p2Id])
      }
    }
  })

  return output
}

// TODO next: compare the match tables for repeat fights
function findConflicts (newMatchTable, oldMatchTable) {

}

function powerOf2 (n) {
  if (typeof n !== 'number') {
    return false
  }

  return n && (n & (n - 1)) === 0
}

module.exports = Checker
