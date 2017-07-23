import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import NavLink from 'react-router-dom/NavLink'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth'
import Toolbar from 'material-ui/Toolbar'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import IconCategories from 'material-ui-icons/Folder'
import IconDashboard from 'material-ui-icons/Dashboard'
import IconProducts from 'material-ui-icons/LocalMall'
import IconSettings from 'material-ui-icons/Settings'
import IconShops from 'material-ui-icons/Store'
import IconUsers from 'material-ui-icons/People'
import IconVendors from 'material-ui-icons/Stars'
import IconInsertDriveFile from 'material-ui-icons/InsertDriveFile'

export const styleSheet = createStyleSheet('AppDrawer', theme => ({
  paper: {
    width: theme.spacing.unit * 30,
    backgroundColor: theme.palette.background.paper,
    '&::-webkit-scrollbar': {
      background: 'transparent',
      width: theme.spacing.unit,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.action.disabled,
      height: theme.spacing.unit * 7,
      border: 'none',
      display: 'none',
    },
    '&:hover::-webkit-scrollbar-thumb': {
      display: 'block',
    },
  },
  title: {
    color: theme.palette.text.secondary,
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary[500],
    },
  },
  listItem: {
    color: theme.palette.text.primary,
    '&.active $listItemIcon': {
      color: theme.palette.accent.A200,
    },
  },
  listItemIcon: {
    color: theme.palette.text.secondary,
  },
  [theme.breakpoints.up('lg')]: {
    listItem: {
      paddingLeft: theme.spacing.unit * 3,
    },
    paper: {
      backgroundColor: 'transparent',
      borderRight: '0 !important',
      // flex: '0 0 auto',
      height: `calc(100vh - ${theme.spacing.unit * 8}px)`,
      top: theme.spacing.unit * 8,
      // zIndex: theme.zIndex.menu,
    },
    toolbar: {
      display: 'none',
    },
  },
}))


const links = [
  {
    to: '/',
    label: 'Dashboard',
    exact: true,
    icon: IconDashboard,
  },
  {
    to: '/categories',
    label: 'Categories',
    icon: IconCategories,
  },
  {
    to: '/shops',
    label: 'Shops',
    icon: IconShops,
  },
  {
    to: '/vendors',
    label: 'Vendors',
    icon: IconVendors,
  },
  {
    to: '/products',
    label: 'Products',
    icon: IconProducts,
  },
  {
    to: '/users',
    label: 'Users',
    icon: IconUsers,
  },
  {
    to: '/pages',
    label: 'Pages',
    icon: IconInsertDriveFile,
  },
]

const AppDrawer = ({ classes, className, onRequestClose, drawerOpen, width }) => {
  const drawerDocked = isWidthUp('lg', width)

  return (
    <Drawer
      className={className}
      classes={{
        paper: classes.paper,
      }}
      docked={drawerDocked}
      open={drawerDocked || drawerOpen}
      onRequestClose={onRequestClose}
    >
      <div className={classes.nav}>
        <Toolbar className={classes.toolbar}>
          <NavLink className={classes.title} to="/" onClick={onRequestClose}>
            <Typography type="title">Trendberry</Typography>
          </NavLink>
          <Divider absolute />
        </Toolbar>
        <List>
          {links.map(link => (
            <ListItem key={link.to} to={link.to} component={NavLink} onClick={onRequestClose} className={classes.listItem} exact={link.exact} button>
              <ListItemIcon className={classes.listItemIcon}><link.icon /></ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem to="/settings" component={NavLink} onClick={onRequestClose} className={classes.listItem} button>
            <ListItemIcon className={classes.listItemIcon}><IconSettings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onRequestClose: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(
  withWidth({ resizeInterval: 16.67 }),
  withStyles(styleSheet)
)(AppDrawer)
