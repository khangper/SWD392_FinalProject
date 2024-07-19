import {
    FETCH_STATEMENTIS_REQUEST,
    FETCH_STATEMENTIS_SUCCESS,
    FETCH_STATEMENTIS_FAILURE,
} from "../../../constant/data";

const initialState = {
    statementIS: [],
    loading: false,
    error: null,
};

const statementISReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STATEMENTIS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_STATEMENTIS_SUCCESS:
            return { ...state, loading: false, statementIS: action.payload };
        case FETCH_STATEMENTIS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default statementISReducer;