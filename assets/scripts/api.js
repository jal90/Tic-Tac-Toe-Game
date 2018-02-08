const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data: {
      'credentials': {
        'email': 'asasdfadsfasdfasfsefadfdfblahblah@example.email',
        'password': 'an example password',
        'password_confirmation': 'an example password'
      }
    }
  })
}

module.exports = {
  signUp
}
