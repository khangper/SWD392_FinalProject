// import {
//   DELETE_SAVECOURSE_FAILURE,
//   DELETE_SAVECOURSE_REQUEST,
//   DELETE_SAVECOURSE_SUCCESS,
//   DELETE_SAVECOURSES_FAILURE,
//   DELETE_SAVECOURSES_REQUEST,
//   DELETE_SAVECOURSES_SUCCESS,
//   FETCH_SAVECOURSES_FAILURE,
//   FETCH_SAVECOURSES_REQUEST,
//   FETCH_SAVECOURSES_SUCCESS,
// } from "../../constant/data";

// export const fetchSaveCoursesRequest = () => ({
//   type: FETCH_SAVECOURSES_REQUEST,
// });

// export const fetchSaveCoursesSuccess = (courses) => ({
//   type: FETCH_SAVECOURSES_SUCCESS,
//   payload: courses,
// });

// export const fetchSaveCoursesFailure = (error) => ({
//   type: FETCH_SAVECOURSES_FAILURE,
//   payload: error,
// });

// export const deleteSaveCourseRequest = (id) => ({
//   type: DELETE_SAVECOURSE_REQUEST,
//   payload: id,
// });

// export const deleteSaveCourseSuccess = (id) => ({
//   type: DELETE_SAVECOURSE_SUCCESS,
//   payload: id,
// });

// export const deleteSaveCourseFailure = (error) => ({
//   type: DELETE_SAVECOURSE_FAILURE,
//   payload: error,
// });

// export const deleteSaveCoursesRequest = (ids) => ({
//   type: DELETE_SAVECOURSES_REQUEST,
//   payload: ids,
// });

// export const deleteSaveCoursesSuccess = (ids) => ({
//   type: DELETE_SAVECOURSES_SUCCESS,
//   payload: ids,
// });

// export const deleteSaveCoursesFailure = (error) => ({
//   type: DELETE_SAVECOURSES_FAILURE,
//   payload: error,
// });
// import {
//   DELETE_SAVECOURSE_FAILURE,
//   DELETE_SAVECOURSE_REQUEST,
//   DELETE_SAVECOURSE_SUCCESS,
//   DELETE_SAVECOURSES_FAILURE,
//   DELETE_SAVECOURSES_REQUEST,
//   DELETE_SAVECOURSES_SUCCESS,
//   FETCH_SAVECOURSES_FAILURE,
//   FETCH_SAVECOURSES_REQUEST,
//   FETCH_SAVECOURSES_SUCCESS,
// } from "../../constant/data";

// export const fetchSaveCoursesRequest = () => ({
//   type: FETCH_SAVECOURSES_REQUEST,
// });

// export const fetchSaveCoursesSuccess = (courses) => ({
//   type: FETCH_SAVECOURSES_SUCCESS,
//   payload: courses,
// });

// export const fetchSaveCoursesFailure = (error) => ({
//   type: FETCH_SAVECOURSES_FAILURE,
//   payload: error,
// });

// export const deleteSaveCourseRequest = (id) => ({
//   type: DELETE_SAVECOURSE_REQUEST,
//   payload: id,
// });

// export const deleteSaveCourseSuccess = (id) => ({
//   type: DELETE_SAVECOURSE_SUCCESS,
//   payload: id,
// });

// export const deleteSaveCourseFailure = (error) => ({
//   type: DELETE_SAVECOURSE_FAILURE,
//   payload: error,
// });

// export const deleteSaveCoursesRequest = (ids) => ({
//   type: DELETE_SAVECOURSES_REQUEST,
//   payload: ids,
// });

// export const deleteSaveCoursesSuccess = (ids) => ({
//   type: DELETE_SAVECOURSES_SUCCESS,
//   payload: ids,
// });

// export const deleteSaveCoursesFailure = (error) => ({
//   type: DELETE_SAVECOURSES_FAILURE,
//   payload: error,
// });
import {
  DELETE_SAVECOURSE_FAILURE,
  DELETE_SAVECOURSE_REQUEST,
  DELETE_SAVECOURSE_SUCCESS,
  DELETE_SAVECOURSES_FAILURE,
  DELETE_SAVECOURSES_REQUEST,
  DELETE_SAVECOURSES_SUCCESS,
  DELETE_ALL_SAVECOURSES_FAILURE,
  DELETE_ALL_SAVECOURSES_REQUEST,
  DELETE_ALL_SAVECOURSES_SUCCESS,
  FETCH_SAVECOURSES_FAILURE,
  FETCH_SAVECOURSES_REQUEST,
  FETCH_SAVECOURSES_SUCCESS,
} from "../../constant/data";

export const fetchSaveCoursesRequest = () => ({
  type: FETCH_SAVECOURSES_REQUEST,
});

export const fetchSaveCoursesSuccess = (courses) => ({
  type: FETCH_SAVECOURSES_SUCCESS,
  payload: courses,
});

export const fetchSaveCoursesFailure = (error) => ({
  type: FETCH_SAVECOURSES_FAILURE,
  payload: error,
});

export const deleteSaveCourseRequest = (id) => ({
  type: DELETE_SAVECOURSE_REQUEST,
  payload: id,
});

export const deleteSaveCourseSuccess = (id) => ({
  type: DELETE_SAVECOURSE_SUCCESS,
  payload: id,
});

export const deleteSaveCourseFailure = (error) => ({
  type: DELETE_SAVECOURSE_FAILURE,
  payload: error,
});

export const deleteSaveCoursesRequest = (ids) => ({
  type: DELETE_SAVECOURSES_REQUEST,
  payload: ids,
});

export const deleteSaveCoursesSuccess = (ids) => ({
  type: DELETE_SAVECOURSES_SUCCESS,
  payload: ids,
});

export const deleteSaveCoursesFailure = (error) => ({
  type: DELETE_SAVECOURSES_FAILURE,
  payload: error,
});

export const deleteAllSaveCoursesRequest = () => ({
  type: DELETE_ALL_SAVECOURSES_REQUEST,
});

export const deleteAllSaveCoursesSuccess = () => ({
  type: DELETE_ALL_SAVECOURSES_SUCCESS,
});

export const deleteAllSaveCoursesFailure = (error) => ({
  type: DELETE_ALL_SAVECOURSES_FAILURE,
  payload: error,
});
