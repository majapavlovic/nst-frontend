import { Department } from "../../types";
import {
    FETCH_DEPARTMENTS_REQUEST,
    FETCH_DEPARTMENTS_SUCCESS,
    FETCH_DEPARTMENTS_FAILURE
} from "../../types/actionTypes";


interface DepartmentState {
    loading: boolean;
    departments: Department[];
    error: string | null;
}

const initialState: DepartmentState = {
    loading: false,
    departments: [],
    error: null
};
export const departmentReducer = (state = initialState, action: any): DepartmentState => {
    switch (action.type) {

        case FETCH_DEPARTMENTS_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_DEPARTMENTS_SUCCESS:
            return { ...state, loading: false, departments: action.payload };

        case FETCH_DEPARTMENTS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
