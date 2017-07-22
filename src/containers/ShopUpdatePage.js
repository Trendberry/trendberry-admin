import React, { Component } from 'react'
import PropTypes from 'prop-types'
import submit from 'redux-form-submit'
import Helmet from 'react-helmet'
import { resourceDetailReadRequest } from 'store/actions'

import { ShopUpdatePage } from 'components'

import { config } from './ShopForm'

class ShopUpdatePageContainer extends Component {
  static post({ req, store, match }) {
    return Promise.all([
      store.dispatch(submit(config, req.body)),
      this.get({ store, match }),
    ])
  }

  // static post({ req, store, match }) {
  //   return Promise.all([
  //     store.dispatch(submit('ShopForm')),
  //     store.dispatch(resourceDetailReadRequest('shops', match.params.id)),
  //   ])
  // }


  static get({ store, match }) {
    return store.dispatch(resourceDetailReadRequest('shops', match.params.id))
  }

  render() {
    return <ShopUpdatePage id={this.props.match.params.id} />
  }
}

export default ShopUpdatePageContainer
