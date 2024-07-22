import {
  FETCH_REVIEW_REQUEST,
  FETCH_REVIEW_SUCCESS,
  FETCH_REVIEW_FAILURE,
} from "../../../constant/data";



export const fetchReviewRequest = () => ({
    type: FETCH_REVIEW_REQUEST,
});

export const fetchReviewSuccess = (data) => ({
    type: FETCH_REVIEW_SUCCESS,
    payload: data,
});

export const fetchReviewFailure = (error) => ({
    type: FETCH_REVIEW_FAILURE,
    payload: error,
});