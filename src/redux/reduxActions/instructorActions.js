import {
  FETCH_INSTRUCTOR_BY_ID_REQUEST,
  FETCH_INSTRUCTOR_BY_ID_SUCCESS,
  FETCH_INSTRUCTOR_BY_ID_FAILURE,
  FETCH_INSTRUCTORS_FAILURE,
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_SUCCESS,
  SEARCH_INSTRUCTORS_REQUEST,
} from "../../constant/data";

export const fetchInstructorsRequest = () => ({
  type: FETCH_INSTRUCTORS_REQUEST,
});

export const fetchInstructorsSuccess = (instructors) => ({
  type: FETCH_INSTRUCTORS_SUCCESS,
  payload: instructors,
});

export const fetchInstructorsFailure = (error) => ({
  type: FETCH_INSTRUCTORS_FAILURE,
  payload: error,
});

export const searchInstructorsRequest = (query) => ({
  type: SEARCH_INSTRUCTORS_REQUEST,
  payload: query,
});

export const fetchInstructorByIdRequest = (id) => ({
  type: FETCH_INSTRUCTOR_BY_ID_REQUEST,
  payload: id,
});
export const fetchInstructorByIdSuccess = (instructor) => ({
  type: FETCH_INSTRUCTOR_BY_ID_SUCCESS,
  payload: instructor,
});

export const fetchInstructorByIdFailure = (error) => ({
  type: FETCH_INSTRUCTOR_BY_ID_FAILURE,
  payload: error,
});