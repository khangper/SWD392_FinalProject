import { call, put, takeEvery } from "redux-saga/effects";
import { API_KEY, FETCH_HOME_NEWEST_COURSES_REQUEST } from "../../../../constant/data";
import { fetchHomeNewestCoursesFailure, fetchHomeNewestCoursesSuccess } from "../../../reduxActions/homeActions/HomeNewestCourseAction";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

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
    }finally{
      yield put(stopLoading());
    }
  }
  
  export function* watchFetchHomeNewestCourses() {
    yield takeEvery(FETCH_HOME_NEWEST_COURSES_REQUEST, fetchHomeNewestCourses);
  }