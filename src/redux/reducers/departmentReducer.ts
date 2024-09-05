import { Department } from "../../types";
import {
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE,
  GET_DEPARTMENT_REQUEST,
  GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_FAILURE,
} from "../../types/actionTypes";

interface DepartmentState {
  allDepartments: {
    loading: boolean;
    departments: Department[];
    error: string | null;
  };
  getDepartment: {
    loading: boolean;
    department: Department;
    error: string | null;
  };
}

const initialDepartment = {
  loading: false,
  error: null,
  department: {
    id: 0,
    name: "",
    shortName: "",
  },
};

const initialState: DepartmentState = {
  allDepartments: {
    loading: false,
    departments: [],
    error: null,
  },
  getDepartment: initialDepartment,
};
export const departmentReducer = (
  state = initialState,
  action: any
): DepartmentState => {
  switch (action.type) {
    case FETCH_DEPARTMENTS_REQUEST:
      return {
        ...state,
        allDepartments: { ...state.allDepartments, loading: true, error: null },
      };

    case FETCH_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        allDepartments: {
          ...state.allDepartments,
          loading: false,
          departments: action.payload,
        },
      };

    case FETCH_DEPARTMENTS_FAILURE:
      return {
        ...state,
        allDepartments: {
          ...state.allDepartments,
          loading: false,
          error: action.payload,
        },
      };

    case GET_DEPARTMENT_REQUEST:
      return {
        ...state,
        getDepartment: { ...state.getDepartment, loading: true, error: null },
      };

    case GET_DEPARTMENT_SUCCESS:
      return {
        ...state,
        getDepartment: {
          ...state.getDepartment,
          loading: false,
          department: action.payload,
        },
      };

    case GET_DEPARTMENT_FAILURE:
      return {
        ...state,
        getDepartment: {
          ...state.getDepartment,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};
