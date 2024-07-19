// reducers/discountReducer.js
import {
  FETCH_DISCOUNT_REQUEST,
  FETCH_DISCOUNT_SUCCESS,
  FETCH_DISCOUNT_FAILURE,
  EDIT_DISCOUNT_REQUEST,
  EDIT_DISCOUNT_SUCCESS,
  EDIT_DISCOUNT_FAILURE,
  DELETE_DISCOUNT_REQUEST,
  DELETE_DISCOUNT_SUCCESS,
  DELETE_DISCOUNT_FAILURE,
} from "../../../../constant/data";

const initialState = {
  discounts: [],
  loading: false,
  error: null,
};

const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISCOUNT_REQUEST:
    case EDIT_DISCOUNT_REQUEST:
    case DELETE_DISCOUNT_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DISCOUNT_SUCCESS:
      return { ...state, loading: false, discounts: action.payload };
    case EDIT_DISCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        discounts: state.discounts.map((discount) =>
          discount.id === action.payload.id ? action.payload : discount
        ),
      };
    case DELETE_DISCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        discounts: state.discounts.filter(
          (discount) => discount.id !== action.payload
        ),
      };
    case FETCH_DISCOUNT_FAILURE:
    case EDIT_DISCOUNT_FAILURE:
    case DELETE_DISCOUNT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default discountReducer;
