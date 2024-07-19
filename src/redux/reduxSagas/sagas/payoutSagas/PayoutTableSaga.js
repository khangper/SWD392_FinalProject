import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchPayoutTableSuccess,
  fetchPayoutTableFailure,
} from "../../../reduxActions/payoutActions/PayoutTableAction";

import { API_KEY, FETCH_PAYOUT_TABLE_REQUEST } from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchPayoutTable() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}payout_table`);

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchPayoutTableSuccess(data));
    } else {
      yield put(fetchPayoutTableFailure(data.message || "Failed to fetch"));
    }
  } catch (error) {
    yield put(fetchPayoutTableFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchPayoutTable() {
  yield takeEvery(FETCH_PAYOUT_TABLE_REQUEST, fetchPayoutTable);
}
