import { call, put, all, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  fetchMembersSuccess,
  fetchMembersFailure,
  addMemberSuccess,
  addMemberFailure,
  getMemberSuccess,
  getMemberFailure,
  deleteMemberSuccess,
  deleteMemberFailure,
  updateMemberSuccess,
  updateMemberFailure,
} from '../actions/membersActions';
import api from '../../config/axiosConfig';
import { MemberRequest, UpdateMemberRequest } from '../../types';
import {
  ADD_MEMBER_REQUEST,
  DELETE_MEMBER_REQUEST,
  FETCH_MEMBERS_REQUEST,
  GET_MEMBER_REQUEST,
  UPDATE_MEMBER_REQUEST
} from '../../types/actionTypes';

function* fetchMembers(): SagaIterator {
  try {
    const response = yield call(api.get, '/member');
    yield put(fetchMembersSuccess(response.data));
    console.log(response);
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(fetchMembersFailure(error.response.data.message));
    }
    else {
      yield put(fetchMembersFailure(error.message));
    }
  }
}

function* addMember(action: { type: string; payload: MemberRequest }): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.post, '/member', payload);
    yield put(addMemberSuccess(response));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(addMemberFailure(error.response.data.message));
    }
    else {
      yield put(addMemberFailure(error.message));
    }
  }
}

function* deleteMember(action: { type: string; payload: number }): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.delete, `/member/${payload}`);
    yield put(deleteMemberSuccess(response));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(deleteMemberFailure(error.response.data.message));
    }
    else {
      yield put(deleteMemberFailure(error.message));
    }
  }
}

function* updateMember(action: { type: string; payload: UpdateMemberRequest }): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.put, '/member', payload);
    yield put(updateMemberSuccess(response));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(updateMemberFailure(error.response.data.message));
    }
    else {
      yield put(updateMemberFailure(error.message));
    }
  }
}

function* getMember(action: { type: string; payload: string }): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.get, `/member/${payload}`);
    yield put(getMemberSuccess(response.data));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(getMemberFailure(error.response.data.message));
    }
    else {
      yield put(getMemberFailure(error.message));
    }
  }
}

export function* memberSaga(): SagaIterator {
  yield all([
    takeLatest(FETCH_MEMBERS_REQUEST, fetchMembers),
    takeLatest(ADD_MEMBER_REQUEST, addMember),
    takeLatest(DELETE_MEMBER_REQUEST, deleteMember),
    takeLatest(UPDATE_MEMBER_REQUEST, updateMember),
    takeLatest(GET_MEMBER_REQUEST, getMember),
  ]);
}

export default memberSaga;
