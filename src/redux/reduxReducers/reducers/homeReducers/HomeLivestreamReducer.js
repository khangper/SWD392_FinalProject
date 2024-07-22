import {
  FETCH_HOME_LIVESTREAM_FAILURE,
  FETCH_HOME_LIVESTREAM_REQUEST,
  FETCH_HOME_LIVESTREAM_SUCCESS,
  SEARCH_LIVESTREAMS_REQUEST,
  SEARCH_LIVESTREAMS_SUCCESS,
  SEARCH_LIVESTREAMS_FAILURE,
} from "../../../../constant/data";

const initialState = {
  liveStreams: [],
  loading: false,
  error: null,
};

const HomeLivestreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_LIVESTREAM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HOME_LIVESTREAM_SUCCESS:
      return {
        ...state,
        loading: false,
        liveStreams: action.payload,
      };
    case FETCH_HOME_LIVESTREAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_LIVESTREAMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_LIVESTREAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        liveStreams: action.payload,
      };
    case SEARCH_LIVESTREAMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default HomeLivestreamReducer;
