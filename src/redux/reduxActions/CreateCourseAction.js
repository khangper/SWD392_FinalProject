import { CREATE_COURSE_FAILURE, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS } from "../../constant/data";

export const createCourseRequest = (courseData) => ({
    type: CREATE_COURSE_REQUEST,
    payload: courseData,
  });
  
  export const createCourseSuccess = (course) => ({
    type: CREATE_COURSE_SUCCESS,
    payload: course,
  });
  
  export const createCourseFailure = (error) => ({
    type: CREATE_COURSE_FAILURE,
    payload: error,
  });