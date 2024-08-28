import { all } from 'redux-saga/effects';
import memberSaga from './memberSaga';

export default function* rootSaga() {
  yield all([memberSaga()]);
}
