import { 
    FETCH_INS_DASHBOARD_COURSE_REQUEST, 
    FETCH_INS_DASHBOARD_COURSE_SUCCESS, 
    FETCH_INS_DASHBOARD_COURSE_FAILURE 
  } from "../../../constant/data";
  
  export const fetchInsDashboardCourseRequest = () => ({
    type: FETCH_INS_DASHBOARD_COURSE_REQUEST,
  });
  
  export const fetchInsDashboardCourseSuccess = (data) => ({
    type: FETCH_INS_DASHBOARD_COURSE_SUCCESS,
    payload: data,
  });
  
  export const fetchInsDashboardCourseFailure = (error) => ({
    type: FETCH_INS_DASHBOARD_COURSE_FAILURE,
    payload: error,
  });