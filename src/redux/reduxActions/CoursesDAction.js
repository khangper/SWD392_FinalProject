import { FETCH_COURSESD_FAILURE, FETCH_COURSESD_REQUEST, FETCH_COURSESD_SUCCESS } from "../../constant/data";

export const fetchCoursesDRequest = () => ({
    type: FETCH_COURSESD_REQUEST,
});

export const fetchCoursesDSuccess = (coursesD) => ({
    type: FETCH_COURSESD_SUCCESS,
    payload: coursesD,
});

export const fetchCoursesDFailure = (error) => ({
    type: FETCH_COURSESD_FAILURE,
    payload: error,
});
