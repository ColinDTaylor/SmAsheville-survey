// Module used to manipulate and get date ranges for seasons.

// var mongoose = require('mongoose')
// var database = require('./mongoose-main')
var queries = require('./queries')
// SmAsheville Seasons:
//
// Spring:     Feb 1st -> Apr 30th
// Summer:     May 1st -> Jul 31st
// Fall:       Aug 1st -> Oct 31st
// Winter:     Nov 1st -> Jan 31st

// FUTURE: add in legacy seasons

const SPRING = {
  start: new Date(0, 2, 1),
  end: new Date(0, 4, 30)
}
const SUMMER = {
  start: new Date(0, 5, 1),
  end: new Date(0, 7, 31)
}
const FALL = {
  start: new Date(0, 8, 1),
  end: new Date(0, 10, 31)
}
const WINTER = {
  start: new Date(0, 11, 1),
  end: new Date(0, 1, 31)
}

module.exports = class Season {

  constructor (year, first, last) {
    // If `end` isn't provided, assume first = object w/ both values
    if (last) {
      this.startDate = new Date(first)
      this.endDate = new Date(last)
    } else {
      // this is awkward naming, but in this case first = a season const object
      this.startDate = first.start
      this.endDate = first.end
    }
    this.startDate.setFullYear(year)
    this.endDate.setFullYear(year)
  }

  get tournaments () {
    return queries.getTournamentsByDates(this.startDate, this.endDate).then(docs => {
      console.log(docs)
      return docs
    })
  }

  get participants () {
    return queries.getParticipantsByDates(this.startDate, this.endDate).then(docs => {
      console.log(docs)
      return docs
    })
  }

  get matches () {
    // return queries.getMatchesByDates(this.startDate, this.endDate)
  }

  get prEligible () {
      // TODO: write eligiblility function
  }

  get otherEligible () {

  }

  get uniqueParticipants () {

  }

  static get spring () {
    return SPRING
  }

  static get summer () {
    return SUMMER
  }

  static get fall () {
    return FALL
  }

  static get winter () {
    return WINTER
  }
}
