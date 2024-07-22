import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCoursesSuccess,
  fetchCoursesFailure,
  editCourseSuccess,
  editCourseFailure,
  deleteCourseSuccess,
  deleteCourseFailure,
} from "../../../reduxActions/MyCourse/CourseAction";
import {
  DELETE_COURSE_REQUEST,
  EDIT_COURSE_REQUEST,
  FETCH_COURSES_REQUEST,
} from "../../../../constant/data";

import { API_KEY } from "../../../../constant/data";
import { startLoading, stopLoading } from "../../../reduxActions/LoadingAction";

function* fetchCourses() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}MyCourseCourse`);
    const data = yield response.json();
    yield put(fetchCoursesSuccess(data));
  } catch (error) {
    yield put(fetchCoursesFailure(error.toString()));
  } finally {
    yield put(stopLoading());
  }
}

function* editCourse(action) {
  try {
    yield put(startLoading());
    const response = yield call(
      fetch,
      `${API_KEY}MyCourseCourse/${action.payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }
    );
    const data = yield response.json();
    yield put(editCourseSuccess(data));
  } catch (error) {
    yield put(editCourseFailure(error.toString()));
  } finally {
    yield put(stopLoading());
  }
}

function* deleteCourse(action) {
  try {
    yield put(startLoading());
    yield call(fetch, `${API_KEY}MyCourseCourse/${action.payload}`, {
      method: "DELETE",
    });
    yield put(deleteCourseSuccess(action.payload));
  } catch (error) {
    yield put(deleteCourseFailure(error.toString()));
  } finally {
    yield put(stopLoading());
  }
}

export default function* courseSaga() {
  yield takeLatest(FETCH_COURSES_REQUEST, fetchCourses);
  yield takeLatest(EDIT_COURSE_REQUEST, editCourse);
  yield takeLatest(DELETE_COURSE_REQUEST, deleteCourse);
}
