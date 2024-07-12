import {
  FETCH_STREAMS_FAILURE,
  FETCH_STREAMS_REQUEST,
  FETCH_STREAMS_SUCCESS,
} from "../../constant/data";

export const fetchStreamsRequest = () => ({
  type: FETCH_STREAMS_REQUEST,
});

export const fetchStreamsSuccess = (streams) => ({
  type: FETCH_STREAMS_SUCCESS,
  payload: streams,
});

export const fetchStreamsFailure = (error) => ({
  type: FETCH_STREAMS_FAILURE,
  payload: error,
});
