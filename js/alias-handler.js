// Commented out lines = tags that need consolidating.
// individual players are separated by blank lines

// This season's alias list created manually because it had to be.
var Aliases = {}

// TODO:200 store this list in the mongoDB and then grab it
// TODO:90 make an alias list generator that uses and displays seasonal data
// TODO:230 toLowerCase() all these keys and store correct caps under usualTag

// The big list of historical tag aliases for each SmAsheville player
Aliases.bigList = {
  'Dubs': {
    'Dubs': 0
    // note - this player never actually existed
  },

  'Satchel': {
    'Satchel': 2
  },

  'Ethen': {
    'Ethen': 1
  },

  'KSAV': {
    'KSAV': 1
  },

  'Botch': {
    'Botch': 1
  },

  'Paul': {
    'Paul': 1
  },

  'CRBN': {
    'CRBN': 1
  },

  'Squee': {
    'Squee': 1
  },

  'Aner': {
    'Aner': 1
  },

  'Crane': {
    'Crane': 1
  },

  '60%CAT': {
    '60%CAT': 2,
    '60%cat': 1
  },

  'CrumJ': {
    'CrumJ': 1
  },

  'Vasculinity': {
    'Meat': 16
  },

  'Ryko': {
    'Ryko': 18
  },

  'tenbutts': {
    'tenbutts': 18,
    'tenbuttsonethumb': 1
  },

  'Weis': {
    'Weis': 16
  },

  'Cold': {
    'Cold': 15,
    'NerveDamage | Cold': 1
  },

  'Absolome': {
    's.L | Absolome': 16,
    'Absolome': 2
  },

  'Welcome': {
    'Welcome': 10
  },

  'Nips': {
    'Nips': 8
  },

  '):': {
    's.L | :(': 1,
    's.L | ):': 12,
    's.L | Crohny': 4,
    '):': 1
  },

  'Avacado': {
    'Avacado': 6,
    'Avagadro': 7,
    'Boo (Avagadro)': 3,
    'Squirrel (Avagadro)': 1
  },

  'Savage Henry': {
    'Savage Henry': 7,
    'No Tech Ninja': 2,
    'Wesley': 1
  },

  'Ted Greene': {
    'Ted Greene': 6
  },

  'Z': {
    'Z': 8
  },

  'Simmons': {
    'Simmons': 7
  },

  'Cloudsquall': {
    'Cloudsquall': 8
  },

  'Ethereal': {
    'Ethereal': 5
  },

  'Gravity': {
    'Gravity': 10
  },

  'Cloud': {
    'Cloud': 11,
    'W33b (Cloud)': 1
  },

  'BTOD': {
    'BTOD': 7,
    'BTODD': 1
  },

  'v4extreme': {
    'v4extreme': 4
  },

  'Pants': {
    'pants': 9
  },

  'QueTPie': {
    'Que T Pie': 4,
    'QueTPie': 2
  },

  'ETMIV': {
    'ETMIV': 4
  },

  'Clint': {
    'Banjo': 3,
    'Low Key Furry (clint)': 1,
    'Sithlord Steve Buscemi': 1,
    'Low-Key Donald Trump Fan (Clint)': 1,
    'The Gay Agenda': 1,
    'Clint': 1,
    'Dickmaster': 1,
    'Dick Master': 1,
    'DJ Windows 98': 1,
    'Jorts Jones most wanted (clint)': 1,
    'Jorts Jones (Clint)': 1,
    'SELFINFLICTEDBONER (clint)': 1,
    'Anime Jesus (Clint)': 1
  },

  'Buster Bluth': {
    'Buster Bluth': 1
  },

  'DJAK': {
    'DJAK': 1
  },

  'Bly': {
    'Bly': 1
  },

  'TBA': {
    'TBA': 1
  },

  '401k': {
    '401k': 2
  },

  'Nimbus': {
    's.L | Nimbus': 5
  },

  'EZVega': {
    'HYP | EZVega': 5
  },

  "D'embeaux": {
    "D'embeuax": 3,
    'Dembo': 2,
    "D'embeaux": 1,
    '$-85 (dembo)': 1
  },

  'Kun$': {
    'Kun$': 3
  },

  'Pelipper': {
    'PPP | Wingull': 3,
    'Wingull': 1,
    'Ppeliper': 2,
    'Pppelliper': 1,
    'Ppppelipper': 1
  },

  'Shinryu': {
    'Shinryu': 2,
    'Shinyu': 1
  },

  'N7': {
    'N7': 2
  },

  'Shib': {
    'Shib': 2
  },

  'Golm': {
    'Golm': 2
  },

  'Dub': {
    'Dub': 3,
    'Snake Cream Dubs': 1,
    'Snake Cream': 1,
    '2 bucks (dubs)': 1
  },

  'Lime': {
    'Lime': 2
  },

  'Tate': {
    'Tate': 1
  },

  'WhispySunnypines': {
    'Whispysunnypines': 1,
    'Wispy Sunnypyines': 1,
    'Whispy Sunnypines': 1,
    'Wispy Sunnypines': 1,
    'Jeri': 1
  },

  'Nemé': {
    'Nené': 1
  },

  'MP': {
    'MP': 1
  },

  'Jada': {
    'Jada': 1
  },

  'Treeborn': {
    'Treeborn': 1
  },

  'Loudpackmatt': {
    'Loudpackmatt': 2,
    'Phat Merris': 1
  },

  'NEG | TS3D': {
    'NEG | TS3D': 1
  },

  'Drevis2': {
    'AxP | Drevis2': 1,
    'Drevis2': 3
  },

  'PJBleu': {
    'PJBleu': 1
  },

  'Foot': {
    'Foot': 2
  },

  'ccat': {
    'Ccat': 1
  },

  'Zeloft': {
    'Zeloft': 1,
    'zeloft': 1
  },

  'Flare': {
    'Flare': 1
  },

  '69HA': {
    '69ha': 1
  },

  'Spooncer': {
    'Spooncer': 1
  },

  'Joey Bluntz': {
    'Pat McCrory': 1
  },

  'Slimed': {
    'Slimed': 1
  },

  'LoZR': {
    'NEG | LoZR': 2
  },

  'Tumpummerbumbum': {
    'Tumpummerbumbum': 1
  },

  'Marcozimbabwe': {
    'Marcozimbabwe': 1
  },

  'GEEZer': {
    'GEEZer': 0
  }
}

// TODO:50 fix all this case crap so that I don't need the patch on Object
Aliases.lookupAlias = function (tagToFind, addIfNotFound = false, entryNumParam = 0) {
  // Check if the searched tag is on the outer level of the list.
  if (Aliases.bigList.hasOwnProperty(tagToFind)) {
    var playerObj = Aliases.bigList[tagToFind]

    // if this player object has no usual tag yet, set it to be the object's name.
    // to be honest this is just to make the usual tag easier to access in later code.
    if (!playerObj.usualTag) {
      playerObj.usualTag = tagToFind
    }
    // return with our found name.
    // TODO:140 make this correct capitalization to use the one from the list.
    return tagToFind
  }

  // Check each embedded player object's properties, if an alias is found return the usual tag.
  for (var player in Aliases.bigList) {
    if (player.toLowerCase() === tagToFind.toLowerCase) {
      return tagToFind
    }

    let playerObj = Aliases.bigList[player]

    if (hasOwnPropertyCI(playerObj, tagToFind)) {
      // if there is no usual tag, return the object's name (they should be identical anyways)
      let trueName = playerObj.hasOwnProperty('usualTag') ? playerObj.usualTag : player

      return trueName
    }
  }

  // If caller specifies, add the tag to the database with 0 entries OR specified # of entries
  if (addIfNotFound) {
    console.log(`'${tagToFind}' not found in the database, adding as new tag...`)
    Aliases.bigList[tagToFind] = {
      [tagToFind]: entryNumParam
    }
    return tagToFind
  }

  // Tag not found anywhere
  // console.log(`'${tagToFind}' not found in database.`)
  return 0
}

// This function finds every non-standard alias in an array of tags and converts it to standard
// if the standard is already in the array, the alias is removed. This means the array may come out
// smaller than it was going in.
// TODO: make this use .map()
Aliases.cleanAliasesInArray = function (inputArray) {
  for (let tag of inputArray) {
    console.log(tag)
    // lol it does nothing yet
  }
}

module.exports = Aliases

// Tiny helper to give me a case insensitive version of hasOwnProperty
let hasOwnPropertyCI = function (obj, prop) {
  return Object.keys(obj)
      .filter(function (v) {
        return v.toLowerCase() === prop.toLowerCase()
      }).length > 0
}
