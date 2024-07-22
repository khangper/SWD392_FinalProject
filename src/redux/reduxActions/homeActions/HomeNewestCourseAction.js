import {
  FETCH_HOME_NEWEST_COURSES_FAILURE, FETCH_HOME_NEWEST_COURSES_REQUEST, FETCH_HOME_NEWEST_COURSES_SUCCESS,
  FETCH_NEWEST_COURSE_DETAIL_REQUEST,
  FETCH_NEWEST_COURSE_DETAIL_SUCCESS,
  FETCH_NEWEST_COURSE_DETAIL_FAILURE
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

export const fetchNewestCourseDetailRequest = (id) => ({
  type: FETCH_NEWEST_COURSE_DETAIL_REQUEST,
  payload: id
});

export const fetchNewestCourseDetailSuccess = (course) => ({
  type: FETCH_NEWEST_COURSE_DETAIL_SUCCESS,
  payload: course
});

export const fetchNewestCourseDetailFailure = (error) => ({
  type: FETCH_NEWEST_COURSE_DETAIL_FAILURE,
  payload: error
});
