import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from 'store/configure'
import api from 'services/api'
import { styleManager, theme } from 'mui'

const store = configureStore({}, { api: api.create() })
const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider styleManager={styleManager} theme={theme}>{story()}</MuiThemeProvider>
    </BrowserRouter>
  </Provider>
))

configure(loadStories, module)
