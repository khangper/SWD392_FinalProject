// reducers/HomePopularInstructorReducer.js
import {
  FETCH_HOME_POPULAR_INSTRUCTOR_FAILURE, FETCH_HOME_POPULAR_INSTRUCTOR_REQUEST, FETCH_HOME_POPULAR_INSTRUCTOR_SUCCESS,
  FETCH_POPULAR_INSTRUCTOR_DETAIL_REQUEST,
  FETCH_POPULAR_INSTRUCTOR_DETAIL_SUCCESS,
  FETCH_POPULAR_INSTRUCTOR_DETAIL_FAILURE
} from "../../../../constant/data";

const initialState = {
  popularInstructors: [],
  popularInstructor: null,
  loading: false,
  error: null,
};

const HomePopularInstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_POPULAR_INSTRUCTOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HOME_POPULAR_INSTRUCTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        popularInstructors: action.payload,
      };
    case FETCH_HOME_POPULAR_INSTRUCTOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_POPULAR_INSTRUCTOR_DETAIL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_POPULAR_INSTRUCTOR_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        popularInstructor: action.payload
      };
    case FETCH_POPULAR_INSTRUCTOR_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default HomePopularInstructorReducer;
