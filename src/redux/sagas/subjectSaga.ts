import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../config/axiosConfig";
import { fetchSubjectsFailure, fetchSubjectsSuccess } from "../actions/subjectActions";
import { FETCH_SUBJECTS_REQUEST } from "../../types/actionTypes";

function* fetchSubjects(): SagaIterator {
    try {
        const response = yield call(api.get, '/subject');
        yield put(fetchSubjectsSuccess(response.data));
    } catch (error: any) {
        if (error.response?.data?.message != null) {
            yield put(fetchSubjectsFailure(error.response.data.message));
        }
        else {
            yield put(fetchSubjectsFailure(error.message));
        }
    }
}

export function* subjectSaga(): SagaIterator {
    yield takeLatest(FETCH_SUBJECTS_REQUEST, fetchSubjects);
}

export default subjectSaga;

