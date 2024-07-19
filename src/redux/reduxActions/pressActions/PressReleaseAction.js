import {
  FETCH_PRESS_RELEASE_REQUEST,
  FETCH_PRESS_RELEASE_SUCCESS,
  FETCH_PRESS_NEWS_FAILURE,
} from "../../../constant/data";

export const fetchPressReleaseRequest = () => ({
    type: FETCH_PRESS_RELEASE_REQUEST,
});

export const fetchPressReleaseSuccess = (data) => ({
    type: FETCH_PRESS_RELEASE_SUCCESS,
    payload: data,
});

export const fetchPressReleaseFailure = (error) => ({
    type: FETCH_PRESS_NEWS_FAILURE,
    payload: error,
});