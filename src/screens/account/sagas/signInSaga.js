import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../utils/Apis';

import { Types } from '../redux';

// worker Saga: will be fired on SIGN_IN actions
function* signIn(action) {
  try {
    const response = yield call(() => API.post(ROUTES.LOGIN, JSON.stringify(action.loginInfo)));

    if (response.ok) {
      const data = response.data.token;
      console.log(data, 'response');
      // In case: signup request success
      yield put({ type: Types.SIGN_IN_SUCCESS, data });
    } else {
      // In case: signup request failed
      yield put({
        type: Types.SIGN_IN_FAILED,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: Types.SIGN_IN_FAILED });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* signInSaga() {
  yield takeLatest(Types.SIGN_IN, signIn);
}

export default signInSaga;
