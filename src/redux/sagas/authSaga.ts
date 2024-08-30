
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginSuccess, loginFailure, loginRequest } from '../actions/authActions';
import { SagaIterator } from 'redux-saga';
import { LOGIN_REQUEST } from '../../types/actionTypes';

function* login(action: any): SagaIterator {
  try {
    const { username, password } = action.payload;
    const response = yield call(axios.post, `${process.env.REACT_APP_API_URL}/auth/sign-in`, { username, password });
    const token = response.data.accessToken;
    localStorage.setItem('accessToken', token);
    yield put(loginSuccess(token));

  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* authSaga(): SagaIterator {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default authSaga;