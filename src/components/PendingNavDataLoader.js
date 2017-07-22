import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router'
import { matchRoutes } from 'react-router-config'
import { parse } from 'qs'
import NProgress from 'nprogress'
import shallowEqual from 'recompose/shallowEqual'

NProgress.configure({
  showSpinner: false,
  speed: 500,
  trickleSpeed: 200,
})

const fetchData = (routes, location, store) => {
  const branch = matchRoutes(routes, location.pathname)
  const method = 'get'
  const query = parse(location.search.substr(1))

  const promises = branch.map(({ route, match }) => {
    let component = route.component

    if (component) {
      while (component && !component[method]) {
        // eslint-disable-next-line no-param-reassign
        component = component.WrappedComponent
      }

      return component &&
        component[method] &&
        component[method]({ store, match, query })
    }

    return Promise.resolve(null)
  })

  return Promise.all(promises)
}

// THIS IS JUST SOME THEORETICAL PSEUDO CODE :)
class PendingNavDataLoader extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    location: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  state = {
    previousLocation: null,
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const navigated = !shallowEqual(nextProps.location, this.props.location)
    const { routes } = this.props

    if (navigated) {
      // save the location so we can render the old screen
      this.setState({
        previousLocation: this.props.location,
      })

      NProgress.start()

      fetchData(routes, nextProps.location, nextContext.store).then(() => {
        NProgress.done()

        this.setState({
          previousLocation: null,
        })
      })
    }
  }

  render() {
    const { children, location } = this.props
    const { previousLocation } = this.state

    // use a controlled <Route> to trick all descendants into
    // rendering the old location
    return (
      <Route
        location={previousLocation || location}
        render={() => children}
      />
    )
  }
}

// wrap in withRouter
export default withRouter(PendingNavDataLoader)
