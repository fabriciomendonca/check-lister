import * as actionTypes from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return {
        ...state,
        authenticated: true
      }
    case actionTypes.UNAUTH_USER:
      return {
        ...state,
        authenticated: false
      }
  }

  return state;
}