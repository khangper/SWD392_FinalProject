import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchNotificationsStudentSuccess,
  fetchNotificationsStudentFailure,
} from "../../../reduxActions/NotificationActions/notificationStudentAction";
import {
  API_KEY,
  FETCH_NOTIFICATIONSSTUDENT_REQUEST,
} from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
function* fetchNotificationsStudent() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}notificationstudent`);
    const data = yield response.json();
    yield put(fetchNotificationsStudentSuccess(data));
  } catch (error) {
    yield put(fetchNotificationsStudentFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchNotificationsStudent() {
  yield takeLatest(
    FETCH_NOTIFICATIONSSTUDENT_REQUEST,
    fetchNotificationsStudent
  );
}
