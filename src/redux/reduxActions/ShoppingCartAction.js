import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
} from "../../constant/data";

// Hành động thêm vào giỏ hàng
export const addToCart = (course) => ({
  type: ADD_TO_CART,
  payload: course,
});

// Hành động xóa khỏi giỏ hàng
export const removeFromCart = (courseId) => ({
  type: REMOVE_FROM_CART,
  payload: courseId,
});

// Hành động thành công khi thêm vào giỏ hàng
export const addToCartSuccess = (course) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: course,
});

// Hành động thất bại khi thêm vào giỏ hàng
export const addToCartFailure = (error) => ({
  type: ADD_TO_CART_FAILURE,
  payload: error,
});
