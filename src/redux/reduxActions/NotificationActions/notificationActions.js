// export const FETCH_NOTIFICATIONS_REQUEST = "FETCH_NOTIFICATIONS_REQUEST";
// export const FETCH_NOTIFICATIONS_SUCCESS = "FETCH_NOTIFICATIONS_SUCCESS";
// export const FETCH_NOTIFICATIONS_FAILURE = "FETCH_NOTIFICATIONS_FAILURE";

import {
  FETCH_NOTIFICATIONS_FAILURE,
  FETCH_NOTIFICATIONS_REQUEST,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "../../../constant/data";

export const fetchNotificationsRequest = () => ({
  type: FETCH_NOTIFICATIONS_REQUEST,
});

export const fetchNotificationsSuccess = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications,
});

export const fetchNotificationsFailure = (error) => ({
  type: FETCH_NOTIFICATIONS_FAILURE,
  payload: error,
});
