import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
// import shallowEqual from 'recompose/shallowEqual'
import { withRouter } from 'react-router'

export const styleSheet = theme => ({
  content: theme.mixins.gutters({
    paddingBottom: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 10,
    flex: '1 1 100%',
    maxWidth: 1366,
    margin: '0 auto',
  }),
  [theme.breakpoints.up('sm')]: {
    content: {
      paddingTop: theme.spacing.unit * 11,
    },
  },
})

const AppContent = ({ classes, className, children, location }) => (
  <CSSTransitionGroup
    className={classNames(classes.content, className)}
    component="div"
    transitionEnterTimeout={550}
    transitionLeaveTimeout={275}
    transitionName={{
      enter: 'enter',
      enterActive: 'enter-active',
      leave: 'leave',
      leaveActive: 'leave-active',
      appear: 'appear',
      appearActive: 'appear-active',
    }}
  >
    {React.cloneElement(children, {
      location,
      key: location.pathname,
    })}
  </CSSTransitionGroup>
)

AppContent.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  location: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styleSheet, { name: 'AppContent' })(AppContent))
