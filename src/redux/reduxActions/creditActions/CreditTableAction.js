import {
  FETCH_CREDIT_TABLE_REQUEST,
  FETCH_CREDIT_TABLE_SUCCESS,
  FETCH_CREDIT_TABLE_FAILURE,
} from "../../../constant/data";

export const fetchCreditTableRequest = () => ({
  type: FETCH_CREDIT_TABLE_REQUEST,
});

export const fetchCreditTableSuccess = (data) => ({
  type: FETCH_CREDIT_TABLE_SUCCESS,
  payload: data,
});

export const fetchCreditTableFailure = (error) => ({
  type: FETCH_CREDIT_TABLE_FAILURE,
  payload: error,
});