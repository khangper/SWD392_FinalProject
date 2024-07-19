import {
    FETCH_STATEMENTST_REQUEST,
    FETCH_STATEMENTST_SUCCESS,
    FETCH_STATEMENTST_FAILURE,
} from "../../constant/data";

export const fetchStatementSTRequest = () => ({
    type: FETCH_STATEMENTST_REQUEST,
});

export const fetchStatementSTSuccess = (data) => ({
    type: FETCH_STATEMENTST_SUCCESS,
    payload: data,
});

export const fetchStatementSTFailure = (error) => ({
    type: FETCH_STATEMENTST_FAILURE,
    payload: error,
});