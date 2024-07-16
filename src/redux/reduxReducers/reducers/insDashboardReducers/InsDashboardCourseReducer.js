import { 
    FETCH_INS_DASHBOARD_COURSE_REQUEST, 
    FETCH_INS_DASHBOARD_COURSE_SUCCESS, 
    FETCH_INS_DASHBOARD_COURSE_FAILURE 
  } from "../../../../constant/data";
  
  const initialState = {
    insDashboardCourses: [],
    loading: false,
    error: null,
  };
  
  const InsDashboardCourseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INS_DASHBOARD_COURSE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_INS_DASHBOARD_COURSE_SUCCESS:
        return {
          ...state,
          loading: false,
          insDashboardCourses: action.payload,
        };
      case FETCH_INS_DASHBOARD_COURSE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default InsDashboardCourseReducer;
  