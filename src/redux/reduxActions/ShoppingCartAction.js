import { ADD_TO_CART, REMOVE_FROM_CART } from "../../constant/data";

export const addToCart = (course) => ({
  type: ADD_TO_CART,
  payload: course,
});

export const removeFromCart = (courseId) => ({
  type: REMOVE_FROM_CART,
  payload: courseId,
});
