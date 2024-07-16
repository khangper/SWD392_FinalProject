import {
  DELETE_SAVECOURSE_FAILURE,
  DELETE_SAVECOURSE_REQUEST,
  DELETE_SAVECOURSE_SUCCESS,
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

export const deleteSaveCourseRequest = (id) => ({
  type: DELETE_SAVECOURSE_REQUEST,
  payload: id,
});

export const deleteSaveCourseSuccess = (id) => ({
  type: DELETE_SAVECOURSE_SUCCESS,
  payload: id,
});

export const deleteSaveCourseFailure = (error) => ({
  type: DELETE_SAVECOURSE_FAILURE,
  payload: error,
});
