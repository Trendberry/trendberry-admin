import React from 'react'
import PropTypes from 'prop-types'
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

const AppFrame = ({ classes, route, title, drawerOpen, handleDrawerClose, handleDrawerToggle, user, ...other }) => (
  <div className={classes.root}>
    <MuiAppBar position="fixed">
      <MuiToolbar>
        <MuiIconButton onClick={handleDrawerToggle} className={classes.menuButton} color="contrast">
          <MenuIcon />
        </MuiIconButton>
        {title && <MuiTypography type="title" color="inherit">{title}</MuiTypography>}
        <div className={classes.grow} />
        <MuiIconButton
          aria-owns="user-menu"
          aria-haspopup="true"
          disableRipple
          onClick={other.handleRequestUserMenuOpen}
          classes={{
            root: classes.userMenuButton,
          }}
        >
          <MuiAvatar alt={user.displayName} src="/avatar.png" />
        </MuiIconButton>
        <MuiMenu
          id="user-menu"
          anchorEl={other.userMenuAnchorEl}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          classes={{
            root: classes.userMenu,
          }}
          open={other.userMenuOpen}
          onRequestClose={other.handleRequestUserMenuClose}
        >
          <div className={classes.userName}>
            <MuiTypography type="subheading" color="inherit" classes={{ root: classes.userDisplayName }}>{user.displayName}</MuiTypography> <MuiAvatar alt={user.displayName} src="/avatar.png" />
          </div>
          <MuiMenuItem onClick={other.handleRequestUserMenuClose} component={Link} to={`/users/${user._id}`}>Profile</MuiMenuItem>
          <MuiMenuItem onClick={other.handleSignOut}>Log out</MuiMenuItem>
        </MuiMenu>
      </MuiToolbar>
    </MuiAppBar>
    <AppDrawer
      className={classes.drawer}
      onRequestClose={handleDrawerClose}
      drawerOpen={drawerOpen}
    />
    <AppContent>
      {renderRoutes(route.routes)}
    </AppContent>
    {<Notifications />}
  </div>
)

AppFrame.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
  title: PropTypes.string,
  user: PropTypes.object.isRequired,
}

export default withStyles(styleSheet, {name:'AppFrame'})(AppFrame)
