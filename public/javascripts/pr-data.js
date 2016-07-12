var aliasHandler = require('./alias-handler.js');
// Module used to manipulate the data for use with the PR.

// Should this be a class? I don't yet know how to use classes in ES6 or if I even ever should

// TODO: make a set of seasons which contains the ranges of tournaments at each one.
// NOTE: these are projected seasons, they might end up being different if we have to skip a week
// TODO: make the seasons based on actual real world seasons, it'll be cleaner that way.
var seasons = {
    2016: {
        spring: [60, 72],
        summer: [73, 85],
        fall: [86, 98],
        winter: [99, 111]
    }
};

var PrData = {};

// TODO: create a class "Player" which generates all of these stats in its constructor

PrData.uniqueParticipants = function(input) {

};

PrData.mostRecentTournament = function(input) {

};

PrData.bestPlacement = function(input) {

};

PrData.attendance = function(input) {
    output = [];
    let playerIndex = 0;

    // use the big list to add all of the alias uses together to get one attendance # 
    for (let player in aliasHandler.bigList) {
        output[playerIndex] = [player, 0];
        for (let alias in aliasHandler.bigList[player]) {

            // console.log(aliasHandler.bigList[player][alias]);
            output[playerIndex][1] += aliasHandler.bigList[player][alias];
        }
        playerIndex++;
    }

    // sort the player arrays by attendance, highest to lowest.
    output.sort((a, b) => {
        if (a[1] < b[1]) {
            return 1;
        }
        if (a[1] > b[1]) {
            return -1;
        }
        // a must equal b
        return 0;
    });

    console.log(output);
};

PrData.generateEligible = function(input) {

};

PrData.avgPlacement = function(input) {

};

PrData.generateRecord = function(input) {

};

PrData.notableWins = function(input) {

};

PrData.notableLosses = function(input) {

};

module.exports = PrData;

// PrData. = function(input) {
//
// };
