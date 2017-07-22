import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router'
import { resourceCreateRequest, resourceUpdateRequest } from 'store/actions'
import { fromForm, fromEntities } from 'store/selectors'
import { createValidator, required } from 'services/validation'

import { ShopForm } from 'components'

const ShopFormContainer = props => <ShopForm {...props} />

const onSubmit = (data, dispatch, state) => {
  if (data._id) {
    return dispatch(resourceUpdateRequest('shops', data._id, data))
  } else {
    return dispatch(resourceCreateRequest('shops', data))
  }
}

const validate = createValidator({
  name: [required],
})

const mapStateToProps = (state, { id }) => ({
  initialValues: {
    ...fromEntities.getDetail(state, 'shops', id),
    _csrf: fromForm.getCsrfToken(state),
  },
})

export const config = {
  form: 'ShopForm',
  fields: [
    'name',
    'description',
    'slug',
    'feedUrl',
    'meta.title',
    'meta.description',
  ],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(ShopFormContainer))
