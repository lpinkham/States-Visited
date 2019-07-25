'use strict'

const store = require('../store')
// added for handlebars
const showStatesTemplate = require('../templates/state-listing.handlebars')

const getStatesSuccess = (data) => {
  // console.log('in getBooksSuccess', data)

  // 2. use the template file as a functions
  // 3. pass the template file an object as as an argument
  // 4. will return an interpolated HTML string
$('.content').html("help!!!!!!!!!")
  const showStatesHtml = showStatesTemplate({ states: data.states })
  // console.log('showBooksHtml ', showBooksHtml)
  // 5. Insert the HTML string onto the page using jQuery
  // use .append or .html
  $('.content').html(showStatesHtml)
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}
// end of added for handlebars

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
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#or').hide()
}

const signUpFailure = responseData => {
  failureMessage('You failed to sign up')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').hide()
}

const signInSuccessful = responseData => {
  store.user = responseData.user
  successMessage('You signed in successfully')
  $('#form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#account-btn').show()
  $('#message').hide()
  $('#create-state-btn').show()
  $('#view-your-states-btn').show()
  $('#or').hide()

}

const signInFailure = responseData => {
  failureMessage('Please try again. Your email or password is incorrect. If you need to create an account you can do so below.')
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
  $('#sign-up').show()
  $('#sign-in').show()
  $('#create-state').hide()
  $('#content').hide()
  $('#create-state-btn').hide()
  $('#view-your-states-btn').hide()
  $('form').trigger('reset')
}

const signOutFailure = () => {
  failureMessage('Your sign out failed. You are still logged in. Please try again.')
}
const showMyAccount = () => {
  $('#myAccount').show()
  $('#change-password').show()
  $('#sign-out').show()
}

const showStateForm = () => {
  $('#create-state').show()
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
  showMyAccount,
  showStateForm,
  getStatesSuccess
}
