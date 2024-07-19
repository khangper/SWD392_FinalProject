import { FETCH_CHAT_MESSAGES_FAILURE, FETCH_CHAT_MESSAGES_REQUEST, FETCH_CHAT_MESSAGES_SUCCESS } from "../../../constant/data";

const initialState = {
    loading: false,
    messages: [],
    error: null
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHAT_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_CHAT_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: action.payload
            };
        case FETCH_CHAT_MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default chatReducer;
