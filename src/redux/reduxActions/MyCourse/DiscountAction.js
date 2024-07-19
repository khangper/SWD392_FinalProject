// actions/discountActions.js
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
} from "../../../constant/data";

export const fetchDiscountRequest = () => ({ type: FETCH_DISCOUNT_REQUEST });
export const fetchDiscountSuccess = (discounts) => ({
  type: FETCH_DISCOUNT_SUCCESS,
  payload: discounts,
});
export const fetchDiscountFailure = (error) => ({
  type: FETCH_DISCOUNT_FAILURE,
  payload: error,
});

export const editDiscountRequest = (discount) => ({
  type: EDIT_DISCOUNT_REQUEST,
  payload: discount,
});
export const editDiscountSuccess = (discount) => ({
  type: EDIT_DISCOUNT_SUCCESS,
  payload: discount,
});
export const editDiscountFailure = (error) => ({
  type: EDIT_DISCOUNT_FAILURE,
  payload: error,
});

export const deleteDiscountRequest = (discountId) => ({
  type: DELETE_DISCOUNT_REQUEST,
  payload: discountId,
});
export const deleteDiscountSuccess = (discountId) => ({
  type: DELETE_DISCOUNT_SUCCESS,
  payload: discountId,
});
export const deleteDiscountFailure = (error) => ({
  type: DELETE_DISCOUNT_FAILURE,
  payload: error,
});
