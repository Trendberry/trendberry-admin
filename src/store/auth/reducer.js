import { initialState } from './selectors'
import {
  AUTH_SIGNIN_SUCCESS,
  AUTH_USER_READ_SUCCESS,
} from './actions'


export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token,
      }

    case AUTH_USER_READ_SUCCESS:
      return {
        ...state,
        user: action.user,
      }

    default:
      return state
  }
}
