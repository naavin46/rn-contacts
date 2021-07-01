import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USER,
} from '../constants';

const initialState = {
  users: {},
  isFetching: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: {},
        isFetching: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isFetching: false,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        users: {},
        isFetching: false,
        error: true,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default userReducer;
