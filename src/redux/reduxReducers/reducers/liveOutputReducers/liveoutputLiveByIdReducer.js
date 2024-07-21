import {
  FETCH_LIVESTREAM_BY_ID_REQUEST,
  FETCH_LIVESTREAM_BY_ID_SUCCESS,
  FETCH_LIVESTREAM_BY_ID_FAILURE,
} from "../../../../constant/data";

const initialState = {
  live: null,
  loading: false,
  error: null,
};

const livestreamById = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIVESTREAM_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LIVESTREAM_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        live: action.payload.live,
      };
    case FETCH_LIVESTREAM_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default livestreamById;
