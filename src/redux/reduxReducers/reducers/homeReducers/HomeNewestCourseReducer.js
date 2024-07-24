import {
  FETCH_HOME_NEWEST_COURSES_FAILURE, FETCH_HOME_NEWEST_COURSES_REQUEST, FETCH_HOME_NEWEST_COURSES_SUCCESS,
} from "../../../../constant/data";

const initialState = {
  newestCourses: [],
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
    default:
      return state;
  }
};

export default HomeNewestCourseReducer;