// this file is here to handle the mapping of certain useful objects from the db
// TODO:190 start using mongoose to make accessing the database cleaner in the future.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Operations = {};

// TODO:260 update this to work with a more universal database name
mongoose.connect('mongodb://localhost:27017/SmAsheville');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we did it');
});

/* ----------- Schemas ---------- */


// TODO: make this not specific to spring 2016
let surveyResponseSchema = new Schema({
    tag: String,
    answers: [String],
    pr_list: [String],
    unranked_players: [String],
    ip_addr: String
}, { collection: 'spring_2016.surveyResponses'});

let participantSchema = new Schema({
    id: Number,
    name: String,
    seed: Number,
    tournamentId: Number,
    createdAt: Date,
    updatedAt: Date,
    finalRank: Number,
});

// var top8GettersSchema = new Schema({
//     name: String,
// }, { collection: 'spring_2016.participants'});

/* ---------- Models ---------- */
//TODO: move several of these models over to their respective functions

let SurveyResponse = mongoose.model('surveyResponse', surveyResponseSchema);
let Participant = mongoose.model('cleanTest.participant', participantSchema);

/* ---------- Operations ---------- */

// NOTE:30 yo I can't believe this worked on the first try
Operations.logSurveyResponse = function(surveyData) {

    SurveyResponse.create(surveyData, (err, data) => {
        if (err) return handleError(err);
        // data should now be saved!
        console.log('yey');
    });

};

Operations.insertParticipants = function(inputData) {
    let promiseArray = [];

    for (let tournament of inputData) {
        for (let participant of tournament) {
            promiseArray.push(insertionPromise(participant.participant));
        }
    }

    return promiseArray;
};

function insertionPromise(inputData) {

    console.log(inputData);

    return Participant.create(inputData, (err, data) => {
        console.log(data);
        if (err) return handleError(err);
        // What happens when there's a ton of superfluos data in the input?
    });
}

/* ---------- Other ---------- */
// TODO:0 Real error handling
function handleError(err) {
    console.log('OH GOSH NO');
    throw(err);
}

module.exports = Operations;
