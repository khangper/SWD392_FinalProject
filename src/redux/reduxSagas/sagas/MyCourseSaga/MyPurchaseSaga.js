import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMyPurchaseCoursesSuccess,
  fetchMyPurchaseCoursesFailure,
  editMyPurchaseCourseSuccess,
  editMyPurchaseCourseFailure,
  deleteMyPurchaseCourseSuccess,
  deleteMyPurchaseCourseFailure,
} from "../../../reduxActions/MyCourse/MyPurchaseAction";
import {
  FETCH_MYPURCHASECOURSES_REQUEST,
  EDIT_MYPURCHASECOURSE_REQUEST,
  DELETE_MYPURCHASECOURSE_REQUEST,
} from "../../../../constant/data";

function* fetchMyPurchaseCourses() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyPurchase-Course"
    );
    const data = yield response.json();
    yield put(fetchMyPurchaseCoursesSuccess(data));
  } catch (error) {
    yield put(fetchMyPurchaseCoursesFailure(error.toString()));
  }
}

function* editMyPurchaseCourse(action) {
  try {
    const response = yield call(
      fetch,
      `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyPurchase-Course/${action.payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }
    );
    const data = yield response.json();
    yield put(editMyPurchaseCourseSuccess(data));
  } catch (error) {
    yield put(editMyPurchaseCourseFailure(error.toString()));
  }
}

function* deleteMyPurchaseCourse(action) {
  try {
    yield call(
      fetch,
      `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyPurchase-Course/${action.payload}`,
      {
        method: "DELETE",
      }
    );
    yield put(deleteMyPurchaseCourseSuccess(action.payload));
  } catch (error) {
    yield put(deleteMyPurchaseCourseFailure(error.toString()));
  }
}

export default function* myPurchaseCourseSaga() {
  yield takeLatest(FETCH_MYPURCHASECOURSES_REQUEST, fetchMyPurchaseCourses);
  yield takeLatest(EDIT_MYPURCHASECOURSE_REQUEST, editMyPurchaseCourse);
  yield takeLatest(DELETE_MYPURCHASECOURSE_REQUEST, deleteMyPurchaseCourse);
}
