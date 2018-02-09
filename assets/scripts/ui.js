const store = require('./store')
const events = require('./events')

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
  $('.col-xs-4').children().hide()
  events.over = false
  console.log(events.over)
}

const showGameSuccess = function (data) {
  store.game = data.game
  console.log('store.game is ', store.game)
  console.log('data.game.id is ', data.game.id)
  console.log('INSIDE showGameSuccess store.game.cells is ', store.game.cells[0])
  $('#game-state').show()
  $('#options-state').hide()
  $('#hover-x').remove()
  if (store.game.cells[0] === 'x') {
    $('#upLeft').find('.x').show() // this is a stand-in for events.showX since that wasn't working
  } else if (store.game.cells[0] === 'o') {
    $('#upLeft').find('.o').show() // this is a stand-in for events.showO since that wasn't working
  }
  if (store.game.cells[1] === 'x') {
    $('#upCent').find('.x').show() // this is a stand-in for events.showX since that wasn't working
  } else if (store.game.cells[1] === 'o') {
    $('#upCent').find('.o').show() // this is a stand-in for events.showO since that wasn't working
  }
  if (store.game.cells[2] === 'x') {
    $('#upRight').find('.x').show() // this is a stand-in for events.showX since that wasn't working
  } else if (store.game.cells[2] === 'o') {
    $('#upRight').find('.o').show() // this is a stand-in for events.showO since that wasn't working
  }
  if (store.game.cells[3] === 'x') {
    $('#midLeft').find('.x').show() // this is a stand-in for events.showX since that wasn't working
  } else if (store.game.cells[3] === 'o') {
    $('#midLeft').find('.o').show() // this is a stand-in for events.showO since that wasn't working
  }
  if (store.game.cells[4] === 'x') {
    $('#midCent').find('.x').show() // this is a stand-in for events.showX since that wasn't working
  } else if (store.game.cells[4] === 'o') {
    $('#midCent').find('.o').show() // this is a stand-in for events.showO since that wasn't working
  }
  if (store.game.cells[5] === 'x') {
    $('#midRight').find('.x').show() // this is a stand-in for events.showX since that wasn't working
  } else if (store.game.cells[5] === 'o') {
    $('#midRight').find('.o').show() // this is a stand-in for events.showO since that wasn't working
  }
  if (store.game.cells[6] === 'x') {
    $('#botLeft').find('.x').show() // this is a stand-in for events.showX since that wasn't working
  } else if (store.game.cells[6] === 'o') {
    $('#botLeft').find('.o').show() // this is a stand-in for events.showO since that wasn't working
  }
  if (store.game.cells[7] === 'x') {
    $('#botCent').find('.x').show() // this is a stand-in for events.showX since that wasn't working
  } else if (store.game.cells[7] === 'o') {
    $('#botCent').find('.o').show() // this is a stand-in for events.showO since that wasn't working
  }
  if (store.game.cells[8] === 'x') {
    $('#botRight').find('.x').show() // this is a stand-in for events.showX since that wasn't working
  } else if (store.game.cells[8] === 'o') {
    $('#botRight').find('.o').show() // this is a stand-in for events.showO since that wasn't working
  }
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
