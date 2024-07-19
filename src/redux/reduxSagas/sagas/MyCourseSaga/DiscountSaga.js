// sagas/discountSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchDiscountSuccess,
  fetchDiscountFailure,
  editDiscountSuccess,
  editDiscountFailure,
  deleteDiscountSuccess,
  deleteDiscountFailure,
} from "../../../reduxActions/MyCourse/DiscountAction";
import {
  FETCH_DISCOUNT_REQUEST,
  EDIT_DISCOUNT_REQUEST,
  DELETE_DISCOUNT_REQUEST,
} from "../../../../constant/data";

function* fetchDiscounts() {
  try {
    const response = yield call(
      fetch,
      "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCourseDiscount"
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = yield response.json();
    yield put(fetchDiscountSuccess(data));
  } catch (error) {
    yield put(fetchDiscountFailure(error.toString()));
  }
}

function* editDiscount(action) {
  try {
    const response = yield call(
      fetch,
      `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCourseDiscount/${action.payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = yield response.json();
    yield put(editDiscountSuccess(data));
  } catch (error) {
    yield put(editDiscountFailure(error.toString()));
  }
}

function* deleteDiscount(action) {
  try {
    yield call(
      fetch,
      `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCourseDiscount/${action.payload}`,
      {
        method: "DELETE",
      }
    );
    yield put(deleteDiscountSuccess(action.payload));
  } catch (error) {
    yield put(deleteDiscountFailure(error.toString()));
  }
}

export default function* discountSaga() {
  yield takeLatest(FETCH_DISCOUNT_REQUEST, fetchDiscounts);
  yield takeLatest(EDIT_DISCOUNT_REQUEST, editDiscount);
  yield takeLatest(DELETE_DISCOUNT_REQUEST, deleteDiscount);
}
