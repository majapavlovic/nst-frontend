import {
    FETCH_MEMBERS_FAILURE,
    FETCH_MEMBERS_REQUEST,
    FETCH_MEMBERS_SUCCESS
} from "../../types/actionTypes";

export const fetchMembersRequest = () => ({
    type: FETCH_MEMBERS_REQUEST,
});

export const fetchMembersSuccess = (members: any[]) => ({
    type: FETCH_MEMBERS_SUCCESS,
    payload: members,
});

export const fetchMembersFailure = (error: string) => ({
    type: FETCH_MEMBERS_FAILURE,
    payload: error,
});
