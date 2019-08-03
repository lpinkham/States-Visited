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
  displayAccountFormNone()
}

const displayAccountFormNone = () => {
  let x = document.getElementById("myAccount")
  x.style.display = "none"
}

const signOutFailure = () => {
  failureMessage('Your sign out failed. You are still logged in. Please try again.')
}

const successMessage = message => {
  $('#message').show()
  $('#message2').hide()
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

  if (data.states.length === 0) {
    failureMessage('Sorry, you have not created any states yet. Please add some and try again.')
    $('.content').html("")
  } else {
    $('#message2').show()
    $('#message2').css('color', 'green')
    $('#message2').text('Your states are listed below.')
    const showStatesHtml = showStatesTemplate({ states: data.states })
    $('.content').html(showStatesHtml)
    $('#create-state').hide()
    $('#update-state').hide()
    $('#delete-state').hide()
    $('form').trigger('reset')
    displayAccountFormNone()
  }
}

const getStateFailure = responseData => {
  failureMessage('We were unable to retrieve your states.')
  $('form').trigger('reset')
}

const createStateSuccessful = responseData => {
  successMessage('We added the new state to your list.')
  $('form').trigger('reset')
}

const createStateFailure = responseData => {
  failureMessage('We were unable to create your record.')
  $('form').trigger('reset')
}

const updateStateFailure = responseData => {
  failureMessage('We were unable to update your record.')
  $('form').trigger('reset')
}

const updateStateSuccessful = responseData => {
  successMessage('We updated the state.')
  $('#form').trigger('reset')
}

const deleteStatesSuccess = responseData => {
  successMessage('We deleted the state.')
  $('form').trigger('reset')
}
const deleteStatesFailure = responseData => {
  failureMessage('We were not able to delete the state.')
  $('form').trigger('reset')
}

const showMyAccount = () => {

  let x = document.getElementById("myAccount")
  if (x.style.display === "none") {
    x.style.display = "block"
  } else {
      x.style.display = "none";
  }

  $('#change-password').show()
  $('#sign-out').show()
  $('#message').hide()
  $('#message2').hide()
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
  hideMessage()
  $('#create-state').show()
  $('#delete-state').hide()
  $('#update-state').hide()
  displayAccountFormNone()
}

const showDeleteForm = () => {
  hideMessage()
  hideMessage2()
  $('#delete-state').show()
  $('#create-state').hide()
  $('#update-state').hide()
  displayAccountFormNone()

}

const showUpdateForm = () => {
  hideMessage()
  hideMessage2()
  $('#delete-state').hide()
  $('#create-state').hide()
  $('#update-state').show()
  displayAccountFormNone()
}
const hideMessage = () => {
  $('#message').hide()
}
const hideMessage2 = () => {
  $('#message2').hide()
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
  hideMessage,
  hideMessage2
}
