import {
  FETCH_SAVECOURSES_FAILURE,
  FETCH_SAVECOURSES_REQUEST,
  FETCH_SAVECOURSES_SUCCESS,
  DELETE_SAVECOURSE_REQUEST,
  DELETE_SAVECOURSE_SUCCESS,
  DELETE_SAVECOURSE_FAILURE,
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
    case DELETE_SAVECOURSE_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_SAVECOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };
    case DELETE_SAVECOURSE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default saveCourseReducer;
