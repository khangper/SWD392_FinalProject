import {
  FETCH_HOME_FEATURED_COURSES_FAILURE,
  FETCH_HOME_FEATURED_COURSES_REQUEST,
  FETCH_HOME_FEATURED_COURSES_SUCCESS,
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
