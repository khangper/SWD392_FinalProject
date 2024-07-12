import {
  FETCH_HOME_LIVESTREAM_FAILURE,
  FETCH_HOME_LIVESTREAM_REQUEST,
  FETCH_HOME_LIVESTREAM_SUCCESS,
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


