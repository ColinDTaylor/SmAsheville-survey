// for use with the new API wrapper (challong-node instead of just the outdated challonge package)

// wait this new challonge package is so smooth it could handle just about all of this by itself

// TODO: fully migrate the api functions to this file

// Using the fancy new import & const keywords #es6 #bleedingedge
import ChallongeAPI from 'challong-node'
const challonge = ChallongeAPI.withAPIKey('hvA3eLb7hzOGS5py3PM3ZaGJAlRHTACaktnlobkQ')

// challonge.tournaments.create(<NAME>, <URL>).then(function(tournament) {
//   console.log(tournament.id);
// }


challonge.start('smashevilletest')
