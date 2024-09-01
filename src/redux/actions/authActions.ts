import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS
} from "../../types/actionTypes";

export const loginRequest = (username: string, password: string) => ({
    type: LOGIN_REQUEST,
    payload: { username, password }
});

export const loginSuccess = (accessToken: string, user: string) => ({
    type: LOGIN_SUCCESS,
    payload: { accessToken, user },
});

export const loginFailure = (error: string) => ({
    type: LOGIN_FAILURE,
    payload: error,
});


