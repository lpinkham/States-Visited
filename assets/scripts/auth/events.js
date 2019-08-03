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
  ui.hideMessage()
  ui.hideMessage2()
  event.preventDefault()
  ui.showStateForm()
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

const onGetYourStates = (event) => {
  api.getYourStates()
    .then(ui.getStatesSuccess)
    .catch(ui.getStateFailure)
}

const onDeleteYourStates = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteYourStates(formData.state.id)
    .then(ui.deleteStatesSuccess)
    .then(onGetYourStates)
    .catch(ui.deleteStatesFailure)
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
  onDeleteYourStates
}
