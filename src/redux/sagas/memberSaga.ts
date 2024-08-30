import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import {
  fetchMembersSuccess,
  fetchMembersFailure,
} from '../actions/membersActions';
import { FETCH_MEMBERS_REQUEST } from '../../types/actionTypes';
import api from '../../config/axiosConfig';

const fetchMembersApi = () => {
  return axios.get<{ id: number; firstName: string, lastName: string }[]>(`${process.env.REACT_APP_API_URL}/member`);
};

function* fetchMembers(): SagaIterator {
  try {
    const response = yield call(api.get, '/member');
    yield put(fetchMembersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchMembersFailure(error.message));
  }
}

export function* memberSaga(): SagaIterator {
  yield takeLatest(FETCH_MEMBERS_REQUEST, fetchMembers);
}

export default memberSaga;
