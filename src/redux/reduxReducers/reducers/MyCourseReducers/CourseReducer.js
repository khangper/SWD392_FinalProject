// redux/reducers/courseReducer.js
import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  EDIT_COURSE_REQUEST,
  EDIT_COURSE_SUCCESS,
  EDIT_COURSE_FAILURE,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAILURE,
} from "../../../../constant/data";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
    case EDIT_COURSE_REQUEST:
    case DELETE_COURSE_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_COURSES_SUCCESS:
      return { ...state, loading: false, courses: action.payload };
    case EDIT_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: state.courses.map((course) =>
          course.id === action.payload.id ? action.payload : course
        ),
      };
    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };
    case FETCH_COURSES_FAILURE:
    case EDIT_COURSE_FAILURE:
    case DELETE_COURSE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default courseReducer;
