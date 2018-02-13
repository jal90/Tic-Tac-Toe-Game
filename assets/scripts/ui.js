const store = require('./store')
const events = require('./events')

const signUpSuccess = function (data) {
  $('.sign-up-message').show()
  $('.sign-up-error').hide()
  $('.sign-in-error').hide()
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#onward').hide()
  $('.sign-up-error').show()
}

const signInSuccess = function (data) {
  $('.sign-in-message').show()
  $('.sign-up-message').hide()
  $('.sign-in-error').hide()
  $('.sign-up-error').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#onward').show()
  store.user = data.user
  // $('#game-state').show()
  // $('#ui-container').hide()
  // $('h1').hide()
}

const signInFailure = function () {
  $('#onward').hide()
  $('.sign-in-error').show()
}

const signOutSuccess = function (data) {
  $('#options-state').hide()
  $('#sign-out-state').show()
  console.log('signed out successfully')
}

const changePasswordSuccess = function (data) {
  $('.success-message').show()
  $('#change-pw').hide()
  console.log('changed password successfully')
}

const changePasswordFailure = function () {
  $('.error-message').show()
}

const createGameSuccess = function (data) {
  store.game = data.game
  console.log('store.game is ', store.game)
  console.log('data.game is ', data.game)
  $('#feedback').html('Game id#: ' + store.game.id)
  $('.game-over-message').html('')
  $('.col-xs-4').children().hide()
  events.over = false
}

const showGameSuccess = function (data) {
  store.game = data.game
  console.log('store.game is ', store.game)
  console.log('data.game.id is ', data.game.id)
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

const showGameFailure = function () {
  $('#show-game-failure').show()
}
const getGamesSuccess = function (data) {
  let oWins = 0
  console.log('games ARE ', data.games)
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      let totalX = 0
      let totalO = 0
      for (let j = 0; j < data.games[i].cells.length; j++) {
        if (data.games[i].cells[j] === 'x') {
          totalX += 1
        } else if (data.games[i].cells[j] === 'o') {
          totalO += 1
        }
      }
      if (totalX - totalO === 0) {
        oWins += 1
      }
      console.log('at game #' + i + ' oWins is ' + oWins) // BUG
    }
  }
  $('#games-length').html('You\'ve played ' + data.games.length + ' games, and been defeated ' + oWins + ' times. Keep at it')
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
  showGameFailure,
  getGamesSuccess
}
