import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchEarningTopCountrySuccess,
  fetchEarningTopCountryFailure,
} from "../../../reduxActions/earningActions/EarningTopCountryAction";

import { FETCH_EARNING_TOP_COUNTRY_REQUEST } from "../../../../constant/data";

function* fetchEarningTopCountry() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/earning_top_countries"
    );

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchEarningTopCountrySuccess(data));
    } else {
      yield put(fetchEarningTopCountryFailure(data.message || "Failed to fetch"));
    }
  } catch (error) {
    yield put(fetchEarningTopCountryFailure(error.message));
  }
}

export function* watchFetchEarningTopCountry() {
  yield takeEvery(FETCH_EARNING_TOP_COUNTRY_REQUEST, fetchEarningTopCountry);
}