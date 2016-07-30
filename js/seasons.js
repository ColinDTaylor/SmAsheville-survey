// Module used to manipulate and get date ranges for seasons.

var mongoose = require('mongoose')
var database = require('./mongoose-main')
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

  constructor (year, start, end) {
    // If `end` isn't provided, assume start = object w/ both values

    console.log('hello')
    if (end) {
      this.startDate = new Date(start)
      this.endDate = new Date(end)
    } else {
      this.startDate = start.start
      this.endDate = start.end
    }
    this.startDate.setFullYear(year)
    this.endDate.setFullYear(year)
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

  get tournaments () {

  }

  get participants () {

  }

  get matches () {

  }

  get prEligible () {
      // TODO: write eligiblility function
  }

  get otherEligible () {

  }

  get uniqueParticipants () {

  }
}
