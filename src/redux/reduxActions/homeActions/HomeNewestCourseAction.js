import {
  FETCH_HOME_NEWEST_COURSES_FAILURE, FETCH_HOME_NEWEST_COURSES_REQUEST, FETCH_HOME_NEWEST_COURSES_SUCCESS,
} from "../../../constant/data";

export const fetchHomeNewestCoursesRequest = () => ({
  type: FETCH_HOME_NEWEST_COURSES_REQUEST,
});

export const fetchHomeNewestCoursesSuccess = (data) => ({
  type: FETCH_HOME_NEWEST_COURSES_SUCCESS,
  payload: data,
});

export const fetchHomeNewestCoursesFailure = (error) => ({
  type: FETCH_HOME_NEWEST_COURSES_FAILURE,
  payload: error,
});


