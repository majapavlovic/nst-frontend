import { Member } from "../../types";
import {
  FETCH_MEMBERS_FAILURE,
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS
} from "../../types/actionTypes";


interface MemberState {
  loading: boolean;
  members: Member[];
  error: string | null;
}

const initialState: MemberState = {
  loading: false,
  members: [],
  error: null,
};

export const memberReducer = (state = initialState, action: any): MemberState => {
  switch (action.type) {
    case FETCH_MEMBERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_MEMBERS_SUCCESS:
      return { ...state, loading: false, members: action.payload };
    case FETCH_MEMBERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
