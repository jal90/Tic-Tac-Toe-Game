'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.boardHandlers()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-pw').on('submit', events.onChangePw)
  $('#create-game').on('submit', events.onCreateGame)
  $('#show-game').on('submit', events.onShowGame)
  $('#get-games').on('submit', events.onGetGames)
})
