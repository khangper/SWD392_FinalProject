import {
  FETCH_BLOG_DETAIL_REQUEST,
  FETCH_BLOG_DETAIL_FAILURE,
  FETCH_BLOG_DETAIL_SUCCESS,
} from "../../../constant/data";


export const fetchBlogDetailRequest = (id) => ({
  type: FETCH_BLOG_DETAIL_REQUEST,
  payload: { id },
});

export const fetchBlogDetailSuccess = (blog) => ({
  type: FETCH_BLOG_DETAIL_SUCCESS,
  payload: { blog },
});

export const fetchBlogDetailFailure = (error) => ({
  type: FETCH_BLOG_DETAIL_FAILURE,
  payload: { error },
});