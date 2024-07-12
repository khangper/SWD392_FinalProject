// Redux Saga to fetch courses
// import { call, put, takeLatest } from "redux-saga/effects";
// import {
//   fetchSaveCoursesFailure,
//   fetchSaveCoursesSuccess,
// } from "../../reduxActions/SaveCourseAction";
// import { FETCH_SAVECOURSES_REQUEST } from "../../../constant/data";

// const API_URL =
//   "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/SaveCourse";

// function* fetchSaveCoursesSaga() {
//   try {
//     const response = yield call(fetch, API_URL);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = yield response.json();
//     yield put(fetchSaveCoursesSuccess(data));
//   } catch (error) {
//     yield put(fetchSaveCoursesFailure(error.message));
//   }
// }

// export function* watchSaveCourses() {
//   yield takeLatest(FETCH_SAVECOURSES_REQUEST, fetchSaveCoursesSaga);
// }

// src/redux/reduxSagas/saveCourseSaga.js

import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSaveCoursesFailure,
  fetchSaveCoursesSuccess,
} from "../../../redux/reduxActions/SaveCourseAction";
import { FETCH_SAVECOURSES_REQUEST } from "../../../constant/data";

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

export function* watchSaveCourses() {
  yield takeLatest(FETCH_SAVECOURSES_REQUEST, fetchSaveCoursesSaga);
}
