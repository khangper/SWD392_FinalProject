
import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchSearchResultSuccess,
    fetchSearchResultFailure,
    searchSearchResultSuccess,
    searchSearchResultFailure
} from "../../reduxActions/searchresultAction";

import { FETCH_SEARCH_RESULT_REQUEST, SEARCH_SEARCH_RESULT_REQUEST } from "../../../constant/data";

import { startLoading, stopLoading } from "../../../redux/reduxActions/LoadingAction";
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

function* searchSearchResult(action) {
    try {
        yield put(startLoading());
        const response = yield call(
            fetch,
            `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/SearchResult?search=${action.payload}`
        );
        const data = yield response.json();
        yield put(searchSearchResultSuccess(data));
    } catch (error) {
        yield put(searchSearchResultFailure(error.toString()));
    } finally {
        yield put(stopLoading());
    }
}

export default function* searchresultSaga() {
    yield takeLatest(FETCH_SEARCH_RESULT_REQUEST, fetchSearchResult);
    yield takeLatest(SEARCH_SEARCH_RESULT_REQUEST, searchSearchResult);
}
