import {
    FETCH_MY_CERTIFICATIONS_REQUEST,
    FETCH_MY_CERTIFICATIONS_SUCCESS,
    FETCH_MY_CERTIFICATIONS_FAILURE,
    DELETE_MY_CERTIFICATIONS_REQUEST,
    DELETE_MY_CERTIFICATIONS_SUCCESS,
    DELETE_MY_CERTIFICATIONS_FAILURE,
} from '../../../constant/data';

const initialState = {
    certifications: [],  // Updated to certifications for consistency
    loading: false,
    error: null,
};

const mycertificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MY_CERTIFICATIONS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_MY_CERTIFICATIONS_SUCCESS:
            return { ...state, loading: false, certifications: action.payload };
        case FETCH_MY_CERTIFICATIONS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case DELETE_MY_CERTIFICATIONS_REQUEST:
            return { ...state, loading: true, error: null };
        case DELETE_MY_CERTIFICATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                certifications: state.certifications.filter((cert) => cert.id !== action.payload),
            };
        case DELETE_MY_CERTIFICATIONS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default mycertificationReducer;
