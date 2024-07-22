import { call, put, takeEvery } from "redux-saga/effects";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import { API_KEY, FETCH_REVIEW_REQUEST } from "../../../../constant/data";
import {
  fetchReviewFailure,
  fetchReviewSuccess,
} from "../../../reduxActions/reviewActions/reviewAction";

function* fetchReview() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}reviews`);

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchReviewSuccess(data));
    } else {
      yield put(fetchReviewFailure(data.message || "Failed to fetch"));
    }
  } catch (error) {
    yield put(fetchReviewFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchReview() {
  yield takeEvery(FETCH_REVIEW_REQUEST, fetchReview);
}
