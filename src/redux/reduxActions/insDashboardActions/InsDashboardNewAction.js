import { FETCH_INS_DASHBOARD_NEWS_FAILURE, FETCH_INS_DASHBOARD_NEWS_REQUEST, FETCH_INS_DASHBOARD_NEWS_SUCCESS } from "../../../constant/data";

export const fetchInsDashboardNewRequest = () => ({
    type: FETCH_INS_DASHBOARD_NEWS_REQUEST,
  });
  
  export const fetchInsDashboardNewSuccess = (data) => ({
    type: FETCH_INS_DASHBOARD_NEWS_SUCCESS,
    payload: data,
  });
  
  export const fetchInsDashboardNewFailure = (error) => ({
    type: FETCH_INS_DASHBOARD_NEWS_FAILURE,
    payload: error,
  });