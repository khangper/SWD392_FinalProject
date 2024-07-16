import { call, put, takeEvery } from "redux-saga/effects";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import {
  API_KEY,
  FETCH_INS_DASHBOARD_COURSE_REQUEST,
  FETCH_INS_DASHBOARD_NEWS_REQUEST,
} from "../../../../constant/data";
import {
  fetchInsDashboardCourseFailure,
  fetchInsDashboardCourseSuccess,
} from "../../../reduxActions/insDashboardActions/InsDashboardCourseAction";
import { fetchInsDashboardNewFailure, fetchInsDashboardNewSuccess } from "../../../reduxActions/insDashboardActions/InsDashboardNewAction";

function* fetchInsDashboardNews() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}ins_dashboard_news`);
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchInsDashboardNewSuccess(data));
    } else {
      yield put(
        fetchInsDashboardNewFailure(
          data.message || "Failed to fetch featured courses"
        )
      );
    }
  } catch (error) {
    yield put(fetchInsDashboardNewFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchInsDashboardNews() {
  yield takeEvery(FETCH_INS_DASHBOARD_NEWS_REQUEST, fetchInsDashboardNews);
}
