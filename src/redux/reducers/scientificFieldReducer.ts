import { ScientificField } from "../../types";
import { FETCH_SCIENTIFIC_FIELDS_FAILURE, FETCH_SCIENTIFIC_FIELDS_SUCCESS, FETCH_SCIENTIFIC_FIELDS_REQUEST } from "../../types/actionTypes";


interface ScientificFieldState {
    loading: boolean;
    scientificFields: ScientificField[];
    error: string | null;
}

const initialState: ScientificFieldState = {
    loading: false,
    scientificFields: [],
    error: null
};
export const scientificFieldReducer = (state = initialState, action: any): ScientificFieldState => {
    switch (action.type) {

        case FETCH_SCIENTIFIC_FIELDS_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_SCIENTIFIC_FIELDS_SUCCESS:
            return { ...state, loading: false, scientificFields: action.payload };

        case FETCH_SCIENTIFIC_FIELDS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
