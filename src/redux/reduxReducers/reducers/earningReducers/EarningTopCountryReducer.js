import {
  FETCH_EARNING_TOP_COUNTRY_REQUEST,
  FETCH_EARNING_TOP_COUNTRY_SUCCESS,
  FETCH_EARNING_TOP_COUNTRY_FAILURE,
} from "../../../../constant/data";


const initialState = {
    topCountries: [],
    loading: false,
    error: null,
};

const EarningTopCountryReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_EARNING_TOP_COUNTRY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_EARNING_TOP_COUNTRY_SUCCESS:
            return{
                ...state,
                loading: false,
                topCountries: action.payload,
            };
        case FETCH_EARNING_TOP_COUNTRY_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default EarningTopCountryReducer;