import axios from 'axios';
import {
  FETCH_LISTS,
  FETCH_LIST
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


export const fetchList = (id) => {
  return async (dispatch) => {
    var res = await axios.get(`${API_URL}/check-lists/${id}`);
    dispatch(({
      type: FETCH_LIST,
      payload: res.data.data
    }));
  };
};