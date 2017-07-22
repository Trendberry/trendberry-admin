export const AUTH_SIGNIN = 'AUTH_SIGNIN'
export const AUTH_SIGNIN_REQUEST = 'AUTH_SIGNIN_REQUEST'
export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS'
export const AUTH_SIGNIN_FAILURE = 'AUTH_SIGNIN_FAILURE'

export const authSigninRequest = (data, resolve, reject) => ({
  type: AUTH_SIGNIN_REQUEST,
  data,
  resolve,
  reject,
})

export const authSigninSuccess = ({ user, token }) => ({
  type: AUTH_SIGNIN_SUCCESS,
  user,
  token,
})

export const authSigninFailure = error => ({
  type: AUTH_SIGNIN_FAILURE,
  error,
})

export const AUTH_USER_READ = 'AUTH_USER_READ'
export const AUTH_USER_READ_REQUEST = 'AUTH_USER_READ_REQUEST'
export const AUTH_USER_READ_SUCCESS = 'AUTH_USER_READ_SUCCESS'
export const AUTH_USER_READ_FAILURE = 'AUTH_USER_READ_FAILURE'

export const authUserReadRequest = (resolve, reject) => ({
  type: AUTH_USER_READ_REQUEST,
  resolve,
  reject,
})

export const authUserReadSuccess = user => ({
  type: AUTH_USER_READ_SUCCESS,
  user,
})

export const authUserReadFailure = error => ({
  type: AUTH_USER_READ_FAILURE,
  error,
})
