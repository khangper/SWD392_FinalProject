import {
  FETCH_REVIEW_FAILURE,
  FETCH_REVIEW_REQUEST,
  FETCH_REVIEW_SUCCESS,
} from "../../../../constant/data";

const initialState = {
  review: [],
  loading: false,
  error: null,
};

const ReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        review: action.payload,
      };
    case FETCH_REVIEW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ReviewReducer;
