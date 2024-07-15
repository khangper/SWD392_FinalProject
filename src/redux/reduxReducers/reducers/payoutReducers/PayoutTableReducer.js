import {
  FETCH_PAYOUT_TABLE_REQUEST,
  FETCH_PAYOUT_TABLE_SUCCESS,
  FETCH_PAYOUT_TABLE_FAILURE,
} from "../../../../constant/data";

//Format $2550 -> $2,550
function formatCurrency(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const initialState = {
  payout: [],
  loading: false,
  error: null,
};

const PayoutTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAYOUT_TABLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PAYOUT_TABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        payout: action.payload.map((payout) => ({
          ...payout,
          formattedAmount: formatCurrency(payout.amount),
        })),
      };
    case FETCH_PAYOUT_TABLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default PayoutTableReducer;
