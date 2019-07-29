'use strict'

const store = require('../store')
const showStatesTemplate = require('../templates/state-listing.handlebars')

const signUpSuccessful = responseData => {
  successMessage('You registered successfully')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#or').hide()
}

const signUpFailure = responseData => {
  failureMessage('We were unable to complete your registration')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').hide()
}

const signInSuccessful = responseData => {
  store.user = responseData.user
  $('#form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#account-btn').show()
  $('#message').hide()
  $('#create-state-btn').show()
  $('#view-your-states-btn').show()
  $('#delete-states-btn').show()
  $('#update-state-btn').show()
  $('#register-btn').hide()
  $('#signin-btn').hide()
  // $('#or').hide()

}

const signInFailure = responseData => {
  failureMessage('Your email or password is incorrect. If you need to create an account you can do so above.')
}

const changePasswordSuccessful = responseData => {
  successMessage('You changed your password successfully')
}

const changePasswordFailure = responseData => {
  failureMessage('Please try again. We were unable to change your password')
}

const signOutSuccessful = () => {
  $('#change-password').hide()
  $('#message').hide()
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create-state').hide()
  $('#update-state').hide()
  $('#delete-state').hide()
  $('#content').hide()
  $('#create-state-btn').hide()
  $('#view-your-states-btn').hide()
  $('#register-btn').show()
  $('#account-btn').hide()
  $('#signin-btn').show()
  $('#update-state-btn').hide()
  $('#delete-states-btn').hide()
  $('form').trigger('reset')
}

const signOutFailure = () => {
  failureMessage('Your sign out failed. You are still logged in. Please try again.')
}

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

const getStatesSuccess = (data) => {
  $('#message').hide()
  const showStatesHtml = showStatesTemplate({ states: data.states })
  $('.content').html(showStatesHtml)
  $('#create-state').hide()
  $('#update-state').hide()
  $('#delete-state').hide()
}

// const clearBooks = () => {
//   $('.content').empty()
// }

const getStateFailure = responseData => {
  failureMessage('We were unable to retrieve your states.')
}
// const failure = (error) => {
//   console.error(error)
// }

const createStateSuccessful = responseData => {
  successMessage('We added the new state to your list.')
}

const createStateFailure = responseData => {
  failureMessage('We were unable to create your record.')
}

const updateStateFailure = responseData => {
  failureMessage('We were unable to update your record.')
}

const updateStateSuccessful = responseData => {
  successMessage('We updated the new state to your list.')
}

const deleteStatesSuccess = responseData => {
  successMessage('We deleted the state.')
}
const deleteStatesFailure = responseData => {
  successMessage('We were not able to delete the state.')
}

const showMyAccount = () => {
  $('#myAccount').show()
  $('#change-password').show()
  $('#sign-out').show()
}

const showSignInForm = () => {
  $('#sign-in').show()
  $('#sign-up').hide()
}
const showRegisterForm = () => {
  $('#sign-up').show()
  $('#sign-in').hide()
}
const showStateForm = () => {
  $('#create-state').show()
  $('#delete-state').hide()
  $('#update-state').hide()
}

const showDeleteForm = () => {
  $('#delete-state').show()
  $('#create-state').hide()
  $('#update-state').hide()
}

const showUpdateForm = () => {
  $('#delete-state').hide()
  $('#create-state').hide()
  $('#update-state').show()
}

const colorAK = () => {
$('#ak').css('fill', 'green')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure,
  successMessage,
  failureMessage,
  getStatesSuccess,
  getStateFailure,
  createStateSuccessful,
  createStateFailure,
  updateStateSuccessful,
  updateStateFailure,
  deleteStatesSuccess,
  deleteStatesFailure,
  showMyAccount,
  showSignInForm,
  showRegisterForm,
  showStateForm,
  showDeleteForm,
  showUpdateForm,
  colorAK
}
