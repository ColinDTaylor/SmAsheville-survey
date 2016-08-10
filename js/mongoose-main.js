// this file is here to handle the mapping of certain useful objects from the db
// TODO:190 start using mongoose to make accessing the database cleaner in the future.
var mongoose = require('mongoose')
var Schema = mongoose.Schema

let Models = {}
let Operations = {}
let Exports = {}

mongoose.Promise = global.Promise

// TODO:260 update this to work with a more universal database name
mongoose.connect('mongodb://localhost:27017/SmAsheville')

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('we did it')
})

// Operations.db = db
/* ----------- Schemas ---------- */

// TODO: make this not specific to spring 2016
let surveyResponseSchema = new Schema({
  tag: String,
  answers: [String],
  pr_list: [String],
  unranked_players: [String],
  ip_addr: String
}, {collection: 'spring_2016.Models.SurveyResponses'})

let participantSchema = new Schema({
  id: Number,
  name: String,
  seed: Number,
  tournamentId: Number,
  createdAt: Date,
  updatedAt: Date,
  finalRank: Number
})

let tournamentSchema = new Schema({
  id: Number,
  name: String,
  url: String,
  description: String,
  startedAt: Date,
  completedAt: Date,
  createdAt: Date,
  updatedAt: Date,
  gameId: Number,
  participantsCount: Number,
  state: String,
  fullChallongeUrl: String,
  liveImageUrl: String,
  gameName: String,
  progressMeter: Number // TODO: use this to verify that all tournaments have been completed
})

let matchSchema = new Schema({
  // TODO: make the match schema lol
  name: String
})

let seasonSchema = new Schema({
  name: String,
  year: Number,
  startDate: Date,
  endDate: Date,
  eligible: {
    ranking: [String],
    questions: [String],
    new: [String]
  }
})
// let top8GettersSchema = new Schema({
//   name: String,
//   tournamentId: Number
// })

/* ---------- Models ---------- */
// TODO: move several of these models over to their respective functions
// TODO: how can I make the collection used by these modular?
Models.SurveyResponses = mongoose.model('Models.SurveyResponse', surveyResponseSchema)
Models.Participants = mongoose.model('summer_2016.participant', participantSchema)
Models.Tournaments = mongoose.model('summer_2016.tournament', tournamentSchema)
Models.Matches = mongoose.model('cleanTest.match', matchSchema)
// let Top8Getter = mongoose.model('cleanTest.top8getter', top8GettersSchema)

/* ---------- Operations ---------- */

// NOTE:30 yo I can't believe this worked on the first try
Operations.logSurveyResponse = function (surveyData) {
  Models.SurveyResponses.create(surveyData, (err, data) => {
    if (err) return handleError(err)
    // data should now be saved!
    console.log('yey')
  })
}

// NOTE: these are almost identical, but it almost seems like it's better to leave them separate
// TODO: make some kinda function that combines this w/ stuff from api-get
// TODO: make these work with map

Operations.insertParticipants = function (inputData, collectionName) {
  let promiseArray = []
  let model = mongoose.model(collectionName, participantSchema)

  for (let tournament of inputData) {
    for (let participant of tournament) {
      promiseArray.push(insertionPromise(participant.participant, model))
    }
  }

  return Promise.all(promiseArray)
}

Operations.insertTournaments = function (inputData, collectionName) {
  let promiseArray = []
  let model = mongoose.model(collectionName, tournamentSchema)

  for (let tournament of inputData) {
    promiseArray.push(insertionPromise(tournament.tournament, model))
  }

  return Promise.all(promiseArray)
}

Operations.insertMatches = function (inputData, collectionName) {
  let promiseArray = []

  for (let tournament of inputData) {
    for (let match of tournament) {
      // TODO: writh the match insert lol
      match = match
    }
  }

  return Promise.all(promiseArray)
}

function insertionPromise (inputData, inputModel) {
  return inputModel.create(inputData, (err, data) => {
    if (err) return handleError(err)
  // What happens when there's a ton of superfluos data in the input?
  })
}

/* ---------- Other ---------- */
// TODO:0 Real error handling
function handleError (err) {
  console.log('OH GOSH NO')
  throw (err)
}

Exports.Operations = Operations
Exports.Models = Models

module.exports = Exports
