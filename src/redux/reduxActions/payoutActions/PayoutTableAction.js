import {
  FETCH_PAYOUT_TABLE_REQUEST,
  FETCH_PAYOUT_TABLE_SUCCESS,
  FETCH_PAYOUT_TABLE_FAILURE,
} from "../../../constant/data";


export const fetchPayoutTableRequest = () => ({
  type: FETCH_PAYOUT_TABLE_REQUEST,
});

export const fetchPayoutTableSuccess = (data) => ({
  type: FETCH_PAYOUT_TABLE_SUCCESS,
  payload: data,
});

export const fetchPayoutTableFailure = (error) => ({
  type: FETCH_PAYOUT_TABLE_FAILURE,
  payload: error,
});