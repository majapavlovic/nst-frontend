import { all } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import { memberSaga } from './memberSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    memberSaga(),
  ]);
}