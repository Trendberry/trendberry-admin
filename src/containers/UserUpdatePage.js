import React, { Component } from 'react'
import PropTypes from 'prop-types'
import submit from 'redux-form-submit'
import { resourceDetailReadRequest } from 'store/actions'

import { UserUpdatePage } from 'components'

import { config } from './UserForm'

class UserUpdatePageContainer extends Component {
  static post({ req, store, match }) {
    return Promise.all([
      store.dispatch(submit(config, req.body)),
      this.get({ store, match }),
    ])
  }

  static get({ store, match }) {
    return store.dispatch(resourceDetailReadRequest('users', match.params.id))
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    return <UserUpdatePage id={this.props.match.params.id} />
  }
}

export default UserUpdatePageContainer
