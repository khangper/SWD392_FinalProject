import {
    FETCH_COURSESD_REQUEST,
    FETCH_COURSESD_SUCCESS,
    FETCH_COURSESD_FAILURE
} from "../../../constant/data";

const initialState = {
    coursesd: [],
    loading: false,
    error: null
};

const coursesdReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSESD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_COURSESD_SUCCESS:
            return {
                ...state,
                loading: false,
                coursesd: action.payload
            };
        case FETCH_COURSESD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default coursesdReducer;
