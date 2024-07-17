import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchEarningTableSuccess,
  fetchEarningTableFailure,
} from "../../../reduxActions/earningActions/EarningTableAction";
import {
  API_KEY,
  FETCH_EARNING_TABLE_REQUEST,
} from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchEarningTable() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}earning_itemSales`);

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchEarningTableSuccess(data));
    } else {
      yield put(fetchEarningTableFailure(data.message || "Failed to fetch"));
    }
  } catch (error) {
    yield put(fetchEarningTableFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchEarningTable() {
  yield takeEvery(FETCH_EARNING_TABLE_REQUEST, fetchEarningTable);
}
