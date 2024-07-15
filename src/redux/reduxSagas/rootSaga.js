import { all } from "redux-saga/effects";

import streamsSaga from "./sagas/AllLiveStreamSaga";
import instructorsSaga from "./sagas/instructorsSaga";
import { watchFetchHomeLiveStreams } from "./sagas/homeSagas/HomeLivestreamSaga";
import { watchFetchHomeFeaturedCourses } from "./sagas/homeSagas/HomeFeaturedCourseSaga";
import { watchFetchLiveOutputLiveStreams } from "./sagas/liveOutputSagas/liveOutputLivestreamSagas";
import { watchFetchBlogs } from "./sagas/blogSagas/BlogSagas";
import { watchFetchEarningTable } from "./sagas/earningSagas/EarningTableSaga";
import { watchFetchEarningTopCountry } from "./sagas/earningSagas/EarningTopContrySaga";
import { watchFetchPayoutTable } from "./sagas/payoutSagas/PayoutTableSaga";
import { watchFetchCreditTable } from "./sagas/creditSagas/CreditTableSaga";

export default function* rootSaga() {
  yield all([
    streamsSaga(),
    instructorsSaga(),
    watchFetchHomeLiveStreams(),
    watchFetchHomeFeaturedCourses(),
    watchFetchLiveOutputLiveStreams(),
    watchFetchBlogs(),
    watchFetchEarningTable(),
    watchFetchEarningTopCountry(),
    watchFetchPayoutTable(),
    watchFetchCreditTable(),
  ]);
}
