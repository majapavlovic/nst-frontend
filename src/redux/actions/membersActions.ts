import { Member, MemberRequest } from "../../types";
import {
    FETCH_MEMBERS_FAILURE,
    FETCH_MEMBERS_REQUEST,
    FETCH_MEMBERS_SUCCESS,
    ADD_MEMBER_REQUEST,
    ADD_MEMBER_SUCCESS,
    ADD_MEMBER_FAILURE,
    DELETE_MEMBER_REQUEST,
    DELETE_MEMBER_SUCCESS,
    DELETE_MEMBER_FAILURE
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

export const addMemberRequest = (payload: MemberRequest) => ({
    type: ADD_MEMBER_REQUEST,
    payload,
});

export const addMemberSuccess = (payload: Member) => ({
    type: ADD_MEMBER_SUCCESS,
    payload,
});

export const addMemberFailure = (payload: string) => ({
    type: ADD_MEMBER_FAILURE,
    payload,
});


export const deleteMemberRequest = (payload: number) => ({
    type: DELETE_MEMBER_REQUEST,
    payload,
});

export const deleteMemberSuccess = (payload: string) => ({
    type: DELETE_MEMBER_SUCCESS,
    payload,
});

export const deleteMemberFailure = (payload: string) => ({
    type: DELETE_MEMBER_FAILURE,
    payload,
});