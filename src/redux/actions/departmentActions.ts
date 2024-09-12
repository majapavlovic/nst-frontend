import { Department, DepartmentRequest } from "../../types";
import {
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_FAILURE,
  GET_DEPARTMENT_REQUEST,
  GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_FAILURE,
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAILURE,
  DELETE_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  CLEAR_ADD_DEPARTMENT_STATE,
  CLEAR_DELETE_DEPARTMENT_STATE,
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

export const getDepartmentsRequest = (id: number) => ({
  type: GET_DEPARTMENT_REQUEST,
  payload: id,
});

export const getDepartmentsSuccess = (department: Department) => ({
  type: GET_DEPARTMENT_SUCCESS,
  payload: department,
});

export const getDepartmentsFailure = (error: string) => ({
  type: GET_DEPARTMENT_FAILURE,
  payload: error,
});

export const addDepartmentRequest = (payload: DepartmentRequest) => ({
  type: ADD_DEPARTMENT_REQUEST,
  payload,
});

export const addDepartmentSuccess = (payload: Department) => ({
  type: ADD_DEPARTMENT_SUCCESS,
  payload,
});

export const addDepartmentFailure = (payload: string) => ({
  type: ADD_DEPARTMENT_FAILURE,
  payload,
});

export const deleteDepartmentRequest = (payload: number) => ({
  type: DELETE_DEPARTMENT_REQUEST,
  payload,
});

export const deleteDepartmentSuccess = (payload: string) => ({
  type: DELETE_DEPARTMENT_SUCCESS,
  payload,
});

export const deleteDepartmentFailure = (payload: string) => ({
  type: DELETE_DEPARTMENT_FAILURE,
  payload,
});

export const updateDepartmentRequest = (payload: Department) => ({
  type: UPDATE_DEPARTMENT_REQUEST,
  payload,
});

export const updateDepartmentSuccess = (payload: Department) => ({
  type: UPDATE_DEPARTMENT_SUCCESS,
  payload,
});

export const updateDepartmentFailure = (payload: string) => ({
  type: UPDATE_DEPARTMENT_FAILURE,
  payload,
});

export const clearAddDepartmentState = () => ({
  type: CLEAR_ADD_DEPARTMENT_STATE,
});

export const clearDeleteDepartmentState = () => ({
  type: CLEAR_DELETE_DEPARTMENT_STATE,
});
