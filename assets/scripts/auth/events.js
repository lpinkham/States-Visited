'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .then(onGetYourStates)
    .catch(ui.signInFailure)
}


const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}

const onMyAccount = event => {
  event.preventDefault()
  ui.showMyAccount()
}

const onCreateStateForm = event => {
  event.preventDefault()
  ui.showStateForm(event.target.id)
}

const onCreateState = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createNewState(formData)
    .then(ui.createStateSuccessful)
    .then(onGetYourStates)
    .catch(ui.createStateFailure)
}

const onUpdateState = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateState(formData)
    .then(ui.updateStateSuccessful)
    .then(onGetYourStates)
    .catch(ui.updateStateFailure)
}
// used in handlebars edit button
const onEditState = (event) => {
  // get the id by from the section that has the bucket id as data-id
  const id = $(event.target).closest('section').data('id')
  api.getSingleState(id)
    .then(ui.editHandlebarsFunction)
    .catch(ui.onUpdateBucket)
}

const onGetYourStates = (event) => {
  api.getYourStates()
    .then(ui.getStatesSuccess)
    .catch(ui.getStateFailure)
}

// this delete is used in handlebars. It only needs the id, there is no form.
const onDeleteYourStates = (event) => {
  const id = $(event.target).closest('section').data('id')
  const stateName = $(event.target).closest('section').data('state')
  api.deleteYourStates(id)
    .then(ui.deleteStatesSuccess(stateName))
    .then(onGetYourStates)
    .catch(ui.deleteStatesFailure)
}

const onCancel = event => {
  $('#state-message').html("")
  onGetYourStates()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onMyAccount,
  onCreateState,
  onCreateStateForm,
  onUpdateState,
  onGetYourStates,
  onDeleteYourStates,
  onEditState,
  onCancel
}
