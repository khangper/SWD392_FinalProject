// import {
//   FETCH_SAVECOURSES_FAILURE,
//   FETCH_SAVECOURSES_REQUEST,
//   FETCH_SAVECOURSES_SUCCESS,
//   DELETE_SAVECOURSE_REQUEST,
//   DELETE_SAVECOURSE_SUCCESS,
//   DELETE_SAVECOURSE_FAILURE,
//   DELETE_SAVECOURSES_REQUEST,
//   DELETE_SAVECOURSES_SUCCESS,
//   DELETE_SAVECOURSES_FAILURE,
// } from "../../../constant/data";

// const initialState = {
//   courses: [],
//   loading: false,
//   error: null,
// };

// const saveCourseReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_SAVECOURSES_REQUEST:
//       return { ...state, loading: true, error: null };
//     case FETCH_SAVECOURSES_SUCCESS:
//       return { ...state, loading: false, courses: action.payload };
//     case FETCH_SAVECOURSES_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     case DELETE_SAVECOURSE_REQUEST:
//     case DELETE_SAVECOURSES_REQUEST:
//       return { ...state, loading: true, error: null };
//     case DELETE_SAVECOURSE_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         courses: state.courses.filter((course) => course.id !== action.payload),
//       };
//     case DELETE_SAVECOURSES_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         courses: state.courses.filter(
//           (course) => !action.payload.includes(course.id)
//         ),
//       };
//     case DELETE_SAVECOURSE_FAILURE:
//     case DELETE_SAVECOURSES_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default saveCourseReducer;
// import {
//   FETCH_SAVECOURSES_FAILURE,
//   FETCH_SAVECOURSES_REQUEST,
//   FETCH_SAVECOURSES_SUCCESS,
//   DELETE_SAVECOURSE_REQUEST,
//   DELETE_SAVECOURSE_SUCCESS,
//   DELETE_SAVECOURSE_FAILURE,
//   DELETE_SAVECOURSES_REQUEST,
//   DELETE_SAVECOURSES_SUCCESS,
//   DELETE_SAVECOURSES_FAILURE,
// } from "../../../constant/data";

// const initialState = {
//   courses: [],
//   loading: false,
//   error: null,
// };

// const saveCourseReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_SAVECOURSES_REQUEST:
//       return { ...state, loading: true, error: null };
//     case FETCH_SAVECOURSES_SUCCESS:
//       return { ...state, loading: false, courses: action.payload };
//     case FETCH_SAVECOURSES_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     case DELETE_SAVECOURSE_REQUEST:
//     case DELETE_SAVECOURSES_REQUEST:
//       return { ...state, loading: true, error: null };
//     case DELETE_SAVECOURSE_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         courses: state.courses.filter((course) => course.id !== action.payload),
//       };
//     case DELETE_SAVECOURSES_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         courses: state.courses.filter(
//           (course) => !action.payload.includes(course.id)
//         ),
//       };
//     case DELETE_SAVECOURSE_FAILURE:
//     case DELETE_SAVECOURSES_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default saveCourseReducer;
import {
  FETCH_SAVECOURSES_REQUEST,
  FETCH_SAVECOURSES_SUCCESS,
  FETCH_SAVECOURSES_FAILURE,
  DELETE_SAVECOURSE_REQUEST,
  DELETE_SAVECOURSE_SUCCESS,
  DELETE_SAVECOURSE_FAILURE,
  DELETE_SAVECOURSES_REQUEST,
  DELETE_SAVECOURSES_SUCCESS,
  DELETE_SAVECOURSES_FAILURE,
  DELETE_ALL_SAVECOURSES_REQUEST,
  DELETE_ALL_SAVECOURSES_SUCCESS,
  DELETE_ALL_SAVECOURSES_FAILURE,
  ADD_SAVECOURSE_REQUEST,
  ADD_SAVECOURSE_FAILURE,
  ADD_SAVECOURSE_SUCCESS,
} from "../../../constant/data";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const saveCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAVECOURSES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SAVECOURSES_SUCCESS:
      return { ...state, loading: false, courses: action.payload };
    case FETCH_SAVECOURSES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_SAVECOURSE_REQUEST:
    case DELETE_SAVECOURSES_REQUEST:
    case DELETE_ALL_SAVECOURSES_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_SAVECOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };
    case DELETE_SAVECOURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: state.courses.filter(
          (course) => !action.payload.includes(course.id)
        ),
      };
    case DELETE_ALL_SAVECOURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: [],
      };
    case DELETE_SAVECOURSE_FAILURE:
    case DELETE_SAVECOURSES_FAILURE:
    case DELETE_ALL_SAVECOURSES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_SAVECOURSE_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_SAVECOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: [...state.courses, action.payload],
      };
    case ADD_SAVECOURSE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default saveCourseReducer;
