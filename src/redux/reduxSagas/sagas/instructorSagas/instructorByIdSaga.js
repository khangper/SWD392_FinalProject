import { call, put, takeLatest } from "redux-saga/effects";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";
import {API_KEY, FETCH_INSTRUCTOR_BY_ID_REQUEST } from "../../../../constant/data";
import { fetchInstructorByIdFailure, fetchInstructorByIdSuccess } from "../../../reduxActions/instructorActions/instructorByIdAction";

function* fetchInstructorById(action) {
  try {
    yield put(startLoading());
    const { id } = action.payload;
    const response = yield call(fetch, `${API_KEY}AllInstructor/${id}`);
    const data = yield response.json();
    yield put(fetchInstructorByIdSuccess(data));
  } catch (error) {
    yield put(fetchInstructorByIdFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchInstructorById() {
  yield takeLatest(FETCH_INSTRUCTOR_BY_ID_REQUEST, fetchInstructorById);
}