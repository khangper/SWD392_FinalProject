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

function* fetchCourses() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCourseCourse"
    );
    const data = yield response.json();
    yield put(fetchCoursesSuccess(data));
  } catch (error) {
    yield put(fetchCoursesFailure(error.toString()));
  }
}

function* editCourse(action) {
  try {
    const response = yield call(
      fetch,
      `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCourseCourse/${action.payload.id}`,
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
  }
}

function* deleteCourse(action) {
  try {
    yield call(
      fetch,
      `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCourseCourse/${action.payload}`,
      {
        method: "DELETE",
      }
    );
    yield put(deleteCourseSuccess(action.payload));
  } catch (error) {
    yield put(deleteCourseFailure(error.toString()));
  }
}

export default function* courseSaga() {
  yield takeLatest(FETCH_COURSES_REQUEST, fetchCourses);
  yield takeLatest(EDIT_COURSE_REQUEST, editCourse);
  yield takeLatest(DELETE_COURSE_REQUEST, deleteCourse);
}
