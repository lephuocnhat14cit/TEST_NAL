/* eslint-disable camelcase */
// import libs
import { create } from 'apisauce';

const API_URI = process.env.REACT_APP_API_URL;

export const ROUTES = {
  LOGIN: '/login',
  GET_USER: '/users',
};

export const API = create({
  baseURL: API_URI,
});
