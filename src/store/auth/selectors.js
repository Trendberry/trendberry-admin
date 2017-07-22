export const initialState = {
  user: null,
  token: null,
}

export const getUser = (state = initialState) => state.user || initialState.user
export const getToken = (state = initialState) => state.token || initialState.token
