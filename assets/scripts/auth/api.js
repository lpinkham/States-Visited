'use strict'

const config = require('../config')
const store = require('../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    data: formData,
    method: 'POST'
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    data: formData,
    method: 'POST'
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createNewState = formData => {
return $.ajax({
    url: config.apiUrl + '/states/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateState = formData => {
  return $.ajax({
    url: config.apiUrl + '/states/' + formData.state.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getStates = () => {
  return $.ajax({
    url: config.apiUrl + '/states/',
    method: 'GET'
  })
}

const getYourStates = () => {
  return $.ajax({
    url: config.apiUrl + '/states/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteYourStates = function (id) {
  console.log('api deleteYourStates ', id)
  return $.ajax({
  url: config.apiUrl + '/states/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createNewState,
  updateState,
  getStates,
  deleteYourStates,
  getYourStates
}
