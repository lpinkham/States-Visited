'use strict'

const authEvents = require('./auth/events')
const ui = require('./auth/ui')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#account-btn').on('click', authEvents.onMyAccount)
  $('#create-state-btn').on('click', authEvents.onCreateStateForm)
  $('#create-state').on('submit', authEvents.onCreateState)
  $('#update-state').on('submit', authEvents.onUpdateState)
  $('#get-all-states').on('click', authEvents.onGetAllState)
  $('#view-your-states-btn').on('click', authEvents.onGetYourStates)
  $('#delete-state').on('submit', authEvents.onDeleteYourStates)
  $('#register-btn').on('click', ui.showRegisterForm)
  $('#signin-btn').on('click', ui.showSignInForm)
})
