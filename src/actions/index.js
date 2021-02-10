import { CHANGE_AUTH } from './types'

export const fetchComments = () => {
  return {
    type: 'FETCH_COMMENTS',
  }
}

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}