import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchHomeLiveStreamsSuccess,
  fetchHomeLiveStreamsFailure,
  searchLiveStreamsSuccess,
  searchLiveStreamsFailure,
} from "../../../reduxActions/homeActions/HomeLivestreamAction";
import {
  FETCH_HOME_LIVESTREAM_REQUEST,
  SEARCH_LIVESTREAMS_REQUEST,
} from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import { API_KEY } from "../../../../constant/data";

function* fetchHomeLiveStreams() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}home_livestream`);
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchHomeLiveStreamsSuccess(data));
    } else {
      yield put(
        fetchHomeLiveStreamsFailure(
          data.message || "Failed to fetch live streams"
        )
      );
    }
  } catch (error) {
    yield put(fetchHomeLiveStreamsFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

function* searchLiveStreams(action) {
  try {
    yield put(startLoading());
    const response = yield call(
      fetch,
      `${API_KEY}home_livestream?q=${action.payload}`
    );
    const data = yield response.json();
    if (response.ok) {
      yield put(searchLiveStreamsSuccess(data));
    } else {
      yield put(
        searchLiveStreamsFailure(
          data.message || "Failed to search live streams"
        )
      );
    }
  } catch (error) {
    yield put(searchLiveStreamsFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchHomeLiveStreams() {
  yield takeEvery(FETCH_HOME_LIVESTREAM_REQUEST, fetchHomeLiveStreams);
  yield takeLatest(SEARCH_LIVESTREAMS_REQUEST, searchLiveStreams);
}
