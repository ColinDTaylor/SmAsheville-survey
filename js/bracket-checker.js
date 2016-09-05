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

    this.old.projectedR2 = projectRound2(this.old)
    this.new.projectedR2 = projectRound2(this.new)

    this.old.matchTable = createMatchTable(this.old)
    this.new.matchTable = createMatchTable(this.new)

    return findConflicts(this.new, this.old)

    // return this
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

// tournament = an object with two sub-objects, one for participants and one for matches
function associateIds (participants) {
  let output = {}
  output.highSeeds = []
  output.participantCount = participants.length

  participants.map(doc => {
    let part = doc.participant
    let fixedTag = aliasHandler.lookupAlias(part.name)

    if (fixedTag) {
      output[part.id] = fixedTag
    } else {
      output[part.id] = part.name
      output.unknowns ? output.unknowns.push(part.name) : output.unknowns = [part.name]
    }

    if ([1, 2].includes(part.seed)) {
      output.highSeeds.push(part.id)
    }
  })

  return output
}

function createMatchTable (tournament) {
  let output = {'all': [], 'strings': []}
  let ids = tournament.idTable
  tournament.matches.map((item) => {
    let match = item.match
    let [p1Id, p2Id] = [match.player1Id, match.player2Id]
    // all of the positive rounds are -1 here to clear up confusion about r3 being kinda really r2
    let round = match.round >= 0 ? match.round - 1 : match.round
    let projectedMatches = []
    let roundsChecked

    // If our bracket isn't a perfect power of 2, look at round 3 and -2 also
    // If it's halfway between two powers of 2, ignore -2 (loser's only has one r1 then)

    console.log(item)

    // If I sorted the players by seed, I could use that list to create a projection
    // this would help me determine who might have to fight who early on
    // because I never check losers r3, if I always assume p1 advances, I should be fine
    // since losers r3 is where seeds start occasionally being swapped even in a perfect projection

    if (match.state === 'pending') {

    }

    switch (bracketType(ids.participantCount)) {
      case 'round': roundsChecked = [0, 1, -1]; break
      case 'half round': roundsChecked = [0, 1, 2, -1]; break
      case 'not round': roundsChecked = [0, 1, 2, -1, -2]; break
    }

    if (roundsChecked.includes(round)) {
      let players = []

      players.push(ids[p1Id])
      players.push(ids[p2Id])

      // The match arrays all need to be in the same order so they can be compared
      let matchArray = players.sort()

      output.strings.push(matchArray.join(' vs '))

      matchArray.push(round)

      output.all.push(matchArray)

      // If output already has an array for this round, push the match array to it
      // If the array doesn't alreay exist, make it and add the match array
      output[round] ? output[round].push(matchArray) : output[round] = [matchArray]
    }
  })

  return output
}

function getTopSeedsOpponents (tournament) {
  let output = []
  let ids = tournament.idTable
  let highSeeds = ids.highSeeds

  highSeeds.map((id, index) => {
    highSeeds[index] = ids[id]
  })

  tournament.matchTable.all.map(match => {
    let [p1, p2] = [match[0], match[1]]

    if (highSeeds.includes(p1)) {
      output.push(p2)
    } else if (highSeeds.includes(p2)) {
      output.push(p1)
    }
  })

  return output
}

// TODO next: compare the match tables for repeat fights
function findConflicts (newTournament, oldTournament) {
  let output = {conflicts: []}
  let newScrewedPlayers = getTopSeedsOpponents(newTournament)
  let oldScrewedPlayers = getTopSeedsOpponents(oldTournament)
  let [newMatches, oldMatches] = [newTournament.matchTable, oldTournament.matchTable]
  let [newIdTable, oldIdTable] = [newTournament.idTable, oldTournament.idTable]
  let allUnknowns = []

  // TODO: make this nicer
  if (newIdTable.unknowns) {
    allUnknowns = allUnknowns.concat(newIdTable.unknowns)
    if (oldIdTable.unknowns) {
      allUnknowns = allUnknowns.concat(oldIdTable.unknowns)
    }
  }

  if (allUnknowns.length) {
    output.unknowns = allUnknowns.join(', ')
  }

  for (let matchIndex in newMatches.strings) {
    let match = newMatches.strings[matchIndex]
    let matchArray = newMatches.all[matchIndex]

    if (oldMatches.strings.includes(match)) {
      let round = matchArray[2]
      let roundString = round >= 0 ? `winners r${round}` : `losers r${round}`

      output.conflicts.push(`${match} happened last week in ${roundString}`)
      // console.log(output.conflicts)
    }
  }

  for (let player of newScrewedPlayers) {
    if (oldScrewedPlayers.includes(player)) {
      output.conflicts.push(`${player} fought a top seed early last week, give them a break if you can`)
    }
  }
  return output
}

function projectRound2 (tournament) {
  for (let match of tournament.matches) {
    // console.log(match)
  }
}

function bracketType (participantCount) {
  if (powerOf2(participantCount)) {
    return 'round'
  } else if (powerOf2(participantCount + participantCount / 2)) {
    return 'half round'
  }
  return 'not round'
}

function powerOf2 (n) {
  if (typeof n !== 'number') {
    return false
  }

  return n && (n & (n - 1)) === 0
}

module.exports = Checker
