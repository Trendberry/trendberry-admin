import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { fromForm } from 'store/selectors'
import { authSigninRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'


import { SigninForm } from 'components'

const SigninFormContainer = props => <SigninForm {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(authSigninRequest(data, resolve, reject))
})

const validate = createValidator({
  usernameOrEmail: [required],
  password: [required],
})

const mapStateToProps = state => ({
  initialValues: {
    _csrf: fromForm.getCsrfToken(state),
  },
})

export const config = {
  form: 'SigninForm',
  fields: ['usernameOrEmail', 'password'],
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(SigninFormContainer))
