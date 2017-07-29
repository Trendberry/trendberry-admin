export const AUTH_SIGNIN = 'AUTH_SIGNIN'
export const AUTH_SIGNIN_REQUEST = 'AUTH_SIGNIN_REQUEST'
export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS'
export const AUTH_SIGNIN_FAILURE = 'AUTH_SIGNIN_FAILURE'

export const authSigninRequest = data => ({
  type: AUTH_SIGNIN_REQUEST,
  payload: { data },
  meta: {
    thunk: 'AuthSignIn',
  },
})

export const authSigninSuccess = (details, request, thunk) => ({
  type: AUTH_SIGNIN_SUCCESS,
  payload: details,
  meta: {
    request,
    thunk,
  },
})

export const authSigninFailure = (error, request, thunk) => ({
  type: AUTH_SIGNIN_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
  },
})

export const AUTH_USER_READ = 'AUTH_USER_READ'
export const AUTH_USER_READ_REQUEST = 'AUTH_USER_READ_REQUEST'
export const AUTH_USER_READ_SUCCESS = 'AUTH_USER_READ_SUCCESS'
export const AUTH_USER_READ_FAILURE = 'AUTH_USER_READ_FAILURE'

export const authUserReadRequest = () => ({
  type: AUTH_USER_READ_REQUEST,
  payload: {},
  meta: {
    thunk: 'AuthUserRead',
  },
})

export const authUserReadSuccess = (user, request, thunk) => ({
  type: AUTH_USER_READ_SUCCESS,
  payload: user,
  meta: {
    request,
    thunk,
  },
})

export const authUserReadFailure = (error, request, thunk) => ({
  type: AUTH_USER_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
  },
})
