import { CREATE_COURSE_FAILURE, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS } from "../../../constant/data";

const initialState = {
    loading: false,
    course: null,
    error: null,
  };

  const createCourseReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_COURSE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_COURSE_SUCCESS:
        return {
          ...state,
          loading: false,
          course: action.payload,
        };
      case CREATE_COURSE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default createCourseReducer;