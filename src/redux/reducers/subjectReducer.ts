import { Subject } from "../../types";
import {
    FETCH_SUBJECTS_REQUEST,
    FETCH_SUBJECTS_SUCCESS,
    FETCH_SUBJECTS_FAILURE
} from "../../types/actionTypes";


interface SubjectState {
    loading: boolean;
    subjects: Subject[];
    error: string | null;
}

const initialState: SubjectState = {
    loading: false,
    subjects: [],
    error: null
};
export const subjectReducer = (state = initialState, action: any): SubjectState => {
    switch (action.type) {

        case FETCH_SUBJECTS_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_SUBJECTS_SUCCESS:
            return { ...state, loading: false, subjects: action.payload };

        case FETCH_SUBJECTS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
