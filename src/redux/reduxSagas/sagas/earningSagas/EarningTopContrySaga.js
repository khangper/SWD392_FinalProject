import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchEarningTopCountrySuccess,
  fetchEarningTopCountryFailure,
} from "../../../reduxActions/earningActions/EarningTopCountryAction";

import {
  API_KEY,
  FETCH_EARNING_TOP_COUNTRY_REQUEST,
} from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchEarningTopCountry() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}earning_top_countries`);

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchEarningTopCountrySuccess(data));
    } else {
      yield put(
        fetchEarningTopCountryFailure(data.message || "Failed to fetch")
      );
    }
  } catch (error) {
    yield put(fetchEarningTopCountryFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchEarningTopCountry() {
  yield takeEvery(FETCH_EARNING_TOP_COUNTRY_REQUEST, fetchEarningTopCountry);
}
