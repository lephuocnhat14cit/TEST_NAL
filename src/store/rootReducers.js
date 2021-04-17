import { combineReducers } from 'redux';
import { accountReducer } from 'screens/account/redux';
import { myInfoReducer } from 'screens/main/redux';

const appReducer = combineReducers({
  accountReducer,
  myInfoReducer,
});

export default appReducer;
