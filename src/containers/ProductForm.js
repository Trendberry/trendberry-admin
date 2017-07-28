import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import { notificationSend, resourceCreateRequest, resourceUpdateRequest } from 'store/actions'
import { fromForm, fromEntities } from 'store/selectors'
import { createValidator, required } from 'services/validation'

import { ProductForm } from 'components'

const ProductFormContainer = props => <ProductForm {...props} />

const onSubmit = (values, dispatch) => {
  if (values._id) {
    return dispatch(resourceUpdateRequest('products', values._id, values))
      .then(() => {
        dispatch(notificationSend({
          message: 'Product updated',
          options: {
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
            autoHideDuration: 3000,
          },
        }))
      })
  }
  return dispatch(resourceCreateRequest('products', values))
    .then((id) => {
      dispatch(push(`/products/${id}`))
    })
}

const validate = createValidator({
  name: [required],
})

const mapStateToProps = (state, { id }) => ({
  initialValues: {
    ...fromEntities.getDetail(state, 'products', id),
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

export default connect(mapStateToProps)(reduxForm(config)(ProductFormContainer))
