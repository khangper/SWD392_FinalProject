import { call, put, takeLatest } from "redux-saga/effects";
import {
  addToCartSuccess,
  addToCartFailure,
} from "../../../redux/reduxActions/ShoppingCartAction";
import { ADD_TO_CART, API_KEY } from "../../../constant/data";
import { startLoading, stopLoading } from "../../reduxActions/LoadingAction";

function* addToCartSaga(action) {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}ShoppingCart`, {
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
  } finally {
    yield put(stopLoading());
  }
}

export function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART, addToCartSaga);
}
