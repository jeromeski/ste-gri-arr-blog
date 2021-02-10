const INIT_STATE = false

export const authReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case 'IS_AUTH':
      return action.payload;
    default:
      return state;
  }
}