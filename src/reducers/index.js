import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userAuthReducer from './userAuthReducer';
import dataStoreReducer from './dataStoreReducer';
import dataPurchaseReducer from './dataPurchaseReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  auth: userAuthReducer,
  dataStore: dataStoreReducer,
  dataPurchase: dataPurchaseReducer
});

export default rootReducer;