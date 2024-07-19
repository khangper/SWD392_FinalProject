import {
  FETCH_NOTIFICATIONSSTUDENT_REQUEST,
  FETCH_NOTIFICATIONSSTUDENT_SUCCESS,
  FETCH_NOTIFICATIONSSTUDENT_FAILURE,
} from "../../../../constant/data";

const initialState = {
  notifications: [],
  loading: false,
  error: null,
};

const notificationstudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONSSTUDENT_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_NOTIFICATIONSSTUDENT_SUCCESS:
      return { ...state, loading: false, notifications: action.payload };
    case FETCH_NOTIFICATIONSSTUDENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default notificationstudentReducer;
