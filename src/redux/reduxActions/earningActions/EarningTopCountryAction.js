import {
  FETCH_EARNING_TOP_COUNTRY_REQUEST,
  FETCH_EARNING_TOP_COUNTRY_SUCCESS,
  FETCH_EARNING_TOP_COUNTRY_FAILURE,
} from "../../../constant/data";

export const fetchEarningTopCountryRequest = () => ({
  type: FETCH_EARNING_TOP_COUNTRY_REQUEST,
});

export const fetchEarningTopCountrySuccess = (data) => ({
  type: FETCH_EARNING_TOP_COUNTRY_SUCCESS,
  payload: data,
});

export const fetchEarningTopCountryFailure = (error) => ({
  type: FETCH_EARNING_TOP_COUNTRY_FAILURE,
  payload: error,
});
