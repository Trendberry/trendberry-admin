import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Switch } from 'react-router'
import { renderRoutes } from 'react-router-config'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { authUserReadRequest } from 'store/actions'
import { styleManager, theme } from '../mui'
import routes from '../routes'

class App extends Component {
  // static get({ store }) {
  //   return new Promise((resolve, reject) => {
  //     store.dispatch(authUserReadRequest(resolve, reject))
  //   })
  // }

  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }
  render() {
    const { route } = this.props
    return (
      <div className="App">
        <Helmet titleTemplate="TrendBerry - %s">
          <title>Shopping</title>
          <meta name="description" content="Clothes shopping catalog" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:site_name" content="TrendBerry" />
          <meta property="og:image" content="thumbnail.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,600,600i,700,700i&subset=cyrillic" rel="stylesheet" />
        </Helmet>
        <MuiThemeProvider styleManager={styleManager} theme={theme}>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </MuiThemeProvider>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
