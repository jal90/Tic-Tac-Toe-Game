const store = require('./store')

const signUpSuccess = function (data) {
  $('#sign-up').text('Signed up successfully')
  $('#sign-up').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#sign-up').text('Error on signing up')
  $('#sign-up').css('background-color', 'red')
  console.error(error)
}

const signInSuccess = function (data) {
  console.log(data)
  $('#sign-in').text('Signed up successfully')
  $('#sign-in').css('background-color', 'green')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#sign-in').text('Error on signing IN')
  $('#sign-in').css('background-color', 'red')
  console.error(error)
}

const signOutSuccess = function (data) {
  $('#sign-in').text('signed out successfully')
  $('#sign-in').css('background-color', 'purple')
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
}

const getGameSuccess = function (data) {
  console.log('store.game is ', store.game)
  console.log('data.game is ', data.game)
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
  getGameSuccess
}
