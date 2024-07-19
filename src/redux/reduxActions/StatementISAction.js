import {
    FETCH_STATEMENTIS_REQUEST,
    FETCH_STATEMENTIS_SUCCESS,
    FETCH_STATEMENTIS_FAILURE,
} from "../../constant/data";

export const fetchStatementISRequest = () => ({
    type: FETCH_STATEMENTIS_REQUEST,
});

export const fetchStatementISSuccess = (data) => ({
    type: FETCH_STATEMENTIS_SUCCESS,
    payload: data,
});

export const fetchStatementISFailure = (error) => ({
    type: FETCH_STATEMENTIS_FAILURE,
    payload: error,
});