import { FETCH_COMMENTS } from '../actions/types';

const INIT_STATE = [
  'Hello', 'Hi', 'Bonjour'
];

export const commentsReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case FETCH_COMMENTS:
      return {
        ...state
      }
    default:
      return state
  }
}