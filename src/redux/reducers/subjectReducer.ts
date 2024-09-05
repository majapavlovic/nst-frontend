import { Subject } from "../../types";
import {
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
  ADD_SUBJECT_REQUEST,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_FAILURE,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_FAILURE,
  GET_SUBJECT_REQUEST,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_FAILURE,
} from "../../types/actionTypes";

interface SubjectState {
  allSubjects: {
    loading: boolean;
    subjects: Subject[];
    error: string | null;
  };
  getSubject: {
    loading: boolean;
    error: string | null;
    subject: Subject;
  };
  addSubject: {
    loading: boolean;
    subject: Subject;
    error: string | null;
  };
  deleteSubject: {
    message: string;
    error: string;
  };
}

const initialSubject = {
  loading: false,
  error: null,
  subject: {
    id: 0,
    name: "",
    espb: 0,
    department: {
      id: 0,
      name: "",
      shortName: "",
    },
  },
};

const initialState: SubjectState = {
  allSubjects: {
    loading: false,
    subjects: [],
    error: null,
  },
  getSubject: initialSubject,
  addSubject: initialSubject,
  deleteSubject: {
    message: "",
    error: "",
  },
};
export const subjectReducer = (
  state = initialState,
  action: any
): SubjectState => {
  switch (action.type) {
    case FETCH_SUBJECTS_REQUEST:
      return {
        ...state,
        allSubjects: { ...state.allSubjects, loading: true, error: null },
      };

    case FETCH_SUBJECTS_SUCCESS:
      return {
        ...state,
        allSubjects: {
          ...state.allSubjects,
          loading: false,
          subjects: action.payload,
        },
      };

    case FETCH_SUBJECTS_FAILURE:
      return {
        ...state,
        allSubjects: {
          ...state.allSubjects,
          loading: false,
          error: action.payload,
        },
      };

    case ADD_SUBJECT_REQUEST:
      return {
        ...state,
        addSubject: { ...state.addSubject, loading: true, error: null },
      };

    case ADD_SUBJECT_SUCCESS:
      return {
        ...state,
        addSubject: {
          ...state.addSubject,
          loading: false,
          subject: action.payload,
        },
      };

    case ADD_SUBJECT_FAILURE:
      return {
        ...state,
        addSubject: {
          ...state.addSubject,
          loading: false,
          error: action.payload,
        },
      };

    case DELETE_SUBJECT_SUCCESS:
      return {
        ...state,
        deleteSubject: { ...state.deleteSubject, message: action.payload },
      };

    case DELETE_SUBJECT_FAILURE:
      return {
        ...state,
        deleteSubject: { ...state.deleteSubject, error: action.payload },
      };

    case GET_SUBJECT_REQUEST:
      return {
        ...state,
        getSubject: { ...state.getSubject, loading: true, error: null },
      };

    case GET_SUBJECT_SUCCESS:
      return {
        ...state,
        getSubject: {
          ...state.getSubject,
          loading: false,
          subject: action.payload,
        },
      };

    case GET_SUBJECT_FAILURE:
      return {
        ...state,
        getSubject: {
          ...state.getSubject,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};
