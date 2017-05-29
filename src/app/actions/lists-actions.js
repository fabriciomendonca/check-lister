import axios from 'axios';
import { API_URL } from '../config/config';
import {
  FETCH_LISTS,
  FETCH_LIST,
  CREATE_LIST,
  CREATE_LIST_ERROR,
  CREATE_TASK,
  CREATE_TASK_ERROR,
  UPDATE_LIST,
  UPDATE_LIST_ERROR
} from './types';

const getHeaders = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  let headers = {};
  if (user) {
    headers = {
      authorization: user.token || ''
    };
  }

  return headers;
} 

export const fetchLists = () => {
  return async (dispatch) => {
    var res = await axios.get(`${API_URL}/check-lists`, {headers: getHeaders()});
    dispatch({
      type: FETCH_LISTS,
      payload: res.data.data
    });
  };
};


export const fetchList = (id) => {
  return async (dispatch) => {
    var res = await axios.get(`${API_URL}/check-lists/${id}`, {headers: getHeaders()});
    dispatch(({
      type: FETCH_LIST,
      payload: res.data.data
    }));
  };
};

export const createList = ({name}) => {
  return async (dispatch) => {
    try {
      const chk = await axios.post(`${API_URL}/check-lists`, {name}, {headers: getHeaders()});

      dispatch({
        type: CREATE_LIST,
        payload: chk.data
      });
    } catch(e) {
      dispatch({
        type: CREATE_LIST_ERROR
      });
    }
  }
}

export const updateList = (props) => {
  return async (dispatch) => {
    try {
      const list = await axios.patch(`${API_URL}/check-lists/${props._id}`, {...props}, { headers: getHeaders() });
      dispatch({
        type: UPDATE_LIST,
        payload: list.data
      });
    } catch (e) {
      dispatch({
        type: UPDATE_LIST_ERROR
      });
    }
  }
}

export const createTask = ({name}, id) => {
  return async (dispatch) => {
    try {
      const task = await axios.post(`${API_URL}/check-lists/${id}`, {name}, {headers: getHeaders()});
      dispatch({
        type: CREATE_TASK,
        payload: {
          task: task.data,
          id
        }
      });
    } catch(e) {
      dispatch({
        type: CREATE_TASK_ERROR
      });
    }
  };
};