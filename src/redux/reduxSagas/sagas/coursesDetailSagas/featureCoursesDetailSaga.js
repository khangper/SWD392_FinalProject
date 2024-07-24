import { call, put, takeLatest } from "redux-saga/effects";
import {API_KEY, FETCH_FEATURED_COURSES_DETAIL_REQUEST } from "../../../../constant/data";
import { fetchFeaturedCoursesDetailFailure, fetchFeaturedCoursesDetailSuccess } from "../../../reduxActions/coursesDetailActions/featureCoursesDetailAction";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchFeatureCoursesDetail(action) {
  try {
    yield put(startLoading());
    const { id } = action.payload;
    const response = yield call(fetch, `${API_KEY}home_featuredcourse/${id}`);
    const data = yield call([response, response.json]);
    yield put(fetchFeaturedCoursesDetailSuccess(data));
  } catch (error) {
    yield put(fetchFeaturedCoursesDetailFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFeatureCoursesDetail() {
  yield takeLatest(FETCH_FEATURED_COURSES_DETAIL_REQUEST, fetchFeatureCoursesDetail);
}