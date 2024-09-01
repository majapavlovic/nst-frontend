import { SagaIterator } from "redux-saga";
import api from "../../config/axiosConfig";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { fetchAcademicTitlesFailure, fetchAcademicTitlesSuccess } from "../actions/academicTitleActions";
import { FETCH_ACADEMIC_TITLES_REQUEST } from "../../types/actionTypes";

function* fetchAcademicTitles(): SagaIterator {
    try {
        const response = yield call(api.get, '/academic-title');
        yield put(fetchAcademicTitlesSuccess(response.data));
    } catch (error: any) {
        if (error.response?.data?.message != null) {
            yield put(fetchAcademicTitlesFailure(error.response.data.message));
        }
        else {
            yield put(fetchAcademicTitlesFailure(error.message));
        }
    }
}

export function* academicTitleSaga(): SagaIterator {
    yield takeLatest(FETCH_ACADEMIC_TITLES_REQUEST, fetchAcademicTitles);

}

export default academicTitleSaga;

