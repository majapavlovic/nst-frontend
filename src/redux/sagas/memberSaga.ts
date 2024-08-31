import { call, put, all, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  fetchMembersSuccess,
  fetchMembersFailure,
  addMemberSuccess,
  addMemberFailure,
} from '../actions/membersActions';
import api from '../../config/axiosConfig';
import { MemberRequest } from '../../types';
import { ADD_MEMBER_REQUEST, FETCH_MEMBERS_REQUEST } from '../../types/actionTypes';

function* fetchMembers(): SagaIterator {
  try {
    const response = yield call(api.get, '/member');
    yield put(fetchMembersSuccess(response.data));
    console.log(response);
  } catch (error: any) {
    yield put(fetchMembersFailure(error.message));
  }
}

function* addMember(action: { type: string; payload: MemberRequest }): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.post, '/member', payload);
    yield put(addMemberSuccess(response));
  } catch (error: any) {
    yield put(addMemberFailure(error.message));
  }
}


export function* memberSaga(): SagaIterator {
  yield all([
    takeLatest(FETCH_MEMBERS_REQUEST, fetchMembers),
    takeLatest(ADD_MEMBER_REQUEST, addMember),
  ]);


}

export default memberSaga;
