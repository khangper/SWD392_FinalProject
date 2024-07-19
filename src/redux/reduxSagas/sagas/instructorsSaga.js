import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchInstructorsSuccess,
  fetchInstructorsFailure,
  fetchInstructorsmoreSuccess,
  fetchInstructorsmoreFailure,
  fetchInstructorByIdSuccess,
  fetchInstructorByIdFailure,
} from "../../reduxActions/instructorActions";
import {
  API_KEY,
  FETCH_INSTRUCTOR_BY_ID_REQUEST,
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_MORE_REQUEST,
  SEARCH_INSTRUCTORS_REQUEST,
} from "../../../constant/data";
  const API_URL =
  "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/AllInstructor";
const API_URL2 = 'https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/Instructormore'
import { startLoading, stopLoading } from "../../reduxActions/LoadingAction";

function* fetchInstructors() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}AllInstructor`);
    const data = yield response.json();
    yield put(fetchInstructorsSuccess(data));
  } catch (error) {
    yield put(fetchInstructorsFailure(error.toString()));
  } finally {
    yield put(stopLoading());
  }
}
function* fetchInstructorsmore() {
  try {
    const response = yield call(fetch, API_URL2);
    const data = yield response.json();
    yield put(fetchInstructorsmoreSuccess(data));
  } catch (error) {
    yield put(fetchInstructorsmoreFailure(error.toString()));
  }
}
function* searchInstructors(action) {
  try {
    yield put(startLoading());
    const response = yield call(
      fetch,
      `${API_KEY}AllInstructor?search=${action.payload}`
    );
    const data = yield response.json();
    yield put(fetchInstructorsSuccess(data));
  } catch (error) {
    yield put(fetchInstructorsFailure(error.toString()));
  } finally {
    yield put(stopLoading());
  }
}

function* fetchInstructorById(action) {
  try {
    yield put(startLoading());
    const response = yield call(
      fetch,
      `${API_KEY}AllInstructor/${action.payload}`
    );
    const data = yield response.json();
    yield put(fetchInstructorByIdSuccess(data));
  } catch (error) {
    yield put(fetchInstructorByIdFailure(error.toString()));
  } finally {
    yield put(stopLoading());
  }
}

export default function* instructorsSaga() {
  yield takeLatest(FETCH_INSTRUCTORS_REQUEST, fetchInstructors);
  yield takeLatest(FETCH_INSTRUCTORS_MORE_REQUEST, fetchInstructorsmore);
  yield takeLatest(SEARCH_INSTRUCTORS_REQUEST, searchInstructors);
  yield takeLatest(FETCH_INSTRUCTOR_BY_ID_REQUEST, fetchInstructorById);
}
