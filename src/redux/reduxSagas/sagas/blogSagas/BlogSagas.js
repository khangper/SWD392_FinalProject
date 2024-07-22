import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchBlogSuccess,
  fetchBlogFailure,
} from "../../../reduxActions/blogActions/BlogAction";

import { API_KEY, FETCH_BLOG_REQUEST } from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchBlogs() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}blogs`);

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchBlogSuccess(data));
    } else {
      yield put(fetchBlogFailure(data.message || "Failed to fetch blog"));
    }
  } catch (error) {
    yield put(fetchBlogFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchBlogs() {
  yield takeEvery(FETCH_BLOG_REQUEST, fetchBlogs);
}
