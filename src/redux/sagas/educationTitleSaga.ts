import { SagaIterator } from "redux-saga";
import api from "../../config/axiosConfig";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchEducationTitlesFailure, fetchEducationTitlesSuccess } from "../actions/educationTitleActions";
import { FETCH_EDUCATION_TITLES_REQUEST } from "../../types/actionTypes";

function* fetchEducationTitles(): SagaIterator {
    try {
        const response = yield call(api.get, '/education-title');
        yield put(fetchEducationTitlesSuccess(response.data));
    } catch (error: any) {
        if (error.response?.data?.message != null) {
            yield put(fetchEducationTitlesFailure(error.response.data.message));
        }
        else {
            yield put(fetchEducationTitlesFailure(error.message));
        }
    }
}

export function* educationTitleSaga(): SagaIterator {
    yield all([
        takeLatest(FETCH_EDUCATION_TITLES_REQUEST, fetchEducationTitles),
    ]);
}

export default educationTitleSaga;

