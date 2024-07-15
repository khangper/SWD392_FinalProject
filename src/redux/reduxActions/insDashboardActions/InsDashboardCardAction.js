import { FETCH_INS_DASHBOARD_CARD_FAILURE, FETCH_INS_DASHBOARD_CARD_REQUEST, FETCH_INS_DASHBOARD_CARD_SUCCESS,} from "../../../constant/data";

export const fetchInsDashboardCardRequest = () => ({
    type: FETCH_INS_DASHBOARD_CARD_REQUEST,
  });
  
  export const fetchInsDashboardCardSuccess = (data) => ({
    type: FETCH_INS_DASHBOARD_CARD_SUCCESS,
    payload: data,
  });
  
  export const fetchInsDashboardCardFailure = (error) => ({
    type: FETCH_INS_DASHBOARD_CARD_FAILURE,
    payload: error,
  });