const config = require('./../config')
const store = require('../store')

// This is the API call to create a new game.
const indexGame = function (data) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST'
  })
}

// This is the API call to start a new game/refresh a game.
const startGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST'
  })
}

// This is the API call to update the game.
const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

// This is the API call to count the amount of games played.
const countGames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}

module.exports = {
  indexGame: indexGame,
  startGame: startGame,
  updateGame: updateGame,
  countGames: countGames
}
