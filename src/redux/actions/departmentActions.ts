import { Department } from "../../types";
import {
    FETCH_DEPARTMENTS_SUCCESS,
    FETCH_DEPARTMENTS_REQUEST,
    FETCH_DEPARTMENTS_FAILURE
} from "../../types/actionTypes";

export const fetchDepartmentsRequest = () => ({
    type: FETCH_DEPARTMENTS_REQUEST,
});

export const fetchDepartmentsSuccess = (departments: Department[]) => ({
    type: FETCH_DEPARTMENTS_SUCCESS,
    payload: departments,
});

export const fetchDepartmentsFailure = (error: string) => ({
    type: FETCH_DEPARTMENTS_FAILURE,
    payload: error,
});



