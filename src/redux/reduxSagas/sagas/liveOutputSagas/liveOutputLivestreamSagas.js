import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchLiveOutputLiveStreamsSuccess,
  fetchLiveOutputLiveStreamsFailure,
} from "../../../reduxActions/liveOutputActions/liveOutputLiveActions";
import {
  API_KEY,
  FETCH_LIVE_OUTPUT_LIVESTREAM_REQUEST,
} from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
function* fetchLiveOutputLiveStreams() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}home_livestream`);
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchLiveOutputLiveStreamsSuccess(data));
    } else {
      yield put(
        fetchLiveOutputLiveStreamsFailure(
          data.message || "Failed to fetch live streams"
        )
      );
    }
  } catch (error) {
    yield put(fetchLiveOutputLiveStreamsFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchLiveOutputLiveStreams() {
  yield takeEvery(
    FETCH_LIVE_OUTPUT_LIVESTREAM_REQUEST,
    fetchLiveOutputLiveStreams
  );
}
