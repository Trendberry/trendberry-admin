import React, { Component } from 'react'
import submit from 'redux-form-submit'

import { VendorCreatePage } from 'components'

import { config } from './VendorForm'

class VendorCreatePageContainer extends Component {
  static post({ req, store }) {
    return Promise.all([
      store.dispatch(submit(config, req.body)),
    ])
  }

  render() {
    return <VendorCreatePage />
  }
}

export default VendorCreatePageContainer
