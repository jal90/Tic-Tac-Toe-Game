const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
    // data: {
      // 'credentials': {
        // 'email': 'asaasdfasdasdfasdfasdfasdffasdfsdfadsfasdfasfsefadfdfblahblah@example.email',
        // 'password': 'an example password'
      // }
    // }
  })
}

module.exports = {
  signUp
}
