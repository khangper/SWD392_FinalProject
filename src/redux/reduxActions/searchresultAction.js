import {
    FETCH_SEARCH_RESULT_REQUEST,
    FETCH_SEARCH_RESULT_SUCCESS,
    FETCH_SEARCH_RESULT_FAILURE,
} from "../../constant/data";

export const fetchSearchResultRequest = () => ({
    type: FETCH_SEARCH_RESULT_REQUEST,
});

export const fetchSearchResultSuccess = (sr_course) => ({
    type: FETCH_SEARCH_RESULT_SUCCESS,
    payload: sr_course,
});

export const fetchSearchResultFailure = (error) => ({
    type: FETCH_SEARCH_RESULT_FAILURE,
    payload: error,
});