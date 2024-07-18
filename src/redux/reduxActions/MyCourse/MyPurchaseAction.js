import {
  FETCH_MYPURCHASECOURSES_REQUEST,
  FETCH_MYPURCHASECOURSES_SUCCESS,
  FETCH_MYPURCHASECOURSES_FAILURE,
  EDIT_MYPURCHASECOURSE_REQUEST,
  EDIT_MYPURCHASECOURSE_SUCCESS,
  EDIT_MYPURCHASECOURSE_FAILURE,
  DELETE_MYPURCHASECOURSE_REQUEST,
  DELETE_MYPURCHASECOURSE_SUCCESS,
  DELETE_MYPURCHASECOURSE_FAILURE,
} from "../../../constant/data";

export const fetchMyPurchaseCoursesRequest = () => ({
  type: FETCH_MYPURCHASECOURSES_REQUEST,
});
export const fetchMyPurchaseCoursesSuccess = (courses) => ({
  type: FETCH_MYPURCHASECOURSES_SUCCESS,
  payload: courses,
});
export const fetchMyPurchaseCoursesFailure = (error) => ({
  type: FETCH_MYPURCHASECOURSES_FAILURE,
  payload: error,
});

export const editMyPurchaseCourseRequest = (course) => ({
  type: EDIT_MYPURCHASECOURSE_REQUEST,
  payload: course,
});
export const editMyPurchaseCourseSuccess = (course) => ({
  type: EDIT_MYPURCHASECOURSE_SUCCESS,
  payload: course,
});
export const editMyPurchaseCourseFailure = (error) => ({
  type: EDIT_MYPURCHASECOURSE_FAILURE,
  payload: error,
});

export const deleteMyPurchaseCourseRequest = (courseId) => ({
  type: DELETE_MYPURCHASECOURSE_REQUEST,
  payload: courseId,
});
export const deleteMyPurchaseCourseSuccess = (courseId) => ({
  type: DELETE_MYPURCHASECOURSE_SUCCESS,
  payload: courseId,
});
export const deleteMyPurchaseCourseFailure = (error) => ({
  type: DELETE_MYPURCHASECOURSE_FAILURE,
  payload: error,
});
