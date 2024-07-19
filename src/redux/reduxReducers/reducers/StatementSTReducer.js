import {
    FETCH_STATEMENTST_REQUEST,
    FETCH_STATEMENTST_SUCCESS,
    FETCH_STATEMENTST_FAILURE,
} from "../../../constant/data";

const initialState = {
    statement_course: [],
    loading: false,
    error: null,
};

const statementSTReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STATEMENTST_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_STATEMENTST_SUCCESS:
            return { ...state, loading: false, statement_course: action.payload };
        case FETCH_STATEMENTST_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default statementSTReducer;