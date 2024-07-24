import { call, put, takeEvery } from "redux-saga/effects";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import {
  fetchHomePopularInstructorFailure, fetchHomePopularInstructorSuccess,
  fetchPopularInstructorDetailSuccess,
  fetchPopularInstructorDetailFailure
} from "../../../reduxActions/homeActions/HomePopularInstructorAction";
import {
  API_KEY, FETCH_HOME_POPULAR_INSTRUCTOR_REQUEST,
  FETCH_POPULAR_INSTRUCTOR_DETAIL_REQUEST
} from "../../../../constant/data";

const API_URL = "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/home_popularinstructor"
function* fetchHomePopularInstructors() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}home_popularinstructor`);
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchHomePopularInstructorSuccess(data));
    } else {
      yield put(fetchHomePopularInstructorFailure(data.message || 'Failed to fetch featured courses'));
    }
  } catch (error) {
    yield put(fetchHomePopularInstructorFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}
function* fetchPopularInstructorDetail(action) {
  try {
    const response = yield call(fetch, `${API_URL}/${action.payload}`);
    const data = yield response.json();
    yield put(fetchPopularInstructorDetailSuccess(data));
  } catch (error) {
    yield put(fetchPopularInstructorDetailFailure(error.message));
  }
}
export function* watchFetchHomePopularInstructors() {
  yield takeEvery(FETCH_POPULAR_INSTRUCTOR_DETAIL_REQUEST, fetchPopularInstructorDetail);
  yield takeEvery(FETCH_HOME_POPULAR_INSTRUCTOR_REQUEST, fetchHomePopularInstructors);
}