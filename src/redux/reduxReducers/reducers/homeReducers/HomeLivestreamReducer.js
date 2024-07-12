import { FETCH_HOME_LIVESTREAM_FAILURE, FETCH_HOME_LIVESTREAM_REQUEST, FETCH_HOME_LIVESTREAM_SUCCESS } from "../../../../constant/data";

const initialState = {
    liveStreams: [],
    loading: false,
    error: null
  };
  
  const HomeLivestreamReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_HOME_LIVESTREAM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_HOME_LIVESTREAM_SUCCESS:
        return {
          ...state,
          loading: false,
          liveStreams: action.payload
        };
      case FETCH_HOME_LIVESTREAM_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default HomeLivestreamReducer;