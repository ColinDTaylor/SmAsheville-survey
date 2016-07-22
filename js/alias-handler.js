// Commented out lines = tags that need consolidating.
// individual players are separated by blank lines

// This season's alias list created manually because it had to be.
var Aliases = {};

// TODO:220 store this list in the mongoDB and then grab it
// TODO:110 make an alias list generator that uses and displays seasonal data
// TODO:250 toLowerCase() all these keys and store correct caps under usualTag

// The big list of historical tag aliases for each SmAsheville player
Aliases.bigList = {
    "Vasculinity" : {
        "Meat" : 12
    },

    "Ryko" : {
        "Ryko" : 12
    },

    "tenbutts" : {
        "tenbutts" : 12,
        "tenbuttsonethumb" : 1
    },

    "Weis" : {
        "Weis" : 11
    },

    "Cold" : {
        "Cold" : 10
    },

    "Absolome" : {
        "s.L | Absolome" : 10,
        "Absolome" : 2
    },

    "Welcome" : {
        "Welcome" : 8
    },

    "Nips" : {
        "Nips" : 7
    },

    "):" : {
        "s.L | ):" : 7,
        "s.L | Crohny" : 4,
        "):" : 1
    },

    "Avacado" : {
        "Avagadro" : 7,
        "Boo (Avagadro)" : 3,
        "Squirrel" : 1
    },

    "Savage Henry" : {
        "Savage Henry" : 6,
        "No Tech Ninja" : 2,
        "Wesley" : 1
    },

    "Ted Greene" : {
        "Ted Greene" : 6
    },

    "Z" : {
        "Z": 5
    },

    "Simmons" : {
        "Simmons" : 5
    },

    "Cloudsquall" : {
        "Cloudsquall" : 5
    },

    "Ethereal" : {
        "Ethereal" : 5
    },

    "Gravity" : {
        "Gravity" : 5
    },

    "Cloud" : {
        "Cloud" : 5,
        "w33b" : 1
    },

    "BTOD" : {
        "BTOD" : 4,
        "BTODD" : 1
    },

    "v4extreme" : {
        "v4extreme" : 4
    },

    "Pants" : {
        "pants" : 4
    },

    "QueTPie" : {
        "Que T Pie" : 4,
        "QueTPie" : 2,
    },

    "ETMIV" : {
        "ETMIV" : 3
    },

    "Clint" : {
        "Banjo" : 3,
        "Low Key Furry (clint)" : 1,
        "Sithlord Steve Buscemi" : 1,
        "Low-Key Donald Trump Fan (Clint)" : 1,
        "The Gay Agenda" : 1,
        "Clint" : 1,
        "Dickmaster" : 1,
        "Dick Master" : 1,
        "DJ Windows 98" : 1
    },

    "Buster Bluth" : {
        "Buster Bluth" : 1,
    },

    "DJAK" : {
        "DJAK" : 1
    },

    "Bly" : {
        "Bly" : 1
    },

    "TBA" : {
        "TBA" : 1
    },

    "401k" : {
        "401k" : 1
    },

    "Nimbus" : {
        "s.L | Nimbus" : 3
    },

    "EZVega" : {
        "HYP | EZVega" : 3
    },

    "D'embeaux" : {
        "D'embeuax" : 3,
        "Dembo" : 2,
        "D'embeaux" : 1,
        "$-85 (dembo)" : 1
    },

    "Kun$" : {
        "Kun$" : 3
    },

    "Pelipper" : {
        "PPP | Wingull" : 3,
        "Ppeliper" : 2,
        "Pppelliper" : 1,
        "Ppppelipper" : 1
    },

    "Shinryu" : {
        "Shinryu" : 2,
        "Shinyu" : 1
    },

    "N7" : {
        "N7" : 2
    },

    "Shib" : {
        "Shib" : 2
    },

    "Golm" : {
        "Golm" : 2
    },

    "Dub" : {
        "Dub" : 2
    },

    "Lime" : {
        "Lime" : 2
    },

    "Tate" : {
        "Tate" : 1
    },

    "WhispySunnypines" : {
        "Whispysunnypines" : 1,
        "Wispy Sunnypyines" : 1,
        "Whispy Sunnypines" : 1,
        "Wispy Sunnypines" : 1,
        "Jeri" : 1
    },

    "Nemé" : {
        "Nené" : 1
    },

    "MP" : {
        "MP" : 1
    },

    "Jada" : {
        "Jada" : 1
    },

    "Treeborn" : {
        "Treeborn": 1
    },

    "Loudpackmatt" : {
        "Loudpackmatt" : 1,
        "Phat Merris" : 1
    },

    "NEG | TS3D" : {
        "NEG | TS3D" : 1
    },

    "Drevis2" : {
        "AxP | Drevis2" : 1
    },

    "PJBleu": {
        "PJBleu" : 1
    },

    "Foot" : {
        "Foot" : 1
    },

    "ccat" : {
        "Ccat": 1
    },

    "Zeloft" : {
        "Zeloft": 1
    },

    "Flare" : {
        "Flare" : 1
    },

    "69HA" : {
        "69ha" : 1
    },

    "Spooncer" : {
        "Spooncer" : 1
    },

    "Joey Bluntz": {
        "Pat McCrory" : 1
    },

    "Slimed" : {
        "Slimed" : 1
    },

    "LoZR" : {
        "NEG | LoZR" : 1
    },

    "Tumpummerbumbum" : {
        "Tumpummerbumbum" : 1
    },

    "Marcozimbabwe" : {
        "Marcozimbabwe" : 1
    }
};


// TODO:70 fix all this case crap so that I don't need the patch on Object
Aliases.lookupAlias = function(tagToFind, addIfNotFound = false, entryNumParam = 0) {

    // console.log(`Searching for ${tagToFind}...`);
    // Check if the searched tag is on the outer level of the list.
    if (Aliases.bigList.hasOwnProperty(tagToFind)) {

        // console.log(`${tagToFind} found in database.`);
        var playerObj = Aliases.bigList[tagToFind];

        // if this player object has no usual tag yet, set it to be the object's name.
        // to be honest this is just to make the usual tag easier to access in later code.
        if (!playerObj.usualTag) {
            playerObj.usualTag = tagToFind;
        }
        // return with our found name.
        // TODO:160 make this correct capitalization to use the one from the list.
        return tagToFind;
    }

    // Check each embedded player object's properties, if an alias is found return the usual tag.
    for (var player in Aliases.bigList) {
        if (player.toLowerCase() === tagToFind.toLowerCase) {
            // console.log(`${tagToFind} found in database under a different capitalization.`);
            return tagToFind;
        }
        // console.log(`checking ${player}`);
        let playerObj = Aliases.bigList[player];

        if (hasOwnPropertyCI(playerObj, tagToFind)) {
            // if there is no usual tag, return the object's name (they should be identical anyways)
            let trueName = playerObj.hasOwnProperty("usualTag") ? playerObj.usualTag : player;
            // console.log(`${tagToFind} found as alias for ${trueName}`);
            return trueName;
        }
    }

    // If caller specifies, add the tag to the database with 0 entries OR specified # of entries
    if (addIfNotFound) {
        console.log(`'${tagToFind}' not found in the database, adding as new tag...`);
        Aliases.bigList[tagToFind] = {
            [tagToFind] : entryNumParam
        };
        return tagToFind;
    }

    // Tag not found anywhere
    console.log(`'${tagToFind}' not found in database.`);
    throw Error('nooooo');
};

// This function finds every non-standard alias in an array of tags and converts it to standard
// if the standard is already in the array, the alias is removed. This means the array may come out
// smaller than it was going in.
Aliases.cleanAliasesInArray = function(inputArray) {
    for (let tag of inputarray) {
        console.log(tag);
    }
};

module.exports = Aliases;

// Tiny helper to give me a case insensitive version of hasOwnProperty
hasOwnPropertyCI = function(obj, prop) {
   return Object.keys(obj)
          .filter(function (v) {
             return v.toLowerCase() === prop.toLowerCase();
           }).length > 0;
};
