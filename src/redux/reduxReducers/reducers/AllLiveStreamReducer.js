import {
  FETCH_STREAMS_FAILURE,
  FETCH_STREAMS_REQUEST,
  FETCH_STREAMS_SUCCESS,
} from "../../../constant/data";

const initialState = {
  streams: [],
  loading: false,
  error: null,
};

const streamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STREAMS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_STREAMS_SUCCESS:
      return { ...state, loading: false, streams: action.payload };
    case FETCH_STREAMS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default streamsReducer;
