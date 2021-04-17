// import libs
import { all } from 'redux-saga/effects';

import signInSaga from 'screens/account/sagas/signInSaga';
import mainPageSaga from 'screens/main/sagas/getUserSaga';

export default function* RootSagas() {
  yield all([signInSaga(), mainPageSaga()]);
}
