import React, { Component } from 'react'
import submit from 'redux-form-submit'

import { UserCreatePage } from 'components'

import { config } from './UserForm'

class UserCreatePageContainer extends Component {
  static post({ req, store }) {
    return Promise.all([
      store.dispatch(submit(config, req.body)),
    ])
  }

  render() {
    return <UserCreatePage />
  }
}

export default UserCreatePageContainer
