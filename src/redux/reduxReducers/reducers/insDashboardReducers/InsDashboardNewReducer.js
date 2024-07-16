import { FETCH_INS_DASHBOARD_NEWS_FAILURE, FETCH_INS_DASHBOARD_NEWS_REQUEST, FETCH_INS_DASHBOARD_NEWS_SUCCESS } from "../../../../constant/data";

const initialState = {
    insDashboardNews: [],
    loading: false,
    error: null,
  };

  const InsDashboardNewReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INS_DASHBOARD_NEWS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_INS_DASHBOARD_NEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          insDashboardNews: action.payload,
        };
      case FETCH_INS_DASHBOARD_NEWS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default InsDashboardNewReducer;