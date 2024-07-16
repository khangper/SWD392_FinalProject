import { call, put, takeEvery } from "redux-saga/effects";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import {
  fetchHomeStudentThoughtFailure,
  fetchHomeStudentThoughtSuccess,
} from "../../../reduxActions/homeActions/HomeStudentThoughtAction";
import {
  API_KEY,
  FETCH_HOME_STUDENT_THOUGHT_REQUEST,
  FETCH_INS_DASHBOARD_CARD_REQUEST,
} from "../../../../constant/data";
import { fetchInsDashboardCardFailure, fetchInsDashboardCardSuccess } from "../../../reduxActions/insDashboardActions/InsDashboardCardAction";

function* fetchInsDashboardCards() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}ins_dashboard_cards`);
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchInsDashboardCardSuccess(data));
    } else {
      yield put(
        fetchInsDashboardCardFailure(
          data.message || "Failed to fetch featured courses"
        )
      );
    }
  } catch (error) {
    yield put(fetchInsDashboardCardFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchInsDashboardCards() {
  yield takeEvery(FETCH_INS_DASHBOARD_CARD_REQUEST, fetchInsDashboardCards);
}
