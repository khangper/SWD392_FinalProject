import { FETCH_HOME_STUDENT_THOUGHT_FAILURE, FETCH_HOME_STUDENT_THOUGHT_REQUEST, FETCH_HOME_STUDENT_THOUGHT_SUCCESS } from "../../../../constant/data";

const initialState = {
    studentThoughts: [],
    loading: false,
    error: null,
  };
  const HomeStudentThoughtReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_HOME_STUDENT_THOUGHT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_HOME_STUDENT_THOUGHT_SUCCESS:
        return {
          ...state,
          loading: false,
          studentThoughts: action.payload,
        };
      case FETCH_HOME_STUDENT_THOUGHT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default HomeStudentThoughtReducer;