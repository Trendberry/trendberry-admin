import { take, put, call, fork } from 'redux-saga/effects'
import Cookies from 'universal-cookie'
// import api from 'services/api'
import { isBrowser } from 'config'
import * as actions from './actions'

export function* signinAuth(api, { data }, { thunk }) {
  try {
    const details = yield call([api, api.post], '/auth/signin', data)

    if (isBrowser) {
      const cookies = new Cookies()
      cookies.set('token', details.token)
    }

    yield put(actions.authSigninSuccess(details, { data }, thunk))
  } catch (e) {
    yield put(actions.authSigninFailure(e, { data }, thunk))
  }
}


export function* readAuthUser(api, payload, { thunk }) {
  try {
    const user = yield call([api, api.get], '/users/me')
    yield put(actions.authUserReadSuccess(user, payload, thunk))
  } catch (e) {
    yield put(actions.authUserReadFailure(e, payload, thunk))
  }
}

export function* watchAuthSigninRequest(api) {
  while (true) {
    const { payload, meta } = yield take(actions.AUTH_SIGNIN_REQUEST)
    yield call(signinAuth, api, payload, meta)
  }
}

export function* watchAuthUserReadRequest(api) {
  while (true) {
    const { payload, meta } = yield take(actions.AUTH_USER_READ_REQUEST)
    yield call(readAuthUser, api, payload, meta)
  }
}

export default function* ({ api }) {
  yield fork(watchAuthSigninRequest, api)
  yield fork(watchAuthUserReadRequest, api)
}
