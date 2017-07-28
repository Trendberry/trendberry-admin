import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import { notificationSend, resourceCreateRequest, resourceUpdateRequest } from 'store/actions'
import { fromForm, fromEntities } from 'store/selectors'
import { createValidator, required } from 'services/validation'

import { VendorForm } from 'components'

const VendorFormContainer = props => <VendorForm {...props} />

const onSubmit = (values, dispatch) => {
  if (values._id) {
    return dispatch(resourceUpdateRequest('vendors', values._id, values))
      .then(() => {
        dispatch(notificationSend({
          message: 'Vendor updated',
          options: {
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
            autoHideDuration: 3000,
          },
        }))
      })
  }
  return dispatch(resourceCreateRequest('vendors', values))
    .then((id) => {
      dispatch(push(`/vendors/${id}`))
    })
}

const validate = createValidator({
  name: [required],
})

const mapStateToProps = (state, { id }) => ({
  initialValues: {
    ...fromEntities.getDetail(state, 'vendors', id),
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

export default connect(mapStateToProps)(reduxForm(config)(VendorFormContainer))
