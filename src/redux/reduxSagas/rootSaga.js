import { all } from "redux-saga/effects";

import streamsSaga from "./sagas/AllLiveStreamSaga";
import instructorsSaga from "./sagas/instructorsSaga";
import { watchFetchHomeLiveStreams } from "./sagas/homeSagas/HomeLivestreamSaga";
import { watchFetchHomeFeaturedCourses } from "./sagas/homeSagas/HomeFeaturedCourseSaga";
import { watchSaveCourses } from "./sagas/SaveCourseSaga";
import { watchAddToCart } from "./sagas/ShoppingCartSaga";
import courseSaga from "./sagas/MyCourseSaga/CourseSaga";

export default function* rootSaga() {
  yield all([
    streamsSaga(),
    instructorsSaga(),
    watchFetchHomeLiveStreams(),
    watchFetchHomeFeaturedCourses(),
    watchSaveCourses(),
    watchAddToCart(),
    courseSaga(),
  ]);
}
