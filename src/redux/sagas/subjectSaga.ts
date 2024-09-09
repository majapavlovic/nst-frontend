import { SagaIterator } from "redux-saga";
import { call, put, takeLatest, all } from "redux-saga/effects";
import api from "../../config/axiosConfig";
import {
  addSubjectFailure,
  addSubjectSuccess,
  deleteSubjectFailure,
  deleteSubjectSuccess,
  fetchSubjectsFailure,
  fetchSubjectsSuccess,
  getSubjectFailure,
  getSubjectSuccess,
  updateSubjectFailure,
  updateSubjectSuccess,
} from "../actions/subjectActions";
import {
  ADD_SUBJECT_REQUEST,
  DELETE_SUBJECT_REQUEST,
  FETCH_SUBJECTS_BY_DEPARTMENT_REQUEST,
  FETCH_SUBJECTS_REQUEST,
  GET_SUBJECT_REQUEST,
  UPDATE_SUBJECT_REQUEST,
} from "../../types/actionTypes";
import { SubjectRequest } from "../../types";

function* fetchSubjects(): SagaIterator {
  try {
    const response = yield call(api.get, "/subject");
    yield put(fetchSubjectsSuccess(response.data));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(fetchSubjectsFailure(error.response.data.message));
    } else {
      yield put(fetchSubjectsFailure(error.message));
    }
  }
}
function* getSubject(action: { type: string; payload: string }): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.get, `/subject/${payload}`);
    const { data } = response;
    yield put(getSubjectSuccess(data));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(getSubjectFailure(error.response.data.message));
    } else {
      yield put(getSubjectFailure(error.message));
    }
  }
}

function* addSubject(action: {
  type: string;
  payload: SubjectRequest;
}): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.post, "/subject", payload);
    const { data } = response;
    yield put(addSubjectSuccess(data));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(addSubjectFailure(error.response.data.message));
    } else {
      yield put(addSubjectFailure(error.message));
    }
  }
}

function* deleteSubject(action: {
  type: string;
  payload: number;
}): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.delete, `/subject/${payload}`);
    const { data } = response;
    yield put(deleteSubjectSuccess(data));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(deleteSubjectFailure(error.response.data.message));
    } else {
      yield put(deleteSubjectFailure(error.message));
    }
  }
}

function* updateSubject(action: {
  type: string;
  payload: SubjectRequest;
}): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.put, "/subject", payload);
    const { data } = response;
    yield put(updateSubjectSuccess(data));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(updateSubjectFailure(error.response.data.message));
    } else {
      yield put(updateSubjectFailure(error.message));
    }
  }
}

function* fetchSubjectsByDepartment(action: {
  type: string;
  payload: number;
}): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.get, `/subject/department/${payload}`);
    yield put(fetchSubjectsSuccess(response.data));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(fetchSubjectsFailure(error.response.data.message));
    } else {
      yield put(fetchSubjectsFailure(error.message));
    }
  }
}

export function* subjectSaga(): SagaIterator {
  yield all([
    takeLatest(FETCH_SUBJECTS_REQUEST, fetchSubjects),
    takeLatest(GET_SUBJECT_REQUEST, getSubject),
    takeLatest(ADD_SUBJECT_REQUEST, addSubject),
    takeLatest(UPDATE_SUBJECT_REQUEST, updateSubject),
    takeLatest(DELETE_SUBJECT_REQUEST, deleteSubject),
    takeLatest(FETCH_SUBJECTS_BY_DEPARTMENT_REQUEST, fetchSubjectsByDepartment),
  ]);
}

export default subjectSaga;
