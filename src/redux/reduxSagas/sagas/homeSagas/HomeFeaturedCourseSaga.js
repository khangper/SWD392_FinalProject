import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHomeFeaturedCoursesFailure, fetchHomeFeaturedCoursesSuccess } from '../../../reduxActions/homeActions/HomeFeaturedCourseAction';
import { API_KEY, FETCH_HOME_FEATURED_COURSES_REQUEST } from '../../../../constant/data';
import { startLoading, stopLoading } from '../../../reduxActions/LoadingAction';


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
  }finally{
    yield put(stopLoading());
  }
}

export function* watchFetchHomeFeaturedCourses() {
  yield takeEvery(FETCH_HOME_FEATURED_COURSES_REQUEST, fetchHomeFeaturedCourses);
}
