import { EducationTitle } from "../../types";
import {
    FETCH_EDUCATION_TITLES_SUCCESS, FETCH_EDUCATION_TITLES_REQUEST, FETCH_EDUCATION_TITLES_FAILURE
} from "../../types/actionTypes";

export const fetchEducationTitlesRequest = () => ({
    type: FETCH_EDUCATION_TITLES_REQUEST,
});

export const fetchEducationTitlesSuccess = (educationTitles: any[]) => ({
    type: FETCH_EDUCATION_TITLES_SUCCESS,
    payload: educationTitles,
});

export const fetchEducationTitlesFailure = (error: string) => ({
    type: FETCH_EDUCATION_TITLES_FAILURE,
    payload: error,
});



