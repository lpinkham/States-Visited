'use strict'

let apiUrl
const apiUrls = {
  production: 'https://git.heroku.com/immense-river-73945.git',
  // production: 'http://immense-river-73945.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
