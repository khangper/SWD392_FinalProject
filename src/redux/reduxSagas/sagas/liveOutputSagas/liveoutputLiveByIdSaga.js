import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchLivestreamByIdSuccess,
  fetchLivestreamByIdFailure,
} from "../../../reduxActions/liveOutputActions/liveoutputLiveByIdAction";

import {
  API_KEY,
  FETCH_LIVESTREAM_BY_ID_REQUEST,
} from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchLiveById(action) {
  try {
    yield put(startLoading());
    const { id } = action.payload;
    const response = yield call(fetch, `${API_KEY}home_livestream/${id}`);
    const data = yield call([response, response.json]);
    yield put(fetchLivestreamByIdSuccess(data));
  } catch (error) {
    yield put(fetchLivestreamByIdFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchLiveById() {
  yield takeLatest(FETCH_LIVESTREAM_BY_ID_REQUEST, fetchLiveById);
}
