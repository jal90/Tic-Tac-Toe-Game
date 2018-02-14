const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')

let over = false

const gameBoard = {
  upLeft: '',
  upCent: '',
  upRight: '',
  midLeft: '',
  midCent: '',
  midRight: '',
  botLeft: '',
  botCent: '',
  botRight: ''
}
const x = 'x'
const o = 'o'

const changeTurns = function () {
  let total = 0
  for (const key in gameBoard) {
    if (gameBoard[key] === '') {
      ++total
    }
  }
  if (total % 2 === 1) {
    // console.log("it's x's turn")
    return x
  } else if (total % 2 === 0) {
    // console.log("it's o's turn")
    return o
  } else {
  }
}

const move = function (id) {
  if (over === false) {
    if (gameBoard[id] === '') {
      if (changeTurns() === 'x') {
        showX(id)
      } else if (changeTurns() === 'o') {
        showO(id)
      }
      gameBoard[id] = changeTurns()
    } else {
      $('.occupied').show().fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    }
    // console.log(gameBoard)
  }
}

const showX = function (id) {
  if (changeTurns() === x) {
    $('#' + id).find('.x').show()
    // clicked = true
    $('#' + id).find('.hover-x').html('')
    $('#' + id).find('.hover-o').html('')
  }
}

const showO = function (id) {
  if (changeTurns() === o) {
    $('#' + id).find('.o').show()
    // clicked = true
    $('#' + id).find('.hover-x').html('')
    $('#' + id).find('.hover-o').html('')
  }
}

// for seeing choice with mouse hover
const hoverOn = function () {
  if (over === false) {
    if (changeTurns() === 'x') {
      $(this).find('.hover-x').show()
    } else if (changeTurns() === 'o') {
      $(this).find('.hover-o').show()
    }
  }
}

const hoverOff = function () {
  $('.occupied').hide()
  $('#feedback').html('Game id#: ' + store.game.id)
  if (changeTurns() === 'x') {
    $(this).find('.hover-x').hide()
  } else if (changeTurns() === 'o') {
    $(this).find('.hover-o').hide()
  }
}

// let xWin = 0 // using store instead
// let oWin = 0
// let ties = 0

// checks that board is full and game is over
const gameOver = function () {
  let total = 0
  if (over === false) { // this makes sure if someone wins on the last move (which sets over to true) then they won't simultaneously get a game-over message
    for (const key in gameBoard) {
      if (gameBoard[key] !== '') {
        total++
      }
    }
    if (total === 9) {
      over = true
      gameData.game.over = true
      $('.game-over-message').html('Game over! It\'s a tie')
      store.ties += 1
    }
  }
}

const gameWon = function () {
  over = true
  gameData.game.over = true
  // console.log('game data is ', gameData)
}

// checking for 3 in a row, then running gameWon()
const win = function () {
  let total = 0
  for (const key in gameBoard) {
    if (gameBoard[key] !== '') {
      ++total
    }
  }
  if (total >= 5) { // this is because it takes at least 5 turns total to win the game. So don't even bother checking before then
    if (gameBoard.upLeft === 'x' && gameBoard.upLeft === gameBoard.upCent && gameBoard.upLeft === gameBoard.upRight) {
      $('.game-over-message').html('X WINS')
      $('#upLeft').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#upCent').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#upRight').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      gameWon()
    } else if (gameBoard.upLeft === 'o' && gameBoard.upLeft === gameBoard.upCent && gameBoard.upLeft === gameBoard.upRight) {
      $('.game-over-message').html('O WINS')
      $('#upLeft').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#upCent').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#upRight').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      gameWon()
    } else if (gameBoard.midLeft === 'x' && gameBoard.midLeft === gameBoard.midCent && gameBoard.midLeft === gameBoard.midRight) {
      $('.game-over-message').html('X WINS')
      gameWon()
      $('#midLeft').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midCent').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midRight').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.midLeft === 'o' && gameBoard.midLeft === gameBoard.midCent && gameBoard.midLeft === gameBoard.midRight) {
      $('.game-over-message').html('O WINS')
      gameWon()
      $('#midLeft').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midCent').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midRight').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.botLeft === 'x' && gameBoard.botLeft === gameBoard.botCent && gameBoard.botLeft === gameBoard.botRight) {
      $('.game-over-message').html('X WINS')
      gameWon()
      $('#botLeft').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botCent').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botRight').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.botLeft === 'o' && gameBoard.botLeft === gameBoard.botCent && gameBoard.botLeft === gameBoard.botRight) {
      $('.game-over-message').html('O WINS')
      gameWon()
      $('#botLeft').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botCent').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botRight').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.botLeft === 'x' && gameBoard.botLeft === gameBoard.midCent && gameBoard.botLeft === gameBoard.upRight) {
      $('.game-over-message').html('X WINS')
      gameWon()
      $('#botLeft').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midCent').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#upRight').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.botLeft === 'o' && gameBoard.botLeft === gameBoard.midCent && gameBoard.botLeft === gameBoard.upRight) {
      $('.game-over-message').html('O WINS')
      gameWon()
      $('#botLeft').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midCent').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#upRight').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.upLeft === 'x' && gameBoard.upLeft === gameBoard.midCent && gameBoard.upLeft === gameBoard.botRight) {
      $('.game-over-message').html('X WINS')
      gameWon()
      $('#upLeft').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midCent').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botRight').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.upLeft === 'o' && gameBoard.upLeft === gameBoard.midCent && gameBoard.upLeft === gameBoard.botRight) {
      $('.game-over-message').html('O WINS')
      gameWon()
      $('#upLeft').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midCent').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botRight').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.upLeft === 'x' && gameBoard.upLeft === gameBoard.midLeft && gameBoard.midLeft === gameBoard.botLeft) {
      $('.game-over-message').html('X WINS')
      gameWon()
      $('#upLeft').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midLeft').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botLeft').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.midLeft === 'o' && gameBoard.upLeft === gameBoard.midLeft && gameBoard.midLeft === gameBoard.botLeft) {
      $('.game-over-message').html('O WINS')
      gameWon()
      $('#upLeft').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midLeft').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botLeft').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.upCent === 'x' && gameBoard.upCent === gameBoard.midCent && gameBoard.midCent === gameBoard.botCent) {
      $('.game-over-message').html('X WINS')
      gameWon()
      $('#upCent').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midCent').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botCent').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.upCent === 'o' && gameBoard.upCent === gameBoard.midCent && gameBoard.midCent === gameBoard.botCent) {
      $('.game-over-message').html('O WINS')
      gameWon()
      $('#upCent').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midCent').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botCent').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.upRight === 'x' && gameBoard.upRight === gameBoard.midRight && gameBoard.midRight === gameBoard.botRight) {
      $('.game-over-message').html('X WINS')
      gameWon()
      $('#upRight').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midRight').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botRight').children('.x').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    } else if (gameBoard.upRight === 'o' && gameBoard.upRight === gameBoard.midRight && gameBoard.midRight === gameBoard.botRight) {
      $('.game-over-message').html('O WINS')
      gameWon()
      $('#upRight').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#midRight').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
      $('#botRight').children('.o').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    }
  }
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
}

const onChangePw = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePw(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const reset = function () {
  $('.hover-x').html('X')
  $('.hover-o').html('O')
}

const onCreateGame = function (event) {
  event.preventDefault()
  over = false
  for (const key in gameBoard) {
    gameBoard[key] = ''
  }
  api.createGame()
    .then(ui.createGameSuccess)
    .then(gameState())
    .then(reset())
}

// this was before I knew about adding data to html elements!
// const upLeft = 0
// const upCent = 1
// const upRight = 2
// const midLeft = 3
// const midCent = 4
// const midRight = 5
// const botLeft = 6
// const botCent = 7
// const botRight = 8

const updateObject = function (id) {
  const attr = document.getElementById(id)
  if (over === false) {
    gameData.game.cell.index = attr.dataset.cellIndex // index will be whichever square is clicked + !!!check that this is working properly
    gameData.game.cell.value = changeTurns() // value will be x or o
    console.log('GAME DATA IS ', gameData)
  }
}

const gameData = {
  'game': {
    'cell': {
      'index': 0,
      'value': 'x'
    },
    'over': false
  }
}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.updateGame(gameData)
    .then(console.log('inside onUpdateGame gameData is ', gameData))
}

const onShowGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  api.showGame(game.id)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()

  api.getGames()
    .then(ui.getGamesSuccess)
}

const boardHandlers = () => {
  $('.col-xs-4')
    .hover(hoverOn, hoverOff)
    .on('click', function () { updateObject($(this).attr('id')) })
    .on('click', function () { move($(this).attr('id')) })
    .on('click', win)
    .on('click', onUpdateGame)
    .on('click', gameOver)
}

const optionsState = function () {
  $('#options-state').show() // shows options page
  $('.intro').hide() // hides intro page
  $('#game-state').hide() // hides game page
  $('#show-game-failure').hide()
  $('#change-pw').show()
  $('.success-message').hide()
  $('.error-message').hide()
  document.getElementById('get-games').reset()
  document.getElementById('change-pw').reset()
  $('.listids').hide()
  $('#id-list').html('')
}

const gameState = function () {
  $('#game-state').show() // shows game board
  $('#options-state').hide() // hides options 'page'
  $('#games-length').html('') // clears 'you've played x games'
}

const introState = function () {
  $('.intro').show()
  $('#sign-out-state').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('.sign-in-message').hide()
  $('#onward').hide()
  document.getElementById('sign-in').reset()
  document.getElementById('sign-up').reset()
}

module.exports = {
  gameBoard,
  changeTurns, // probably not necessary
  showX, // probably not necessary
  showO, // probably not necessary
  move, // probably not necessary
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePw,
  onCreateGame,
  onShowGame,
  onGetGames,
  boardHandlers,
  introState,
  optionsState,
  gameState
}
