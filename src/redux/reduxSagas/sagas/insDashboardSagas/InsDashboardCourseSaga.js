import { call, put, takeEvery } from "redux-saga/effects";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import {
  API_KEY,
  FETCH_INS_DASHBOARD_COURSE_REQUEST,
} from "../../../../constant/data";
import {
  fetchInsDashboardCourseFailure,
  fetchInsDashboardCourseSuccess,
} from "../../../reduxActions/insDashboardActions/InsDashboardCourseAction";

function* fetchInsDashboardCourses() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}ins_dashboard_courses`);
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchInsDashboardCourseSuccess(data));
    } else {
      yield put(
        fetchInsDashboardCourseFailure(
          data.message || "Failed to fetch featured courses"
        )
      );
    }
  } catch (error) {
    yield put(fetchInsDashboardCourseFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchInsDashboardCourses() {
  yield takeEvery(FETCH_INS_DASHBOARD_COURSE_REQUEST, fetchInsDashboardCourses);
}
