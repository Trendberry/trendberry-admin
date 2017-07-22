import React, { Component } from 'react'
import PropTypes from 'prop-types'
import submit from 'redux-form-submit'
import Helmet from 'react-helmet'
import { categoryDetailReadRequest } from 'store/actions'

import { CategoryCreatePage } from 'components'

import { config } from './CategoryForm'

class CategoryCreatePageContainer extends Component {
  static post({ req, store, match }) {
    return Promise.all([
      store.dispatch(submit(config, req.body)),
    ])
  }

  render() {
    return <CategoryCreatePage />
  }
}

export default CategoryCreatePageContainer
