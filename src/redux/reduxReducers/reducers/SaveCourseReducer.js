// import {
//   FETCH_SAVECOURSES_REQUEST,
//   FETCH_SAVECOURSES_SUCCESS,
//   FETCH_SAVECOURSES_FAILURE,
// } from "../../reduxActions/SaveCourseAction";

import {
  FETCH_SAVECOURSES_FAILURE,
  FETCH_SAVECOURSES_REQUEST,
  FETCH_SAVECOURSES_SUCCESS,
} from "../../../constant/data";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const saveCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAVECOURSES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SAVECOURSES_SUCCESS:
      return { ...state, loading: false, courses: action.payload };
    case FETCH_SAVECOURSES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default saveCourseReducer;
