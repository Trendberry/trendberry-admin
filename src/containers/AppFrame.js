import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { matchRoutes } from 'react-router-config'
import { fromAuth, fromStatus } from 'store/selectors'
import { AppFrame } from 'components'

function getTitle(routes, pathname) {
  const branch = matchRoutes(routes, pathname)
  for (let i = branch.length - 1; i >= 0; i -= 1) {
    if (Object.prototype.hasOwnProperty.call(branch[i].route, 'title')) {
      return branch[i].route.title
    }
  }

  return null
}

class AppFrameContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    user: PropTypes.object,
  }

  state = {
    drawerOpen: false,
    userMenuAnchorEl: undefined,
    userMenuOpen: false,
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false })
  }

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  handleToggleShade = () => {
    // this.props.dispatch({ type: 'TOGGLE_THEME_SHADE' })
  }

  handleRequestUserMenuOpen = (event) => {
    this.setState({ userMenuOpen: true, userMenuAnchorEl: event.currentTarget })
  }

  handleRequestUserMenuClose = () => {
    this.setState({ userMenuOpen: false })
  }

  render() {
    const { location, route, ...other } = this.props
    const title = getTitle(route.routes, location.pathname) || route.title || null

    return (
      <AppFrame
        title={title}
        handleDrawerToggle={this.handleDrawerToggle}
        handleDrawerClose={this.handleDrawerClose}
        drawerOpen={this.state.drawerOpen}
        route={route}
        userMenuAnchorEl={this.state.userMenuAnchorEl}
        userMenuOpen={this.state.userMenuOpen}
        handleRequestUserMenuOpen={this.handleRequestUserMenuOpen}
        handleRequestUserMenuClose={this.handleRequestUserMenuClose}
        {...other}
      />
    )
  }
}

const mapStateToProps = state => ({
  loading: fromStatus.isLoading(state),
  user: fromAuth.getUser(state),
})

export default connect(mapStateToProps)(AppFrameContainer)
