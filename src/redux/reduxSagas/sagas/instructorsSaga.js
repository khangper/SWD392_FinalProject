import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchInstructorsSuccess,
  fetchInstructorsFailure,
} from "../../reduxActions/instructorActions";
import {
  FETCH_INSTRUCTORS_REQUEST,
  SEARCH_INSTRUCTORS_REQUEST,
} from "../../../constant/data";

const API_URL = "https://668dde68bf9912d4c92c0fc3.mockapi.io/Allinstructor";

function* fetchInstructors() {
  try {
    const response = yield call(fetch, API_URL);
    const data = yield response.json();
    yield put(fetchInstructorsSuccess(data));
  } catch (error) {
    yield put(fetchInstructorsFailure(error.toString()));
  }
}

function* searchInstructors(action) {
  try {
    const response = yield call(fetch, `${API_URL}?search=${action.payload}`);
    const data = yield response.json();
    yield put(fetchInstructorsSuccess(data));
  } catch (error) {
    yield put(fetchInstructorsFailure(error.toString()));
  }
}

export default function* instructorsSaga() {
  yield takeLatest(FETCH_INSTRUCTORS_REQUEST, fetchInstructors);
  yield takeLatest(SEARCH_INSTRUCTORS_REQUEST, searchInstructors);
}
