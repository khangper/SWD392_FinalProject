import { call, put, takeLatest } from "redux-saga/effects";
import {
  addToCartSuccess,
  addToCartFailure,
} from "../../../redux/reduxActions/ShoppingCartAction";
import { ADD_TO_CART } from "../../../constant/data";

const API_URL =
  "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/ShoppingCart";

function* addToCartSaga(action) {
  try {
    const response = yield call(fetch, API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = yield response.json();
    yield put(addToCartSuccess(data));
  } catch (error) {
    yield put(addToCartFailure(error.message));
  }
}

// Theo dõi hành động thêm vào giỏ hàng
export function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART, addToCartSaga);
}
