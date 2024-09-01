import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../config/axiosConfig";
import { fetchScientificFieldsFailure, fetchScientificFieldsSuccess } from "../actions/scientificFieldActions";
import { FETCH_SCIENTIFIC_FIELDS_REQUEST } from "../../types/actionTypes";

function* fetchScientificFields(): SagaIterator {
    try {
        const response = yield call(api.get, '/scientific-field');
        yield put(fetchScientificFieldsSuccess(response.data));
    } catch (error: any) {
        if (error.response?.data?.message != null) {
            yield put(fetchScientificFieldsFailure(error.response.data.message));
        }
        else {
            yield put(fetchScientificFieldsFailure(error.message));
        }
    }
}


export function* scientificFieldSaga(): SagaIterator {
    yield all([
        takeLatest(FETCH_SCIENTIFIC_FIELDS_REQUEST, fetchScientificFields),
    ]);
}

export default scientificFieldSaga;