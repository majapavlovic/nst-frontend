import { Member } from "../../types";
import {
  ADD_MEMBER_FAILURE,
  ADD_MEMBER_REQUEST,
  ADD_MEMBER_SUCCESS,
  FETCH_MEMBERS_FAILURE,
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS
} from "../../types/actionTypes";


interface MemberState {
  allMembers: {
    loading: boolean;
    members: Member[];
    error: string | null;
  }
  addMember: {
    loading: boolean;
    member: Member;
    error: string | null;
  }
}

const initialState: MemberState = {
  allMembers: {
    loading: false,
    members: [],
    error: null
  },
  addMember: {
    loading: false,
    member: {
      id: 0,
      firstName: "",
      lastName: "",
      academicTitle: { id: 0, academicTitle: "" },
      educationTitle: { id: 0, educationTitle: "" },
      scientificField: { id: 0, scientificField: "" }
    },
    error: null
  }
};

export const memberReducer = (state = initialState, action: any): MemberState => {
  switch (action.type) {

    case FETCH_MEMBERS_REQUEST:
      return { ...state, allMembers: { ...state.allMembers, loading: true, error: null } };

    case FETCH_MEMBERS_SUCCESS:
      return { ...state, allMembers: { ...state.allMembers, loading: false, members: action.payload } };

    case FETCH_MEMBERS_FAILURE:
      return { ...state, allMembers: { ...state.allMembers, loading: false, error: action.payload } };

    case ADD_MEMBER_REQUEST:
      return { ...state, addMember: { ...state.addMember, loading: true, error: null } };

    case ADD_MEMBER_SUCCESS:
      return { ...state, addMember: { ...state.addMember, loading: false, member: action.payload } };

    case ADD_MEMBER_FAILURE:
      return { ...state, addMember: { ...state.addMember, loading: false, error: action.payload } };

    default:
      return state;
  }
};
