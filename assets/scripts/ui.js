const store = require('./store')

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
}

module.exports = {
  signInSuccess
}
