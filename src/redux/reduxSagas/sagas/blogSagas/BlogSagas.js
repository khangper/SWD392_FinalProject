import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchBlogSuccess,
  fetchBlogFailure,
} from "../../../reduxActions/blogActions/BlogAction";

import { FETCH_BLOG_REQUEST } from "../../../../constant/data";

function* fetchBlogs() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/blogs"
    );

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchBlogSuccess(data));
    } else {
      yield put(fetchBlogFailure(data.message || "Failed to fetch blog"));
    }
  } catch (error) {
    yield put(fetchBlogFailure(error.message));
  }
}

export function* watchFetchBlogs() {
  yield takeEvery(FETCH_BLOG_REQUEST, fetchBlogs);
}
