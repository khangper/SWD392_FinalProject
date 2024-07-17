import {
  FETCH_PRESS_RELEASE_REQUEST,
  FETCH_PRESS_RELEASE_SUCCESS,
  FETCH_PRESS_RELEASE_FAILURE,
} from "../../../../constant/data";

const initialState = {
    release: [],
    loading: false,
    error: null,
};

const PressReleaseReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PRESS_RELEASE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PRESS_RELEASE_SUCCESS:
            return{
                ...state,
                loading: false,
                release: action.payload,
            };
        case FETCH_PRESS_RELEASE_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default PressReleaseReducer;