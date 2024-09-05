import { SagaIterator } from "redux-saga";
import { call, put, takeLatest, all } from "redux-saga/effects";
import api from "../../config/axiosConfig";
import {
  addDepartmentFailure,
  addDepartmentSuccess,
  deleteDepartmentFailure,
  deleteDepartmentSuccess,
  fetchDepartmentsFailure,
  fetchDepartmentsSuccess,
  getDepartmentsFailure,
  getDepartmentsSuccess,
  updateDepartmentFailure,
  updateDepartmentSuccess,
} from "../actions/departmentActions";
import {
  ADD_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_REQUEST,
  FETCH_DEPARTMENTS_REQUEST,
  GET_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_REQUEST,
} from "../../types/actionTypes";
import { Department } from "../../types";

function* fetchDepartments(): SagaIterator {
  try {
    const response = yield call(api.get, "/department");
    yield put(fetchDepartmentsSuccess(response.data));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(fetchDepartmentsFailure(error.response.data.message));
    } else {
      yield put(fetchDepartmentsFailure(error.message));
    }
  }
}

function* getDepartment(action: {
  type: string;
  payload: string;
}): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.get, `/department/${payload}`);
    yield put(getDepartmentsSuccess(response.data));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(getDepartmentsFailure(error.response.data.message));
    } else {
      yield put(getDepartmentsFailure(error.message));
    }
  }
}

function* addDepartment(action: {
  type: string;
  payload: Department;
}): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.post, "/department", payload);
    yield put(addDepartmentSuccess(response));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(addDepartmentFailure(error.response.data.message));
    } else {
      yield put(addDepartmentFailure(error.message));
    }
  }
}

function* deleteDepartment(action: {
  type: string;
  payload: number;
}): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.delete, `/department/${payload}`);
    yield put(deleteDepartmentSuccess(response));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(deleteDepartmentFailure(error.response.data.message));
    } else {
      yield put(deleteDepartmentFailure(error.message));
    }
  }
}

function* updateDepartment(action: {
  type: string;
  payload: Department;
}): SagaIterator {
  try {
    const { payload } = action;
    const response = yield call(api.put, "/department", payload);
    yield put(updateDepartmentSuccess(response));
  } catch (error: any) {
    if (error.response?.data?.message != null) {
      yield put(updateDepartmentFailure(error.response.data.message));
    } else {
      yield put(updateDepartmentFailure(error.message));
    }
  }
}

export function* departmentSaga(): SagaIterator {
  yield all([
    takeLatest(FETCH_DEPARTMENTS_REQUEST, fetchDepartments),
    takeLatest(GET_DEPARTMENT_REQUEST, getDepartment),
    takeLatest(ADD_DEPARTMENT_REQUEST, addDepartment),
    takeLatest(UPDATE_DEPARTMENT_REQUEST, updateDepartment),
    takeLatest(DELETE_DEPARTMENT_REQUEST, deleteDepartment),
  ]);
}

export default departmentSaga;
