import { FETCH_HOME_STUDENT_THOUGHT_FAILURE, FETCH_HOME_STUDENT_THOUGHT_REQUEST, FETCH_HOME_STUDENT_THOUGHT_SUCCESS } from "../../../constant/data";

export const fetchHomeStudentThoughtRequest = () => ({
    type: FETCH_HOME_STUDENT_THOUGHT_REQUEST,
  });
  
  export const fetchHomeStudentThoughtSuccess = (data) => ({
    type: FETCH_HOME_STUDENT_THOUGHT_SUCCESS,
    payload: data,
  });
  
  export const fetchHomeStudentThoughtFailure = (error) => ({
    type: FETCH_HOME_STUDENT_THOUGHT_FAILURE,
    payload: error,
  });