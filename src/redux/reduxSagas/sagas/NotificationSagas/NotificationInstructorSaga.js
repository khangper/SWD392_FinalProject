import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchNotificationsSuccess,
  fetchNotificationsFailure,
} from "../../../reduxActions/NotificationActions/notificationActions";
import {
  API_KEY,
  FETCH_NOTIFICATIONS_REQUEST,
} from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchNotifications() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}Notification`);
    const data = yield response.json();
    yield put(fetchNotificationsSuccess(data));
  } catch (error) {
    yield put(fetchNotificationsFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchNotifications() {
  yield takeLatest(FETCH_NOTIFICATIONS_REQUEST, fetchNotifications);
}
