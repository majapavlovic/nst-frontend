import { AcademicTitle } from "../../types";
import {
    FETCH_ACADEMIC_TITLES_SUCCESS,
    FETCH_ACADEMIC_TITLES_REQUEST,
    FETCH_ACADEMIC_TITLES_FAILURE
} from "../../types/actionTypes";

export const fetchAcademicTitlesRequest = () => ({
    type: FETCH_ACADEMIC_TITLES_REQUEST,
});

export const fetchAcademicTitlesSuccess = (academicTitles: AcademicTitle[]) => ({
    type: FETCH_ACADEMIC_TITLES_SUCCESS,
    payload: academicTitles,
});

export const fetchAcademicTitlesFailure = (error: string) => ({
    type: FETCH_ACADEMIC_TITLES_FAILURE,
    payload: error,
});



