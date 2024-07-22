import {
  FETCH_HOME_NEWEST_COURSES_FAILURE, FETCH_HOME_NEWEST_COURSES_REQUEST, FETCH_HOME_NEWEST_COURSES_SUCCESS,
  FETCH_NEWEST_COURSE_DETAIL_REQUEST,
  FETCH_NEWEST_COURSE_DETAIL_SUCCESS,
  FETCH_NEWEST_COURSE_DETAIL_FAILURE
} from "../../../../constant/data";

const initialState = {
  newestCourses: [],
  course: null,
  loading: false,
  error: null,
};
const HomeNewestCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_NEWEST_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HOME_NEWEST_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        newestCourses: action.payload,
      };
    case FETCH_HOME_NEWEST_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_NEWEST_COURSE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_NEWEST_COURSE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        course: action.payload
      };
    case FETCH_NEWEST_COURSE_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default HomeNewestCourseReducer;