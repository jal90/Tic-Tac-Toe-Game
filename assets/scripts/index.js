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
  $('.col-xs-4')
    .hover(events.hoverOn, events.hoverOff)
    .on('click', function () { events.move($(this).attr('id')) })
    .on('click', events.gameOver)
    .on('click', events.win)
})
