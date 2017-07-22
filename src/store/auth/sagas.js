import { take, put, call, fork } from 'redux-saga/effects'
import Cookies from 'universal-cookie'
// import api from 'services/api'
import { isBrowser } from 'config'
import * as actions from './actions'

export function* signinAuth(api, data) {
  try {
    const { user, token } = yield call([api, api.post], '/auth/signin', data)

    if (isBrowser) {
      const cookies = new Cookies()
      cookies.set('token', token)
    }

    yield put(actions.authSigninSuccess({ user, token }))
  } catch (e) {
    yield put(actions.authSigninFailure(e))
  }
}


export function* readAuthUser(api) {
  try {
    const user = yield call([api, api.get], '/users/me')
    yield put(actions.authUserReadSuccess(user))
  } catch (e) {
    yield put(actions.authUserReadFailure(e))
  }
}

export function* watchAuthSigninRequest(api) {
  while (true) {
    const { data } = yield take(actions.AUTH_SIGNIN_REQUEST)
    yield call(signinAuth, api, data)
  }
}

export function* watchAuthUserReadRequest(api) {
  while (true) {
    yield take(actions.AUTH_USER_READ_REQUEST)
    yield call(readAuthUser, api)
  }
}

export default function* ({ api }) {
  yield fork(watchAuthSigninRequest, api)
  yield fork(watchAuthUserReadRequest, api)
}
