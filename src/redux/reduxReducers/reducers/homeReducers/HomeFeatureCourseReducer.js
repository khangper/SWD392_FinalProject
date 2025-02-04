import {
  FETCH_HOME_FEATURED_COURSES_FAILURE, FETCH_HOME_FEATURED_COURSES_REQUEST, FETCH_HOME_FEATURED_COURSES_SUCCESS,
} from "../../../../constant/data";


const initialState = {
  featuredCourses: [],
  loading: false,
  error: null,
};

const HomeFeaturedCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_FEATURED_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HOME_FEATURED_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        featuredCourses: action.payload,
      };
    case FETCH_HOME_FEATURED_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default HomeFeaturedCourseReducer;
