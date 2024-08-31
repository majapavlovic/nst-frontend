import { AcademicTitle } from "../../types";
import {
    FETCH_ACADEMIC_TITLES_FAILURE,
    FETCH_ACADEMIC_TITLES_REQUEST,
    FETCH_ACADEMIC_TITLES_SUCCESS
} from "../../types/actionTypes";


interface AcademicTitleState {
    loading: boolean;
    academicTitles: AcademicTitle[];
    error: string | null;
}

const initialState: AcademicTitleState = {
    loading: false,
    academicTitles: [],
    error: null
};
export const academicTitleReducer = (state = initialState, action: any): AcademicTitleState => {
    switch (action.type) {

        case FETCH_ACADEMIC_TITLES_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_ACADEMIC_TITLES_SUCCESS:
            return { ...state, loading: false, academicTitles: action.payload };

        case FETCH_ACADEMIC_TITLES_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
