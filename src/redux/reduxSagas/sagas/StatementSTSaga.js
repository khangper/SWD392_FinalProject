import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchStatementSTSuccess,
    fetchStatementSTFailure,
} from "../../reduxActions/StatementSTAction";

import { FETCH_STATEMENTST_REQUEST } from "../../../constant/data";

function* fetchStatementST() {
    try {
        const response = yield call(
            fetch,
            "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/st_Statement"
        );
        const data = yield response.json();
        yield put(fetchStatementSTSuccess(data));
    } catch (error) {
        yield put(fetchStatementSTFailure(error.toString()));
    }
}

export default function* statementSTSaga() {
    yield takeLatest(FETCH_STATEMENTST_REQUEST, fetchStatementST);
}
