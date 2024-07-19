import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHomeFeaturedCoursesFailure, fetchHomeFeaturedCoursesSuccess, fetchHomeFeaturedCoursesDetailSuccess, fetchHomeFeaturedCoursesDetailFailure } from '../../../reduxActions/homeActions/HomeFeaturedCourseAction';
import {
  API_KEY, FETCH_HOME_FEATURED_COURSES_REQUEST,
  FETCH_HOME_FEATURED_COURSES_DETAIL_REQUEST,
  FETCH_HOME_FEATURED_COURSES_DETAIL_SUCCESS,
  FETCH_HOME_FEATURED_COURSES_DETAIL_FAILURE,
}
  from '../../../../constant/data';
import { startLoading, stopLoading } from '../../../reduxActions/LoadingAction';
const API_URL =
  "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/home_featuredcourse";

function* fetchHomeFeaturedCourses() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}home_featuredcourse`);
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchHomeFeaturedCoursesSuccess(data));
    } else {
      yield put(fetchHomeFeaturedCoursesFailure(data.message || 'Failed to fetch featured courses'));
    }
  } catch (error) {
    yield put(fetchHomeFeaturedCoursesFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

function* fetchHomeFeaturedCoursesDetail(action) {
  try {
    const response = yield call(fetch, `${API_URL}/${action.payload}`);
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchHomeFeaturedCoursesDetailSuccess(data));
    } else {
      yield put(fetchHomeFeaturedCoursesDetailFailure(data.message || 'Failed to fetch featured courses detail'));
    }
  } catch (error) {
    yield put(fetchHomeFeaturedCoursesDetailFailure(error.message));
  }
}



export function* watchFetchHomeFeaturedCourses() {
  yield takeEvery(FETCH_HOME_FEATURED_COURSES_REQUEST, fetchHomeFeaturedCourses);
  yield takeEvery(FETCH_HOME_FEATURED_COURSES_DETAIL_REQUEST, fetchHomeFeaturedCoursesDetail);
}
