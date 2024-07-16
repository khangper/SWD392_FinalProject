import {
    FETCH_SEARCH_RESULT_REQUEST,
    FETCH_SEARCH_RESULT_SUCCESS,
    FETCH_SEARCH_RESULT_FAILURE,
} from "../../../constant/data";

const initialState = {
    sr_course: [],
    loading: false,
    error: null,
};

const searchresultReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_RESULT_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_SEARCH_RESULT_SUCCESS:
            return { ...state, loading: false, sr_course: action.payload };
        case FETCH_SEARCH_RESULT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default searchresultReducer;