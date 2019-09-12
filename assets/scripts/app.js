'use strict'

const authEvents = require('./auth/events')
const ui = require('./auth/ui')

$(() => {
  // user auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  //  state events
  $('#create-state-btn').on('click', authEvents.onCreateStateForm)
  $('#create-state').on('submit', authEvents.onCreateState)
  $('.content').on('click', '.edit-btn', authEvents.onEditState)
  $('.content').on('submit', '.update-state', authEvents.onUpdateState)
  $('#get-all-states').on('click', authEvents.onGetAllState)
  $('#view-your-states-btn').on('click', authEvents.onGetYourStates)
  $('.content').on('click', '.delete-states-btn', authEvents.onDeleteYourStates)
  $('#delete-states-btn').on('click', ui.showDeleteForm)
  $('#update-state-btn').on('click', ui.showUpdateForm)

  // click event on states map
  $('#g5').on('click', authEvents.onCreateStateForm)

  // cancel form buttoms
  $('.content').on('click', '.cancel-btn', authEvents.onCancel)
  $('#cancel-add-btn').on('click', authEvents.onCancel)

})
