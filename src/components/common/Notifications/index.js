import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Snackbar } from 'containers'

import { notificationDismiss } from 'store/actions'

// This checks to see if object is immutable and properly access it
const getter = (obj, propName) => (obj.get ? obj.get(propName) : obj[propName])

const Notifications = (props) => {
  const { dismiss, notifications } = props

  const renderedNotifications = notifications.map((notification) => {
    const options = getter(notification, 'options')
    const id = getter(notification, 'id')

    console.log(id)

    return (
      <Snackbar
        key={id}
        id={id}
        message={getter(notification, 'message')}
        {...options}
      />
    )
  })

  return (
    <div>{renderedNotifications}</div>
  )
}

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  dismiss: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  notifications: state.get ? state.get('notifications') : state.notifications,
})

const mapDispatchToProps = dispatch => ({
  dismiss: id => dispatch(notificationDismiss(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
