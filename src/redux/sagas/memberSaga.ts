import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import {
  fetchMembersRequest,
  fetchMembersSuccess,
  fetchMembersFailure,
} from '../reducers/memberReducer';

const fetchMembersApi = () => {
  return axios.get<{ id: number; firstName: string, lastName: string }[]>('http://localhost:8080/nst/api/v1/member');
};

function* fetchMembers(): SagaIterator {
  try {
    const response = yield call(fetchMembersApi);
    yield put(fetchMembersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchMembersFailure(error.message));
  }
}

function* memberSaga(): SagaIterator {
  yield takeEvery(fetchMembersRequest.type, fetchMembers);
}

export default memberSaga;
