import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../config/axiosConfig";
import { fetchDepartmentsFailure, fetchDepartmentsSuccess } from "../actions/departmentActions";
import { FETCH_DEPARTMENTS_REQUEST } from "../../types/actionTypes";


function* fetchDepartments(): SagaIterator {
    try {
        const response = yield call(api.get, '/department');
        yield put(fetchDepartmentsSuccess(response.data));
    } catch (error: any) {
        if (error.response?.data?.message != null) {
            yield put(fetchDepartmentsFailure(error.response.data.message));
        }
        else {
            yield put(fetchDepartmentsFailure(error.message));
        }
    }
}

export function* departmentSaga(): SagaIterator {
    yield takeLatest(FETCH_DEPARTMENTS_REQUEST, fetchDepartments);

}

export default departmentSaga;

