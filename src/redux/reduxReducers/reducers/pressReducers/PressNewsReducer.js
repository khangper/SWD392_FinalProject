import {
  FETCH_PRESS_NEWS_REQUEST,
  FETCH_PRESS_NEWS_SUCCESS,
  FETCH_PRESS_NEWS_FAILURE,
} from "../../../../constant/data";


const initialState = {
    news: [],
    loading: false,
    error: null,
};

const PressNewsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PRESS_NEWS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PRESS_NEWS_SUCCESS:
            return{
                ...state,
                loading: false,
                news: action.payload,
            };
        case FETCH_PRESS_NEWS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default PressNewsReducer;