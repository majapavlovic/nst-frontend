
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginSuccess, loginFailure, loginRequest } from '../actions/authActions';
import { SagaIterator } from 'redux-saga';
import { LOGIN_REQUEST } from '../../types/actionTypes';

function* login(action: any): SagaIterator {
  try {
    const { username, password } = action.payload;
    const response = yield call(axios.post, `${process.env.REACT_APP_API_URL}/auth/sign-in`, { username, password });
    if (response.data.message != null) {
      yield put(loginFailure(response.data.message));
    } else {
      const { accessToken, user } = response.data;
      localStorage.setItem('accessToken', accessToken);
      yield put(loginSuccess(accessToken, user));
    }

  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(loginFailure(error.response.data.message));
    }
    else {
      yield put(loginFailure(error.message));
    }
  }
}

export function* authSaga(): SagaIterator {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default authSaga;