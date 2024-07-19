import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchPressReleaseFailure,
  fetchPressReleaseSuccess,
} from "../../../reduxActions/pressActions/PressReleaseAction";
import {
  API_KEY,
  FETCH_PRESS_RELEASE_REQUEST,
} from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchPressRelease() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}press_release`);

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchPressReleaseSuccess(data));
    } else {
      yield put(fetchPressReleaseFailure(data.message || "Failed to fetch"));
    }
  } catch (error) {
    yield put(fetchPressReleaseFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchPressRelease() {
  yield takeEvery(FETCH_PRESS_RELEASE_REQUEST, fetchPressRelease);
}
