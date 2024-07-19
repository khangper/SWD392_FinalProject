import {
  FETCH_MYPURCHASECOURSES_REQUEST,
  FETCH_MYPURCHASECOURSES_SUCCESS,
  FETCH_MYPURCHASECOURSES_FAILURE,
  EDIT_MYPURCHASECOURSE_REQUEST,
  EDIT_MYPURCHASECOURSE_SUCCESS,
  EDIT_MYPURCHASECOURSE_FAILURE,
  DELETE_MYPURCHASECOURSE_REQUEST,
  DELETE_MYPURCHASECOURSE_SUCCESS,
  DELETE_MYPURCHASECOURSE_FAILURE,
} from "../../../../constant/data";

const initialState = {
  myPurchaseCourses: [],
  loading: false,
  error: null,
};

const myPurchaseCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MYPURCHASECOURSES_REQUEST:
    case EDIT_MYPURCHASECOURSE_REQUEST:
    case DELETE_MYPURCHASECOURSE_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_MYPURCHASECOURSES_SUCCESS:
      return { ...state, loading: false, myPurchaseCourses: action.payload };
    case EDIT_MYPURCHASECOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        myPurchaseCourses: state.myPurchaseCourses.map((course) =>
          course.itemNo === action.payload.itemNo ? action.payload : course
        ),
      };
    case DELETE_MYPURCHASECOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        myPurchaseCourses: state.myPurchaseCourses.filter(
          (course) => course.itemNo !== action.payload
        ),
      };
    case FETCH_MYPURCHASECOURSES_FAILURE:
    case EDIT_MYPURCHASECOURSE_FAILURE:
    case DELETE_MYPURCHASECOURSE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default myPurchaseCourseReducer;
