import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchCreditTableSuccess,
  fetchCreditTableFailure,
} from "../../../reduxActions/creditActions/CreditTableAction";

import { API_KEY, FETCH_CREDIT_TABLE_REQUEST } from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchCreditTable() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}credit_table`);

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchCreditTableSuccess(data));
    } else {
      yield put(fetchCreditTableFailure(data.message || "Failed to fetch"));
    }
  } catch (error) {
    yield put(fetchCreditTableFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchCreditTable() {
  yield takeEvery(FETCH_CREDIT_TABLE_REQUEST, fetchCreditTable);
}
