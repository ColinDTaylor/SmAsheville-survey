/* jshint ignore: start */

// commented sections are 100% useless to me.

// NOTE:0 I need a system for naming _id's



participants

    {
    	"_id" : ObjectId("577d5efa240421a18d4d1452"),
    	"id" : 37694713,
    	"name" : "Weis",
    	"seed" : 16,
    	// "active" : true, //?
    	// "misc" : null,   //?
    	// "icon" : null,
    	// "removable" : false,
    	// "username" : null, //?
    	// "reactivatable" : false, //?
    	// "group_player_ids" : [ ], //?
    	"tournamentId" : 2357973,
    	"createdAt" : "2016-03-24T23:27:31.708+03:00",
    	"updatedAt" : "2016-03-24T23:47:36.774+03:00",
    	// "inviteEmail" : null,
    	"finalRank" : 13,
    	// "onWaitingList" : false,
    	// "invitationId" : null,
    	// "groupId" : null,
    	// "checkedInAt" : null,
    	"challongeUsername" : null,
    	// "challongeEmailAddressVerified" : null,
    	// "participatableOrInvitationAttached" : false,
    	// "confirmRemove" : true,
    	// "invitationPending" : false,
    	// "displayNameWithInvitationEmailAddress" : "Weis",
    	// "emailHash" : null,
    	"displayName" : "Weis",
    	"attachedParticipatablePortraitUrl" : null, //maybe?
    	// "canCheckIn" : false,
    	// "checkedIn" : false,
    	// "groupPlayerIds" : [ ] //?
    }

tournaments
    {
    	"_id" : ObjectId("577d5efa240421a18d4d1442"),
    	"id" : 2638418,
    	"name" : "SmAsheville72",
    	"url" : "smasheville72",
    	"description" : "<p>Asheville melee</p>",
    	// "state" : "complete", //ehhhh, kinda?
    	// "private" : false,
    	// "category" : null,
    	// "teams" : false,
    	// "tie_breaks" : [
    		// "match wins vs tied",
    		// "game wins",
    		// "points scored"
    	// ],
    	// "ranked" : false,
    	// "subdomain" : null,
    	// "tournamentType" : "double elimination", //ehhhh
    	"startedAt" : "2016-06-16T16:57:37.144-04:00",
    	"completedAt" : "2016-06-16T20:20:44.037-04:00",
    	// "requireScoreAgreement" : false,
    	// "notifyUsersWhenMatchesOpen" : true,
    	"createdAt" : "2016-06-16T16:21:52.234-04:00",
    	"updatedAt" : "2016-06-16T20:20:44.223-04:00",
    	// "openSignup" : false,
    	// "notifyUsersWhenTheTournamentEnds" : true,
    	// "progressMeter" : 100,
    	// "quickAdvance" : false,
    	// "holdThirdPlaceMatch" : false,
    	// "ptsForGameWin" : "0.0",
    	// "ptsForGameTie" : "0.0",
    	// "ptsForMatchWin" : "1.0",
    	// "ptsForMatchTie" : "0.5",
    	// "ptsForBye" : "1.0",
    	// "swissRounds" : 0,
    	// "rankedBy" : "match wins",
    	// "showRounds" : true,
    	// "hideForum" : false,
    	// "sequentialPairings" : false,
    	// "acceptAttachments" : false,
    	// "rrPtsForGameWin" : "0.0",
    	// "rrPtsForGameTie" : "0.0",
    	// "rrPtsForMatchWin" : "1.0",
    	// "rrPtsForMatchTie" : "0.5",
    	// "createdByApi" : false,
    	// "creditCapped" : false,
    	// "hideSeeds" : false,
    	// "predictionMethod" : 0,
    	// "predictionsOpenedAt" : null,
    	// "anonymousVoting" : false,
    	// "maxPredictionsPerUser" : 1,
    	// "signupCap" : null,
    	// "gameId" : 394, //ehhhh
    	"participantsCount" : 20,
    	// "groupStagesEnabled" : false,
    	// "allowParticipantMatchReporting" : true,
    	// "checkInDuration" : null,
    	// "startAt" : null,
    	// "startedCheckingInAt" : null,
    	// "tieBreaks" : [
    	// 	"match wins vs tied",
    	// 	"game wins",
    	// 	"points scored"
    	// ],
    	// "lockedAt" : null,
    	// "eventId" : null,
    	// "publicPredictionsBeforeStartTime" : false,
    	// "grandFinalsModifier" : null,
    	// "descriptionSource" : "<p>Asheville melee</p>",
    	"fullChallongeUrl" : "http://challonge.com/smasheville72",
    	"liveImageUrl" : "http://challonge.com/smasheville72.svg", //maaaaybe
    	// "signUpUrl" : null,
    	// "reviewBeforeFinalizing" : true,
    	// "acceptingPredictions" : false,
    	// "participantsLocked" : true,
    	"gameName" : "Super Smash Bros. Melee", /ehhhhhhhh
    	// "participantsSwappable" : false,
    	// "teamConvertable" : false,
    	// "groupStagesWereStarted" : false
    }

matches
    {
    //nuthin
    }

clean participants
    {
        "_id" : ObjectId("577d5efa240421a18d4d1452"),
        "id" : 37694713,
        "name" : "Weis",
        "seed" : 16,
        "tournamentId" : 2357973,
        "createdAt" : "2016-03-24T23:27:31.708+03:00",
        "updatedAt" : "2016-03-24T23:47:36.774+03:00",
        "finalRank" : 13,
        "challongeUsername" : null,
        "displayName" : "Weis"
    }

clean tournaments
    {
        "_id" : ObjectId("577d5efa240421a18d4d1442"),
        "id" : 2638418,
        "name" : "SmAsheville72",
        "url" : "smasheville72",
        "description" : "<p>Asheville melee</p>",
        "startedAt" : "2016-06-16T16:57:37.144-04:00",
        "completedAt" : "2016-06-16T20:20:44.037-04:00",
        "createdAt" : "2016-06-16T16:21:52.234-04:00",
        "updatedAt" : "2016-06-16T20:20:44.223-04:00",
        "participantsCount" : 20,
        "fullChallongeUrl" : "http://challonge.com/smasheville72",
        "liveImageUrl" : "http://challonge.com/smasheville72.svg",
        "gameName" : "Super Smash Bros. Melee"
    }

clean matches
    {

    }
/* jshint ignore: end */
