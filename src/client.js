import 'react-hot-loader/patch'
import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import Cookies from 'universal-cookie'

import configureStore from 'store/configure'
import api from 'services/api'
import App from 'components/App'

const apiInstance = api.create()
const cookies = new Cookies()
const token = cookies.get('token')

if (token) {
  apiInstance.setToken(token)
}

const history = createHistory()
// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, { api: apiInstance }, history)

const renderApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
