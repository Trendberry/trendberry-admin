import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import { notificationSend, resourceCreateRequest, resourceUpdateRequest } from 'store/actions'
import { fromForm, fromEntities } from 'store/selectors'
import { createValidator } from 'services/validation'

import { UserForm } from 'components'

const UserFormContainer = props => <UserForm {...props} />

const onSubmit = (values, dispatch) => {
  if (values._id) {
    return dispatch(resourceUpdateRequest('users', values._id, values))
      .then(() => {
        dispatch(notificationSend({
          message: 'User updated',
          options: {
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
            autoHideDuration: 3000,
          },
        }))
      })
  }
  return dispatch(resourceCreateRequest('users', values))
    .then((id) => {
      dispatch(push(`/users/${id}`))
    })
}

const validate = createValidator({
})

const mapStateToProps = (state, { id }) => ({
  initialValues: {
    ...fromEntities.getDetail(state, 'users', id),
    _csrf: fromForm.getCsrfToken(state),
  },
})


export const config = {
  fields: [
    'displayName',
    'firstname',
    'lastName',
    'email',
  ],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(UserFormContainer))
