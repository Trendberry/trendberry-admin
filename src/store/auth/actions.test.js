import * as actions from './actions'

test('authCreateRequest', () => {
  expect(actions.authCreateRequest({ title: 'test' })).toEqual({
    type: actions.AUTH_SIGNIN_REQUEST,
    data: { title: 'test' },
  })
})

test('authCreateSuccess', () => {
  expect(actions.authCreateSuccess({ id: 1, title: 'test' })).toEqual({
    type: actions.AUTH_SIGNIN_SUCCESS,
    detail: { id: 1, title: 'test' },
  })
})

test('authCreateFailure', () => {
  expect(actions.authCreateFailure('error')).toEqual({
    type: actions.AUTH_SIGNIN_FAILURE,
    error: 'error',
  })
})

test('authListReadRequest', () => {
  expect(actions.authListReadRequest({ fields: 'test' })).toEqual({
    type: actions.AUTH_LIST_READ_REQUEST,
    params: { fields: 'test' },
  })
})

test('authListReadSuccess', () => {
  expect(actions.authListReadSuccess([1, 2, 3])).toEqual({
    type: actions.AUTH_LIST_READ_SUCCESS,
    list: [1, 2, 3],
  })
})

test('authListReadFailure', () => {
  expect(actions.authListReadFailure('error')).toEqual({
    type: actions.AUTH_LIST_READ_FAILURE,
    error: 'error',
  })
})

test('authDetailReadRequest', () => {
  expect(actions.authDetailReadRequest(1)).toEqual({
    type: actions.AUTH_DETAIL_READ_REQUEST,
    needle: 1,
  })
})

test('authDetailReadSuccess', () => {
  expect(actions.authDetailReadSuccess(1, { id: 1, title: 'test' })).toEqual({
    type: actions.AUTH_DETAIL_READ_SUCCESS,
    needle: 1,
    detail: { id: 1, title: 'test' },
  })
})

test('authDetailReadFailure', () => {
  expect(actions.authDetailReadFailure(1, 'error')).toEqual({
    type: actions.AUTH_DETAIL_READ_FAILURE,
    needle: 1,
    error: 'error',
  })
})

test('authUpdateRequest', () => {
  expect(actions.authUpdateRequest(1, { title: 'test' })).toEqual({
    type: actions.AUTH_UPDATE_REQUEST,
    needle: 1,
    data: { title: 'test' },
  })
})

test('authUpdateSuccess', () => {
  expect(actions.authUpdateSuccess(1, { id: 1, title: 'test' })).toEqual({
    type: actions.AUTH_UPDATE_SUCCESS,
    needle: 1,
    detail: { id: 1, title: 'test' },
  })
})

test('authUpdateFailure', () => {
  expect(actions.authUpdateFailure(1, 'error')).toEqual({
    type: actions.AUTH_UPDATE_FAILURE,
    needle: 1,
    error: 'error',
  })
})

test('authDeleteRequest', () => {
  expect(actions.authDeleteRequest(1)).toEqual({
    type: actions.AUTH_DELETE_REQUEST,
    needle: 1,
  })
})

test('authDeleteSuccess', () => {
  expect(actions.authDeleteSuccess(1)).toEqual({
    type: actions.AUTH_DELETE_SUCCESS,
    needle: 1,
  })
})

test('authDeleteFailure', () => {
  expect(actions.authDeleteFailure(1, 'error')).toEqual({
    type: actions.AUTH_DELETE_FAILURE,
    needle: 1,
    error: 'error',
  })
})
