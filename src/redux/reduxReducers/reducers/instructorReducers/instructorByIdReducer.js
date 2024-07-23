import {
  FETCH_INSTRUCTOR_BY_ID_REQUEST,
  FETCH_INSTRUCTOR_BY_ID_SUCCESS,
  FETCH_INSTRUCTOR_BY_ID_FAILURE,
} from "../../../../constant/data";

// const initialState = {
//   ins: null,
//   loading: false,
//   error: null,
// };

// const instructorById = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_INSTRUCTOR_BY_ID_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case FETCH_INSTRUCTOR_BY_ID_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         ins: action.payload.ins,
//       };
//     case FETCH_INSTRUCTOR_BY_ID_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.error,
//       };
//     default:
//       return state;
//   }
// };
// export default instructorById;

const initialState = {
  instructor: null,
  loading: false,
  error: null
};

const instructorByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INSTRUCTOR_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_INSTRUCTOR_BY_ID_SUCCESS:
      return {
        ...state,
        instructor: action.payload.instructor,
        loading: false,
        error: null
      };
    case FETCH_INSTRUCTOR_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default instructorByIdReducer;