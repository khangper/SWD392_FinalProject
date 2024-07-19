import {
  FETCH_UPCOMMINGCOURSES_REQUEST,
  FETCH_UPCOMMINGCOURSES_SUCCESS,
  FETCH_UPCOMMINGCOURSES_FAILURE,
  EDIT_UPCOMMINGCOURSE_REQUEST,
  EDIT_UPCOMMINGCOURSE_SUCCESS,
  EDIT_UPCOMMINGCOURSE_FAILURE,
  DELETE_UPCOMMINGCOURSE_REQUEST,
  DELETE_UPCOMMINGCOURSE_SUCCESS,
  DELETE_UPCOMMINGCOURSE_FAILURE,
} from "../../../../constant/data";

const initialState = {
  upcommingCourses: [],
  loading: false,
  error: null,
};

const upcommingCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMMINGCOURSES_REQUEST:
    case EDIT_UPCOMMINGCOURSE_REQUEST:
    case DELETE_UPCOMMINGCOURSE_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_UPCOMMINGCOURSES_SUCCESS:
      return { ...state, loading: false, upcommingCourses: action.payload };
    case EDIT_UPCOMMINGCOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        upcommingCourses: state.upcommingCourses.map((course) =>
          course.itemNo === action.payload.itemNo ? action.payload : course
        ),
      };
    case DELETE_UPCOMMINGCOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        upcommingCourses: state.upcommingCourses.filter(
          (course) => course.itemNo !== action.payload
        ),
      };
    case FETCH_UPCOMMINGCOURSES_FAILURE:
    case EDIT_UPCOMMINGCOURSE_FAILURE:
    case DELETE_UPCOMMINGCOURSE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default upcommingCourseReducer;
