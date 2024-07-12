import { call, put, takeLatest } from "redux-saga/effects";
import {
  SAVE_CART_REQUEST,
  SAVE_CART_SUCCESS,
  SAVE_CART_FAILURE,
} from "../../../constant/data";
import {
  saveCartSuccess,
  saveCartFailure,
} from "../../reduxActions/ShoppingCartAction";

const API_URL =
  "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/ShoppingCart";

function* saveCartSaga(action) {
  try {
    const response = yield call(fetch, API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = yield response.json();
    yield put(saveCartSuccess(data));
  } catch (error) {
    yield put(saveCartFailure(error.message));
  }
}

export function* watchSaveCart() {
  yield takeLatest(SAVE_CART_REQUEST, saveCartSaga);
}
