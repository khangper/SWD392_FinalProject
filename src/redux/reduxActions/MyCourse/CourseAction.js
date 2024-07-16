import {
  DELETE_COURSE_FAILURE,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  EDIT_COURSE_FAILURE,
  EDIT_COURSE_REQUEST,
  EDIT_COURSE_SUCCESS,
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
} from "../../../constant/data";

export const fetchCoursesRequest = () => ({ type: FETCH_COURSES_REQUEST });
export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});
export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: error,
});

export const editCourseRequest = (course) => ({
  type: EDIT_COURSE_REQUEST,
  payload: course,
});
export const editCourseSuccess = (course) => ({
  type: EDIT_COURSE_SUCCESS,
  payload: course,
});
export const editCourseFailure = (error) => ({
  type: EDIT_COURSE_FAILURE,
  payload: error,
});

export const deleteCourseRequest = (courseId) => ({
  type: DELETE_COURSE_REQUEST,
  payload: courseId,
});
export const deleteCourseSuccess = (courseId) => ({
  type: DELETE_COURSE_SUCCESS,
  payload: courseId,
});
export const deleteCourseFailure = (error) => ({
  type: DELETE_COURSE_FAILURE,
  payload: error,
});
