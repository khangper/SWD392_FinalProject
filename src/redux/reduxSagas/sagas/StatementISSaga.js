import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchStatementISSuccess,
    fetchStatementISFailure,
} from "../../reduxActions/StatementISAction";

import { FETCH_STATEMENTIS_REQUEST } from "../../../constant/data";

function* fetchStatementIS() {
    try {
        const response = yield call(
            fetch,
            "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/is_Statement"
        );
        const data = yield response.json();
        yield put(fetchStatementISSuccess(data));
    } catch (error) {
        yield put(fetchStatementISFailure(error.toString()));
    }
}

export default function* statementISSaga() {
    yield takeLatest(FETCH_STATEMENTIS_REQUEST, fetchStatementIS);
}
