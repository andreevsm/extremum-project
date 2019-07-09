import { createAction, handleActions, handleAction } from 'redux-actions';
import { all, takeLatest } from 'redux-saga/effects';
import { combineReducers } from 'redux';

// Actions

export const sendNicknameRequest = createAction('auth/SEND_NOCKNAME_REQUEST');
export const sendNicknameSuccess = createAction('auth/SEND_NOCKNAME_SUCCESS');
export const sendNicknameFailure = createAction('auth/SEND_NOCKNAME_FAILURE');

// Reducers

const isSending = handleActions(
  {
    [sendNicknameRequest]: () => true,
    [sendNicknameSuccess]: () => false,
    [sendNicknameFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [sendNicknameRequest]: () => null,
    [sendNicknameFailure]: (_, { payload }) => payload,
  },
  false,
);

const nickName = handleAction(
  sendNicknameSuccess,
  (_, { payload }) => payload,
  null,
);

// Selectors

// TODO: write selectors here

// Sagas

function* sendNicknameSaga() {
  yield null;
}

export function* authSaga() {
  yield all([takeLatest(sendNicknameRequest, sendNicknameSaga)]);
}

// Default export

export default combineReducers({ isSending, error, nickName });
