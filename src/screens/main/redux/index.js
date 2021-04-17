// import libs
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Define action creators
export const { Types, Creators } = createActions({
  getUser: null,
  getUserSuccess: null,
  getUserFailed: null,
});

// Initial state
export const INITIAL_STATE = Immutable({
  dataUser: [],
});

const getUser = (state, action) => {
  return state.merge({
    isProcessing: true,
    type: action?.type,
  });
};

const getUserSuccess = (state, action) => {
  return state.merge({
    isProcessing: false,
    type: action?.type,
    dataUser: action.data,
  });
};

const getUserFailed = (state, action) => {
  return state.merge({
    isProcessing: false,
    type: action?.type,
  });
};

// Assign handler to types.
const HANDLERS = {
  [Types.GET_USER]: getUser,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
  [Types.GET_USER_FAILED]: getUserFailed,
};

// Create reducers by pass state and handlers
export const myInfoReducer = createReducer(INITIAL_STATE, HANDLERS);
