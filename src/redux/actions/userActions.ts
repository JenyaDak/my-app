import {
  SET_SHOW_NOTIFICATION,
  SET_HIDE_NOTIFICATION,
  SET_AUTHENTICATED,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_UNAUTHENTICATED,
  SET_ERRORS,
} from '../types';
import axios from 'axios';
import Cookies from 'js-cookie';

type UserData = {
  password: string;
  username: string;
};

export const loginUser = (userData: UserData) => (dispatch: any) => {
  dispatch({ type: LOADING_UI });

  var data = new FormData();
  data.append('password', userData.password);
  data.append('sub_tenant_id', 'company');
  data.append('username', userData.username);

  var config = {
    method: 'post',
    url: 'https://poc.cybellum.com/api/login',
    data: data,
  };

  axios(config as any)
    .then(function (response) {
      Cookies.set('token', response.data.data.access_token, { expires: 7 });

      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({
        type: SET_SHOW_NOTIFICATION,
        payload: {
          type: 'success',
          message: 'You are logged in – everything Is fine!',
        },
      });
    })
    .catch(function (error) {
      dispatch({ type: SET_ERRORS, error });
      dispatch({
        type: SET_SHOW_NOTIFICATION,
        payload: {
          message: 'Login failed',
          type: 'error',
        },
      });
    });
};

export const logoutUser = () => (dispatch: any) => {
  Cookies.remove('token');

  dispatch({
    type: SET_UNAUTHENTICATED,
  });

  window.location.href = '/login';
};

export const setShowNotification = () => (dispatch: any) => {
  dispatch({
    type: SET_SHOW_NOTIFICATION,
    payload: {},
  });
};

export const setHideNotification = () => (dispatch: any) => {
  dispatch({
    type: SET_HIDE_NOTIFICATION,
  });
};
