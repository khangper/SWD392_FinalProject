import {
  FETCH_BLOG_REQUEST,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOG_FAILURE,
} from "../../../constant/data";

export const fetchBlogRequest = () => ({
    type: FETCH_BLOG_REQUEST,
});

export const fetchBlogSuccess = (data) => ({
    type: FETCH_BLOG_SUCCESS,
    payload: data,
});

export const fetchBlogFailure = (error) => ({
    type: FETCH_BLOG_FAILURE,
    payload: error,
});
