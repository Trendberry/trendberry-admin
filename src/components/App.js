import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import PendingNavDataLoader from './PendingNavDataLoader'
import { styleManager, theme } from '../mui'
import routes from '../routes'

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
        <PendingNavDataLoader routes={routes}>
          <MuiThemeProvider styleManager={styleManager} theme={theme}>
            <Switch>
              {renderRoutes(routes)}
            </Switch>
          </MuiThemeProvider>
        </PendingNavDataLoader>
      </div>
    )
  }
}

export default App
