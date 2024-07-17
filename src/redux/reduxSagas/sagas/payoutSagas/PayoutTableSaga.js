import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchPayoutTableSuccess,
  fetchPayoutTableFailure,
} from "../../../reduxActions/payoutActions/PayoutTableAction";

import { FETCH_PAYOUT_TABLE_REQUEST } from "../../../../constant/data";

function* fetchPayoutTable() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/payout_table"
    );

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchPayoutTableSuccess(data));
    } else {
      yield put(fetchPayoutTableFailure(data.message || "Failed to fetch"));
    }
  } catch (error) {
    yield put(fetchPayoutTableFailure(error.message));
  }
}

export function* watchFetchPayoutTable() {
  yield takeEvery(FETCH_PAYOUT_TABLE_REQUEST, fetchPayoutTable);
}