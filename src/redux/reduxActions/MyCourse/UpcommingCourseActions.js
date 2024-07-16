import {
  DELETE_UPCOMMINGCOURSE_FAILURE,
  DELETE_UPCOMMINGCOURSE_REQUEST,
  DELETE_UPCOMMINGCOURSE_SUCCESS,
  EDIT_UPCOMMINGCOURSE_FAILURE,
  EDIT_UPCOMMINGCOURSE_REQUEST,
  EDIT_UPCOMMINGCOURSE_SUCCESS,
  FETCH_UPCOMMINGCOURSES_FAILURE,
  FETCH_UPCOMMINGCOURSES_REQUEST,
  FETCH_UPCOMMINGCOURSES_SUCCESS,
} from "../../../constant/data";

export const fetchUpCommingCoursesRequest = () => ({
  type: FETCH_UPCOMMINGCOURSES_REQUEST,
});
export const fetchUpCommingCoursesSuccess = (courses) => ({
  type: FETCH_UPCOMMINGCOURSES_SUCCESS,
  payload: courses,
});
export const fetchUpCommingCoursesFailure = (error) => ({
  type: FETCH_UPCOMMINGCOURSES_FAILURE,
  payload: error,
});

export const editUpCommingCourseRequest = (course) => ({
  type: EDIT_UPCOMMINGCOURSE_REQUEST,
  payload: course,
});
export const editUpCommingCourseSuccess = (course) => ({
  type: EDIT_UPCOMMINGCOURSE_SUCCESS,
  payload: course,
});
export const editUpCommingCourseFailure = (error) => ({
  type: EDIT_UPCOMMINGCOURSE_FAILURE,
  payload: error,
});

export const deleteUpCommingCourseRequest = (courseId) => ({
  type: DELETE_UPCOMMINGCOURSE_REQUEST,
  payload: courseId,
});
export const deleteUpCommingCourseSuccess = (courseId) => ({
  type: DELETE_UPCOMMINGCOURSE_SUCCESS,
  payload: courseId,
});
export const deleteUpCommingCourseFailure = (error) => ({
  type: DELETE_UPCOMMINGCOURSE_FAILURE,
  payload: error,
});
