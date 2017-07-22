import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Redirect } from 'react-router-dom'
import { AUTH_USER_READ_REQUEST } from 'store/actions'
import { fromAuth } from 'store/selectors'

const PrivateRoutes = ({ location, route, user }) => (
  user !== null ? renderRoutes(route.routes) : (
    <Redirect
      to={{
        pathname: '/signin',
        state: { from: location },
      }}
    />
  )
)

PrivateRoutes.propTypes = {
  location: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  user: PropTypes.object,
}

const mapStateToProps = state => ({
  user: fromAuth.getUser(state, AUTH_USER_READ_REQUEST),
})

export default connect(mapStateToProps)(PrivateRoutes)
