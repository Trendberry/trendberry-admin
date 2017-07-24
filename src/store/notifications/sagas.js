import { delay } from 'redux-saga'
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export function* notificationSend(payload) {
  if (payload.options && payload.options.autoHideDuration) {
    yield delay(payload.options.autoHideDuration + 420)
  }
  yield put(actions.notificationDismiss(payload.id))
}

export function* watchNotificationSend() {
  while (true) {
    const { payload } = yield take(actions.NOTIFICATION_SEND)
    yield call(notificationSend, payload)
  }
}

export default function* () {
  yield fork(watchNotificationSend)
}
