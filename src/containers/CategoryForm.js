import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import { resourceDetailReadRequest, resourceCreateRequest, resourceUpdateRequest } from 'store/actions'
import { fromForm, fromEntities } from 'store/selectors'
import { createValidator, required } from 'services/validation'

import { CategoryForm } from 'components'

const CategoryFormContainer = (props) => <CategoryForm {...props} />

const onSubmit = (values, dispatch, props) => {
  if (values._id) {
    return dispatch(resourceUpdateRequest('categories', values._id, values))
  } else {
    return dispatch(resourceCreateRequest('categories', values))
      .then((id) => {
        dispatch(push(`/categories/${id}`))
      })
  }
}

const validate = createValidator({
  name: [required],
})

const mapStateToProps = (state, { id }) => ({
  initialValues: {
    ...fromEntities.getDetail(state, 'categories', id),
    _csrf: fromForm.getCsrfToken(state),
  },
})


export const config = {
  fields: [
    'name',
    'description',
    'slug',
    'meta.title',
    'meta.description',
  ],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(CategoryFormContainer))
