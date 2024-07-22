import { FETCH_BLOG_DETAIL_FAILURE, FETCH_BLOG_DETAIL_REQUEST, FETCH_BLOG_DETAIL_SUCCESS } from "../../../../constant/data";

const initialState = {
  blog: null,
  loading: false,
  error: null,
};

const blogDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BLOG_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        blog: action.payload.blog,
      };
    case FETCH_BLOG_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default blogDetailReducer;
