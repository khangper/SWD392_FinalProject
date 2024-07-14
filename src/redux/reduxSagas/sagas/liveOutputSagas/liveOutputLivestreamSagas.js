import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchLiveOutputLiveStreamsSuccess,
  fetchLiveOutputLiveStreamsFailure,
} from "../../../reduxActions/liveOutputActions/liveOutputLiveActions";
import { FETCH_LIVE_OUTPUT_LIVESTREAM_REQUEST } from "../../../../constant/data";
function* fetchLiveOutputLiveStreams() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/home_livestream"
    );
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
  }
}

export function* watchFetchLiveOutputLiveStreams() {
  yield takeEvery(
    FETCH_LIVE_OUTPUT_LIVESTREAM_REQUEST,
    fetchLiveOutputLiveStreams
  );
}
