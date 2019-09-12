'use strict'

const authEvents = require('./auth/events')
const ui = require('./auth/ui')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // $('#account-btn').on('click', authEvents.onMyAccount)

  // button on main page. won't need once click on map is functioning correctly
  $('#create-state-btn').on('click', authEvents.onCreateStateForm)
  $('#create-state').on('submit', authEvents.onCreateState)

  $('.content').on('click', '.edit-btn', authEvents.onEditState)
  $('.content').on('submit', '.update-state', authEvents.onUpdateState)

  // $('#update-state').on('submit', authEvents.onUpdateState)

  $('#get-all-states').on('click', authEvents.onGetAllState)
  $('#view-your-states-btn').on('click', authEvents.onGetYourStates)
  // $('#delete-state').on('submit', authEvents.onDeleteYourStates)
  $('.content').on('click', '.delete-states-btn', authEvents.onDeleteYourStates)
  // $('#register-btn').on('click', ui.showRegisterForm)
  // $('#signin-btn').on('click', ui.showSignInForm)
  $('#delete-states-btn').on('click', ui.showDeleteForm)
  $('#update-state-btn').on('click', ui.showUpdateForm)
  // click event on states map
  $('#g5').on('click', authEvents.onCreateStateForm)
  // $('#g5').on('click', authEvents.onCreateStateForm)

  $('.content').on('click', '.cancel-btn', authEvents.onCancel)

})
