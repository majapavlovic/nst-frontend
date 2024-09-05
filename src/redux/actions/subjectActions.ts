import { Subject, SubjectRequest } from "../../types";
import {
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_FAILURE,
  GET_SUBJECT_REQUEST,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_FAILURE,
  ADD_SUBJECT_REQUEST,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_FAILURE,
  DELETE_SUBJECT_REQUEST,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_FAILURE,
  UPDATE_SUBJECT_REQUEST,
  UPDATE_SUBJECT_SUCCESS,
  UPDATE_SUBJECT_FAILURE,
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

export const getSubjectRequest = (id: number) => ({
  type: GET_SUBJECT_REQUEST,
  payload: id,
});

export const getSubjectSuccess = (subject: Subject) => ({
  type: GET_SUBJECT_SUCCESS,
  payload: subject,
});

export const getSubjectFailure = (error: string) => ({
  type: GET_SUBJECT_FAILURE,
  payload: error,
});

export const addSubjectRequest = (payload: SubjectRequest) => ({
  type: ADD_SUBJECT_REQUEST,
  payload,
});

export const addSubjectSuccess = (payload: Subject) => ({
  type: ADD_SUBJECT_SUCCESS,
  payload,
});

export const addSubjectFailure = (payload: string) => ({
  type: ADD_SUBJECT_FAILURE,
  payload,
});

export const deleteSubjectRequest = (payload: number) => ({
  type: DELETE_SUBJECT_REQUEST,
  payload,
});

export const deleteSubjectSuccess = (payload: string) => ({
  type: DELETE_SUBJECT_SUCCESS,
  payload,
});

export const deleteSubjectFailure = (payload: string) => ({
  type: DELETE_SUBJECT_FAILURE,
  payload,
});

export const updateSubjectRequest = (payload: SubjectRequest) => ({
  type: UPDATE_SUBJECT_REQUEST,
  payload,
});

export const updateSubjectSuccess = (payload: Subject) => ({
  type: UPDATE_SUBJECT_SUCCESS,
  payload,
});

export const updateSubjectFailure = (payload: string) => ({
  type: UPDATE_SUBJECT_FAILURE,
  payload,
});
