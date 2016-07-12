// this file is here to handle the mapping of certain useful objects from the db
// TODO: start using mongoose to make accessing the database cleaner in the future.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schemas = {};

mongoose.connect('mongodb://localhost/SmAsheville');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we did it');
});

var top8getters = new Schema({
    name: String,
}, { collection: 'spring_2016.participants'});

// TODO: Real error handling
function handleError(err) {
    console.log('OH GOSH NO');
    throw(err);
}
