'use strict'

const store = require('../store')
const showStatesTemplate = require('../templates/state-listing.handlebars')
const showEditStateTemplate = require('../templates/state-listing-edit.handlebars')
const addStateTemplate = require('../templates/add-state.handlebars')


const signUpSuccessful = responseData => {
  $('form').trigger('reset')
  showAlert('You have registered successfully.', 'success')
}

const signUpFailure = responseData => {
  $('form').trigger('reset')
  showAlert('You have failed to register. Please try again.', 'danger')
}

const signInSuccessful = responseData => {
  store.user = responseData.user
  $('#form').trigger('reset')
  $('#account-btn').show()
  $('#register-btn').hide()
  $('#signin-btn').hide()
  // $('#create-state-btn').show()
  // $('#view-your-states-btn').show()
  // $('#delete-states-btn').show()
  // $('#update-state-btn').show()
  $('#content').show()
  $('#interactive-map').show()
  $('#hp-map').hide()
  $('#main-copy-block').html("To add a new state to your list simply click on it and enter all the details in the form.")

showAlert('You have logged in successfully', 'success')
}

const signInFailure = responseData => {
  $('form').trigger('reset')
  showAlert('You have failed to sign-in. Please try again.', 'danger')
}

const changePasswordSuccessful = responseData => {
  $('form').trigger('reset')
showAlert('You have changed your password successfully.', 'success')
}

const changePasswordFailure = responseData => {
  $('form').trigger('reset')
  showAlert('Please try again. We were unable to change your password.', 'danger')

}

const signOutSuccessful = () => {
  $('form').trigger('reset')
  $('#register-btn').show()
  $('#account-btn').hide()
  $('#signin-btn').show()
  $('#create-state').hide()
  // $('#update-state').hide()
  // $('#delete-state').hide()
  $('#content').hide()
  $('#create-state-btn').hide()
  $('#view-your-states-btn').hide()
  $('#update-state-btn').hide()
  $('#delete-states-btn').hide()
  $('#interactive-map').hide()
  $('#hp-map').show()
  $('#state-message').hide()

// clear all color on visited states
for (let i = 0; i < store.states.length; i++) {
  let name = store.states[i]
   $(`#${name}`).css('fill', '#D3D3D3')
}
$('#main-copy-block').html("Want to keep track of all the states you have visited? This app will help with that and allow you to add notes about each one to remind you of your memories. Get started by creating an account or log-in.")

store.states = []
showAlert('You have logged out successfully', 'success')
}

const signOutFailure = () => {
  $('form').trigger('reset')
  showAlert('You have failed to sign-in. Please try again.', 'danger')
}

const getStatesSuccess = (data) => {

  if (data.states.length === 0) {
    showAlert('Sorry, you have not created any states yet. Please add some and try again.', 'danger')
    $('.content').html("")
  } else {
    // save state names to store for use during sign-out to clear map
    store.states = []
    for (let i = 0; i < data.states.length; i++) {
      let name = data.states[i].state_name.split(' ').join('_')
      store.states[i] = name
       $(`#${name}`).css('fill', '#0086ad')
    }

    const showStatesHtml = showStatesTemplate({ states: data.states })
    $('.content').html(showStatesHtml)
    $('#create-state').hide()
    $('#update-state').hide()
    $('#delete-state').hide()
    $('form').trigger('reset')
  }
}

const getStateFailure = responseData => {
  showAlert('We were unable to retrieve your states.', 'danger')
  $('form').trigger('reset')
}

const createStateSuccessful = responseData => {
  showAlert('We added the new state to your list.', 'success')
  $('form').trigger('reset')
}

const createStateFailure = responseData => {
  showAlert('We were unable to create your record.', 'danger')
  $('form').trigger('reset')
}

const updateStateFailure = responseData => {
  showAlert('We were unable to update your record.', 'danger')
  $('form').trigger('reset')
}

const updateStateSuccessful = responseData => {
  showAlert('We updated the state.', 'success')
  $('#form').trigger('reset')
}

const deleteStatesSuccess = responseData => {
  $(`#${responseData}`).css('fill', '#D3D3D3')
  showAlert('We deleted the state.', 'success')
  $('form').trigger('reset')
}

const deleteStatesFailure = responseData => {
  showAlert('We were not able to delete the state.', 'danger')
  $('form').trigger('reset')
}

const showStateForm = (state) => {
  // check if there are any states in the user list
  if (!store.states) {
    console.log('not states.')
    $('#state-message').hide()
    // check if state has an _ in the name and change it to a space
    let name = state.split('_').join(' ')
    $('#state_name').val(name)
    $('#create-state').show()
  } else {
      if (store.states.includes(state)) {
       $('#state-message').show()
       $('#state-message').html("<h3>This state already exist. Please click edit below to modify this state.</h3>")
       $('#create-state').hide()
     } else {
       $('#state-message').hide()
       // check if state has an _ in the name and change it to a space
       let name = state.split('_').join(' ')
       $('#state_name').val(name)
       $('#create-state').show()
     }


      // $('#state-message').show()
      // $('#state-message').html("<h3>This state already exist. Please click edit below to modify this state.</h3>")
      // $('#create-state').hide()
     }
}


// if (store.states.includes(state)) {
//   $('#state-message').show()
//   $('#state-message').html("<h3>This state already exist. Please click edit below to modify this state.</h3>")
//   $('#create-state').hide()
// } else {
//   $('#state-message').hide()
//   // check if state has an _ in the name and change it to a space
//   let name = state.split('_').join(' ')
//   $('#state_name').val(name)
//   $('#create-state').show()
// }
// }

const showAddStateForm = (event) => {
  const id = event.target.id
  const addStateHtml = addStateTemplate({ id })
  $('.stateform').html(addStateHtml)
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

const $messages = $('#messages')

const showAlert = (message, type) => {
  $messages.html(`<p class="alert-${type} alert">${message}</p>`)
  setTimeout(() => $messages.html(''), 3000)
}


// edit form in handlebars
const editHandlebarsFunction = responseData => {
  const showEditStateHTML = showEditStateTemplate({ state: responseData.state })
  $(`#${responseData.state.id}`).html(showEditStateHTML)
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
  getStatesSuccess,
  getStateFailure,
  createStateSuccessful,
  createStateFailure,
  updateStateSuccessful,
  updateStateFailure,
  deleteStatesSuccess,
  deleteStatesFailure,
  showStateForm,
  showDeleteForm,
  showUpdateForm,
  editHandlebarsFunction,
  showAddStateForm
}
