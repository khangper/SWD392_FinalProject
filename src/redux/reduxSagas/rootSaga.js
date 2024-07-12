import { all } from "redux-saga/effects";
import streamsSaga from "./sagas/AllLiveStreamSaga";
import instructorsSaga from "./sagas/instructorsSaga";

export default function* rootSaga() {
  yield all([streamsSaga(), instructorsSaga()]);
}
