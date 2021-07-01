import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USER,
} from '../constants';

import Axios from 'axios';

export const getUserList = dispatch => {
  dispatch(getUsers());
  Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch(getUsersSuccess(response.data));
    })
    .catch(error => {
      dispatch(getUsersError(error));
      console.log(error);
    });
};

export const addNewUser = (dispatch, data) => {
  dispatch(addUser(data));
};

const getUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

const getUsersSuccess = payload => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload,
  };
};

const getUsersError = error => {
  return {
    type: FETCH_USERS_ERROR,
    error,
  };
};

const addUser = data => {
  return {
    type: ADD_USER,
    data,
  };
};
