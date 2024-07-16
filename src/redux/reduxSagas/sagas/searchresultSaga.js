
import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchSearchResultSuccess,
    fetchSearchResultFailure,
} from "../../reduxActions/searchresultAction";

import { FETCH_SEARCH_RESULT_REQUEST } from "../../../constant/data";

function* fetchSearchResult() {
    try {
        const response = yield call(
            fetch,
            "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/SearchResult"
        );
        const data = yield response.json();
        yield put(fetchSearchResultSuccess(data));
    } catch (error) {
        yield put(fetchSearchResultFailure(error.toString()));
    }
}

export default function* searchresultSaga() {
    yield takeLatest(FETCH_SEARCH_RESULT_REQUEST, fetchSearchResult);
}
