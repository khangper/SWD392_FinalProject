import { call, put, takeEvery } from "redux-saga/effects";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import { fetchHomePopularInstructorFailure, fetchHomePopularInstructorSuccess } from "../../../reduxActions/homeActions/HomePopularInstructorAction";
import { API_KEY, FETCH_HOME_POPULAR_INSTRUCTOR_REQUEST } from "../../../../constant/data";

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
    }finally{
      yield put(stopLoading());
    }
  }
  
  export function* watchFetchHomePopularInstructors() {
    yield takeEvery(FETCH_HOME_POPULAR_INSTRUCTOR_REQUEST, fetchHomePopularInstructors);
  }