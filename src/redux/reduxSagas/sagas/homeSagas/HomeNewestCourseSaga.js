import { call, put, takeEvery } from "redux-saga/effects";
import { API_KEY, FETCH_HOME_NEWEST_COURSES_REQUEST, FETCH_NEWEST_COURSE_DETAIL_REQUEST } from "../../../../constant/data";
import {
  fetchHomeNewestCoursesFailure, fetchHomeNewestCoursesSuccess,
  fetchNewestCourseDetailSuccess,
  fetchNewestCourseDetailFailure
} from "../../../reduxActions/homeActions/HomeNewestCourseAction";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
const API_URL = "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/home_newestcourse"
function* fetchHomeNewestCourses() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}home_newestcourse`);
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchHomeNewestCoursesSuccess(data));
    } else {
      yield put(fetchHomeNewestCoursesFailure(data.message || 'Failed to fetch featured courses'));
    }
  } catch (error) {
    yield put(fetchHomeNewestCoursesFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

function* fetchNewestCourseDetail(action) {
  try {
    const response = yield call(fetch, `${API_URL}/${action.payload}`);
    const data = yield response.json();
    yield put(fetchNewestCourseDetailSuccess(data));
  } catch (error) {
    yield put(fetchNewestCourseDetailFailure(error.message));
  }
}

export function* watchFetchHomeNewestCourses() {
  yield takeEvery(FETCH_HOME_NEWEST_COURSES_REQUEST, fetchHomeNewestCourses);
  yield takeEvery(FETCH_NEWEST_COURSE_DETAIL_REQUEST, fetchNewestCourseDetail);
}