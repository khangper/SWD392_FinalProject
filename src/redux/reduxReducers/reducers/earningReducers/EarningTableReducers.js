import {
  FETCH_EARNING_TABLE_REQUEST,
  FETCH_EARNING_TABLE_SUCCESS,
  FETCH_EARNING_TABLE_FAILURE,
} from "../../../../constant/data";

const initialState = {
  itemSales: [],
  loading: false,
  error: null,
};

const EarningTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EARNING_TABLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_EARNING_TABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        itemSales: action.payload,
      };
    case FETCH_EARNING_TABLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default EarningTableReducer;
