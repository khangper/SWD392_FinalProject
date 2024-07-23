import {
  FETCH_INSTRUCTORS_FAILURE,
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_SUCCESS,
  FETCH_INSTRUCTORS_MORE_FAILURE,
  FETCH_INSTRUCTORS_MORE_REQUEST,
  FETCH_INSTRUCTORS_MORE_SUCCESS,
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
export const fetchInstructorsmoreRequest = () => ({
  type: FETCH_INSTRUCTORS_MORE_REQUEST,
});

export const fetchInstructorsmoreSuccess = (instructorsmore) => ({
  type: FETCH_INSTRUCTORS_MORE_SUCCESS,
  payload: instructorsmore,
});

export const fetchInstructorsmoreFailure = (error) => ({
  type: FETCH_INSTRUCTORS_MORE_FAILURE,
  payload: error,
});
export const searchInstructorsRequest = (query) => ({
  type: SEARCH_INSTRUCTORS_REQUEST,
  payload: query,
});
