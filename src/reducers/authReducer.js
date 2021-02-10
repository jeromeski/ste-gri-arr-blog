import {CHANGE_AUTH} from '../actions/types';

const INIT_STATE = false

export const authReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}