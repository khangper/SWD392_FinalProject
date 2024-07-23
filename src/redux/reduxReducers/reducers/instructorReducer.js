import {
  FETCH_INSTRUCTORS_MORE_FAILURE,
  FETCH_INSTRUCTORS_MORE_REQUEST,
  FETCH_INSTRUCTORS_MORE_SUCCESS,
  FETCH_INSTRUCTORS_FAILURE,
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_SUCCESS,
  SEARCH_INSTRUCTORS_REQUEST,
} from "../../../constant/data";

const initialState = {
  instructors: [],
  instructorsmore: [],
  // instructorDetail: null,
  loading: false,
  error: null,
};

const instructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INSTRUCTORS_REQUEST:
    case SEARCH_INSTRUCTORS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_INSTRUCTORS_SUCCESS:
      return { ...state, loading: false, instructors: action.payload };
    case FETCH_INSTRUCTORS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    
    case FETCH_INSTRUCTORS_MORE_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_INSTRUCTORS_MORE_SUCCESS:
      return { ...state, loading: false, instructorsmore: action.payload };
    case FETCH_INSTRUCTORS_MORE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default instructorReducer;
