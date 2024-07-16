import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchInstructorsSuccess,
  fetchInstructorsFailure,
  fetchInstructorByIdRequest,
  fetchInstructorByIdSuccess,
  fetchInstructorByIdFailure
} from "../../reduxActions/instructorActions";
import {
  FETCH_INSTRUCTOR_BY_ID_REQUEST,
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

function* fetchInstructorById(action) {
  try {
    const response = yield call(fetch, `${API_URL}/${action.payload}`);
    const data = yield response.json();
    yield put(fetchInstructorByIdSuccess(data));
  } catch (error) {
    yield put(fetchInstructorByIdFailure(error.toString()));
  }
}

export default function* instructorsSaga() {
  yield takeLatest(FETCH_INSTRUCTORS_REQUEST, fetchInstructors);
  yield takeLatest(SEARCH_INSTRUCTORS_REQUEST, searchInstructors);
  yield takeLatest(FETCH_INSTRUCTOR_BY_ID_REQUEST, fetchInstructorById);
}
