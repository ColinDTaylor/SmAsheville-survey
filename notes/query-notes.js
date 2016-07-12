/* jshint ignore: start */

// This query returns a list of each player along with a count of how many times they've entered.

db.spring_2016.participants.aggregate({$group : {_id : "$name", count: {$sum: 1}}}, { $sort : {count: -1}})

// returns a list of participant names that have been in a top 8 this season.
db.spring_2016.participants.distinct('name', {finalRank: {$lt: 8}})
/* jshint ignore: end */
