import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import blue from 'material-ui/colors/blue'
import pink from 'material-ui/colors/pink'
import configureStore from 'store/configure'
import api from 'services/api'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: blue,
    accent: pink,
    type: 'light',
  },
})

const store = configureStore({}, { api: api.create() })
const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
    </BrowserRouter>
  </Provider>
))

configure(loadStories, module)
