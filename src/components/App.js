import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from 'material-ui/styles/theme'
import createPalette from 'material-ui/styles/palette'
import blue from 'material-ui/colors/blue'
import pink from 'material-ui/colors/pink'

import PendingNavDataLoader from './PendingNavDataLoader'
import routes from '../routes'

// Create a theme instance.
const theme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: pink,
    type: 'light',
  }),
})

// import { HomePage, SamplePage, NotFoundPage } from 'components'
// import { GoogleTagManager } from 'containers'

class App extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return (
      <div>
        <Helmet titleTemplate="Trendeberry - %s">
          <title>Home</title>
          <meta name="description" content="Shopping Catalog." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:site_name" content="ARc" />
          {/* <meta property="og:image" content="https://arc.js.org/thumbnail.png" /> */}
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="icon" href="/icon.png" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,600,600i,700,700i&subset=cyrillic" rel="stylesheet" />
        </Helmet>
        {/* <GoogleTagManager /> */}
        <MuiThemeProvider theme={theme}>
          <PendingNavDataLoader routes={routes}>
            <Switch>
              {renderRoutes(routes)}
            </Switch>
          </PendingNavDataLoader>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
