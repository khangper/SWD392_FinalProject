import { all } from "redux-saga/effects";

import streamsSaga from "./sagas/AllLiveStreamSaga";
import instructorsSaga from "./sagas/instructorsSaga";
  import { watchFetchHomeLiveStreams } from "./sagas/homeSagas/HomeLivestreamSaga";
import { watchFetchHomeFeaturedCourses } from "./sagas/homeSagas/HomeFeaturedCourseSaga";

export default function* rootSaga() {
  yield all([streamsSaga(), 
             instructorsSaga(),
             watchFetchHomeLiveStreams(),
              watchFetchHomeFeaturedCourses(),
            ]);
}
