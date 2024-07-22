import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUpcommingCoursesSuccess,
  fetchUpcommingCoursesFailure,
  editUpcommingCourseSuccess,
  editUpcommingCourseFailure,
  deleteUpcommingCourseSuccess,
  deleteUpcommingCourseFailure,
} from "../../../reduxActions/MyCourse/UpcommingCourseActions";
import {
  FETCH_UPCOMMINGCOURSES_REQUEST,
  EDIT_UPCOMMINGCOURSE_REQUEST,
  DELETE_UPCOMMINGCOURSE_REQUEST,
} from "../../../../constant/data";

function* fetchUpcommingCourses() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCourseUpcommingCourseCourse"
    );
    const data = yield response.json();
    yield put(fetchUpcommingCoursesSuccess(data));
  } catch (error) {
    yield put(fetchUpcommingCoursesFailure(error.toString()));
  }
}

function* editUpcommingCourse(action) {
  try {
    const response = yield call(
      fetch,
      `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCourseUpcommingCourseCourse/${action.payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }
    );
    const data = yield response.json();
    yield put(editUpcommingCourseSuccess(data));
  } catch (error) {
    yield put(editUpcommingCourseFailure(error.toString()));
  }
}

function* deleteUpcommingCourse(action) {
  try {
    yield call(
      fetch,
      `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCourseUpcommingCourseCourse/${action.payload}`,
      {
        method: "DELETE",
      }
    );
    yield put(deleteUpcommingCourseSuccess(action.payload));
  } catch (error) {
    yield put(deleteUpcommingCourseFailure(error.toString()));
  }
}

export default function* upcommingCourseSaga() {
  yield takeLatest(FETCH_UPCOMMINGCOURSES_REQUEST, fetchUpcommingCourses);
  yield takeLatest(EDIT_UPCOMMINGCOURSE_REQUEST, editUpcommingCourse);
  yield takeLatest(DELETE_UPCOMMINGCOURSE_REQUEST, deleteUpcommingCourse);
}
