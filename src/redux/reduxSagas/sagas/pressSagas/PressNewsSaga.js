import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchPressNewsSuccess,
  fetchPressNewsFailure,
} from "../../../reduxActions/pressActions/PressNewsAction";
import { API_KEY, FETCH_PRESS_NEWS_REQUEST } from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchPressNews() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}press_news`);

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchPressNewsSuccess(data));
    } else {
      yield put(fetchPressNewsFailure(data.message || "Failed to fetch news"));
    }
  } catch (error) {
    yield put(fetchPressNewsFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchPressNews() {
  yield takeEvery(FETCH_PRESS_NEWS_REQUEST, fetchPressNews);
}
