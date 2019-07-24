'use strict'

const authEvents = require('./auth/events')
// const bookEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  //Handlebars
// bookEvents.addHandlers()
  // end of handlebars
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
})
