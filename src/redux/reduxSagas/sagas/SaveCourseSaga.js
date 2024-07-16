import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSaveCoursesFailure,
  fetchSaveCoursesSuccess,
  deleteSaveCourseFailure,
  deleteSaveCourseSuccess,
} from "../../../redux/reduxActions/SaveCourseAction";
import {
  FETCH_SAVECOURSES_REQUEST,
  DELETE_SAVECOURSE_REQUEST,
} from "../../../constant/data";

const API_URL =
  "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/SaveCourse";

function* fetchSaveCoursesSaga() {
  try {
    const response = yield call(fetch, API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = yield response.json();
    yield put(fetchSaveCoursesSuccess(data));
  } catch (error) {
    yield put(fetchSaveCoursesFailure(error.message));
  }
}

function* deleteSaveCourseSaga(action) {
  try {
    const { payload: id } = action;
    const response = yield call(fetch, `${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    yield put(deleteSaveCourseSuccess(id));
  } catch (error) {
    yield put(deleteSaveCourseFailure(error.message));
  }
}

export function* watchSaveCourses() {
  yield takeLatest(FETCH_SAVECOURSES_REQUEST, fetchSaveCoursesSaga);
  yield takeLatest(DELETE_SAVECOURSE_REQUEST, deleteSaveCourseSaga);
}
