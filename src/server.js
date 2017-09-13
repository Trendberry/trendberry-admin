/* eslint-disable no-console */
import 'babel-polyfill'
import path from 'path'
import https from 'https'
import express from 'express'
import device from 'express-device'
import forceSSL from 'express-force-ssl'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import compression from 'compression'
import favicon from 'serve-favicon'
import csrf from 'csurf'
import appendQuery from 'append-query'

import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { matchRoutes } from 'react-router-config'
import { push } from 'react-router-redux'
import createHistory from 'history/createMemoryHistory'
import serialize from 'serialize-javascript'

import { JssProvider, SheetsRegistry } from 'react-jss'
import { create } from 'jss'
import preset from 'jss-preset-default'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import blue from 'material-ui/colors/blue'
import pink from 'material-ui/colors/pink'

import { basename, host, env, port } from 'config'
import { authUserReadRequest, seDevice, setCsrfToken } from 'store/actions'
import configureStore from 'store/configure'
import api from 'services/api'
import App from 'components/App'
import Html from 'components/Html'
import Error from 'components/Error'
import routes from './routes'

// Configure JSS
const jss = create(preset())
jss.options.createGenerateClassName = createGenerateClassName

const renderApp = ({ context, location, store, sheetsRegistry }) => {
  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      accent: pink,
      type: 'light',
    },
  })

  return renderToString(
    <JssProvider registry={sheetsRegistry} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new WeakMap()}>
        <Provider store={store}>
          <StaticRouter basename={basename} context={context} location={location}>
            <App />
          </StaticRouter>
        </Provider>
      </MuiThemeProvider>
    </JssProvider>
  )
}

const renderHtml = ({ initialState, content, sheetsRegistry }) => {
  const styles = sheetsRegistry ? sheetsRegistry.toString() : ''
  const assets = global.assets
  const state = `window.__INITIAL_STATE__ = ${serialize(initialState)};`
  const html = <Html {...{ styles, assets, state, content }} />
  return `<!doctype html>\n${renderToStaticMarkup(html)}`
}

const fetchBranchData = (routes, store, req, res) => new Promise((resolve, reject) => {
  const branch = matchRoutes(routes, req.path)
  const method = req.method.toLowerCase()

  const authpromise = store.dispatch(authUserReadRequest())

  const promises = branch.map(({ route, match }) => {
    let component = route.component

    if (component) {
      while (component && !component[method]) {
        // eslint-disable-next-line no-param-reassign
        component = component.WrappedComponent
      }

      return component &&
        component[method] &&
        component[method]({ req, res, match, store, query: req.query })
    }

    return Promise.resolve(null)
  })

  Promise.all([authpromise].concat(promises)).then(resolve).catch(reject)
  // Promise.all(promises).then(resolve).catch(reject)
})

const app = express()
app.disable('x-powered-by')

if (env === 'production') {
  app.set('forceSSLOptions', {
    enable301Redirects: true,
    trustXFPHeader: true,
  })
  app.use(forceSSL)
}

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(basename, express.static(path.resolve(process.cwd(), 'dist/public')))
app.use(basename, favicon(path.resolve(process.cwd(), 'dist/public', 'favicon.ico')))
app.use(device.capture())
app.use(csrf({ cookie: true }))

app.use((req, res, next) => {
  const apiInstance = api.create()
  if (req.cookies.token) {
    apiInstance.setToken(req.cookies.token)
  }

  const location = req.url
  const history = createHistory()
  const store = configureStore({}, { api: apiInstance }, history)
  store.dispatch(seDevice({
    name: req.device.name,
    type: req.device.type,
  }))
  store.dispatch(setCsrfToken(req.csrfToken()))
  store.dispatch(push(location))

  const context = {}
  const sheetsRegistry = new SheetsRegistry()

  return fetchBranchData(routes, store, req, res)
    .then(() => {
      const content = renderApp({
        context,
        location,
        store: configureStore(store.getState(), { api: apiInstance }, history),
        sheetsRegistry,
      })
      const initialState = store.getState()

      if (initialState.auth.token !== null) {
        res.cookie('token', initialState.auth.token)
      }

      if (context.status) {
        res.status(context.status)
      }
      if (context.url) {
        if (context.url === '/signin') {
          res.redirect(appendQuery(context.url, { refferer: req.url }))
        } else {
          res.redirect(context.url)
        }
      } else {
        const initialState = store.getState()
        res.send(renderHtml({ initialState, content, sheetsRegistry }))
      }
    })
    .catch(next)
})

app.use((err, req, res, next) => {
  const content = renderToStaticMarkup(<Error />)
  res.status(500).send(renderHtml({ content }))
  console.error(err)
  next(err)
})

// keep heroku alive
// if (env === 'production') {
//   setInterval(() => {
//     https.get('https://trendberry-admin.herokuapp.com/')
//     https.get('https://trendberry-api.herokuapp.com/')
//   }, 600000) // every 10 minutes (600000)
// }

app.listen(port, (error) => {
  const boldBlue = text => `\u001b[1m\u001b[34m${text}\u001b[39m\u001b[22m`
  if (error) {
    console.error(error)
  } else {
    console.info(`Server is running at ${boldBlue(`http://${host}:${port}${basename}/`)}`)
  }
})
