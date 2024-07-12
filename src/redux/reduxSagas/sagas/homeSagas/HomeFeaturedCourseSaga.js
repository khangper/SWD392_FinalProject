import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHomeFeaturedCoursesFailure, fetchHomeFeaturedCoursesSuccess } from '../../../reduxActions/homeActions/HomeFeaturedCourseAction';
import { FETCH_HOME_FEATURED_COURSES_REQUEST } from '../../../../constant/data';


function* fetchHomeFeaturedCourses() {
  try {
    const response = yield call(fetch, 'https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/home_featuredcourse');
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchHomeFeaturedCoursesSuccess(data));
    } else {
      yield put(fetchHomeFeaturedCoursesFailure(data.message || 'Failed to fetch featured courses'));
    }
  } catch (error) {
    yield put(fetchHomeFeaturedCoursesFailure(error.message));
  }
}

export function* watchFetchHomeFeaturedCourses() {
  yield takeEvery(FETCH_HOME_FEATURED_COURSES_REQUEST, fetchHomeFeaturedCourses);
}
