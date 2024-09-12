import { Department } from "../../types";
import {
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE,
  GET_DEPARTMENT_REQUEST,
  GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_FAILURE,
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAILURE,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_FAILURE,
  CLEAR_ADD_DEPARTMENT_STATE,
  CLEAR_DELETE_DEPARTMENT_STATE,
  UPDATE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_REQUEST,
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
  addDepartment: {
    loading: boolean;
    department: Department;
    error: string | null;
    success: boolean;
  };
  deleteDepartment: {
    message: string;
    error: string;
  };
}

const initialDepartment = {
  success: false,
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
  addDepartment: initialDepartment,
  deleteDepartment: {
    message: "",
    error: "",
  },
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

    case ADD_DEPARTMENT_REQUEST:
      return {
        ...state,
        addDepartment: {
          ...state.addDepartment,
          loading: true,
          error: null,
          success: false,
        },
      };

    case ADD_DEPARTMENT_SUCCESS:
      return {
        ...state,
        addDepartment: {
          ...state.addDepartment,
          loading: false,
          department: action.payload,
          success: true,
        },
      };

    case ADD_DEPARTMENT_FAILURE:
      return {
        ...state,
        addDepartment: {
          ...state.addDepartment,
          loading: false,
          error: action.payload,
        },
      };

    case DELETE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        deleteDepartment: {
          ...state.deleteDepartment,
          message: action.payload,
        },
      };

    case DELETE_DEPARTMENT_FAILURE:
      return {
        ...state,
        deleteDepartment: { ...state.deleteDepartment, error: action.payload },
      };

    case CLEAR_ADD_DEPARTMENT_STATE:
      return {
        ...state,
        addDepartment: {
          ...state.addDepartment,
          success: false,
          error: null,
        },
      };
    case CLEAR_DELETE_DEPARTMENT_STATE:
      return {
        ...state,
        deleteDepartment: { message: "", error: "" },
      };

    case UPDATE_DEPARTMENT_REQUEST:
      return {
        ...state,
        addDepartment: {
          ...state.addDepartment,
          loading: true,
          error: null,
          success: false,
        },
      };

    case UPDATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        addDepartment: {
          ...state.addDepartment,
          loading: false,
          department: action.payload,
          success: true,
        },
      };

    case UPDATE_DEPARTMENT_FAILURE:
      return {
        ...state,
        addDepartment: {
          ...state.addDepartment,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    default:
      return state;
  }
};
