import React, { Component } from 'react'
import PropTypes from 'prop-types'
import submit from 'redux-form-submit'
import { resourceDetailReadRequest } from 'store/actions'

import { VendorUpdatePage } from 'components'

import { config } from './VendorForm'

class VendorUpdatePageContainer extends Component {
  static post({ req, store, match }) {
    return Promise.all([
      store.dispatch(submit(config, req.body)),
      this.get({ store, match }),
    ])
  }

  static get({ store, match }) {
    return store.dispatch(resourceDetailReadRequest('vendors', match.params.id))
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    return <VendorUpdatePage id={this.props.match.params.id} />
  }
}

export default VendorUpdatePageContainer
