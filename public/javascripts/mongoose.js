// this file is here to handle the mapping of certain useful objects from the db
// TODO: start using mongoose to make accessing the database cleaner in the future.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Operations = {};

// TODO: update this to work with a more universal database name
mongoose.connect('mongodb://localhost:27017/SmAsheville');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we did it');
});

/* ----------- Schemas ---------- */

let surveyResponseSchema = new Schema({
    tag: String,
    answers: [String],
    pr_list: [String],
    unranked_players: [String],
    ip_addr: String
}, { collection: 'spring_2016.surveyResponses'});

// var top8GettersSchema = new Schema({
//     name: String,
// }, { collection: 'spring_2016.participants'});

/* ---------- Models ---------- */

let SurveyResponse = mongoose.model('surveyResponse', surveyResponseSchema);

/* ---------- Operations ---------- */

Operations.logSurveyResponse = function(surveyData) {

    SurveyResponse.create(surveyData, (err, data) => {
        if (err) return handleError(err);
        // data should now be saved!
        console.log('yey');
    });

};


/* ---------- Other ---------- */
// TODO: Real error handling
function handleError(err) {
    console.log('OH GOSH NO');
    throw(err);
}

module.exports = Operations;
