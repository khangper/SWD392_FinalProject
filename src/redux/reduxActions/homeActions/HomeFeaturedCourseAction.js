import {
  FETCH_HOME_FEATURED_COURSES_FAILURE,
  FETCH_HOME_FEATURED_COURSES_REQUEST,
  FETCH_HOME_FEATURED_COURSES_SUCCESS,
  FETCH_HOME_FEATURED_COURSES_DETAIL_REQUEST,
  FETCH_HOME_FEATURED_COURSES_DETAIL_SUCCESS,
  FETCH_HOME_FEATURED_COURSES_DETAIL_FAILURE,
} from "../../../constant/data";

export const fetchHomeFeaturedCoursesRequest = () => ({
  type: FETCH_HOME_FEATURED_COURSES_REQUEST,
});

export const fetchHomeFeaturedCoursesSuccess = (data) => ({
  type: FETCH_HOME_FEATURED_COURSES_SUCCESS,
  payload: data,
});

export const fetchHomeFeaturedCoursesFailure = (error) => ({
  type: FETCH_HOME_FEATURED_COURSES_FAILURE,
  payload: error,
});

export const fetchHomeFeaturedCoursesDetailRequest = (id) => ({
  type: FETCH_HOME_FEATURED_COURSES_DETAIL_REQUEST,
  payload: id,
});

export const fetchHomeFeaturedCoursesDetailSuccess = (courseDetail) => ({
  type: FETCH_HOME_FEATURED_COURSES_DETAIL_SUCCESS,
  payload: courseDetail,
});

export const fetchHomeFeaturedCoursesDetailFailure = (error) => ({
  type: FETCH_HOME_FEATURED_COURSES_DETAIL_FAILURE,
  payload: error,
});