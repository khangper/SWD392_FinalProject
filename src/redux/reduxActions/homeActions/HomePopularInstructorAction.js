import {
  FETCH_HOME_POPULAR_INSTRUCTOR_FAILURE, FETCH_HOME_POPULAR_INSTRUCTOR_REQUEST, FETCH_HOME_POPULAR_INSTRUCTOR_SUCCESS,
  FETCH_POPULAR_INSTRUCTOR_DETAIL_REQUEST,
  FETCH_POPULAR_INSTRUCTOR_DETAIL_SUCCESS,
  FETCH_POPULAR_INSTRUCTOR_DETAIL_FAILURE
} from "../../../constant/data";

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

export const fetchPopularInstructorDetailRequest = (id) => ({
  type: FETCH_POPULAR_INSTRUCTOR_DETAIL_REQUEST,
  payload: id
});

export const fetchPopularInstructorDetailSuccess = (instructor) => ({
  type: FETCH_POPULAR_INSTRUCTOR_DETAIL_SUCCESS,
  payload: instructor
});

export const fetchPopularInstructorDetailFailure = (error) => ({
  type: FETCH_POPULAR_INSTRUCTOR_DETAIL_FAILURE,
  payload: error
});