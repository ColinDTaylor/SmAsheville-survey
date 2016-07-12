var aliasHandler = require('./alias-handler.js');
var queries = require('./queries.js');
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

// TODO: make this take a season as an input, requires seasonal alias lists
// output = sorted array of arrays in the form ['tag', attendancNum]
PrData.attendance = function() {
    let outputArray = [];
    let playerIndex = 0;

    console.log(aliasHandler.bigList);

    // use the big list to add all of the alias uses together to get one attendance number
    for (let player in aliasHandler.bigList) {
        outputArray[playerIndex] = [player, 0];
        for (let alias in aliasHandler.bigList[player]) {

            // console.log(aliasHandler.bigList[player][alias]);
            outputArray[playerIndex][1] += aliasHandler.bigList[player][alias];
        }
        playerIndex++;
    }

    console.log(outputArray);

    // sort the player arrays by attendance, highest to lowest.
    outputArray.sort((a, b) => {
        if (a[1] < b[1]) {
            return 1;
        }
        if (a[1] > b[1]) {
            return -1;
        }
        // a must equal b
        return 0;
    });

    // console.log(output);
    return outputArray;
};

PrData.generateEligibility = function(season) {
    // TODO: update to work cross-seasonally
    let attendance = PrData.attendance();
    let eligibleAttendance = [];
    let missingTop8 = [];
    let eligible = [];

    // generate attendance list for playeds with 3 or more tournament entries
    for (let participant of attendance) {
        if (participant[1] >= 3) {
            eligibleAttendance.push(participant[0]);
        }
    }

    let gotTop8 = queries.getSeasonalTop8s(season).then(top8s => {

        for (let participant of eligibleAttendance) {

            if (top8s.includes(participant)) {
                eligible.push(participant);
            } else {
                missingTop8.push(participant);
            }
        }
        // console.log(top8s);
        // console.log(eligibleAttendance);
        console.log(eligible);
        return eligible;
    });
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
