import {
  FETCH_CREDIT_TABLE_REQUEST,
  FETCH_CREDIT_TABLE_SUCCESS,
  FETCH_CREDIT_TABLE_FAILURE,
} from "../../../../constant/data";

function formatCurrency(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const initialState = {
  credit: [],
  loading: false,
  error: null,
};

const CreditTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDIT_TABLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CREDIT_TABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        credit: action.payload.map((credit) => ({
          ...credit,
          formattedAmount: formatCurrency(credit.amount),
        })),
      };
    case FETCH_CREDIT_TABLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CreditTableReducer;
