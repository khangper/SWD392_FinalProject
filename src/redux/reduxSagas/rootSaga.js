import { all } from "redux-saga/effects";
import { watchFetchHomeLiveStreams } from "./sagas/homeSagas/HomeLivestreamSaga";
import { watchFetchHomeFeaturedCourses } from "./sagas/homeSagas/HomeFeaturedCourseSaga";

export default function* rootSaga() {
  yield all([
watchFetchHomeLiveStreams(),
watchFetchHomeFeaturedCourses(),
  ]);
}
