import axios from 'axios';
import {
  FETCH_LISTS
} from './types';

const API_URL = 'https://secret-headland-43267.herokuapp.com';

export const fetchLists = () => {
  return async (dispatch) => {
    var res = await axios.get(`${API_URL}/check-lists`);
    dispatch({
      type: FETCH_LISTS,
      payload: res.data.data
    });
  };
};
