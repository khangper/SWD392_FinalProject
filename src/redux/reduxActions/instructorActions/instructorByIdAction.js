import {
  FETCH_INSTRUCTOR_BY_ID_REQUEST,
  FETCH_INSTRUCTOR_BY_ID_SUCCESS,
  FETCH_INSTRUCTOR_BY_ID_FAILURE,
} from "../../../constant/data";


export const fetchInstructorByIdRequest = (id) => ({
  type: FETCH_INSTRUCTOR_BY_ID_REQUEST,
  payload: { id }
});

export const fetchInstructorByIdSuccess = (instructor) => ({
  type: FETCH_INSTRUCTOR_BY_ID_SUCCESS,
  payload: { instructor }
});

export const fetchInstructorByIdFailure = (error) => ({
  type: FETCH_INSTRUCTOR_BY_ID_FAILURE,
  payload: { error }
});