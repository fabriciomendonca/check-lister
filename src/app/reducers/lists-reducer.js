import {
  FETCH_LISTS
} from '../actions/types.js';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LISTS:
      return action.payload;
  }

  return state;
}