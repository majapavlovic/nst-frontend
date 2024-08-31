import { EducationTitle } from "../../types";
import {
    FETCH_SCIENTIFIC_FIELDS_SUCCESS,
    FETCH_SCIENTIFIC_FIELDS_REQUEST,
    FETCH_SCIENTIFIC_FIELDS_FAILURE
} from "../../types/actionTypes";

export const fetchScientificFieldsRequest = () => ({
    type: FETCH_SCIENTIFIC_FIELDS_REQUEST,
});

export const fetchScientificFieldsSuccess = (academicTitles: EducationTitle[]) => ({
    type: FETCH_SCIENTIFIC_FIELDS_SUCCESS,
    payload: academicTitles,
});

export const fetchScientificFieldsFailure = (error: string) => ({
    type: FETCH_SCIENTIFIC_FIELDS_FAILURE,
    payload: error,
});



