'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

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
  }
}

const showO = function (id) {
  if (changeTurns() === o) {
    $('#' + id).find('.o').show()
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
    $('#feedback').html('PLEASE PICK EMPTY SPACE') // have this message Pop up in UI, not as alert, but in shiny red color?
  }
  console.log(gameBoard)
}

// logic has been incorporated into move function
// const showMove = function () {
//   $(this).append(changeTurns())
// }

// for seeing choice with mouse hover
const hoverOn = function () {
  if (changeTurns() === 'x') {
    $(this).find('.hover-x').show()
  } else if (changeTurns() === 'o') {
    $(this).find('.hover-o').show()
  }
}
const hoverOff = function () {
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
    }
  }
}

$(() => {
  $('.col-xs-4').hover(hoverOn, hoverOff)
  $('.x').hide()
  $('.o').hide()
  $('.hover-x').hide()
  $('.hover-o').hide()
  $('.col-xs-4')
    .hover(hoverOn, hoverOff)
    .on('click', function () { move($(this).attr('id')) })
    .on('click', gameOver)
    .on('click', win)
})
