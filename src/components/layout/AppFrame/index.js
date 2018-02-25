import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { matchRoutes } from 'react-router-config'
import Link from 'react-router-dom/Link'
import { renderRoutes } from 'react-router-config'
import { withStyles, withTheme } from 'material-ui/styles'
import MuiAppBar from 'material-ui/AppBar'
import MuiIconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import MuiToolbar from 'material-ui/Toolbar'
import MuiAvatar from 'material-ui/Avatar'
import MuiTypography from 'material-ui/Typography'
import MuiMenu from 'material-ui/Menu'
import MuiMenuItem from 'material-ui/Menu/MenuItem'
import { AppContent, Notifications } from 'components'
import { AppDrawer } from 'containers'
import { fromAuth, fromStatus } from 'store/selectors'
import { authSignoutRequest } from 'store/actions'

function getTitle(routes, pathname) {
  const branch = matchRoutes(routes, pathname)
  for (let i = branch.length - 1; i >= 0; i -= 1) {
    if (Object.prototype.hasOwnProperty.call(branch[i].route, 'title')) {
      return branch[i].route.title
    }
  }

  return null
}

const styleSheet = theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      lineHeight: '1.2',
      overflowX: 'hidden',
      overflowY: 'scroll',
      // WebkitFontSmoothing: 'antialiased', // Antialiasing.
      // MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    '.enter': {
      height: 0,
      opacity: 0,
      transform: 'translateY(100px)',
      pointerEvents: 'none',
    },
    '.enter.enter-active': {
      opacity: 1,
      transition: 'all .275s .275s cubic-bezier(0.0, 0.0, 0.2, 1)',
      transform: 'translateY(0)',
    },
    '.leave': {
      height: 0,
      opacity: 1,
      transform: 'translateY(0)',
      pointerEvents: 'none',
    },
    '.leave.leave-active': {
      opacity: 0,
      transition: 'all .275s cubic-bezier(0.4, 0.0, 0.2, 1)',
      transform: 'translateY(100px)',
    },
    '#nprogress': {
      pointerEvents: 'none',
    },
    '#nprogress .bar': {
      background: theme.palette.accent.A100,
      position: 'fixed',
      zIndex: 9999,
      top: 0,
      left: 0,
      width: '100%',
      height: 2,
    },
    '#nprogress .peg': {
      display: 'block',
      position: 'absolute',
      right: 0,
      width: 100,
      height: '100%',
      boxShadow: `0 0 10px ${theme.palette.accent.A100}, 0 0 5px ${theme.palette.accent.A100}`,
      opacity: 1,
      transform: 'rotate(3deg) translate(0px, -4px)',
    },
    '#nprogress .spinner': {
      display: 'block',
      position: 'fixed',
      zIndex: 9999,
      top: 15,
      right: 15,
    },
    '#nprogress .spinner-icon': {
      width: 18,
      height: 18,
      boxSizing: 'border-box',
      border: 'solid 2px transparent',
      borderTopColor: '#29d',
      borderLeftColor: '#29d',
      borderRadius: '50%',
      animation: 'nprogress-spinner 400ms linear infinite',
    },
    '.nprogress-custom-parent': {
      overflow: 'hidden',
      position: 'relative',
    },
    '.nprogress-custom-parent #nprogress .spinner, .nprogress-custom-parent #nprogress .bar': {
      position: 'absolute',
    },
    '@keyframes nprogress-spinner': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
  root: {
    alignItems: 'stretch',
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  grow: {
    flex: '1 1 auto',
  },
  drawer: {
    width: theme.spacing.unit * 30,
  },
  userMenuButton: {
    marginRight: -4,
  },
  userMenu: {
    marginLeft: 12,
    marginTop: -12,
  },
  userName: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 48,
    marginTop: -4,
    outline: 'none',
    padding: '0 16px',
    width: '100%',
  },
  userDisplayName: {
    marginRight: 16,
  },
})

class AppFrame extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    user: PropTypes.object,
    signOut: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    title: PropTypes.string,
    user: PropTypes.object.isRequired,
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

  handleSignOut = () => {
    this.props.signOut()
  }

  render() {
    const { location, route, classes, user, ...other } = this.props
    const { drawerOpen, userMenuAnchorEl, userMenuOpen } = this.state
    const title = getTitle(route.routes, location.pathname) || route.title || null

    return (
      <div className={classes.root}>
        <MuiAppBar position="fixed">
          <MuiToolbar>
            <MuiIconButton onClick={this.handleDrawerToggle} className={classes.menuButton} color="inherit">
              <MenuIcon />
            </MuiIconButton>
            {title && <MuiTypography variant="title" color="inherit">{title}</MuiTypography>}
            <div className={classes.grow} />
            <MuiIconButton
              aria-owns="user-menu"
              aria-haspopup="true"
              disableRipple
              onClick={this.handleRequestUserMenuOpen}
              classes={{
                root: classes.userMenuButton,
              }}
            >
              <MuiAvatar alt={user.displayName} src="/avatar.png" />
            </MuiIconButton>
            <MuiMenu
              id="user-menu"
              anchorEl={userMenuAnchorEl}
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              transformOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              classes={{
                paper: classes.userMenu,
              }}
              open={userMenuOpen}
              onClose={this.handleRequestUserMenuClose}
            >
              <div className={classes.userName}>
                <MuiTypography type="subheading" color="inherit" classes={{ root: classes.userDisplayName }}>{user.displayName}</MuiTypography> <MuiAvatar alt={user.displayName} src="/avatar.png" />
              </div>
              <MuiMenuItem onClick={this.handleRequestUserMenuClose} component={Link} to={`/users/${user._id}`}>Profile</MuiMenuItem>
              <MuiMenuItem onClick={this.handleSignOut}>Log out</MuiMenuItem>
            </MuiMenu>
          </MuiToolbar>
        </MuiAppBar>
        <AppDrawer
          className={classes.drawer}
          onRequestClose={this.handleDrawerClose}
          drawerOpen={drawerOpen}
        />
        <AppContent>
          {renderRoutes(route.routes)}
        </AppContent>
        {<Notifications />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: fromStatus.isLoading(state),
  user: fromAuth.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  signOut: () => {
    return dispatch(authSignoutRequest())
      .then(() => {
        dispatch(push('/signin'))
      })
  },
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet, { name: 'AppFrame' })(AppFrame))
