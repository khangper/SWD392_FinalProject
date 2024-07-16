import {
  FETCH_LIVE_OUTPUT_LIVESTREAM_REQUEST,
  FETCH_LIVE_OUTPUT_LIVESTREAM_SUCCESS,
  FETCH_LIVE_OUTPUT_LIVESTREAM_FAILURE,
} from "../../../../constant/data";

const initialState = {
  liveStreams: [],
  loading: false,
  error: null,
};

const liveOutputLivestreamReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIVE_OUTPUT_LIVESTREAM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LIVE_OUTPUT_LIVESTREAM_SUCCESS:
      return {
        ...state,
        loading: false,
        liveStreams: action.payload,
      };
    case FETCH_LIVE_OUTPUT_LIVESTREAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default liveOutputLivestreamReducers;
