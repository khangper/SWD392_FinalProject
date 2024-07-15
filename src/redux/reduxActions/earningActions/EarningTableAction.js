import {
  FETCH_EARNING_TABLE_REQUEST,
  FETCH_EARNING_TABLE_SUCCESS,
  FETCH_EARNING_TABLE_FAILURE,
} from "../../../constant/data";

export const fetchEarningTableRequest = () => ({
  type: FETCH_EARNING_TABLE_REQUEST,
});

export const fetchEarningTableSuccess = (data) => ({
  type: FETCH_EARNING_TABLE_SUCCESS,
  payload: data,
});

export const fetchEarningTableFailure = (error) => ({
  type: FETCH_EARNING_TABLE_FAILURE,
  payload: error,
});
