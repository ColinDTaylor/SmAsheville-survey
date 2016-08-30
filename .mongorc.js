/* Future to do:            */
/*            */
/*            */
/*            */
/*            */
function surveySubmitters(coll) {
  return coll.find({}, {_id: 0, tag: 1}).toArray()
}

function testFunction(coll) {
  return coll.find({}, {_id: 0, name: 1})
}

function getAttendance(coll) {
  return coll.aggregate([
    { $group: { _id: '$name', attendance: {$sum: 1} } },
    { $sort: {attendance: -1} }
  ])
}

function handleLists(coll) {
  var listObject = coll.find({}, {_id: 0, tag: 1, pr_list: 1, unranked_players: 1})
  return listObject
}
