import {
  FETCH_LIVE_OUTPUT_LIVESTREAM_REQUEST,
  FETCH_LIVE_OUTPUT_LIVESTREAM_SUCCESS,
  FETCH_LIVE_OUTPUT_LIVESTREAM_FAILURE,
} from "../../../constant/data";

export const fetchLiveOutputLiveStreamsRequest = () => ({
  type: FETCH_LIVE_OUTPUT_LIVESTREAM_REQUEST,
});

export const fetchLiveOutputLiveStreamsSuccess = (data) => ({
  type: FETCH_LIVE_OUTPUT_LIVESTREAM_SUCCESS,
  payload: data,
});

export const fetchLiveOutputLiveStreamsFailure = (error) => ({
  type: FETCH_LIVE_OUTPUT_LIVESTREAM_FAILURE,
  payload: error,
});