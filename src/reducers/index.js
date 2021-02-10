import {combineReducers} from 'redux';

const INIT_STATE = [
  'Hello', 'Hi', 'Bonjour'
];

const postsReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return {
        ...state
      }
    default:
      return state
  }
}

export default combineReducers({
  comments: postsReducer
})