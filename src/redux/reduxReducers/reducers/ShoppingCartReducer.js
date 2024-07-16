import {
  ADD_TO_CART,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART,
} from "../../../constant/data";

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, loading: true, error: null };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: [...state.cart, action.payload],
      };
    case ADD_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((course) => course.id !== action.payload),
      };
    default:
      return state;
  }
};

export default ShoppingCartReducer;
