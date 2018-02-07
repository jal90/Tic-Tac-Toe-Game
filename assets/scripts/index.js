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

const changeTurns = function () {
  const x = 'x'
  const o = 'o'
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

const move = function (id) {
  if (gameBoard[id] === '') {
    $('#' + id).append(changeTurns())
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
// const hoverOn = function () {
//   $(this).html(changeTurns())
// }
// const hoverOff = function () {
//   $(this).html('')
// }

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

$(() => {
  // $('.col-xs-4').hover(hoverOn, hoverOff)  --> for when hoverOn and hoverOff work
  // $('.col-xs-4').on('click', showMove)
  $('.col-xs-4')
    .on('click', function () { move($(this).attr('id')) })
    .on('click', gameOver)
})
