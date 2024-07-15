import { call, put, takeEvery } from "redux-saga/effects";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import {
  fetchHomeStudentThoughtFailure,
  fetchHomeStudentThoughtSuccess,
} from "../../../reduxActions/homeActions/HomeStudentThoughtAction";
import {
  API_KEY,
  FETCH_HOME_STUDENT_THOUGHT_REQUEST,
} from "../../../../constant/data";

function* fetchHomeStudentThoughts() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}home_studentthought`);
    const data = yield response.json();
    if (response.ok) {
      yield put(fetchHomeStudentThoughtSuccess(data));
    } else {
      yield put(
        fetchHomeStudentThoughtFailure(
          data.message || "Failed to fetch featured courses"
        )
      );
    }
  } catch (error) {
    yield put(fetchHomeStudentThoughtFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchFetchHomeStudentThoughts() {
  yield takeEvery(FETCH_HOME_STUDENT_THOUGHT_REQUEST, fetchHomeStudentThoughts);
}
