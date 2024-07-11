// instructorActions.js
// export const FETCH_INSTRUCTORS_REQUEST = "FETCH_INSTRUCTORS_REQUEST";
// export const FETCH_INSTRUCTORS_SUCCESS = "FETCH_INSTRUCTORS_SUCCESS";
// export const FETCH_INSTRUCTORS_FAILURE = "FETCH_INSTRUCTORS_FAILURE";
// export const SEARCH_INSTRUCTORS_REQUEST = "SEARCH_INSTRUCTORS_REQUEST";

import {
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
