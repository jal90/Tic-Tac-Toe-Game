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

// out of date, use realMove instead
const move = function (player, position) { // player either 'x' or 'o', position is key of gameBoard in quotes
  if (gameBoard[position] === '') {
    gameBoard[position] = player
  } else {
    console.log('Please pick an unoccupied space')
  }
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
    console.log("it's x's turn")
    return x
  } else if (total % 2 === 0) {
    console.log("it's o's turn")
    return o
  } else {
    console.log('uh oh')
  }
}

const realMove = function (position) {
  if (gameBoard[position] === '') {
    gameBoard[position] = changeTurns()
  } else {
    console.log('Please pick an unoccupied space') // have this message Pop up in UI, not as alert, but in shiny red color?
  }
}
