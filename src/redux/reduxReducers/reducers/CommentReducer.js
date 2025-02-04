import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from "../../../constant/data";

const initialState = {
    comments: [],
    loading: false,
    error: null,
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload,
            };
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default commentsReducer;
