import {
  FETCH_INS_DASHBOARD_CARD_FAILURE,
  FETCH_INS_DASHBOARD_CARD_REQUEST,
  FETCH_INS_DASHBOARD_CARD_SUCCESS,
} from "../../../../constant/data";

const initialState = {
  insDashboardCards: [],
  loading: false,
  error: null,
};
const InsDashboardCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INS_DASHBOARD_CARD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_INS_DASHBOARD_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        insDashboardCards: action.payload,
      };
    case FETCH_INS_DASHBOARD_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default InsDashboardCardReducer;
