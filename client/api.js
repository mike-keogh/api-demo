var request = require('superagent')

export function people(people, cb) {
  request
    .get('https://swapi.co/api/people/')
    .end((err, res) => {
      cb(res.body)
    })
}

export function planets(planet, cb) {
  request
    .get('https://swapi.co/api/planets/')
    .end((err, res) => {
      cb(res.body)
    })
}
