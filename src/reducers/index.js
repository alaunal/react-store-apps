import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import nameReducer from './nameReducer';
import userAuthReducer from './userAuthReducer';
import dataStoreReducer from './dataStoreReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  name: nameReducer,
  auth: userAuthReducer,
  dataStore: dataStoreReducer
});

export default rootReducer;