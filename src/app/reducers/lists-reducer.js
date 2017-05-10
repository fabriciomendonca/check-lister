import {
  FETCH_LISTS,
  FETCH_LIST
} from '../actions/types.js';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return {
        lists: action.payload
      };
    case FETCH_LIST:
      return {
        ...sate,
        selected: action.payload
      };
  }

  return state;
};