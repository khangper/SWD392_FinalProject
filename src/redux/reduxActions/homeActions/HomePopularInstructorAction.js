import { FETCH_HOME_POPULAR_INSTRUCTOR_FAILURE, FETCH_HOME_POPULAR_INSTRUCTOR_REQUEST, FETCH_HOME_POPULAR_INSTRUCTOR_SUCCESS } from "../../../constant/data";

export const fetchHomePopularInstructorRequest = () => ({
    type: FETCH_HOME_POPULAR_INSTRUCTOR_REQUEST,
  });
  
  export const fetchHomePopularInstructorSuccess = (data) => ({
    type: FETCH_HOME_POPULAR_INSTRUCTOR_SUCCESS,
    payload: data,
  });
  
  export const fetchHomePopularInstructorFailure = (error) => ({
    type: FETCH_HOME_POPULAR_INSTRUCTOR_FAILURE,
    payload: error,
  });