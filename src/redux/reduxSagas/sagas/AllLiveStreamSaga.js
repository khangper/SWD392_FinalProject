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
      "https://668dde68bf9912d4c92c0fc3.mockapi.io/alllivestream"
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
