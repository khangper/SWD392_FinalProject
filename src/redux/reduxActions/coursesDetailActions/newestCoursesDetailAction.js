import {
  FETCH_NEWEST_COURSE_DETAIL_FAILURE,
  FETCH_NEWEST_COURSE_DETAIL_REQUEST,
  FETCH_NEWEST_COURSE_DETAIL_SUCCESS,
} from "../../../constant/data";

export const fetchNewestCourseDetailRequest = (id) => ({
  type: FETCH_NEWEST_COURSE_DETAIL_REQUEST,
  payload: { id },
});

export const fetchNewestCourseDetailSuccess = (newestCourses) => ({
  type: FETCH_NEWEST_COURSE_DETAIL_SUCCESS,
  payload: { newestCourses },
});

export const fetchNewestCourseDetailFailure = (error) => ({
  type: FETCH_NEWEST_COURSE_DETAIL_FAILURE,
  payload: { error },
});
