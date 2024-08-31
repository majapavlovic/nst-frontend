import { EducationTitle } from "../../types";
import { FETCH_EDUCATION_TITLES_FAILURE, FETCH_EDUCATION_TITLES_SUCCESS, FETCH_EDUCATION_TITLES_REQUEST } from "../../types/actionTypes";


interface EducationTitleState {
    loading: boolean;
    educationTitles: EducationTitle[];
    error: string | null;
}

const initialState: EducationTitleState = {
    loading: false,
    educationTitles: [],
    error: null
};
export const educationTitleReducer = (state = initialState, action: any): EducationTitleState => {
    switch (action.type) {

        case FETCH_EDUCATION_TITLES_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_EDUCATION_TITLES_SUCCESS:
            return { ...state, loading: false, educationTitles: action.payload };

        case FETCH_EDUCATION_TITLES_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
