import axios from 'axios';
import { API_URL } from '../config/config';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './types';

export const signinUp = ({email, password}, type) => {
  return async (dispatch) => {
    try {
      let user = await axios.post(`${API_URL}/users${type === 'Signin' ? '/signin' : ''}`, { email, password });
      localStorage.setItem('user', JSON.stringify(user.data));

      dispatch({
        type: AUTH_USER,
        payload: user.data
      });

    } catch (e) {
      dispatch(authError(e))
    }
  };
};

const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error.message
  };
}

export const signout = () => {
  return (dispatch) => {
    localStorage.removeItem('user');

    dispatch({
      type: UNAUTH_USER
    });
  };
};