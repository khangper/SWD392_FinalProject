import { FETCH_FEATURED_COURSES_DETAIL_FAILURE, FETCH_FEATURED_COURSES_DETAIL_REQUEST, FETCH_FEATURED_COURSES_DETAIL_SUCCESS } from "../../../../constant/data";

const initialState = {
  featureCourses: null,
  loading: false,
  error: null
};

const featureCoursesDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEATURED_COURSES_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_FEATURED_COURSES_DETAIL_SUCCESS:
      return {
        ...state,
        featureCourses: action.payload.featureCourses,
        loading: false,
        error: null
      };
    case FETCH_FEATURED_COURSES_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default featureCoursesDetailReducer;