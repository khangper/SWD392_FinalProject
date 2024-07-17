import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchCreditTableSuccess,
  fetchCreditTableFailure,
} from "../../../reduxActions/creditActions/CreditTableAction";

import { FETCH_CREDIT_TABLE_REQUEST } from "../../../../constant/data";

function* fetchCreditTable() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/credit_table"
    );

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchCreditTableSuccess(data));
    } else {
      yield put(
        fetchCreditTableFailure(data.message || "Failed to fetch")
      );
    }
  } catch (error) {
    yield put(fetchCreditTableFailure(error.message));
  }
}

export function* watchFetchCreditTable() {
  yield takeEvery(FETCH_CREDIT_TABLE_REQUEST, fetchCreditTable);
}