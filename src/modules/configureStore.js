import { all, call } from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import auth, { authSaga } from './auth';

const rootReducer = combineReducers({ auth });

function* rootSaga() {
  try {
    yield all([call(authSaga)]);
  } catch (ex) {
    // Handle saga errors
  }
}

export const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default configureStore;
