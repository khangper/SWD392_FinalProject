import { ADD_TO_CART, REMOVE_FROM_CART } from "../../../constant/data";

const initialState = {
  cart: [],
};

const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
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
