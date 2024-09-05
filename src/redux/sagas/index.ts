import { all } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import { memberSaga } from './memberSaga';
import academicTitleSaga from './academicTitleSaga';
import educationTitleSaga from './educationTitleSaga';
import scientificFieldSaga from './scientificFieldSaga';
import departmentSaga from './departmentSaga';
import subjectSaga from './subjectSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    memberSaga(),
    academicTitleSaga(),
    educationTitleSaga(),
    scientificFieldSaga(),
    departmentSaga(),
    subjectSaga()
  ]);
}