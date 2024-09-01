import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../types/actionTypes";

interface AuthState {
    accessToken: string | null;
    user: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    accessToken: null,
    user: null,
    loading: false,
    error: null,
};

export const authReducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, accessToken: action.payload.accessToken, user: action.payload.user };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

