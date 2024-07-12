// Action Types
// export const FETCH_SAVECOURSES_REQUEST = "FETCH_SAVECOURSES_REQUEST";
// export const FETCH_SAVECOURSES_SUCCESS = "FETCH_SAVECOURSES_SUCCESS";
// export const FETCH_SAVECOURSES_FAILURE = "FETCH_SAVECOURSES_FAILURE";

import {
  FETCH_SAVECOURSES_FAILURE,
  FETCH_SAVECOURSES_REQUEST,
  FETCH_SAVECOURSES_SUCCESS,
} from "../../constant/data";

// Action Creators
export const fetchSaveCoursesRequest = () => ({
  type: FETCH_SAVECOURSES_REQUEST,
});

export const fetchSaveCoursesSuccess = (courses) => ({
  type: FETCH_SAVECOURSES_SUCCESS,
  payload: courses,
});

export const fetchSaveCoursesFailure = (error) => ({
  type: FETCH_SAVECOURSES_FAILURE,
  payload: error,
});
