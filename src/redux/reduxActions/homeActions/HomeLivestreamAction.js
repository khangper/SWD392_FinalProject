import {
  FETCH_HOME_LIVESTREAM_FAILURE,
  FETCH_HOME_LIVESTREAM_REQUEST,
  FETCH_HOME_LIVESTREAM_SUCCESS,
  SEARCH_LIVESTREAMS_REQUEST,
  SEARCH_LIVESTREAMS_SUCCESS,
  SEARCH_LIVESTREAMS_FAILURE,
} from "../../../constant/data";

export const fetchHomeLiveStreamsRequest = () => ({
  type: FETCH_HOME_LIVESTREAM_REQUEST,
});

export const fetchHomeLiveStreamsSuccess = (data) => ({
  type: FETCH_HOME_LIVESTREAM_SUCCESS,
  payload: data,
});

export const fetchHomeLiveStreamsFailure = (error) => ({
  type: FETCH_HOME_LIVESTREAM_FAILURE,
  payload: error,
});

export const searchLiveStreamsRequest = (query) => ({
  type: SEARCH_LIVESTREAMS_REQUEST,
  payload: query,
});

export const searchLiveStreamsSuccess = (data) => ({
  type: SEARCH_LIVESTREAMS_SUCCESS,
  payload: data,
});

export const searchLiveStreamsFailure = (error) => ({
  type: SEARCH_LIVESTREAMS_FAILURE,
  payload: error,
});
