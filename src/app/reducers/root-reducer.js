import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  lists: function(state = [], action) {
    return state;
  }
});

export default rootReducer;
