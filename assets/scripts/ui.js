const store = require('./store')

const signUpSuccess = function (data) {
  $('#sign-up').text('Signed up successfully, now please sign in')
  $('#sign-up').css('background-color', 'green')
  $('.sign-up-error').hide()
  $('.sign-in-error').hide()
}

const signUpFailure = function (error) {
  $('#onward').hide()
  $('.sign-up-error').show()
  console.error(error)
}

const signInSuccess = function (data) {
  console.log(data)
  $('#sign-in').text('Signed in successfully')
  $('#sign-in').css('background-color', 'green')
  $('.sign-in-error').hide()
  $('.sign-up-error').hide()
  $('#sign-up').hide()
  $('#onward').show()
  store.user = data.user
  // $('#game-state').show()
  // $('#ui-container').hide()
  // $('h1').hide()
}

const signInFailure = function (error) {
  $('#onward').hide()
  $('.sign-in-error').show()
  console.error(error)
}

const signOutSuccess = function (data) {
  $('#options-state').hide()
  $('#sign-out-state').show()
  console.log('signed out successfully')
}

const changePasswordSuccess = function (data) {
  $('#change-pw').text('Changed password successfully')
  $('#change-pw').css('background-color', 'green')
  console.log('changed password successfully')
}

const changePasswordFailure = function (error) {
  $('#change-pw').text('Error on changing password')
  $('#change-pw').css('background-color', 'red')
  console.error(error)
}

const createGameSuccess = function (data) {
  store.game = data.game
  console.log('store.game is ', store.game)
  console.log('data.game is ', data.game)
  $('#left-feedback').text('Game id#: ' + data.game.id)
}

const showGameSuccess = function (data) {
  console.log('store.game is ', store.game)
  console.log('data.game is ', data.game)
}

const getGamesSuccess = function (data) {
  console.log('games ARE ', data.games)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  showGameSuccess,
  getGamesSuccess
}
