import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import NavLink from 'react-router-dom/NavLink'
import { withStyles } from 'material-ui/styles'
import MuiList, { ListItem as MuiListItem, ListItemText as MuiListItemText, ListItemIcon as MuiListItemIcon } from 'material-ui/List'
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth'
import MuiToolbar from 'material-ui/Toolbar'
import MuiDrawer from 'material-ui/Drawer'
import MuiTypography from 'material-ui/Typography'
import MuiDivider from 'material-ui/Divider'
import MuiIconCategories from 'material-ui-icons/Folder'
import MuiIconDashboard from 'material-ui-icons/Dashboard'
import MuiIconProducts from 'material-ui-icons/LocalMall'
import MuiIconSettings from 'material-ui-icons/Settings'
import MuiIconShops from 'material-ui-icons/Store'
import MuiIconUsers from 'material-ui-icons/People'
import MuiIconVendors from 'material-ui-icons/Stars'
import MuiIconPages from 'material-ui-icons/InsertDriveFile'
import MuiIconImport from 'material-ui-icons/LibraryAdd'

export const styleSheet = theme => ({
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
    '&:hover': {
      backgroundColor: theme.palette.text.lightDivider,
    },
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
})


const links = [
  {
    to: '/',
    label: 'Dashboard',
    exact: true,
    icon: MuiIconDashboard,
  },
  {
    to: '/products',
    label: 'Products',
    icon: MuiIconProducts,
  },
  {
    to: '/categories',
    label: 'Categories',
    icon: MuiIconCategories,
  },
  {
    to: '/vendors',
    label: 'Vendors',
    icon: MuiIconVendors,
  },
  {
    to: '/shops',
    label: 'Shops',
    icon: MuiIconShops,
  },
  {
    to: '/users',
    label: 'Users',
    icon: MuiIconUsers,
  },
  {
    to: '/pages',
    label: 'Pages',
    icon: MuiIconPages,
  },
  {
    to: '/import',
    label: 'Import',
    icon: MuiIconImport,
  },
]

const AppDrawer = ({ classes, className, onRequestClose, drawerOpen, width }) => {
  const drawerDocked = isWidthUp('lg', width)

  return (
    <MuiDrawer
      className={className}
      classes={{
        paper: classes.paper,
      }}
      type={drawerDocked ? 'permanent' : 'temporary'}
      open={drawerDocked || drawerOpen}
    >
      <div className={classes.nav}>
        <MuiToolbar className={classes.toolbar}>
          <NavLink className={classes.title} to="/" onClick={onRequestClose}>
            <MuiTypography type="title">Trendberry</MuiTypography>
          </NavLink>
          <MuiDivider absolute />
        </MuiToolbar>
        <MuiList component="div">
          {links.map(link => (
            <MuiListItem key={link.to} to={link.to} exact={link.exact} component={NavLink} onClick={onRequestClose} className={classes.listItem}>
              <MuiListItemIcon className={classes.listItemIcon}><link.icon /></MuiListItemIcon>
              <MuiListItemText primary={link.label} />
            </MuiListItem>
          ))}
        </MuiList>
        <MuiDivider />
        <MuiList component="div">
          <MuiListItem to="/settings" component={NavLink} onClick={onRequestClose} className={classes.listItem}>
            <MuiListItemIcon className={classes.listItemIcon}><MuiIconSettings /></MuiListItemIcon>
            <MuiListItemText primary="Settings" />
          </MuiListItem>
        </MuiList>
      </div>
    </MuiDrawer>
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
  withStyles(styleSheet, { name: 'AppDrawer' })
)(AppDrawer)
