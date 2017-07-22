import { initialState } from './selectors'
import { SET_DEVICE } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      return {
        ...state,
        device: action.device,
      }
    default:
      return state
  }
}
