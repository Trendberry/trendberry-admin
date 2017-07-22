import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'
import saga, * as sagas from './sagas'

describe('createAuth', () => {
  const data = { title: 'test' }

  it('calls success', () => {
    const generator = sagas.createAuth(data)
    expect(generator.next().value).toEqual(call(api.post, '/auths', data))
    expect(generator.next(data).value).toEqual(put(actions.authCreateSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createAuth(data)
    expect(generator.next().value).toEqual(call(api.post, '/auths', data))
    expect(generator.throw('test').value).toEqual(put(actions.authCreateFailure('test')))
  })
})

describe('readAuthList', () => {
  it('calls success', () => {
    const data = [1, 2, 3]
    const generator = sagas.readAuthList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/auths', { params: { _limit: 1 } }))
    expect(generator.next(data).value).toEqual(put(actions.authListReadSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readAuthList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/auths', { params: { _limit: 1 } }))
    expect(generator.throw('test').value).toEqual(put(actions.authListReadFailure('test')))
  })
})

describe('readAuthDetail', () => {
  it('calls success', () => {
    const data = { id: 1 }
    const generator = sagas.readAuthDetail(1)
    expect(generator.next().value).toEqual(call(api.get, '/auths/1'))
    expect(generator.next(data).value).toEqual(put(actions.authDetailReadSuccess(1, data)))
  })

  it('calls failure', () => {
    const generator = sagas.readAuthDetail(1)
    expect(generator.next().value).toEqual(call(api.get, '/auths/1'))
    expect(generator.throw('test').value).toEqual(put(actions.authDetailReadFailure(1, 'test')))
  })
})

describe('updateAuth', () => {
  it('calls success', () => {
    const data = { id: 1 }
    const generator = sagas.updateAuth(1, { title: 'foo' })
    expect(generator.next().value).toEqual(call(api.put, '/auths/1', { title: 'foo' }))
    expect(generator.next(data).value).toEqual(put(actions.authUpdateSuccess(1, data)))
  })

  it('calls failure', () => {
    const generator = sagas.updateAuth(1, { title: 'foo' })
    expect(generator.next().value).toEqual(call(api.put, '/auths/1', { title: 'foo' }))
    expect(generator.throw('test').value).toEqual(put(actions.authUpdateFailure(1, 'test')))
  })
})

describe('deleteAuth', () => {
  it('calls success', () => {
    const generator = sagas.deleteAuth(1)
    expect(generator.next().value).toEqual(call(api.delete, '/auths/1'))
    expect(generator.next().value).toEqual(put(actions.authDeleteSuccess(1)))
  })

  it('calls failure', () => {
    const generator = sagas.deleteAuth(1)
    expect(generator.next().value).toEqual(call(api.delete, '/auths/1'))
    expect(generator.throw('test').value).toEqual(put(actions.authDeleteFailure(1, 'test')))
  })
})

test('watchAuthCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchAuthCreateRequest()
  expect(generator.next().value).toEqual(take(actions.AUTH_SIGNIN_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.createAuth, ...Object.values(payload)))
})

test('watchAuthListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchAuthListReadRequest()
  expect(generator.next().value).toEqual(take(actions.AUTH_LIST_READ_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.readAuthList, ...Object.values(payload)))
})

test('watchAuthDetailReadRequest', () => {
  const payload = { needle: 1 }
  const generator = sagas.watchAuthDetailReadRequest()
  expect(generator.next().value).toEqual(take(actions.AUTH_DETAIL_READ_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.readAuthDetail, ...Object.values(payload)))
})

test('watchAuthUpdateRequest', () => {
  const payload = { needle: 1, data: { id: 1 } }
  const generator = sagas.watchAuthUpdateRequest()
  expect(generator.next().value).toEqual(take(actions.AUTH_UPDATE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.updateAuth, ...Object.values(payload)))
})

test('watchAuthDeleteRequest', () => {
  const payload = { needle: 1 }
  const generator = sagas.watchAuthDeleteRequest()
  expect(generator.next().value).toEqual(take(actions.AUTH_DELETE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.deleteAuth, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchAuthCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthListReadRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthDetailReadRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthUpdateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchAuthDeleteRequest))
})
