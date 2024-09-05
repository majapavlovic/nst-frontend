import { Subject } from "../../types";
import {
    FETCH_SUBJECTS_SUCCESS,
    FETCH_SUBJECTS_REQUEST,
    FETCH_SUBJECTS_FAILURE
} from "../../types/actionTypes";

export const fetchSubjectsRequest = () => ({
    type: FETCH_SUBJECTS_REQUEST,
});

export const fetchSubjectsSuccess = (subjects: Subject[]) => ({
    type: FETCH_SUBJECTS_SUCCESS,
    payload: subjects,
});

export const fetchSubjectsFailure = (error: string) => ({
    type: FETCH_SUBJECTS_FAILURE,
    payload: error,
});



