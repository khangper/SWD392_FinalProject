// redux/sagas/AllLiveStreamSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchStreamsSuccess,
  fetchStreamsFailure,
} from "../../reduxActions/liveStreamAction";

import { API_KEY, FETCH_STREAMS_REQUEST } from "../../../constant/data";
import { startLoading, stopLoading } from "../../reduxActions/LoadingAction";

function* fetchStreams() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}AllLiveStream`);
    const data = yield response.json();
    yield put(fetchStreamsSuccess(data));
  } catch (error) {
    yield put(fetchStreamsFailure(error.toString()));
  } finally {
    yield put(stopLoading());
  }
}

export default function* streamsSaga() {
  yield takeLatest(FETCH_STREAMS_REQUEST, fetchStreams);
}
