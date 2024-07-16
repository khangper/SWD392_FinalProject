// redux/sagas/AllLiveStreamSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchStreamsSuccess,
  fetchStreamsFailure,
} from "../../reduxActions/liveStreamAction";

import { FETCH_STREAMS_REQUEST } from "../../../constant/data";

function* fetchStreams() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/AllLiveStream"
    );
    const data = yield response.json();
    yield put(fetchStreamsSuccess(data));
  } catch (error) {
    yield put(fetchStreamsFailure(error.toString()));
  }
}

export default function* streamsSaga() {
  yield takeLatest(FETCH_STREAMS_REQUEST, fetchStreams);
}
