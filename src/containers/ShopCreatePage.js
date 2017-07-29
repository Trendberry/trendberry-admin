import React, { Component } from 'react'
import submit from 'redux-form-submit'

import { ShopCreatePage } from 'components'

import { config } from './ShopForm'

class ShopCreatePageContainer extends Component {
  static post({ req, store }) {
    return Promise.all([
      store.dispatch(submit(config, req.body)),
    ])
  }

  render() {
    return <ShopCreatePage />
  }
}

export default ShopCreatePageContainer
