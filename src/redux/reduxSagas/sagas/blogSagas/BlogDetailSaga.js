import { call, put, takeLatest } from "redux-saga/effects";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import { API_KEY, FETCH_BLOG_DETAIL_REQUEST } from "../../../../constant/data";
import {
  fetchBlogDetailFailure,
  fetchBlogDetailSuccess,
} from "../../../reduxActions/blogActions/BlogDetailAction";

function* fetchBlogDetail(action) {
  try {
    yield put(startLoading());
    const { id } = action.payload;
    const response = yield call(fetch, `${API_KEY}blogs/${id}`);
    const data = yield call([response, response.json]);
    yield put(fetchBlogDetailSuccess(data));
  } catch (error) {
    yield put(fetchBlogDetailFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchBlogDetail() {
  yield takeLatest(FETCH_BLOG_DETAIL_REQUEST, fetchBlogDetail);
}
