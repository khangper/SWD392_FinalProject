import {
  FETCH_NOTIFICATIONSSTUDENT_REQUEST,
  FETCH_NOTIFICATIONSSTUDENT_SUCCESS,
  FETCH_NOTIFICATIONSSTUDENT_FAILURE,
} from "../../../constant/data";

export const fetchNotificationsStudentRequest = () => ({
  type: FETCH_NOTIFICATIONSSTUDENT_REQUEST,
});

export const fetchNotificationsStudentSuccess = (notifications) => ({
  type: FETCH_NOTIFICATIONSSTUDENT_SUCCESS,
  payload: notifications,
});

export const fetchNotificationsStudentFailure = (error) => ({
  type: FETCH_NOTIFICATIONSSTUDENT_FAILURE,
  payload: error,
});
