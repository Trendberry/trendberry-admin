import React, { Component } from 'react'
import submit from 'redux-form-submit'

import { CategoryCreatePage } from 'components'

import { config } from './CategoryForm'

class CategoryCreatePageContainer extends Component {
  static post({ req, store }) {
    return Promise.all([
      store.dispatch(submit(config, req.body)),
    ])
  }

  render() {
    return <CategoryCreatePage />
  }
}

export default CategoryCreatePageContainer
