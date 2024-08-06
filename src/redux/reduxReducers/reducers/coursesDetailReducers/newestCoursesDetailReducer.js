import {
  FETCH_NEWEST_COURSE_DETAIL_FAILURE,
  FETCH_NEWEST_COURSE_DETAIL_REQUEST,
  FETCH_NEWEST_COURSE_DETAIL_SUCCESS,
} from "../../../../constant/data";

const initialState = {
  newestCourses: null,
  loading: false,
  error: null,
};

const newestCoursesDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWEST_COURSE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_NEWEST_COURSE_DETAIL_SUCCESS:
      return {
        ...state,
        newestCourses: action.payload.newestCourses,
        loading: false,
        error: null,
      };
    case FETCH_NEWEST_COURSE_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default newestCoursesDetailReducer;
