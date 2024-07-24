import { call, put, takeLatest } from "redux-saga/effects";
import {API_KEY, FETCH_NEWEST_COURSE_DETAIL_REQUEST } from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import { fetchNewestCourseDetailFailure, fetchNewestCourseDetailSuccess } from "../../../reduxActions/coursesDetailActions/newestCoursesDetailAction";

function* fetchNewestCoursesDetail(action) {
  try {
    yield put(startLoading());
    const { id } = action.payload;
    const response = yield call(fetch, `${API_KEY}home_newestcourse/${id}`);
    const data = yield call([response, response.json]);
    yield put(fetchNewestCourseDetailSuccess(data));
  } catch (error) {
    yield put(fetchNewestCourseDetailFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchNewestCoursesDetail() {
  yield takeLatest(FETCH_NEWEST_COURSE_DETAIL_REQUEST, fetchNewestCoursesDetail);
}