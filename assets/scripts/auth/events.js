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
  event.preventDefault()
  ui.showStateForm()
}

const onCreateState = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createNewState(formData)
    .then(() => {
      console.log("We did it!")
    })
    .catch(() => {
      console.log("Bad!")
    })
}
const onUpdateState = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.updateState(formData)
    .then(() => {
      console.log("Update complete!")
    })
    .catch(() => {
      console.log("Update Not complete!")
    })
}

const onGetAllState = event => {
  event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)

  api.getStates()
    .then(() => {
      console.log("Got all states!")
    })
    .catch(() => {
      console.log("Can't get all states!")
    })
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
  onGetAllState
}
