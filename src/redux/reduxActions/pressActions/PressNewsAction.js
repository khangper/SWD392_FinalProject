import {
  FETCH_PRESS_NEWS_REQUEST,
  FETCH_PRESS_NEWS_SUCCESS,
  FETCH_PRESS_NEWS_FAILURE,
} from "../../../constant/data";

export const fetchPressNewsRequest = () => ({
    type: FETCH_PRESS_NEWS_REQUEST,
});

export const fetchPressNewsSuccess = (data) => ({
    type: FETCH_PRESS_NEWS_SUCCESS,
    payload: data,
});

export const fetchPressNewsFailure = (error) => ({
    type: FETCH_PRESS_NEWS_FAILURE,
    payload: error,
});
