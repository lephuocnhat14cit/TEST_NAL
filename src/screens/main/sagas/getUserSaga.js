import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../utils/Apis';
import { Types } from '../redux';

function* getUser() {
  try {
    const response = yield call(() => API.get(ROUTES.GET_USER));

    if (response.ok) {
      const { data } = response;
      console.log(data, 'data');
      // In case:  request success
      yield put({ type: Types.GET_USER_SUCCESS, data });
    } else {
      // In case: request failed
      yield put({
        type: Types.GET_USER_FAILED,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: Types.GET_USER_FAILED, error });
  }
}

/*
  Starts get Q&A list on each dispatched `GET_USER` action.
*/
function* getUserSaga() {
  yield takeLatest(Types.GET_USER, getUser);
}

export default getUserSaga;
