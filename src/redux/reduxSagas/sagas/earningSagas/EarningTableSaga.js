import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchEarningTableSuccess,
  fetchEarningTableFailure,
} from "../../../reduxActions/earningActions/EarningTableAction";
import { FETCH_EARNING_TABLE_REQUEST } from "../../../../constant/data";

function* fetchEarningTable() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/earning_itemSales"
    );

    const data = yield response.json();
    if (response.ok) {
      yield put(fetchEarningTableSuccess(data));
    } else {
      yield put(
        fetchEarningTableFailure(data.message || "Failed to fetch")
      );
    }
  } catch (error) {
    yield put(fetchEarningTableFailure(error.message));
  }
}

export function* watchFetchEarningTable() {
  yield takeEvery(FETCH_EARNING_TABLE_REQUEST, fetchEarningTable);
}
