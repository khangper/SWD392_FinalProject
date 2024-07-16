import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchInstructorsSuccess,
  fetchInstructorsFailure,
  fetchInstructorByIdRequest,
} from "../../reduxActions/instructorActions";
import {
  FETCH_INSTRUCTOR_BY_ID_REQUEST,
  FETCH_INSTRUCTORS_REQUEST,
  SEARCH_INSTRUCTORS_REQUEST,
} from "../../../constant/data";

const API_URL =
  "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/AllInstructor";

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
  yield takeLatest(FETCH_INSTRUCTOR_BY_ID_REQUEST, fetchInstructorByIdRequest);
}
