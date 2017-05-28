import axios from 'axios';
import { API_URL } from '../config/config';
import {
  FETCH_LISTS,
  FETCH_LIST
} from './types';

const user = JSON.parse(localStorage.getItem('user'));
let headers = {};
if (user) {
  headers = {
    authorization: user.token || ''
  };
}

export const fetchLists = () => {
  return async (dispatch) => {
    var res = await axios.get(`${API_URL}/check-lists`, {headers});
    dispatch({
      type: FETCH_LISTS,
      payload: res.data.data
    });
  };
};


export const fetchList = (id) => {
  return async (dispatch) => {
    var res = await axios.get(`${API_URL}/check-lists/${id}`, {headers});
    dispatch(({
      type: FETCH_LIST,
      payload: res.data.data
    }));
  };
};