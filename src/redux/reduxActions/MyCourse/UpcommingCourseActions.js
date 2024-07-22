import {
  FETCH_UPCOMMINGCOURSES_REQUEST,
  FETCH_UPCOMMINGCOURSES_SUCCESS,
  FETCH_UPCOMMINGCOURSES_FAILURE,
  EDIT_UPCOMMINGCOURSE_REQUEST,
  EDIT_UPCOMMINGCOURSE_SUCCESS,
  EDIT_UPCOMMINGCOURSE_FAILURE,
  DELETE_UPCOMMINGCOURSE_REQUEST,
  DELETE_UPCOMMINGCOURSE_SUCCESS,
  DELETE_UPCOMMINGCOURSE_FAILURE,
} from "../../../constant/data";

export const fetchUpcommingCoursesRequest = () => ({
  type: FETCH_UPCOMMINGCOURSES_REQUEST,
});
export const fetchUpcommingCoursesSuccess = (courses) => ({
  type: FETCH_UPCOMMINGCOURSES_SUCCESS,
  payload: courses,
});
export const fetchUpcommingCoursesFailure = (error) => ({
  type: FETCH_UPCOMMINGCOURSES_FAILURE,
  payload: error,
});

export const editUpcommingCourseRequest = (course) => ({
  type: EDIT_UPCOMMINGCOURSE_REQUEST,
  payload: course,
});
export const editUpcommingCourseSuccess = (course) => ({
  type: EDIT_UPCOMMINGCOURSE_SUCCESS,
  payload: course,
});
export const editUpcommingCourseFailure = (error) => ({
  type: EDIT_UPCOMMINGCOURSE_FAILURE,
  payload: error,
});

export const deleteUpcommingCourseRequest = (courseId) => ({
  type: DELETE_UPCOMMINGCOURSE_REQUEST,
  payload: courseId,
});
export const deleteUpcommingCourseSuccess = (courseId) => ({
  type: DELETE_UPCOMMINGCOURSE_SUCCESS,
  payload: courseId,
});
export const deleteUpcommingCourseFailure = (error) => ({
  type: DELETE_UPCOMMINGCOURSE_FAILURE,
  payload: error,
});
