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
  // console.log('formData:', formData)
  // console.log('store.user.id is ', store.user.id)
  console.log('in createNewState and store.user.token is ', store.user.token)
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
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    // data: formData.state
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

// added for Handlebars
const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/states'
  })
}

const deleteBook = function (id) {
  return $.ajax({
    // url: `${config.apiUrl/books/${id}}`, this is using string interpolation.
    url: config.apiUrl + '/states/' + id,
    method: 'DELETE'
  })
}
// end of added for handlebars

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createNewState,
  updateState,
  getStates,
  getBooks,
  deleteBook,
  getYourStates
}
