'use strict'

const store = require('../store')

// helper function
const successMessage = message => {
  $('#message').show()
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').css('color', 'green')
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').show()
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#message').css('color', 'red')
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully')
  // $('#change-password').hide()
  // $('#sign-out').hide()
  // $('#sign-up').hide()
  // $('#sign-in').show()
  // $('#or').hide()
}

const signUpFailure = responseData => {
  failureMessage('You failed to sign up')
  // $('#change-password').hide()
  // $('#sign-out').hide()
  // $('#sign-up').show()
  // $('#sign-in').hide()
}

const signInSuccessful = responseData => {
  store.user = responseData.user
  // $('#sign-in').hide()
  // $('#sign-up').hide()
  // $('#game-board').hide()
  // $('#new-game-btn').show()
  // $('#gamestats').show()
  // $('#game-play-text').show()
  // $('#form').trigger('reset')
  // $('#account-btn').show()
  // $('#message').hide()
  // $('#or').hide()
}

const signInFailure = responseData => {
  failureMessage('Please try again. Your email or password is incorrect. If you need to create an account you can do so below.')
  hideShow()
}

const changePasswordSuccessful = responseData => {
  successMessage('You changed your password successfully')
  showHide()
}

const changePasswordFailure = responseData => {
  failureMessage('Please try again. We were unable to change your password')
  showHide()
}

const signOutSuccessful = () => {
  // $('#change-password').hide()
  // $('#message').hide()
  // $('#sign-out').hide()
  // $('#sign-up').show()
  // $('#sign-in').show()
  // $('form').trigger('reset')
}

const signOutFailure = () => {
  failureMessage('Your sign out failed. You are still logged in. Please try again.')
  showHide()
}

const showSignInForm = () => {
  $('#sign-in').show()
}



module.exports = {
  successMessage,
  failureMessage,
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure,
  showSignInForm
}
