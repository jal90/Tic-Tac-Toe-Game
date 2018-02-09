const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')

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
    console.log('uh oh')
  }
}

const showX = function (id) {
  if (changeTurns() === x) {
    $('#' + id).find('.x').show()
    $('#' + id).find('.hover-x').remove()
    $('#' + id).find('.hover-o').remove()
  }
}

const showO = function (id) {
  if (changeTurns() === o) {
    $('#' + id).find('.o').show()
    $('#' + id).find('.hover-x').remove()
    $('#' + id).find('.hover-o').remove()
  }
}

const move = function (id) {
  if (gameBoard[id] === '') {
    console.log('CHANGE TURNS === ', changeTurns())
    if (changeTurns() === 'x') {
      showX(id)
    } else if (changeTurns() === 'o') {
      showO(id)
    }
    gameBoard[id] = changeTurns()
  } else {
    $('#feedback').html('PLEASE PICK EMPTY SPACE')
  }
  console.log(gameBoard)
}

// for seeing choice with mouse hover
const hoverOn = function () {
  if (changeTurns() === 'x') {
    $(this).find('.hover-x').show()
  } else if (changeTurns() === 'o') {
    $(this).find('.hover-o').show()
  }
}

const hoverOff = function () {
  $('#feedback').html('')
  if (changeTurns() === 'x') {
    $(this).find('.hover-x').hide()
  } else if (changeTurns() === 'o') {
    $(this).find('.hover-o').hide()
  }
}

const gameOver = function () {
  let total = 0
  for (const key in gameBoard) {
    if (gameBoard[key] !== '') {
      ++total
    }
  }
  if (total === 9) {
    $('#feedback').html('Game is Over!')
    console.log(store.game)
  }
}

const win = function () {
  let total = 0
  for (const key in gameBoard) {
    if (gameBoard[key] !== '') {
      ++total
    }
  }
  if (total >= 5) { // this is because it takes at least 5 turns total to win the game. So don't even bother checking before then
    if (gameBoard.upLeft === 'x' && gameBoard.upLeft === gameBoard.upCent && gameBoard.upLeft === gameBoard.upRight) {
      $('#feedback').html('X WINSSSSS')
    } else if (gameBoard.upLeft === 'o' && gameBoard.upLeft === gameBoard.upCent && gameBoard.upLeft === gameBoard.upRight) {
      $('#feedback').html('O WINSSSSS')
    } else if (gameBoard.midLeft === 'x' && gameBoard.midLeft === gameBoard.midCent && gameBoard.midLeft === gameBoard.midRight) {
      $('#feedback').html('X WINSSSSS')
    } else if (gameBoard.midLeft === 'o' && gameBoard.midLeft === gameBoard.midCent && gameBoard.midLeft === gameBoard.midRight) {
      $('#feedback').html('O WINSSSSS')
    } else if (gameBoard.botLeft === 'x' && gameBoard.botLeft === gameBoard.botCent && gameBoard.botLeft === gameBoard.botRight) {
      $('#feedback').html('X WINSSSSS')
    } else if (gameBoard.botLeft === 'o' && gameBoard.botLeft === gameBoard.botCent && gameBoard.botLeft === gameBoard.botRight) {
      $('#feedback').html('O WINSSSSS')
    } else if (gameBoard.botLeft === 'x' && gameBoard.botLeft === gameBoard.midCent && gameBoard.botLeft === gameBoard.upRight) {
      $('#feedback').html('X WINSSSSS')
    } else if (gameBoard.botLeft === 'o' && gameBoard.botLeft === gameBoard.midCent && gameBoard.botLeft === gameBoard.upRight) {
      $('#feedback').html('O WINSSSSS')
    } else if (gameBoard.upLeft === 'x' && gameBoard.upLeft === gameBoard.midCent && gameBoard.upLeft === gameBoard.botRight) {
      $('#feedback').html('X WINSSSSS')
    } else if (gameBoard.upLeft === 'o' && gameBoard.upLeft === gameBoard.midCent && gameBoard.upLeft === gameBoard.botRight) {
      $('#feedback').html('O WINSSSSS')
    } else if (gameBoard.upLeft === 'x' && gameBoard.upLeft === gameBoard.midLeft && gameBoard.midLeft === gameBoard.botLeft) {
      $('#feedback').html('X WINSSSSS')
    } else if (gameBoard.midLeft === 'o' && gameBoard.upLeft === gameBoard.midLeft && gameBoard.midLeft === gameBoard.botLeft) {
      $('#feedback').html('O WINSSSSS')
    } else if (gameBoard.upCent === 'x' && gameBoard.upCent === gameBoard.midCent && gameBoard.midCent === gameBoard.botCent) {
      $('#feedback').html('X WINSSSSS')
    } else if (gameBoard.upCent === 'o' && gameBoard.upCent === gameBoard.midCent && gameBoard.midCent === gameBoard.botCent) {
      $('#feedback').html('O WINSSSSS')
    } else if (gameBoard.upRight === 'x' && gameBoard.upRight === gameBoard.midRight && gameBoard.midRight === gameBoard.botRight) {
      $('#feedback').html('X WINSSSSS')
    } else if (gameBoard.upRight === 'o' && gameBoard.upRight === gameBoard.midRight && gameBoard.midRight === gameBoard.botRight) {
      $('#feedback').html('O WINSSSSS')
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

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .then(gameState())
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
  gameData.game.cell.index = attr.dataset.cellIndex // index will be whichever square is clicked + !!!check that this is working properly
  gameData.game.cell.value = changeTurns() // value will be x or o
  console.log('GAME DATA IS ', gameData)
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
}

const onShowGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  api.showGame(game.id)
    .then(ui.showGameSuccess)
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
    .on('click', gameOver)
    .on('click', win)
    .on('click', onUpdateGame)
}

const optionsState = function () {
  $('#options-state').show()
  $('.intro').hide()
}

const gameState = function () {
  $('#game-state').show()
  $('#options-state').hide()
}

const introState = function () {
  window.location.reload()
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
