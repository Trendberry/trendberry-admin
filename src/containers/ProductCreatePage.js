import React, { Component } from 'react'
import submit from 'redux-form-submit'

import { ProductCreatePage } from 'components'

import { config } from './ProductForm'

class ProductCreatePageContainer extends Component {
  static post({ req, store }) {
    return Promise.all([
      store.dispatch(submit(config, req.body)),
    ])
  }

  render() {
    return <ProductCreatePage />
  }
}

export default ProductCreatePageContainer
